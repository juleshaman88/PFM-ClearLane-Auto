const TRACKED = ['utm_source', 'utm_campaign', 'click_id'];

/** Read tracking params from the entry URL (call once, on load). */
export function getTracking() {
  const p = new URLSearchParams(window.location.search);
  return Object.fromEntries(TRACKED.filter((k) => p.get(k)).map((k) => [k, p.get(k)]));
}

export const hasFlag = (name) => new URLSearchParams(window.location.search).has(name);

/* Mock async submission (~1.4s).
   Trigger an error: ZIP 00000 fails on the first attempt only (Retry then succeeds),
   or add ?simulate_error=always to the URL to fail every attempt. */
export function submitComparison(payload, attempt) {
  const always = new URLSearchParams(window.location.search).get('simulate_error') === 'always';
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (always || (payload.zip === '00000' && attempt === 1)) reject(new Error('mock_network_error'));
      else resolve({ ok: true, id: 'mock_' + Math.random().toString(36).slice(2, 8) });
    }, 1400);
  });
}
