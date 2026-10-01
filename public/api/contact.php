<?php
// RED website: contact form and RED updates sign-up handler.
// Runs on the Namecheap (cPanel) hosting and emails every submission to the RED inbox.
// No database: the only thing kept is a short-lived, hashed IP record used to stop spam floods.

declare(strict_types=1);

const RED_INBOX = 'info@resuscitationemergencydepartment.org';
const RATE_LIMIT = 5;     // submissions allowed per visitor...
const RATE_WINDOW = 900;  // ...in this many seconds (15 minutes)

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');

function reply(int $status, array $data): void
{
    http_response_code($status);
    echo json_encode($data);
    exit;
}

function fail(int $status, string $error): void
{
    reply($status, ['ok' => false, 'error' => $error]);
}

// Text as valid UTF-8 (broken characters are replaced rather than losing the whole field).
function utf8($v): string
{
    return is_string($v) ? mb_convert_encoding($v, 'UTF-8', 'UTF-8') : '';
}

// Single-line field: control characters removed (blocks email header injection), trimmed, capped.
function clean_line($v, int $max): string
{
    $v = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', utf8($v)) ?? '';
    return mb_substr(trim($v), 0, $max);
}

// Multi-line field: keeps line breaks, removes other control characters, capped.
function clean_text($v, int $max): string
{
    $v = str_replace(["\r\n", "\r"], "\n", utf8($v));
    $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v) ?? '';
    return mb_substr(trim($v), 0, $max);
}

function rate_limited(): bool
{
    $dir = rtrim(sys_get_temp_dir(), '/\\') . DIRECTORY_SEPARATOR . 'red-form-limits';
    if (!is_dir($dir) && !@mkdir($dir, 0700, true)) {
        return false; // never block real visitors because of a storage problem
    }
    $now = time();
    if (mt_rand(1, 50) === 1) { // occasional clean-up of expired records
        foreach (glob($dir . DIRECTORY_SEPARATOR . '*') ?: [] as $old) {
            if (@filemtime($old) < $now - RATE_WINDOW) {
                @unlink($old);
            }
        }
    }
    $file = $dir . DIRECTORY_SEPARATOR . hash('sha256', __FILE__ . '|' . ($_SERVER['REMOTE_ADDR'] ?? ''));
    $fh = @fopen($file, 'c+');
    if (!$fh) {
        return false;
    }
    flock($fh, LOCK_EX);
    $hits = json_decode((string) stream_get_contents($fh), true);
    $hits = array_values(array_filter(is_array($hits) ? $hits : [], function ($ts) use ($now) {
        return is_int($ts) && $ts > $now - RATE_WINDOW;
    }));
    $limited = count($hits) >= RATE_LIMIT;
    if (!$limited) {
        $hits[] = $now;
    }
    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, json_encode($hits));
    flock($fh, LOCK_UN);
    fclose($fh);
    return $limited;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    fail(405, 'Method not allowed.');
}

// Only accept submissions sent from this website.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host = strtolower((string) preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? ''));
if ($origin !== '' && strtolower((string) parse_url($origin, PHP_URL_HOST)) !== $host) {
    fail(403, 'Forbidden.');
}

// Spam traps: a hidden field people never see, and forms sent faster than a person could type.
// Bots get a normal-looking success so they do not retry.
if (clean_line($_POST['website'] ?? '', 200) !== '' || (int) ($_POST['t'] ?? 0) < 2) {
    reply(200, ['ok' => true]);
}

$kind = $_POST['kind'] ?? '';
$email = clean_line($_POST['email'] ?? '', 254);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(422, 'Enter a valid email address.');
}
$when = gmdate('j F Y, H:i') . ' UTC';

if ($kind === 'contact') {
    $name = clean_line($_POST['name'] ?? '', 100);
    $type = clean_line($_POST['type'] ?? '', 80);
    $message = clean_text($_POST['message'] ?? '', 5000);
    if ($name === '') {
        fail(422, 'Add your name.');
    }
    if ($message === '') {
        fail(422, 'Add a short message.');
    }
    if ($type === '') {
        $type = 'General enquiry';
    }
    $subject = "RED enquiry: $type, from $name";
    $body = "New message from the RED website contact form.\n\n"
        . "Name: $name\nEmail: $email\nEnquiry type: $type\nSent: $when\n\n"
        . "Message:\n$message\n\n"
        . "--\nPress Reply to answer $name directly.\n";
} elseif ($kind === 'subscribe') {
    if (($_POST['consent'] ?? '') !== 'yes') {
        fail(422, 'Tick the consent box to receive updates.');
    }
    $subject = 'New RED updates sign-up';
    $body = "Someone joined the RED updates list on the website.\n\n"
        . "Email: $email\nSigned up: $when\n"
        . "Consent: agreed to receive RED updates by email and can unsubscribe at any time.\n";
} else {
    fail(400, 'Unknown form.');
}

if (rate_limited()) {
    fail(429, 'Too many messages from your connection. Please wait a few minutes and try again.');
}

$headers = [
    'From' => 'RED website <' . RED_INBOX . '>',
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding' => 'quoted-printable',
];
$sent = mail(
    RED_INBOX,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    quoted_printable_encode(str_replace("\n", "\r\n", $body)),
    $headers,
    '-f' . RED_INBOX
);

if (!$sent) {
    fail(500, 'Sorry, your message could not be sent right now. Please email us at ' . RED_INBOX . '.');
}
reply(200, ['ok' => true]);
