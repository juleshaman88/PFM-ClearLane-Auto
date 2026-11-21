const FAQS = [
  ['Is ClearLane an insurance company?', 'No. ClearLane helps you explore options. We do not issue policies.'],
  ['Why do you ask for my age?', 'Age is one factor insurers consider, so it helps us show options that are relevant to you.'],
  ['Will I definitely save money?', 'While we cannot promise you will save money, we will provide you with quality comparison options. Rates depend on many personal details, and rates you find may be higher, lower, or similar to what you pay now. '],
  ['What happens to my ZIP code?', 'It is used to start your comparison. In this demo it is only held in your browser and in a mock request.'],
  ['Can I change my answers?', 'Yes. Select Change next to your age range before you continue.'],
];
export default function FaqSection() {
  return (
    <section className="wrap faq">
      <h2>Frequently Asked Questions by Drivers Like You</h2>
      {FAQS.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
    </section>
  );
}
