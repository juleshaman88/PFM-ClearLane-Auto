import { useCallback, useMemo, useState } from 'react';
import Header from './Header.jsx';
import HeroFunnel from './HeroFunnel.jsx';
import HowItWorks from './HowItWorks.jsx';
import IllustrativeRates from './IllustrativeRates.jsx';
import FaqSection from './FaqSection.jsx';
import FinalCta from './FinalCta.jsx';
import { getTracking, hasFlag } from './utils/mockApi.js';

export default function LandingPage() {
  const tracking = useMemo(() => getTracking(), []);
  const debug = useMemo(() => hasFlag('debug'), []);
  const [events, setEvents] = useState([]);

  const track = useCallback((name, props = {}) => {
    const evt = { event: name, ...props, ...tracking, at: new Date().toISOString() };
    console.info('[ClearLane mock event]', evt);
    setEvents((e) => [evt, ...e].slice(0, 8));
  }, [tracking]);

  return (
    <>
      <a className="skip" href="#compare">Skip to comparison</a>
      <Header />
      <main>
        <HeroFunnel tracking={tracking} track={track} />
        <HowItWorks />
        <IllustrativeRates />
        <FaqSection />
        <FinalCta />
      </main>
      <footer className="foot"><div className="wrap">
        <p>ClearLane Auto helps drivers explore insurance options. We do not issue policies, and nothing on this page is an offer of coverage or a guaranteed rate. This is for illustrative purposes only.</p>
      </div></footer>
      {debug && <div className="debug"><ol>{events.map((e, i) => <li key={i}><code>{JSON.stringify(e)}</code></li>)}</ol></div>}
    </>
  );
}