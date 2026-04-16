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

  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo(0, 0);

    // Trigger fade-in animation
    setTimeout(() => {
      setIsVisible(true);
    }, 50);
  }, []);

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
          Telio comp
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

          <div className="detail-meta">
            <div className="meta-item">
              <span className="meta-label">Rok:</span>
              <span className="meta-value">{project.year}</span>
            </div>
            {project.liveUrl && (
              <div className="meta-item">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-link">
                  Navštíviť web <i className="fa-solid fa-external-link"></i>
                </a>
              </div>
            )}
          </div>

          <div className="detail-technologies">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
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
            <div className="content-image">
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
            <div className="content-image">
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
            <div className="content-image">
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
                  <div key={index + 3} className="gallery-item">
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
    </div>
  );
}
