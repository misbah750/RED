// Sends a form to public/api/contact.php on the RED hosting, which emails it to the RED inbox.
// Resolves to { ok: true } or { ok: false, error? } and never throws.
export async function sendForm(fields) {
  try {
    const res = await fetch('/api/contact.php', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new URLSearchParams(fields),
    });
    const data = await res.json().catch(() => null);
    if (res.ok && data && data.ok) return { ok: true };
    return { ok: false, error: data && data.error };
  } catch {
    return { ok: false };
  }
}

// Seconds since the form appeared; the server ignores forms sent faster than a person could fill them.
export const secondsSince = (start) => String(Math.round((Date.now() - start) / 1000));
