import { Link } from 'react-router-dom';
import events from '../data/events';
import './Events.css';

const typeColors = {
  Summit:   'var(--red)',
  Screening:'var(--purple)',
  Workshop: 'var(--sky)',
  Outreach: '#9a7a00',
};
const typeBg = {
  Summit:   'var(--red-tint)',
  Screening:'var(--purple-tint)',
  Workshop: 'var(--sky-tint)',
  Outreach: 'var(--yellow-tint)',
};

export default function Events() {
  return (
    <div className="events-page">
      {/* Hero */}
      <section className="events-hero">
        <div className="events-hero__arc" aria-hidden="true" />
        <div className="events-hero__dot events-hero__dot--yellow" aria-hidden="true" />
        <div className="container events-hero__inner" data-aos="fade-up">
          <span
            className="section-label"
            style={{ color: 'var(--red)', background: 'var(--red-tint)' }}
          >
            What&apos;s On
          </span>
          <h1 className="section-heading">
            Events &amp; <span style={{ color: 'var(--red)' }}>Programmes</span>
          </h1>
          <p className="section-body">
            Stay connected with the Youth Engage community through our upcoming events,
            workshops, and screenings.
          </p>
          <Link to="/join" className="btn-red" style={{ marginTop: '28px' }}>
            Register to Attend
          </Link>
        </div>
      </section>

      {/* Events listing */}
      <section className="events-list">
        <div className="container events-list__inner">
          {events.map((event, i) => (
            <article
              key={event.id}
              className="event-card"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div
                className="event-card__date"
                aria-label={`${event.day} ${event.month} ${event.year}`}
              >
                <span className="event-card__day">{event.day}</span>
                <span className="event-card__month">{event.month}</span>
                <span className="event-card__year">{event.year}</span>
              </div>

              <div className="event-card__body">
                <span
                  className="event-card__type"
                  style={{
                    color: typeColors[event.type] || 'var(--red)',
                    background: typeBg[event.type] || 'var(--red-tint)',
                  }}
                >
                  {event.type}
                </span>
                <h2 className="event-card__title">{event.title}</h2>
                <p className="event-card__desc">{event.description}</p>
                <div className="event-card__meta">
                  <span className="event-card__meta-item">
                    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {event.location}
                  </span>
                  <span className="event-card__meta-item">
                    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {event.time}
                  </span>
                </div>
              </div>

              <div className="event-card__action">
                <Link to="/join" className="btn-red event-card__btn">
                  Register
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
