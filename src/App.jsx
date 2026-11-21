import { useCallback, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import HeroFunnel from './components/HeroFunnel.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import IllustrativeRates from './components/IllustrativeRates.jsx';
import FaqSection from './components/FaqSection.jsx';
import FinalCta from './components/FinalCta.jsx';
import DebugPanel from './components/DebugPanel.jsx';
import { getTracking, hasFlag } from './utils/mockApi.js';

export default function App() {
  const tracking = useMemo(getTracking, []); // utm_source, utm_campaign, click_id
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
        <p>ClearLane helps drivers explore insurance options. We do not issue policies, and nothing on this page is an offer of coverage or a guaranteed rate.</p>
      </div></footer>
      {debug && <DebugPanel events={events} />}
    </>
  );
}
