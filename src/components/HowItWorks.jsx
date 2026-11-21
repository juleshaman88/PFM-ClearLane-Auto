const STEPS = [
  ['Tell us two things', 'Your age range and ZIP code. That is all we need to begin.'],
  ['We start your comparison', 'ClearLane lines up options that fit your answers so you can look at them side by side.'],
  ['You decide what is next', 'Review the options at your own pace. Nothing changes on your current policy.'],
];
export default function HowItWorks() {
  return (
    <section className="band"><div className="wrap">
      <h2>What happens after you start</h2>
      <ol className="steps">{STEPS.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </div></section>
  );
}