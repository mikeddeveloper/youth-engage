import { useState } from 'react';
import './Join.css';

const INTEREST_AREAS = [
  'Mentorship', 'Volunteering', 'Media & Content',
  'Event Planning', 'Youth Outreach', 'Sponsorship', 'Other',
];

function Field({ label, required, error, children }) {
  return (
    <div className="join-field">
      <label className="join-field__label">
        {label}{required && <span className="join-field__req" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <span className="join-field__error" role="alert">{error}</span>}
    </div>
  );
}

export default function Join() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(errs => { const next = { ...errs }; delete next[name]; return next; });
  }

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) errs.phone = 'Phone number is required.';
    if (!form.interest) errs.interest = 'Please select an area of interest.';
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  }

  function handleReset() {
    setForm({ name: '', email: '', phone: '', interest: '', message: '' });
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="join-page">
        <div className="join-success">
          <div className="container join-success__inner" data-aos="zoom-in">
            <div className="join-success__icon" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3">
                <circle cx="32" cy="32" r="28" />
                <polyline points="20 34 28 42 44 24" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="join-success__heading">You&apos;re In!</h2>
            <p className="join-success__text">
              Thank you for joining Youth Engage, <strong>{form.name}</strong>!
              We&apos;ll be in touch shortly at <strong>{form.email}</strong>.
            </p>
            <button className="btn-red" onClick={handleReset}>
              Submit Another Response
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="join-page">
      {/* Hero */}
      <section className="join-hero">
        <div className="join-hero__arc" aria-hidden="true" />
        <div className="join-hero__dot" aria-hidden="true" />
        <div className="container join-hero__inner" data-aos="fade-up">
          <span
            className="section-label"
            style={{ color: 'var(--red)', background: 'var(--red-tint)' }}
          >
            Get Involved
          </span>
          <h1 className="section-heading">
            Join / <span style={{ color: 'var(--red)' }}>Volunteer</span>
          </h1>
          <p className="section-body">
            Become part of a movement that is shaping the future of Nigerian youth. Fill in
            the form below and we&apos;ll reach out to get you started.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="join-form-section">
        <div className="container join-form-section__inner">

          {/* Left — info panel */}
          <div className="join-info" data-aos="fade-right">
            <h3 className="join-info__heading">Why Join Youth Engage?</h3>
            <ul className="join-info__list">
              {[
                ['Meet accomplished Nigerian leaders face-to-face', 'var(--red)'],
                ['Gain mentorship from industry professionals', 'var(--purple)'],
                ['Access exclusive workshops and events', 'var(--sky)'],
                ['Be featured on our television magazine programme', 'var(--yellow)'],
                ['Build a network of like-minded young Nigerians', 'var(--red)'],
              ].map(([text, color]) => (
                <li key={text} className="join-info__item">
                  <span className="join-info__bullet" style={{ background: color }} aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>

            <div className="join-info__contact">
              <p className="join-info__contact-label">Questions?</p>
              <p className="join-info__contact-address">
                19A Aina Eleko by Cantonment<br />
                Maryland, Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Right — form */}
          <form
            className="join-form"
            onSubmit={handleSubmit}
            noValidate
            data-aos="fade-left"
          >
            <div className="join-form__row">
              <Field label="Full Name" required error={errors.name}>
                <input
                  name="name" type="text" value={form.name}
                  onChange={handleChange} placeholder="Amaka Okonkwo"
                  className={errors.name ? 'input-error' : ''}
                  autoComplete="name"
                />
              </Field>
              <Field label="Email Address" required error={errors.email}>
                <input
                  name="email" type="email" value={form.email}
                  onChange={handleChange} placeholder="amaka@example.com"
                  className={errors.email ? 'input-error' : ''}
                  autoComplete="email"
                />
              </Field>
            </div>

            <div className="join-form__row">
              <Field label="Phone Number" required error={errors.phone}>
                <input
                  name="phone" type="tel" value={form.phone}
                  onChange={handleChange} placeholder="+234 800 000 0000"
                  className={errors.phone ? 'input-error' : ''}
                  autoComplete="tel"
                />
              </Field>
              <Field label="Area of Interest" required error={errors.interest}>
                <select
                  name="interest" value={form.interest}
                  onChange={handleChange}
                  className={errors.interest ? 'input-error' : ''}
                >
                  <option value="">Select an area…</option>
                  {INTEREST_AREAS.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Your Message (Optional)">
              <textarea
                name="message" rows={5} value={form.message}
                onChange={handleChange}
                placeholder="Tell us why you want to join Youth Engage, or any questions you have…"
              />
            </Field>

            <div className="join-form__footer">
              <p className="join-form__note">
                Fields marked <span aria-hidden="true">*</span> are required. We do not share your information.
              </p>
              <button type="submit" className="btn-red join-form__submit">
                Submit Application
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </form>

        </div>
      </section>
    </div>
  );
}
