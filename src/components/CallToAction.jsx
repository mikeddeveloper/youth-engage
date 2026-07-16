import { Link } from 'react-router-dom';
import './CallToAction.css';

export default function CallToAction() {
  return (
    <section className="cta" id="cta">
      <div className="cta__pattern" aria-hidden="true" />
      <div className="cta__circle cta__circle--1" aria-hidden="true" />
      <div className="cta__circle cta__circle--2" aria-hidden="true" />
      <div className="cta__circle cta__circle--3" aria-hidden="true" />

      <div className="container cta__inner" data-aos="zoom-in" data-aos-duration="800">
        <span className="cta__label">Take Action</span>
        <h2 className="cta__heading">
          Ready to Make a <span className="cta__accent">Difference?</span>
        </h2>
        <p className="cta__text">
          Join Youth Engage today and become a catalyst for change in your community and beyond.
        </p>
        <div className="cta__actions">
          <Link to="/join" className="cta__btn-primary">
            Join Youth Engage
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link to="/events" className="btn-ghost">
            View Events
          </Link>
        </div>
      </div>
    </section>
  );
}
