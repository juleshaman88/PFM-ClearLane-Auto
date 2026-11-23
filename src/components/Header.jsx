import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { search } = useLocation();
  return (
    <header className="bar"><div className="wrap bar-in">
      <Link className="mark" to={{ pathname: '/', search }} aria-label="ClearLane home">
        <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" rx="7" fill="var(--navy)"/><path d="M13 22V4" stroke="var(--teal-l)" strokeWidth="2.5" strokeDasharray="4 3" strokeLinecap="round"/></svg>
        Clear<b>Lane</b>Auto
      </Link>
    </div></header>
  );
}