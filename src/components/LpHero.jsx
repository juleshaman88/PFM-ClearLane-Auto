import heroImg from '../assets/hero-image.webp';
import ComparisonForm from './ComparisonForm.jsx';

export default function LpHero({ tracking, track }) {
  const copy = (
    <div className="hero-copy">
      <h1>Compare auto insurance rates for your age.</h1>
      <p className="lede">Insurance shopping can feel like a maze - but it doesn't have to be. Tell us your age range and ZIP code, and ClearLane Auto starts a comparison to help you see a clearer road to your next policy.</p>
      <ul className="ticks">
        <li>Two quick questions and you're done.</li>
        <li>Starting with us doesn't buy or change any policy.</li>
        <li>Rates vary by person, so we don't promise savings.</li>
      </ul>
    </div>
  );

  return (
    <section className="hero-banner">
      {/* Decorative background: fills the banner at any viewport size */}
      <img className="hero-bg" src={heroImg} alt="" aria-hidden="true" />
      <div className="hero wrap">{copy}<ComparisonForm tracking={tracking} track={track} /></div>
    </section>
  );
}