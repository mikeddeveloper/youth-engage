import './Mission.css';

function PeopleIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="20" r="9" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="44" cy="26" r="7" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 54c0-9.941 8.059-18 18-18s18 8.059 18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M44 54c0-6.627-3.134-12.5-8-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Mission() {
  return (
    <section className="mission" id="mission">
      <div className="mission__bg-circle" aria-hidden="true" />

      <div className="container mission__inner">
        <div className="mission__content">
          <span
            className="section-label mission__label"
            data-aos="fade-right"
            style={{ color: 'var(--sky)', background: 'var(--sky-tint)' }}
          >
            Our Mission
          </span>
          <h2
            className="section-heading"
            data-aos="fade-right"
            data-aos-delay="80"
          >
            Empowering Youth <span style={{ color: 'var(--sky)' }}>Everywhere</span>
          </h2>
          <p
            className="section-body"
            data-aos="fade-right"
            data-aos-delay="160"
          >
            Youth Engage seeks to get our youths and teens to meet our eminent and accomplished
            citizens and have them share their success stories, especially the challenges they
            surmounted to get to the top.
          </p>

          <div className="mission__features" data-aos="fade-right" data-aos-delay="240">
            {['Connect Generations', 'Share Real Stories', 'Build Tomorrow'].map(f => (
              <div key={f} className="mission__feature">
                <div className="mission__feature-icon" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mission__icon-wrap" aria-hidden="true" data-aos="zoom-in" data-aos-duration="800">
          <div className="mission__icon-ring" />
          <div className="mission__icon">
            <PeopleIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
