import { useCallback, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import HowItWorks from './HowItWorks.jsx';
import CoverageExplorer from './CoverageExplorer.jsx';
import ComparisonForm from './ComparisonForm.jsx';
import { getTracking } from './utils/mockApi.js';
import heroImage from '../assets/homepage-hero.webp';
import FaqSection from './FaqSection.jsx';
import Resources from './Resources.jsx';
import WhyCompare from './WhyCompare.jsx';
import Footer from './Footer.jsx';

export default function Homepage() {
  const { hash } = useLocation();
  const tracking = useMemo(() => getTracking(), []);
  useEffect(() => {
    if (hash === '#compare') document.getElementById('compare')?.scrollIntoView();
  }, [hash]);
  const track = useCallback((name, props = {}) => {
    const event = { event: name, ...props, ...tracking, at: new Date().toISOString() };
    console.info('[ClearLane mock event]', event);
  }, [tracking]);

  return (
    <>
      <NavBar />
      <main className="homepage">
        <section className="home-hero">
          <img className="home-hero-image" src={heroImage} alt="" />
          <div className="wrap home-hero-inner">
            <p className="home-eyebrow">Clearer roads ahead</p>
            <h1>Easy to Understand<br />Auto Insurance</h1>
            <p className="home-hero-description">
              Understand your options, explore coverage, and decide what makes sense for you - all at your own pace.
            </p>
            <div className="home-hero-actions">
              <a className="btn light" href="#compare">Start your comparison</a>
            </div>
          </div>
        </section>
        <div className="home-how-it-works">
          <HowItWorks />
        </div>
        <div className="home-coverage">
          <CoverageExplorer />
        </div>
        <div className="home-why-compare">
          <WhyCompare />
        </div>
        <div className="home-resources">
          <Resources />
        </div>
        <div className="home-faq">
          <FaqSection />
        </div>
        <section className="home-comparison">
          <div className="wrap home-comparison-inner">
            <div className="home-comparison-heading">
              <h2>Start Your Comparison</h2>
              <p>Two quick questions are all it takes to begin exploring your options.</p>
            </div>
            <ComparisonForm tracking={tracking} track={track} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}