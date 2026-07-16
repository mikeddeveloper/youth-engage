import './Vision.css';
import ye2Img from '../ye.2.png';

export default function Vision() {
  return (
    <section className="vision" id="vision">
      <div className="vision__bg-circle" aria-hidden="true" />

      <div className="container vision__inner">
        <div className="vision__photo-wrap" aria-hidden="true" data-aos="zoom-in" data-aos-duration="800">
          <div className="vision__icon-ring" />
          <img src={ye2Img} alt="" className="vision__photo" loading="lazy" />
        </div>

        <div className="vision__content">
          <span
            className="section-label vision__label"
            data-aos="fade-left"
            style={{ color: 'var(--purple)', background: 'var(--purple-tint)' }}
          >
            Our Vision
          </span>
          <h2
            className="section-heading"
            data-aos="fade-left"
            data-aos-delay="80"
          >
            Inspiring a <span style={{ color: 'var(--purple)' }}>Generation</span>
          </h2>
          <p
            className="section-body"
            data-aos="fade-left"
            data-aos-delay="160"
          >
            Our vision is to ignite a movement of young leaders who are bold, passionate, and
            driven to create positive change in their communities and beyond. We envision a
            future where every youth is empowered, confident, and capable of shaping a
            better tomorrow.
          </p>

          <div className="vision__tags" data-aos="fade-left" data-aos-delay="240">
            <span className="vision__tag">Bold Leadership</span>
            <span className="vision__tag">Positive Change</span>
            <span className="vision__tag">Empowered Youth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
