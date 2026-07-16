import './ImpactMoments.css';
import impact1Img from '../images/impact1.jpg';
import impact2Img from '../images/impact2.jpg';
import ye6Img     from '../images/ye6.png';

const MOMENTS = [
  {
    src: impact1Img,
    label: 'Live Session',
    caption: 'Youth engaging directly with accomplished citizens',
    featured: true,
  },
  {
    src: ye6Img,
    label: 'Community',
    caption: 'Bridging generations through shared purpose',
    featured: false,
  },
  {
    src: impact2Img,
    label: 'Inspiration',
    caption: 'Stories that ignite a passion for leadership',
    featured: false,
  },
];

export default function ImpactMoments() {
  return (
    <section className="impact" id="impact">
      <div className="impact__bg-arc" aria-hidden="true" />
      <div className="impact__bg-arc impact__bg-arc--2" aria-hidden="true" />

      <div className="container">
        <div className="impact__header" data-aos="fade-up">
          <span
            className="section-label"
            style={{ color: 'var(--sky)', background: 'var(--sky-tint)' }}
          >
            Real Stories. Real Change.
          </span>
          <h2 className="section-heading">
            Moments of <span style={{ color: 'var(--sky)' }}>Impact</span>
          </h2>
          <p className="section-body">
            Every session leaves a mark — on the youth who attend, the personalities who share,
            and the future they are building together.
          </p>
        </div>

        <div className="impact__grid">
          {MOMENTS.map((m, i) => (
            <div
              key={i}
              className={`impact__card${m.featured ? ' impact__card--featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="impact__card-img">
                <img src={m.src} alt={m.caption} loading="lazy" draggable={false} />
                <div className="impact__card-overlay" />
              </div>
              <div className="impact__card-badge">{m.label}</div>
              <p className="impact__card-caption">{m.caption}</p>
            </div>
          ))}
        </div>

        <div className="impact__stats" data-aos="fade-up" data-aos-delay="200">
          {[
            { num: '500+', label: 'Lives Touched',    color: 'var(--sky)'    },
            { num: '50+',  label: 'Sessions Held',    color: 'var(--purple)' },
            { num: '10+',  label: 'Years of Impact',  color: 'var(--red)'    },
          ].map(({ num, label, color }) => (
            <div key={label} className="impact__stat" style={{ '--s-color': color }}>
              <span className="impact__stat-num">{num}</span>
              <span className="impact__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
