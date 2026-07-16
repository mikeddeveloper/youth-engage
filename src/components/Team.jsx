import team from '../data/team';
import './Team.css';

function TeamCard({ name, role, image }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <article className="team-card">
      <div className="team-card__img-wrap">
        <img
          src={image}
          alt={name}
          loading="lazy"
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="team-card__placeholder" aria-hidden="true">{initials}</div>
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{name}</h3>
        <p className="team-card__role">{role}</p>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="team__header" data-aos="fade-up">
          <span
            className="section-label"
            style={{ color: 'var(--red)', background: 'var(--red-tint)' }}
          >
            Our Team
          </span>
          <h2 className="section-heading">
            The Drive Behind{' '}
            <span style={{ color: 'var(--red)' }}>Our Mission</span>
          </h2>
          <p className="section-body">
            Dedicated professionals committed to creating meaningful impact in the lives of Nigerian youth.
          </p>
        </div>

        <div className="team__grid">
          {team.map((m, i) => (
            <div
              key={m.id}
              data-aos="fade-up"
              data-aos-delay={Math.min(i * 80, 320)}
            >
              <TeamCard {...m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
