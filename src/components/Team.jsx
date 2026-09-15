import team from '../data/team';
import './Team.css';

function TeamCard({ name, number }) {
  return (
    <article className="team-card">
      <div className="team-card__lanyard" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="team-card__clip" aria-hidden="true" />
      <div className="team-card__badge">
        <span className="team-card__eyebrow">YEP Team</span>
        <h3 className="team-card__name">{name}</h3>
        <span className="team-card__number">{String(number).padStart(2, '0')}</span>
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

        <div className="team__rail" aria-hidden="true"><span /><span /></div>
        <div className="team__scroller" aria-label="Our team members">
          {team.map((m, i) => (
            <div
              className="team__card-slot"
              key={m.id}
              data-aos="fade-up"
              data-aos-delay={Math.min(i * 80, 320)}
            >
              <TeamCard {...m} number={i + 1} />
            </div>
          ))}
        </div>
        <p className="team__scroll-hint">Scroll sideways to meet the team <span aria-hidden="true">→</span></p>
      </div>
    </section>
  );
}
