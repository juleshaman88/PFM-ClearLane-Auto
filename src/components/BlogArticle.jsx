import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import heroImage from '../assets/Blog-Hero.webp';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

const PAGE_TITLE = 'Auto Insurance Coverage Guide | ClearLane Auto';
const PAGE_DESCRIPTION = 'Learn how liability, collision, comprehensive, limits, and deductibles differ so you can compare auto insurance options with clearer questions.';

const CONTENT_LINKS = [
  ['coverage-types', 'How Common Coverages Differ'],
  ['limits-and-deductibles', 'Limits, Exclusions, and Deductibles'],
  ['compare-consistently', 'Compare Similar Policy Details'],
  ['when-needs-change', 'Revisit Coverage as It Needs Change'],
  ['next-step', 'Your Next Steps'],
];

export default function BlogArticle() {
  const { search } = useLocation();

  useEffect(() => {
    const previousTitle = document.title;
    let metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.content;
    let addedMeta = false;

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
      addedMeta = true;
    }

    document.title = PAGE_TITLE;
    metaDescription.content = PAGE_DESCRIPTION;

    return () => {
      document.title = previousTitle;
      if (addedMeta) metaDescription.remove();
      else metaDescription.content = previousDescription;
    };
  }, []);

  return (
    <>
      <NavBar />
      <main className="blog-page">
        <article className="blog-post">
          <header className="blog-article-header">
            <img className="blog-hero-image" src={heroImage} alt="" />
            <div className="wrap blog-hero-content">
              <h1>What Affects Your Car Insurance Rate?</h1>
            </div>
          </header>

          <div className="wrap blog-layout">
            <aside className="blog-sidebar">
              <nav className="blog-toc" aria-label="Article contents">
                <h2>On this page</h2>
                <ol>
                  {CONTENT_LINKS.map(([id, label]) => (
                    <li key={id}><a href={`#${id}`}>{label}</a></li>
                  ))}
                </ol>
              </nav>
            </aside>

            <div className="blog-content">
              <section id="coverage-types">
                <p>If you have ever compared auto insurance quotes with a neighbor who drives a similar car, you may have noticed your premiums look completely different. Unlike retail goods with a single sticker price, auto insurance is priced individually. Insurance companies rely on specific data from you - like your age and where you live - to estimate how likely you are to file a claim and how expensive that claim might be.</p>
                <p>Understanding the core variables behind your quote puts you in a much better position to spot unfair pricing, adjust your coverage intelligently, and find a policy that actually fits your budget. Here is a breakdown of the primary factors shaping your car insurance rate today.</p>
                <h2>How common coverages differ</h2>
                <p>
                  Liability coverage is generally for injuries or property damage you may cause to others when you are legally responsible. Many states require drivers to carry liability coverage, but the rules and required amounts vary. Liability typically does not pay to repair your own car.
                </p>
                <p>
                  Collision coverage may help pay to repair your car after it hits another vehicle or an object, subject to your policy. Comprehensive coverage is generally for certain losses that are not caused by a collision, such as theft, fire, or hail. The policy defines covered events and exclusions.
                </p>
                <div className="blog-table-scroll">
                  <table className="blog-comparison-table">
                    <caption>Common coverage types at a glance</caption>
                    <thead>
                      <tr><th scope="col">Coverage</th><th scope="col">Generally intended for</th><th scope="col">Review in the policy</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Liability</th><td>Injuries or damage to others for which you are responsible</td><td>Limits, state requirements, and exclusions</td></tr>
                      <tr><th scope="row">Collision</th><td>Damage to your car from a collision</td><td>Deductible and covered situations</td></tr>
                      <tr><th scope="row">Comprehensive</th><td>Certain non-collision losses to your car</td><td>Covered events, exclusions, and deductible</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="blog-note">
                  These are general descriptions, not a promise that a specific loss will be covered. Policy wording and state rules control.
                </p>
              </section>

              <section id="limits-and-deductibles">
                <h2>Limits, exclusions, and deductibles</h2>
                <p>
                  A coverage limit is the most the insurer will pay for a covered claim under the applicable terms. A deductible is the amount you are responsible for before certain coverages pay. A policy may use different limits or deductibles for different kinds of claims, so check the details rather than relying on a short label.
                </p>
                <p>
                  Exclusions describe situations or losses the policy does not cover. They can be as important as the coverage name. When comparing options, look at the same coverage limits and deductibles, and consider whether a deductible would be manageable if you needed to make a claim. A lower premium alone does not tell you how much protection a policy provides.
                </p>
              </section>

              <section id="compare-consistently">
                <h2>Compare similar policy details</h2>
                <p>
                  For a useful comparison, make sure each quote reflects the same drivers, vehicles, address, and coverage choices. If one quote has different limits or deductibles, the prices are not describing identical protection. Ask what is included, what is optional, and whether any discounts or assumptions affect the quote.
                </p>
                <p>
                  It can help to review the declarations page of a current policy while gathering details. That document summarizes selected coverages and limits, but the full policy contains definitions, conditions, and exclusions. If something is unclear, ask the insurer or agent to explain it before deciding.
                </p>
                <aside className="blog-inline-cta" aria-label="Compare auto insurance options">
                  <h3>Ready to look at your options?</h3>
                  <p>Start with a few details, then review the choices at your own pace. Beginning a comparison does not buy or change a policy.</p>
                  <Link className="btn" to={{ pathname: '/', search, hash: '#compare' }}>Start your comparison</Link>
                </aside>
              </section>

              <section id="when-needs-change">
                <h2>Revisit coverage as needs change</h2>
                <p>
                  A policy that fit before may deserve another look after a move, a change in how often you drive, a new vehicle, or a change in who uses the car. These changes do not point to one correct coverage choice; they are reminders to make sure the information on file is current and the policy still matches your priorities.
                </p>
                <p>
                  Before removing a coverage or changing a limit, consider the cost of a loss you would then have to handle yourself. If a vehicle is financed or leased, the agreement may also set insurance requirements. Check those terms and ask questions before making a change.
                </p>
              </section>

              <section id="next-step">
                <h2>Your Next Steps</h2>
                <p>
                  Gather the details you want quotes to use, compare the same coverages side by side, and read the policy terms behind each summary. Take time to ask about anything that is missing or unclear. The goal is not simply to find the lowest price; it is to understand what you are choosing.
                </p>
              </section>
            </div>
          </div>
        </article>

        <section className="blog-related">
          <div className="wrap">
            <h2>Related reads</h2>
            <div className="blog-related-grid">
              <article className="blog-related-card">
                <p className="blog-related-label">In this guide</p>
                <h3>Liability, collision, and comprehensive</h3>
                <p>Review the purpose of each common coverage type and what to check in its terms.</p>
                <a href="#coverage-types">Read the section</a>
              </article>
              <article className="blog-related-card">
                <p className="blog-related-label">Preview</p>
                <h3>What does an auto insurance deductible mean?</h3>
                <p>A future guide to how deductibles work and questions to consider when choosing one.</p>
              </article>
              <article className="blog-related-card">
                <p className="blog-related-label">Preview</p>
                <h3>Questions to ask when reviewing a policy</h3>
                <p>A future checklist for comparing coverage details and clarifying policy language.</p>
              </article>
            </div>
          </div>
        </section>  
        <Footer />
      </main>
    </>
  );
}
