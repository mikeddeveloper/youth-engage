import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background decorative shapes */}
      <div className="hero__arc" aria-hidden="true" />
      <div className="hero__dot hero__dot--yellow" aria-hidden="true" />
      <div className="hero__dot hero__dot--purple" aria-hidden="true" />
      <div className="hero__dot hero__dot--sky" aria-hidden="true" />
      <div className="hero__dot hero__dot--red" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Text content */}
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
            <a href="#about" className="btn-outline">Learn More</a>
          </div>

          {/* Stat pills */}
          <div className="hero__pills">
            <span className="hero__pill hero__pill--red">500+ Youths Engaged</span>
            <span className="hero__pill hero__pill--purple">50+ Personalities</span>
            <span className="hero__pill hero__pill--sky">Lagos, Nigeria</span>
          </div>
        </div>

        {/* Visual / Logo */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__ring hero__ring--1" />
          <div className="hero__ring hero__ring--2" />
          <div className="hero__logo-wrap">
            <img
              src="/images/yep_logo.png"
              alt="Youth Engage Programme"
              className="hero__logo"
              width="280"
              height="280"
            />
          </div>
        </div>
      </div>

      {/* Diagonal transition to next section */}
      <div className="hero__cut" aria-hidden="true" />
    </section>
  );
}
