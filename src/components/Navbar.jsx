import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'About', hash: 'about' },
  { label: 'Personalities', hash: 'personalities' },
  { label: 'Gallery', hash: 'gallery' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  function hrefFor(hash) {
    return isHome ? `#${hash}` : `/#${hash}`;
  }

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--shadow' : ''}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
            <img src="/images/yep_logo.png" alt="Youth Engage Programme logo" width="44" height="44" />
            <span className="navbar__logo-text">
              Youth <strong>Engage</strong>
            </span>
          </Link>

          <nav className={`navbar__nav${open ? ' navbar__nav--open' : ''}`} aria-label="Main navigation">
            <a href={hrefFor('about')} className="navbar__link" onClick={() => setOpen(false)}>About</a>
            <a href={hrefFor('personalities')} className="navbar__link" onClick={() => setOpen(false)}>Personalities</a>
            <Link to="/events" className="navbar__link" onClick={() => setOpen(false)}>Events</Link>
            <a href={hrefFor('gallery')} className="navbar__link" onClick={() => setOpen(false)}>Gallery</a>
            <Link to="/join" className="btn-red navbar__cta" onClick={() => setOpen(false)}>Join Us</Link>
          </nav>

          <button
            className={`navbar__burger${open ? ' navbar__burger--open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="navbar__overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
