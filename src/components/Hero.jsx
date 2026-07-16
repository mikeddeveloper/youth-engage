import { Link } from 'react-router-dom';
import './Hero.css';
import missionImg from '../mission.png';
import ye4Img     from '../ye.4.png';
import fela1Img   from '../fela1.jpg';
import fela7Img   from '../fela7.jpg';

const SLIDES = [
  { src: missionImg, alt: '' },
  { src: ye4Img,     alt: '' },
  { src: fela1Img,   alt: '' },
  { src: fela7Img,   alt: '' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* ── Cinematic Ken Burns slideshow ── */}
      <div className="hero__slides" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <div key={i} className={`hero__slide hero__slide--${i + 1}`}>
            <img
              src={s.src}
              alt={s.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              draggable={false}
            />
          </div>
        ))}
        <div className="hero__gradient" />
      </div>

      {/* ── Floating brand accents ── */}
      <div className="hero__dot hero__dot--yellow" aria-hidden="true" />
      <div className="hero__dot hero__dot--purple" aria-hidden="true" />
      <div className="hero__dot hero__dot--sky"    aria-hidden="true" />

      {/* ── Hero content ── */}
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="section-label hero__label">Youth Engage Programme</span>

          <h1 className="hero__heading">
            Youth Engaged,<br />
            <span className="hero__accent">Future Strengthened.</span>
          </h1>

          <p className="hero__sub">
            Join our mission to create change — connecting Nigerian youths with accomplished
            citizens who inspire the next generation of bold, passionate leaders.
          </p>

          <div className="hero__actions">
            <Link to="/join" className="btn-red">Get Started</Link>
            <a href="#about" className="btn-ghost">Learn More</a>
          </div>

          <div className="hero__pills">
            <span className="hero__pill hero__pill--red">500+ Youths Engaged</span>
            <span className="hero__pill hero__pill--purple">50+ Personalities</span>
            <span className="hero__pill hero__pill--sky">Lagos, Nigeria</span>
          </div>
        </div>
      </div>

      {/* ── Bottom diagonal cut to next section ── */}
      <div className="hero__cut" aria-hidden="true" />
    </section>
  );
}
