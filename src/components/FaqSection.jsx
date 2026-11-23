const FAQS = [
  ['Is ClearLane Auto an insurance company?', 'No. ClearLane Auto is a comparison and referral service, not an insurer. We do not issue policies.'],
  ['Why do you ask for my age?', 'Age can be one of the factors insurers consider. In this demo, your age range is used to start the mock comparison.'],
  ['Will I definitely save money?', 'No. Savings are not guaranteed. Rates depend on many details, and the options you find may cost more, less, or about the same as your current policy.'],
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
