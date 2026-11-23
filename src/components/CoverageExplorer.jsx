import { useState } from 'react';
import liabilityImage from '../assets/liability.webp';
import collisionImage from '../assets/collision.webp';
import comprehensiveImage from '../assets/comprehensive.webp';

const OPTIONS = [
  { id: 'liab', name: 'Liability', image: liabilityImage, tag: 'Covers damage you cause to others',
    covers: 'When you are at fault, this coverage covers damage caused to other people’s property and injuries.',
    example: 'You cause a fender bender at a red light. Liability can help pay for that driver’s repairs.',
    not: 'Your own car’s repairs, or your own injuries.',
    think: 'This is often the baseline insurance that states require. Required amounts vary by state.' },
  { id: 'coll', name: 'Collision', image: collisionImage, tag: 'Covers your car after a crash',
    covers: 'Repairs to your own car after hitting another vehicle or object, whoever is at fault.',
    example: 'You clip a pole while parking. Collision can help pay to fix your bumper.',
    not: 'Theft, storms, or damage to other people’s property.',
    think: 'Collision insurance usually has a deductible you have to pay. It is worth weighing this against your car’s value.' },
  { id: 'comp', name: 'Comprehensive', image: comprehensiveImage, tag: 'Covers non-crash damage to your car',
    covers: 'Damage from things other than a crash, like theft, fire, hail, or hitting an animal.',
    example: 'A hailstorm dents your hood overnight. Comprehensive can help with the repair.',
    not: 'Crashes with other vehicles, or damage you cause to others while using a vehicle.',
    think: 'Comprehensive coverage also usually has a deductible. These plans are often considered where weather or theft is a concern.' },
];

export default function CoverageExplorer() {
  const [sel, setSel] = useState(OPTIONS[0].id);
  const cur = OPTIONS.find((o) => o.id === sel);
  return (
    <section className="wrap sec" id="coverage">
      <h2>Coverage Options for What You Need</h2>
      <div className="explorer">
        <fieldset className="opts">
          <legend className="sr">Choose a coverage type to see details</legend>
          {OPTIONS.map((o) => (
            <label key={o.id} className={`opt${sel === o.id ? ' is-selected' : ''}`}>
              <input type="radio" name="coverage" value={o.id} checked={sel === o.id} onChange={() => setSel(o.id)} />
              <img className="opt-image" src={o.image} alt="" />
              <span className="opt-body"><strong>{o.name}</strong><span>{o.tag}</span></span>
              {sel === o.id && <span className="sel">Selected</span>}
            </label>
          ))}
        </fieldset>
        <div className="panel" aria-live="polite">
          <h3>{cur.name}</h3>
          <dl>
            <dt>What Is Covered</dt><dd>{cur.covers}</dd>
            <dt>Example Situation</dt><dd>{cur.example}</dd>
            <dt>What Isn't Covered</dt><dd>{cur.not}</dd>
            <dt>More Info</dt><dd>{cur.think}</dd>
          </dl>
          <p className="hint">Actual coverage, terms, and requirements vary by provider and state. This is for illustrative purposes only.</p>
        </div>
      </div>
    </section>
  );
}
