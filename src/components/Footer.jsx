import { Link } from 'react-router-dom';
import './Footer.css';

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconTwitter() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

const socials = [
  { label: 'Facebook', Icon: IconFacebook, color: 'var(--sky)', href: '#' },
  { label: 'Twitter / X', Icon: IconTwitter, color: 'var(--purple)', href: '#' },
  { label: 'Instagram', Icon: IconInstagram, color: 'var(--red)', href: '#' },
  { label: 'YouTube', Icon: IconYouTube, color: 'var(--yellow)', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">

        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src="/images/yep_logo.png" alt="Youth Engage Programme" width="48" height="48" />
            <div className="footer__logo-text">
              <span>Youth Engage</span>
              <small>Programme</small>
            </div>
          </Link>
          <p className="footer__tagline">
            Connecting Nigerian youths with accomplished citizens to inspire the next generation of leaders.
          </p>
          <div className="footer__socials">
            {socials.map(({ label, Icon, color, href }) => (
              <a key={label} href={href} className="footer__social" aria-label={label} style={{ color }}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h4 className="footer__col-title">Programme</h4>
            <a href="#about" className="footer__link">About Us</a>
            <a href="#vision" className="footer__link">Our Vision</a>
            <a href="#mission" className="footer__link">Our Mission</a>
            <a href="#personalities" className="footer__link">Personalities</a>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Engage</h4>
            <Link to="/events" className="footer__link">Events</Link>
            <a href="#gallery" className="footer__link">Gallery</a>
            <a href="#testimonials" className="footer__link">Testimonials</a>
            <Link to="/join" className="footer__link">Join / Volunteer</Link>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <address className="footer__address">
              19A Aina Eleko by Cantonment<br />
              Maryland, Lagos<br />
              Nigeria
            </address>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 Youth Engage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
