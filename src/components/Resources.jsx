import { Link, useLocation } from 'react-router-dom';
import blogHero from '../assets/Blog-Hero.webp';

export default function Resources() {
  const { search } = useLocation();

  return (
    <section className="resources" aria-labelledby="resources-heading">
      <div className="wrap">
        <h2 id="resources-heading">Resources For the Road Ahead</h2>
        <p className="lede">Explore straightforward guides to help you understand your coverage choices and make a more informed decision.</p>
        <div className="resources-grid">
          <article className="resource-card">
            <img className="resource-image" src={blogHero} alt="" />
            <div className="resource-content">
              <p className="resource-label">Coverage guide</p>
              <h3>Auto insurance coverage explained</h3>
              <p>Get to know common coverage types, limits, and deductibles before comparing options.</p>
              <Link to={{ pathname: '/blog', search }}>Read Here <span aria-hidden="true">&rarr;</span></Link>
            </div>
          </article>
          <article className="resource-card">
            <div className="resource-illustration" aria-hidden="true">
              <svg viewBox="0 0 120 90" fill="none">
                <rect x="28" y="13" width="64" height="64" rx="12" fill="var(--surf)" stroke="var(--teal)" strokeWidth="2" />
                <path d="M43 32h34M43 45h34M43 58h22" stroke="var(--navy)" strokeWidth="4" strokeLinecap="round" />
                <circle cx="87" cy="67" r="13" fill="var(--teal)" />
                <path d="M87 61v12m-4-9c0-2 2-3 4-3s4 1 4 3-2 3-4 3-4 1-4 3 2 3 4 3 4-1 4-3" stroke="var(--surf)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="resource-content">
              <p className="resource-label">Preview</p>
              <h3>Understanding Deductibles</h3>
              <p>A future guide to what you may pay yourself when you make a covered claim.</p>
              <Link to={{ pathname: '/blog', search }}>Read Here <span aria-hidden="true">&rarr;</span></Link>
            </div>
          </article>
          <article className="resource-card">
            <div className="resource-illustration" aria-hidden="true">
              <svg viewBox="0 0 120 90" fill="none">
                <path d="M60 10 87 20v20c0 18-11 30-27 39C44 70 33 58 33 40V20l27-10Z" fill="var(--surf)" stroke="var(--teal)" strokeWidth="2" />
                <path d="m48 42 8 8 16-18" stroke="var(--navy)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="resource-content">
              <p className="resource-label">Preview</p>
              <h3>Questions to ask about a policy</h3>
              <p>A future checklist for reviewing coverage, exclusions, and other policy details.</p>
              <Link to={{ pathname: '/blog', search }}>Read Here <span aria-hidden="true">&rarr;</span></Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}