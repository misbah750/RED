// Resolve image assets: base64 in the standalone preview, /public paths in the Vite build.
export function asset(name) {
  if (typeof window !== 'undefined' && window.__IMG__ && window.__IMG__[name]) return window.__IMG__[name];
  return '/' + name + '.jpg';
}
