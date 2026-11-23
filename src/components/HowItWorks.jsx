const STEPS = [
  {
    title: 'Start with the basics',
    description: 'Your age range and ZIP code. That is all we need to begin.',
    illustration: (
      <svg viewBox="0 0 220 140" aria-hidden="true">
        <circle cx="106" cy="70" r="56" fill="var(--surf)" />
        <rect x="39" y="26" width="116" height="88" rx="14" fill="var(--surf)" stroke="var(--line)" strokeWidth="2" />
        <circle cx="69" cy="54" r="13" fill="var(--tint)" />
        <path d="m63 54 4 4 8-9" fill="none" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="91" y="47" width="45" height="7" rx="3.5" fill="var(--navy)" />
        <rect x="91" y="59" width="33" height="6" rx="3" fill="var(--line)" />
        <rect x="53" y="79" width="88" height="21" rx="7" fill="var(--bg)" />
        <path d="M65 90h54" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" strokeDasharray="3 7" />
        <circle cx="164" cy="89" r="25" fill="var(--teal)" />
        <path d="M164 102s-10-10-10-17a10 10 0 1 1 20 0c0 7-10 17-10 17Z" fill="var(--surf)" />
        <circle cx="164" cy="85" r="3" fill="var(--teal)" />
      </svg>
    ),
  },
  {
    title: 'We start your comparison',
    description: 'ClearLane Auto lines up options that fit your answers so you can look at them side by side.',
    illustration: (
      <svg viewBox="0 0 220 140" aria-hidden="true">
        <rect x="34" y="28" width="105" height="82" rx="13" fill="var(--surf)" stroke="var(--line)" strokeWidth="2" />
        <rect x="80" y="40" width="105" height="82" rx="13" fill="var(--surf)" stroke="var(--teal)" strokeWidth="2" />
        <rect x="49" y="44" width="58" height="8" rx="4" fill="var(--navy)" />
        <rect x="49" y="61" width="74" height="6" rx="3" fill="var(--line)" />
        <rect x="49" y="74" width="61" height="6" rx="3" fill="var(--line)" />
        <circle cx="101" cy="96" r="12" fill="var(--teal)" />
        <path d="m96 96 4 4 7-8" fill="none" stroke="var(--surf)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="96" y="56" width="58" height="8" rx="4" fill="var(--navy)" />
        <rect x="96" y="73" width="72" height="6" rx="3" fill="var(--line)" />
        <rect x="96" y="86" width="58" height="6" rx="3" fill="var(--line)" />
        <path d="m154 105 6 6 13-15" fill="none" stroke="var(--teal)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'You decide what is next',
    description: 'Review the options at your own pace. Nothing changes on your current policy.',
    illustration: (
      <svg viewBox="0 0 220 140" aria-hidden="true">
        <path d="M22 104c34 0 38-42 75-42s39 35 73 35c12 0 21-4 30-12" fill="none" stroke="var(--line)" strokeWidth="24" strokeLinecap="round" />
        <path d="M22 104c34 0 38-42 75-42s39 35 73 35c12 0 21-4 30-12" fill="none" stroke="var(--surf)" strokeWidth="2" strokeDasharray="7 9" />
        <path d="m54 83 8-17h39l12 17v17H48V89c0-3 2-6 6-6Z" fill="var(--navy)" />
        <path d="m68 69-6 14h39l-10-14Z" fill="var(--teal-l)" />
        <circle cx="67" cy="101" r="8" fill="var(--navy)" stroke="var(--surf)" strokeWidth="3" />
        <circle cx="99" cy="101" r="8" fill="var(--navy)" stroke="var(--surf)" strokeWidth="3" />
        <circle cx="177" cy="43" r="21" fill="var(--teal)" />
        <path d="m168 43 6 6 12-13" fill="none" stroke="var(--surf)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];
export default function HowItWorks() {
  return (
    <section className="band" id="how-it-works"><div className="wrap">
      <h2>How ClearLane Auto Works</h2>
      <ol className="steps">{STEPS.map(({ title, description, illustration }) => (
        <li key={title}>
          <div className="step-art" aria-hidden="true">{illustration}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        </li>
      ))}</ol>
    </div></section>
  );
}