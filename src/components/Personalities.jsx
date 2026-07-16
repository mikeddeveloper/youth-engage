import personalities from '../data/personalities';
import './Personalities.css';

function PersonCard({ name, caption, image }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <article className="person-card">
      <div className="person-card__img-wrap">
        <img
          src={image}
          alt={name}
          loading="lazy"
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="person-card__placeholder" aria-hidden="true">{initials}</div>
      </div>
      <div className="person-card__body">
        <h3 className="person-card__name">{name}</h3>
        <p className="person-card__caption">{caption}</p>
      </div>
    </article>
  );
}

export default function Personalities() {
  return (
    <section className="personalities" id="personalities">
      <div className="personalities__bg-dot personalities__bg-dot--1" aria-hidden="true" />
      <div className="personalities__bg-dot personalities__bg-dot--2" aria-hidden="true" />

      <div className="container">
        <div className="personalities__header" data-aos="fade-up">
          <span
            className="section-label"
            style={{ color: '#9a7a00', background: 'var(--yellow-tint)' }}
          >
            Our Personalities
          </span>
          <h2 className="section-heading">
            Meet the Faces of{' '}
            <span style={{ color: '#9a7a00' }}>Youth Engage</span>
          </h2>
          <p className="section-body">
            Accomplished citizens who have walked the path and are ready to share the map
            with the next generation.
          </p>
        </div>

        <div className="personalities__grid">
          {personalities.map((p, i) => (
            <div
              key={p.id}
              data-aos="fade-up"
              data-aos-delay={Math.min(i * 80, 320)}
            >
              <PersonCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
