const REASONS = [
  {
    title: 'See More Than Prices',
    description: 'Comparing options lets you look at coverage limits, deductibles, and exclusions alongside the premium. Each policy has its own details to consider.',
  },
  {
    title: 'Look For a Better Fit',
    description: 'Insurance Companies offer different coverage choices and may assess your information differently. Reviewing options can help you find a policy and insurerthat suits your needs.',
  },
  {
    title: 'Make An Informed Choice',
    description: 'Asking the same questions about each option helps you understand what is included and what you may need to pay yourself.',
  },
];

export default function WhyCompare() {
  return (
    <section className="why-compare" aria-labelledby="why-compare-heading">
      <div className="wrap">
        <h2 id="why-compare-heading">Why Should You Compare Auto Insurance?</h2>
        <div className="why-compare-grid">
          {REASONS.map(({ title, description }) => (
            <article className="why-compare-card" key={title}>
              <span className="why-compare-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="why-compare-note">Rates and coverage vary. Comparing does not guarantee savings or a particular result.</p>
      </div>
    </section>
  );
}