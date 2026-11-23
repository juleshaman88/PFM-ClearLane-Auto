import { useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function NavBar() {
  const { search } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const closeOnEscape = (event) => {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  };

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation" onKeyDown={closeOnEscape}>
        <div className="wrap site-nav-inner">
          <a className="mark" href="/" aria-label="ClearLane home">
            <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><rect width="26" height="26" rx="7" fill="var(--navy)"/><path d="M13 22V4" stroke="var(--teal-l)" strokeWidth="2.5" strokeDasharray="4 3" strokeLinecap="round"/></svg>
            Clear<b>Lane</b>Auto
          </a>
          <button ref={menuButtonRef} className="site-nav-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav-links" onClick={() => setMenuOpen((open) => !open)}>
            Menu
          </button>
          <div id="site-nav-links" className={`site-nav-links${menuOpen ? ' is-open' : ''}`}>
            <NavLink to={{ pathname: '/', search }} end onClick={() => setMenuOpen(false)}>Homepage</NavLink>
            <NavLink to={{ pathname: '/blog', search }} onClick={() => setMenuOpen(false)}>Blog Article</NavLink>
            <NavLink to={{ pathname: '/landing-page', search }} onClick={() => setMenuOpen(false)}>Landing Page</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
