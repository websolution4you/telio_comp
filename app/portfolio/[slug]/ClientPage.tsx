'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { projects, Project } from '@/app/data/projects';
import './portfolio-detail.css';
import { use, useEffect, useState } from 'react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function PortfolioDetailPage({ params }: PageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  const [isVisible, setIsVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [lightboxOpacity, setLightboxOpacity] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo(0, 0);

    // Trigger fade-in animation
    setTimeout(() => {
      setIsVisible(true);
    }, 50);
  }, []);

  const changeImage = (newIndex: number) => {
    setLightboxOpacity(0);
    setTimeout(() => {
      setActiveImageIndex(newIndex);
      setLightboxOpacity(1);
    }, 150);
  };

  const handleNext = () => {
    if (activeImageIndex === null || !project) return;
    const nextIdx = (activeImageIndex + 1) % project.images.length;
    changeImage(nextIdx);
  };

  const handlePrev = () => {
    if (activeImageIndex === null || !project) return;
    const prevIdx = (activeImageIndex - 1 + project.images.length) % project.images.length;
    changeImage(prevIdx);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setActiveImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, project]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!project) {
    return (
      <div className="portfolio-detail-page">
        <div className="loading">Projekt nenájdený...</div>
      </div>
    );
  }

  return (
    <div className={`portfolio-detail-page ${isVisible ? 'fade-in' : ''}`}>
      {/* Header s logom a back buttonom */}
      <header className="detail-header">
        <div className="logo" onClick={() => router.push('/')}>
          TelioLabs
        </div>
        <button className="back-btn" onClick={() => router.push('/#portfolio')}>
          <i className="fa-solid fa-arrow-left"></i> Späť na Portfolio
        </button>
      </header>

      {/* Hero sekcia */}
      <section className="detail-hero">
        <div className="detail-hero-content">
          <div className="detail-category">{project.category}</div>
          <h1>{project.title}</h1>
          <p className="detail-short-desc">{project.shortDescription}</p>

          {project.liveUrl && (
            <div className="detail-meta">
              <div className="meta-item">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-link">
                  Navštíviť web <i className="fa-solid fa-external-link"></i>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Hlavný obsah */}
      <section className="detail-content">
        <div className="content-container">
          {/* Overview */}
          <div className="content-section">
            <h2>O projekte</h2>
            <p>{project.overview}</p>
          </div>

          {/* Image 1 - after Overview */}
          {project.images[0] && (
            <div className="content-image" onClick={() => setActiveImageIndex(0)} style={{ cursor: 'zoom-in' }}>
              <img src={project.images[0]} alt={`${project.title} screenshot 1`} />
            </div>
          )}

          {/* Challenge */}
          {project.challenge && (
            <div className="content-section">
              <h2>Výzva</h2>
              <p>{project.challenge}</p>
            </div>
          )}

          {/* Image 2 - after Challenge */}
          {project.images[1] && (
            <div className="content-image" onClick={() => setActiveImageIndex(1)} style={{ cursor: 'zoom-in' }}>
              <img src={project.images[1]} alt={`${project.title} screenshot 2`} />
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div className="content-section">
              <h2>Riešenie</h2>
              <p>{project.solution}</p>
            </div>
          )}

          {/* Image 3 - after Solution */}
          {project.images[2] && (
            <div className="content-image" onClick={() => setActiveImageIndex(2)} style={{ cursor: 'zoom-in' }}>
              <img src={project.images[2]} alt={`${project.title} screenshot 3`} />
            </div>
          )}

          {/* Features */}
          {project.features.length > 0 && (
            <div className="content-section">
              <h2>Hlavné funkcie</h2>
              <div className="features-grid">
                {project.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div className="content-section">
              <h2>Výsledky</h2>
              <ul className="results-list">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Remaining Images Gallery */}
          {project.images.length > 3 && (
            <div className="content-section">
              <h2>Ďalšie ukážky</h2>
              <div className="image-gallery">
                {project.images.slice(3).map((image, index) => (
                  <div key={index + 3} className="gallery-item" onClick={() => setActiveImageIndex(index + 3)} style={{ cursor: 'zoom-in' }}>
                    <img src={image} alt={`${project.title} screenshot ${index + 4}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="detail-cta">
        <div className="cta-content">
          <h2>Zaujal vás tento projekt?</h2>
          <p>Vytvoríme aj pre vás podobné riešenie na mieru</p>
          <button className="btn btn-primary" onClick={() => router.push('/#contact')}>
            Kontaktujte nás
          </button>
        </div>
      </section>

      {/* Lightbox Galéria pre Detail Projektu */}
      <div 
        className={`lightbox-backdrop ${activeImageIndex !== null ? 'open' : ''}`}
        onClick={() => setActiveImageIndex(null)}
      >
        {activeImageIndex !== null && (
          <div 
            className="lightbox-content" 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button className="lightbox-close" onClick={() => setActiveImageIndex(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>

            {project.images.length > 1 && (
              <button className="lightbox-nav lightbox-prev" onClick={handlePrev}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            )}

            <div className="lightbox-image-wrapper">
              <img 
                src={project.images[activeImageIndex]} 
                alt={`${project.title} screenshot zoom`} 
                style={{ opacity: lightboxOpacity }}
              />
            </div>

            {project.images.length > 1 && (
              <button className="lightbox-nav lightbox-next" onClick={handleNext}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            )}

            <div className="lightbox-caption">
              <h3>{project.title}</h3>
              <p>Náhľad {activeImageIndex + 1} / {project.images.length}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
