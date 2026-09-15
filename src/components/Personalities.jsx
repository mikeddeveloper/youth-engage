import { useState } from 'react';
import personalities from '../data/personalities';
import './Personalities.css';

/* ── YouTube video data ── */
const VIDEOS = [
  {
    id: 'J3sglEhzGEY',
    title: 'Interview with Chief Olusegun Obasanjo, GCFR - Part 2',
  },
  {
    id: 'hyXIn9Osx84',
    title: "Apathy, the Winner of Nigeria's Election - Fela Durotoye",
  },
  {
    id: 'KZsM1OsEp30',
    title: 'Youth Engage Session with Coscharis - Part 1',
  },
  {
    id: '3JZ8QWUSagE',
    title: 'Late Prof. Akinlawon Ladipo Mabogunje',
  },
  {
    id: 'zXLPMbHIZME',
    title: 'Dr. Ayodele Aderinwale Interview - Part 1',
  },
  {
    id: 'wS2HYfGDlM8',
    title: 'Dame Ololade Jokotade Oki - Part 1',
  },
];

/* ── Person card ── */
function PersonCard({ name, caption, image }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <article className="person-card">
      <div className="person-card__img-wrap">
        <img
          src={image}
          alt={name}
          loading="eager"
          decoding="async"
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

/* ── YouTube video card (facade → iframe on click) ── */
function YTCard({ id, title }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="yt-card" data-aos="fade-up">
      <div className="yt-card__player">
        {playing ? (
          <iframe
            className="yt-card__iframe"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            className="yt-card__thumb"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              loading="lazy"
            />
            {/* YouTube-style red play button */}
            <span className="yt-card__play" aria-hidden="true">
              <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="yt-card__play-bg"
                  d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                />
                <path className="yt-card__play-arrow" d="M45 24 27 14v20z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {/* Meta row — channel logo + title */}
      <div className="yt-card__meta">
        <img
          src="/images/yep_logo.png"
          alt=""
          className="yt-card__avatar"
          width="36"
          height="36"
          aria-hidden="true"
          loading="lazy"
        />
        <div className="yt-card__info">
          <p className="yt-card__title">{title}</p>
          <p className="yt-card__channel">Youth Engage Programme</p>
        </div>
      </div>
    </div>
  );
}

/* ── Section ── */
export default function Personalities() {
  return (
    <section className="personalities" id="personalities">
      <div className="personalities__bg-dot personalities__bg-dot--1" aria-hidden="true" />
      <div className="personalities__bg-dot personalities__bg-dot--2" aria-hidden="true" />

      <div className="container">

        {/* ── Personality cards ── */}
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

        {/* ── YouTube sessions ── */}
        <div className="yt-videos" id="watch">
          <div className="yt-videos__header" data-aos="fade-up">
            <span
              className="section-label"
              style={{ color: 'var(--red)', background: 'var(--red-tint)' }}
            >
              Watch on YouTube
            </span>
            <h2 className="section-heading">
              Our Sessions, <span style={{ color: 'var(--red)' }}>On Screen</span>
            </h2>
            <p className="section-body">
              Watch exclusive conversations with Nigeria's most accomplished citizens —
              straight from our YouTube channel.
            </p>
          </div>

          <div className="yt-grid">
            {VIDEOS.map((v, i) => (
              <YTCard key={v.id} {...v} />
            ))}
          </div>

          <div className="yt-videos__cta" data-aos="fade-up">
            <a
              href="https://www.youtube.com/@youthengageprogramme"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" style={{ marginRight: 8 }}>
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.46 3.5 12 3.5 12 3.5s-7.46 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.12 0 12 0 12s0 3.88.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.54 20.5 12 20.5 12 20.5s7.46 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.88 24 12 24 12s0-3.88-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
              </svg>
              View All Videos
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
