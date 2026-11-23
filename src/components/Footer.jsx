import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer-inner">
        <Link className="mark" to={{ pathname: '/', search: '' }} aria-label="ClearLane home">
            <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" rx="7" fill="var(--navy)"/><path d="M13 22V4" stroke="var(--teal-l)" strokeWidth="2.5" strokeDasharray="4 3" strokeLinecap="round"/></svg>
            Clear<b>Lane</b>Auto
          </Link>
        <p>ClearLane Auto is a comparison and referral service, not an insurance company. We do not issue insurance policies. Coverage, terms, and availability vary by provider and state. This site is a demo; no real comparison request is sent.</p>
      </div>
    </footer>
  );
}