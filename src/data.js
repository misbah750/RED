// ---------- RED site content model ----------
export const LAUNCH_ISO = '2026-11-03T00:00:00+05:00';
export const BUY_URL = '#/book';

// route-based nav (hash routing)
export const nav = [
  { r: '/', label: 'Home', icon: ['M3 10.7 12 3l9 7.7', 'M5 9.5V20h14V9.5', 'M9.5 20v-5.5h5V20'] },
  { r: '/about', label: 'About RED', icon: ['M22 12h-4l-3 8L9 4l-3 8H2'] },
  { r: '/author', label: 'Author', icon: ['M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M4.5 21a7.5 7.5 0 0 1 15 0'] },
  { r: '/forewords', label: 'Forewords', icon: ['M21 15a3 3 0 0 1-3 3H8l-5 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3z'] },
  { r: '/collaborators', label: 'Collaborators', icon: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M3.5 12h17', 'M12 3c2.6 2.5 2.6 15.5 0 18M12 3c-2.6 2.5-2.6 15.5 0 18'] },
  { r: '/book', label: 'The Book', icon: ['M12 6c-2-1.4-5-1.4-8 0v12c3-1.4 6-1.4 8 0 2-1.4 5-1.4 8 0V6c-3-1.4-6-1.4-8 0z', 'M12 6v12'] },
  { r: '/program', label: 'Program', icon: ['M3 9l9-4 9 4-9 4z', 'M7 11v4c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2v-4'] },
  { r: '/events', label: 'Events', icon: ['M4 5h16v16H4z', 'M4 9.5h16', 'M8.5 3v4', 'M15.5 3v4'] },
  { r: '/contact', label: 'Contact', icon: ['M3 5.5h18v13H3z', 'M3.5 6.5 12 13l8.5-6.5'] },
];

// WHY RED, five principles (the resuscitation cycle)
export const principles = [
  { t: 'Recognize Early', d: 'Identify physiological deterioration before collapse.',
    icon: 'M2 12h4l2-5 4 10 2-5h8' },
  { t: 'Intervene', d: 'Restore oxygenation, ventilation, circulation and perfusion while addressing the underlying cause.',
    icon: 'M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z' },
  { t: 'Reassess', d: 'Observe the patient’s response and continuously adapt the plan.',
    icon: 'M20 12a8 8 0 1 1-2.3-5.6 M20 4v5h-5' },
  { t: 'Stabilize & Transition', d: 'Prevent secondary injury and move the patient toward definitive care.',
    icon: 'M4 12h4l2-4 3 8 2-4h5 M12 3v3 M12 18v3' },
  { t: 'Lead as a Team', d: 'Use clear roles, communication, situational awareness and coordinated action.',
    icon: 'M12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM5 21a7 7 0 0 1 14 0' },
];

// Hero, feature callouts that orbit the 3D book (short, drawn from real content)
export const heroCallouts = [
  { t: 'Recognize early', icon: 'M2 12h4l2-5 4 10 2-5h8' },
  { t: 'Physiology first', icon: 'M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z' },
  { t: 'Lead the team', icon: 'M12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM5 21a7 7 0 0 1 14 0' },
  { t: 'Reassess always', icon: 'M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5' },
  { t: '44 chapters', icon: 'M12 6c-2-1.4-5-1.4-8 0v12c3-1.4 6-1.4 8 0 2-1.4 5-1.4 8 0V6c-3-1.4-6-1.4-8 0zM12 6v12' },
  { t: '27 contributors', icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3.5 12h17M12 3c2.6 2.5 2.6 15.5 0 18M12 3c-2.6 2.5-2.6 15.5 0 18' },
];

// Home "different way to think" prompts
export const questions = [
  'What physiology is failing?',
  'What threatens the patient now?',
  'What can I reverse immediately?',
  'What must I reassess next?',
];

// About page, 44 chapters grouped
export const foundations = [
  'Resuscitation in the Emergency Department', 'The Resuscitation Mindset', 'Physiological Principles of Resuscitation',
  'Drugs in Resuscitation', 'Blood and Blood Products', 'Team Dynamics', 'Approach to the Critically Ill Patient',
  'Ethical, Cultural & Legal Aspects in LMICs', 'Medical Devices in Resuscitation', 'Facilitation of Trainees',
];
export const clinicalAreas = [
  { t: 'Shock & Circulatory Failure',
    c: ['Shock states', 'Adult & paediatric cardiac arrest', 'Peri-arrest management', 'Deadly arrhythmias', 'Cardiogenic shock', 'SCAPE', 'Pericardial tamponade'] },
  { t: 'Airway & Respiratory Emergencies',
    c: ['Respiratory failure', 'CICO', 'Status asthmaticus', 'Pulmonary embolism', 'Pneumothorax', 'Post-intubation cardiac arrest'] },
  { t: 'Neurologic & Metabolic Crises',
    c: ['Coma & altered mental status', 'Status epilepticus', 'Stroke', 'Intracranial hemorrhage', 'DKA', 'Adrenal crisis'] },
  { t: 'Trauma Resuscitation',
    c: ['Polytrauma & primary survey', 'TBI & spinal shock', 'Chest & abdominal trauma', 'Pelvic hemorrhage', 'Burns'] },
  { t: 'Special & High-Risk Situations',
    c: ['Toxicology', 'Heat stroke & hypothermia', 'Refractory anaphylaxis', 'Paediatric & neonatal', 'Postpartum hemorrhage', 'Resuscitative hysterotomy', 'Elderly', 'Oncology emergencies', 'Sepsis', 'Tracheostomy disasters', 'Posterior epistaxis', 'Crashing ventilated patient', 'POCUS'] },
];

// Home / Book topic cards
export const bookTopics = [
  { t: 'Shock & Cardiac Arrest', d: 'Undifferentiated shock, cardiac arrest, arrhythmias, cardiogenic shock, SCAPE, tamponade.', icon: 'M2 12h4l2-5 4 10 2-5h8' },
  { t: 'Airway & Respiratory Failure', d: 'Respiratory failure, CICO, status asthmaticus, PE, pneumothorax, post-intubation arrest.', icon: 'M12 2a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5zM6 20h12' },
  { t: 'Trauma', d: 'Primary survey, TBI and spinal shock, chest and abdominal trauma, pelvic hemorrhage, burns.', icon: 'M12 2l3 6 6 .9-4.5 4.3 1 6L12 17l-5.5 3 1-6L3 8.9 9 8z' },
  { t: 'Neurologic & Metabolic', d: 'Coma, status epilepticus, stroke and ICH, DKA, adrenal crisis.', icon: 'M12 3a4 4 0 0 0-4 4c0 1 .3 1.6-.6 2.6C6 11 6 13 8 14v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3c2-1 2-3 .6-4.4C15.7 8.6 16 8 16 7a4 4 0 0 0-4-4z' },
  { t: 'Special Populations', d: 'Toxicology, temperature, anaphylaxis, paediatric/neonatal, obstetric hemorrhage, the elderly.', icon: 'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M17 11a3 3 0 1 0 0-6M15.5 20a6 6 0 0 1 6 0' },
  { t: 'Sepsis', d: 'Recognition, resuscitation and source control for the septic emergency patient.', icon: 'M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z' },
  { t: 'POCUS', d: 'Point-of-care ultrasound to guide diagnosis and resuscitation at the bedside.', icon: 'M4 5h16v11H4zM8 20h8M9 9l2 2 4-4' },
  { t: 'Team Dynamics & Leadership', d: 'Roles, closed-loop communication, crisis resource management and calm leadership.', icon: 'M12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM5 21a7 7 0 0 1 14 0' },
];

// Full contents (6 parts) for The Book explorer
export const parts = [
  { t: 'Foundations', n: 'Part I', d: 'The mindset, physiology and systems every resuscitation depends on.', c: foundations },
  { t: 'Cardiovascular & Circulatory', n: 'Part II', d: 'From undifferentiated shock to the arrested heart.', c: ['Shock states', 'Cardiac arrest', 'Peri-arrest', 'Deadly arrhythmias', 'Cardiogenic shock', 'SCAPE', 'Tamponade'] },
  { t: 'Respiratory & Airway', n: 'Part II', d: 'Oxygenation and ventilation when the airway and lungs fail.', c: ['Respiratory failure', 'CICO', 'Status asthmaticus', 'Pulmonary embolism', 'Pneumothorax', 'Post-intubation arrest'] },
  { t: 'Neurologic & Metabolic', n: 'Part II', d: 'Protecting the brain and correcting the chemistry that threatens it.', c: ['Coma', 'Status epilepticus', 'Stroke & ICH', 'DKA', 'Adrenal crisis'] },
  { t: 'Trauma', n: 'Part II', d: 'Hemorrhage control and decisive action in the injured patient.', c: ['Primary survey', 'TBI & spinal shock', 'Chest & abdominal trauma', 'Pelvic hemorrhage', 'Burns'] },
  { t: 'Special Populations', n: 'Part II', d: 'The patients and situations that demand a different approach.', c: ['Toxicology', 'Temperature', 'Anaphylaxis', 'Paediatric & neonatal', 'Postpartum hemorrhage', 'Elderly', 'Oncology', 'Sepsis', 'Tracheostomy', 'Posterior epistaxis', 'Crashing ventilated patient', 'POCUS'] },
];

// Forewords
export const praise = [
  { q: 'A much-needed text on resuscitation in Emergency Medicine.', by: 'Professor Peter Cameron', img: 'cameron',
    note: 'Highlights the book’s breadth, its coverage of major time-critical emergencies, its attention to leadership and team dynamics, and its relevance to both experienced specialists and trainees across local and global settings.' },
  { q: 'Modern resuscitation is much more than the application of algorithms.', by: 'Professor Ives Hubloue', img: 'hubloue',
    note: 'Describes RED as a contemporary, evidence-based and clinically relevant resource that connects scientific knowledge with bedside decision-making while recognising the importance of teamwork, communication and systems thinking.' },
];

// Collaborators, highlighted countries (equirectangular lon/lat)
export const countries = [
  { n: 'Pakistan', s: 'Pakistan', lat: 30, lon: 69 },
  { n: 'United States', s: 'USA', lat: 39, lon: -98 },
  { n: 'Canada', s: 'Canada', lat: 58, lon: -100 },
  { n: 'United Kingdom', s: 'UK', lat: 54, lon: -2 },
  { n: 'United Arab Emirates', s: 'UAE', lat: 24, lon: 54 },
];

// Programs (teaser for the "coming soon" page)
export const programs = [
  { t: 'Resuscitation Workshops', d: 'Hands-on, scenario-driven sessions in high-stakes emergency resuscitation.' },
  { t: 'Simulation Series', d: 'Team-based simulation for clinical, communication and crisis-resource-management skills.' },
  { t: 'Seminars & Webinars', d: 'Focused updates, expert conversations, case reviews and new evidence.' },
  { t: 'Train-the-Trainer', d: 'Faculty development for clinicians who teach resuscitation and simulation.' },
  { t: 'Institutional Programs', d: 'Custom workshops, grand rounds and capacity-building for hospitals.' },
  { t: 'RED Online', d: 'A future home for recorded sessions, microlearning and course pathways.' },
];

export const contactTypes = [
  'General enquiry', 'Program or workshop invitation', 'Institutional collaboration',
  'Media or interview request', 'Book purchase or bulk order', 'Speaker or seminar request',
];
export const CONTACT_EMAIL = 'resuscitationed@gmail.com';

export const audience = [
  'Emergency physicians and residents',
  'Critical care and acute-care clinicians',
  'Emergency and critical-care nurses',
  'Educators, simulation faculty and team leaders',
  'Clinicians in high-resource and resource-constrained settings',
];
export const retailers = [
  { name: 'Paramount Books', href: '' },
  { name: 'Order online', href: '' },
  { name: 'Institutional / bulk', href: '#/contact' },
];
