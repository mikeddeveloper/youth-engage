import './About.css';
import fela1Img from '../images/fela1.jpg';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">

        <div className="about__visual" aria-hidden="true" data-aos="fade-right" data-aos-duration="900">
          <div className="about__glow" />
          <div className="about__circle about__circle--outer" />
          <div className="about__circle about__circle--mid" />
          <div className="about__photo-wrap">
            <img src={fela1Img} alt="" loading="lazy" />
          </div>
          <span className="about__dot about__dot--yellow" />
          <span className="about__dot about__dot--purple" />
          <span className="about__dot about__dot--sky" />
        </div>

        <div className="about__content">
          <span
            className="section-label about__label"
            data-aos="fade-left"
            style={{ color: 'var(--red)', background: 'var(--red-tint)' }}
          >
            Who We Are
          </span>
          <h2
            className="section-heading"
            data-aos="fade-left"
            data-aos-delay="80"
          >
            About <span style={{ color: 'var(--red)' }}>Youth Engage</span>
          </h2>
          <p
            className="section-body"
            data-aos="fade-left"
            data-aos-delay="160"
          >
            Youth Engage is a Television Magazine programme concept, borne out of researching
            the minds of various youths in our society, to provide a platform for the transfer
            and inculcation of societal core values with a view to securing a better future for
            our society.
          </p>

          <div className="about__stats">
            {[
              { num: '500+', label: 'Youths Engaged',       color: 'var(--red)',    tint: 'var(--red-tint)',    delay: 240 },
              { num: '50+',  label: 'Personalities Featured', color: 'var(--purple)', tint: 'var(--purple-tint)', delay: 320 },
              { num: '10+',  label: 'Years of Impact',       color: 'var(--sky)',    tint: 'var(--sky-tint)',    delay: 400 },
            ].map(({ num, label, color, tint, delay }) => (
              <div
                key={label}
                className="about__stat"
                data-aos="fade-up"
                data-aos-delay={delay}
                style={{ '--stat-color': color, '--stat-tint': tint }}
              >
                <span className="about__stat-num">{num}</span>
                <span className="about__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
