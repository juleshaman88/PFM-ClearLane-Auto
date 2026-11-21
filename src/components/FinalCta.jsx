export default function FinalCta() {
  const go = (e) => {
    e.preventDefault();
    const card = document.getElementById('compare');
    card?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => card?.querySelector('.age, #zip, .btn')?.focus({ preventScroll: true }), 400);
  };
  return (
    <section className="final"><div className="wrap">
      <h2>Ready for a clearer road?</h2>
      <p>It takes about a minute to begin.</p>
      <a className="btn light" href="#compare" onClick={go}>Compare my options</a>
    </div></section>
  );
}
