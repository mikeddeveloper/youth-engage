import testimonials from '../data/testimonials';
import './Testimonials.css';

const accentColors = ['var(--red)', 'var(--sky)', 'var(--yellow)', 'var(--purple)'];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      {/* Decorative circles */}
      <div className="testimonials__orb testimonials__orb--1" aria-hidden="true" />
      <div className="testimonials__orb testimonials__orb--2" aria-hidden="true" />

      <div className="container">
        <div className="testimonials__header" data-aos="fade-up">
          <span className="section-label testimonials__label">Testimonials</span>
          <h2 className="section-heading testimonials__heading">
            Voices of <span className="testimonials__accent">Change</span>
          </h2>
          <p className="section-body testimonials__body">
            Real stories from youths whose lives were transformed through the Youth Engage Programme.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              data-aos="zoom-in"
              data-aos-delay={i * 120}
              style={{ '--accent': accentColors[i % accentColors.length] }}
            >
              <span className="testimonial-card__quote" aria-hidden="true">"</span>
              <p className="testimonial-card__text">{t.text}</p>
              <footer className="testimonial-card__footer">
                <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  {t.title && <p className="testimonial-card__title">{t.title}</p>}
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
