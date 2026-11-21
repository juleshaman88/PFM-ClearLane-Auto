import { useEffect, useRef, useState } from 'react';
import heroImg from '../assets/hero-image.webp';
import { submitComparison } from '../utils/mockApi.js';

// Non-overlapping ranges covering every adult age.
export const AGE_RANGES = ['35–45', '46–55', '56–65'];

export default function HeroFunnel({ tracking, track }) {
  const [age, setAge] = useState(null);
  const [zip, setZip] = useState('');
  const [fieldError, setFieldError] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const pending = useRef(false);
  const attempts = useRef(0);
  const zipRef = useRef(null);
  const doneRef = useRef(null);

  useEffect(() => { if (age && status === 'idle') zipRef.current?.focus(); }, [age, status]);
  useEffect(() => { if (status === 'success') doneRef.current?.focus(); }, [status]);

  const pick = (a) => { setAge(a); setFieldError(''); track('age_selected', { age_range: a }); };
  const change = () => { setAge(null); setStatus('idle'); setFieldError(''); }; // ZIP text is kept

  async function submit(e) {
    e.preventDefault();
    if (pending.current) return; // blocks repeat clicks/Enter while pending
    if (!/^\d{5}$/.test(zip)) {
      setFieldError(zip ? 'ZIP codes have exactly 5 digits, like 02134.' : 'Enter your 5-digit ZIP code.');
      zipRef.current?.focus();
      return;
    }
    setFieldError('');
    pending.current = true;
    setStatus('loading');
    attempts.current += 1;
    const payload = { age_range: age, zip, ...tracking }; // zip is a string: leading zeros kept
    try {
      const res = await submitComparison(payload, attempts.current);
      setStatus('success');
      track('comparison_started', { submission_id: res.id, payload }); // success only
    } catch {
      setStatus('error'); // no comparison_started on failure
    } finally { pending.current = false; }
  }

  const copy = (
    <div className="hero-copy">
      <h1>Compare auto insurance options for your age.</h1>
      <p className="lede">Insurance shopping shouldn't feel like a maze. Tell us your age and ZIP code, and ClearLane starts a comparison to help you see a clearer road to your next policy.</p>
      <ul className="ticks">
        <li>Two quick questions, about a minute</li>
        <li>Starting doesn't buy or change any policy</li>
        <li>Rates vary by person, so we don't promise savings</li>
      </ul>
    </div>
  );

  let card;
  if (status === 'success') {
    card = (
      <section className="card" id="compare" aria-labelledby="done-h">
        <h2 id="done-h" tabIndex={-1} ref={doneRef}>Your comparison has started</h2>
        <p>We saved your answers: age {age}, ZIP {zip}. This is a demo, so no real request was sent and nothing was bought.</p>
        <button className="btn ghost" onClick={() => { setAge(null); setZip(''); setStatus('idle'); attempts.current = 0; }}>Start over</button>
      </section>
    );
  } else {
    card = (
      <section className="card" id="compare" aria-labelledby="cmp-h">
        <p className="step" aria-live="polite">Step {age ? 2 : 1} of 2</p>
        {!age ? (
          <>
            <h2 id="cmp-h">How old are you?</h2>
            <p className="hint">Pick your age range to see options that fit.</p>
            <div className="ages" role="group" aria-labelledby="cmp-h">
              {AGE_RANGES.map((a) => <button key={a} type="button" className="age" onClick={() => pick(a)}>{a}</button>)}
            </div>
          </>
        ) : (
          <form onSubmit={submit} noValidate>
            <h2 id="cmp-h">What's your ZIP code?</h2>
            <p className="chosen">Age range: <strong>{age}</strong>
              <button type="button" className="link" onClick={change} disabled={status === 'loading'}>Change</button></p>
            <label htmlFor="zip">ZIP code</label>
            <input id="zip" ref={zipRef} name="zip" inputMode="numeric" autoComplete="postal-code" maxLength={5}
              value={zip} disabled={status === 'loading'} aria-invalid={!!fieldError}
              aria-describedby={fieldError ? 'zip-err' : 'zip-hint'}
              onChange={(e) => { setZip(e.target.value.replace(/\D/g, '').slice(0, 5)); setFieldError(''); }} />
            {fieldError
              ? <p id="zip-err" className="err" role="alert">{fieldError}</p>
              : <p id="zip-hint" className="hint">Rates depend on where you park. Leading zeros count.</p>}
            {status === 'error' && <p className="err box" role="alert">We couldn't start your comparison. Your answers are saved. Select the button to try again.</p>}
            <button className="btn" type="submit" disabled={status === 'loading'} aria-busy={status === 'loading'}>
              {status === 'loading' ? 'Starting your comparison…' : status === 'error' ? 'Try again' : 'Compare my options'}
            </button>
          </form>
        )}
      </section>
    );
  }
  return (
    <section className="hero-banner">
      {/* Decorative background: fills the banner at any viewport size */}
      <img className="hero-bg" src={heroImg} alt="" aria-hidden="true" />
      <div className="hero wrap">{copy}{card}</div>
    </section>
  );
}