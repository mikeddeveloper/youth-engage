import { useState, useEffect, useCallback } from 'react';
import galleryImages from '../data/gallery';
import './Gallery.css';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
    setLightbox(galleryImages[index]);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = '';
  }, []);

  const goPrev = useCallback((e) => {
    e.stopPropagation();
    const idx = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightboxIndex(idx);
    setLightbox(galleryImages[idx]);
  }, [lightboxIndex]);

  const goNext = useCallback((e) => {
    e.stopPropagation();
    const idx = (lightboxIndex + 1) % galleryImages.length;
    setLightboxIndex(idx);
    setLightbox(galleryImages[idx]);
  }, [lightboxIndex]);

  useEffect(() => {
    if (!lightbox) return;
    function onKey(e) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goPrev(e);
      if (e.key === 'ArrowRight') goNext(e);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, goPrev, goNext, closeLightbox]);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__header" data-aos="fade-up">
          <span
            className="section-label"
            style={{ color: 'var(--purple)', background: 'var(--purple-tint)' }}
          >
            Gallery
          </span>
          <h2 className="section-heading">
            In the <span style={{ color: 'var(--purple)' }}>Frame</span>
          </h2>
          <p className="section-body">
            A visual archive of the conversations, sessions, and connections that define
            who we are.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              className={`gallery__item${i === 0 ? ' gallery__item--featured' : ''}`}
              onClick={() => openLightbox(i)}
              aria-label={`View: ${img.alt}`}
              data-aos="zoom-in"
              data-aos-delay={Math.min(i * 60, 300)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery__overlay" aria-hidden="true">
                <div className="gallery__overlay-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close lightbox">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button className="lightbox__nav lightbox__nav--prev" onClick={goPrev} aria-label="Previous image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            {lightbox.alt && <p className="lightbox__caption">{lightbox.alt}</p>}
          </div>

          <button className="lightbox__nav lightbox__nav--next" onClick={goNext} aria-label="Next image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="lightbox__dots" onClick={e => e.stopPropagation()}>
            {galleryImages.map((_, i) => (
              <button
                key={i}
                className={`lightbox__dot${i === lightboxIndex ? ' lightbox__dot--active' : ''}`}
                onClick={() => { setLightboxIndex(i); setLightbox(galleryImages[i]); }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
