'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const portfolioGridRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'home', title: 'HOME' },
    { id: 'about', title: 'ABOUT' },
    { id: 'team', title: 'TEAM' },
    { id: 'services', title: 'SERVICES' },
    { id: 'portfolio', title: 'PORTFOLIO' },
    { id: 'contact', title: 'CONTACT' },
  ];

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      if (e.deltaY > 0) {
        goToSection(currentSectionIndex + 1);
      } else {
        goToSection(currentSectionIndex - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSectionIndex, isScrolling]);

  const goToSection = (index: number) => {
    if (index < 0 || index >= sections.length) return;
    if (isScrolling && index !== currentSectionIndex) return;

    setIsScrolling(true);
    setCurrentSectionIndex(index);

    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
    });

    setIsHamburgerActive(false);

    setTimeout(() => {
      setIsScrolling(false);
    }, 800);
  };

  const scrollPortfolio = (direction: 'left' | 'right') => {
    if (portfolioGridRef.current) {
      const scrollAmount = direction === 'left' ? -330 : 330;
      portfolioGridRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Globálny animovaný overlay */}
      <div 
        id="global-overlay" 
        className={`fixed-overlay ${currentSectionIndex > 0 ? 'fullscreen' : ''}`}
      ></div>

      {/* Logo & Mobile Menu */}
      <header className="header">
        <div className="logo">Telio comp</div>
        <div 
          className={`hamburger ${isHamburgerActive ? 'active' : ''}`}
          onClick={() => setIsHamburgerActive(!isHamburgerActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Navigácia (Pravý panel) */}
      <nav className={`side-nav ${isHamburgerActive ? 'open' : ''}`}>
        <ul>
          {sections.map((section, index) => (
            <li key={section.id}>
              <a 
                href={`#${section.id}`} 
                className={currentSectionIndex === index ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  goToSection(index);
                }}
              >
                {section.title} <span className="line"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="main-content">
        {/* Hero Sekcia */}
        <section 
          id="home" 
          className="section hero-section"
          ref={(el) => { sectionRefs.current[0] = el; }}
        >
          <div className="container hero-content">
            <h1>Branding & creative digital solution</h1>
            <p>Our website is under construction. We'll be here soon with our new awesome site,<br />subscribe to be notified.</p>
            
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary">Subscribe</a>
              <a href="#" className="btn btn-outline">Load More <i className="fa-solid fa-chevron-right"></i></a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="copyright">
              &copy; 2026 Tanes. - Všetky práva vyhradené
            </div>
            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
              <a href="#"><i className="fa-solid fa-globe"></i></a>
            </div>
          </div>
        </section>

        {/* About Sekcia */}
        <section 
          id="about" 
          className="section about-section"
          ref={(el) => { sectionRefs.current[1] = el; }}
        >
          <div className="container">
            <div className="section-header">
              <h2>About Us</h2>
              <div className="divider"></div>
              <p>Everything you need to know about our Company.</p>
            </div>
            <div className="about-content" style={{ display: 'flex', gap: '40px', textAlign: 'left', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.8', color: 'var(--text-color)', fontSize: '14px' }}>
              <div>
                <p>Aliquam erat volutpat. Vivamus feugiat risus at accumsan tincidunt. Cras maximus sapien eget elit ullamcorper varius. Vestibulum ligula magna, pulvinar finibus condimentum a, dictum eu turpis. Sed ipsum dui, auctor quis enim eu, pretium tempus felis. Quisque quis erat eget quam viverra varius. Vestibulum leo dolor, aliquam in tortor nec, dignissim pretium nunc. Quisque laoreet iaculis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse lectus neque, posuere ullamcorper justo sed, consectetur dictum magna. Mauris ullamcorper in quam eget fermentum. Nam vitae mi metus. Aliquam et imperdiet arcu.</p>
              </div>
              <div>
                <p>Aliquam erat volutpat. Vivamus feugiat risus at accumsan tincidunt. Cras maximus sapien eget elit ullamcorper varius. Vestibulum ligula magna, pulvinar finibus condimentum a, dictum eu turpis. Sed ipsum dui, auctor quis enim eu, pretium tempus felis. Quisque quis erat eget quam viverra varius. Vestibulum leo dolor, aliquam in tortor nec, dignissim pretium nunc. Quisque laoreet iaculis egestas.</p>
                <br />
                <p>Praesent vehicula dictum ipsum, ac vehicula ex scelerisque vel. Maecenas ultrices vehicula magna, a pretium quam maximus nec.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Sekcia */}
        <section 
          id="team" 
          className="section team-section"
          ref={(el) => { sectionRefs.current[2] = el; }}
        >
          <div className="container">
            <div className="section-header">
              <h2>Meet the Team</h2>
              <div className="divider"></div>
              <p>Aliquam erat volutpat. Vivamus feugiat risus at accumsan tincidunt. Cras maximus sapien eget elit ullamcorper<br />varius. Vestibulum ligula magna, pulvinar finibus condimentum.</p>
            </div>

            <div className="team-grid">
              {[1, 2, 3, 4].map((member) => (
                <div className="team-card" key={member}>
                  <div className="img-wrapper">
                    <img src="/assets/team.png" alt="Team Member" />
                  </div>
                  <div className="card-info">
                    <h3>{member === 1 ? 'EMILY ROSE' : member === 2 ? 'JESSICA CARROLL' : member === 3 ? 'DAVID BRYANT' : 'AMANDA TANES'}</h3>
                    <span>{member === 1 ? 'CREATIVE DIRECTOR' : member === 3 ? 'FOUNDER & CEO' : 'PARTNER & COO'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Sekcia */}
        <section 
          id="services" 
          className="section services-section"
          ref={(el) => { sectionRefs.current[3] = el; }}
        >
          <div className="container">
            <div className="section-header">
              <h2>Our Services</h2>
              <div className="divider"></div>
              <p>We provide a wide range of creative and digital solutions.<br />From corporate branding to full-stack web development.</p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <i className="fa-solid fa-pen-nib"></i>
                <h3>BRANDING</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor sit amet magna.</p>
              </div>
              <div className="service-card">
                <i className="fa-solid fa-laptop-code"></i>
                <h3>WEB DESIGN</h3>
                <p>Curabitur pulvinar diam id commodo. Maecenas sed dui posuere, eleifend.</p>
              </div>
              <div className="service-card">
                <i className="fa-solid fa-bullhorn"></i>
                <h3>MARKETING</h3>
                <p>Aenean vulputate ex ut ipsum suscipit tempus suspendisse imperdiet eu est et.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Sekcia */}
        <section 
          id="portfolio" 
          className="section portfolio-section"
          ref={(el) => { sectionRefs.current[4] = el; }}
        >
          <div className="container">
            <div className="section-header">
              <h2>Portfolio</h2>
              <div className="divider"></div>
              <p>Sed magna elit, blandit sed eros id, auctor ullamcorper ex. Pellentesque aliquet interdum sodales. Praesent<br />lobortis nisi vitae pharetra pharetra. Aliquam vitae elementum ipsum.</p>
            </div>

            <div className="carousel-wrapper">
              <button className="nav-btn prev" onClick={() => scrollPortfolio('left')}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              
              <div className="portfolio-grid" ref={portfolioGridRef}>
                {['LOVE', 'BEAUTIFUL GIRL', 'FUTURE CITY', 'GOLDEN GATE', 'NEON NIGHTS', 'OCEAN VIEW'].map((title) => (
                  <div className="portfolio-card" key={title}>
                    <div className="img-wrapper">
                      <img src="/assets/portfolio.png" alt={title} />
                    </div>
                    <div className="card-info">
                      <h3>{title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="nav-btn next" onClick={() => scrollPortfolio('right')}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            
            <div className="carousel-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </section>

        {/* Contact Sekcia */}
        <section 
          id="contact" 
          className="section contact-section"
          ref={(el) => { sectionRefs.current[5] = el; }}
        >
          <div className="container">
            <div className="section-header">
              <h2>Get In Touch</h2>
              <div className="divider"></div>
              <p>Interested in working together? Or just want to say hi?<br />Don't hesitate to reach out to us.</p>
            </div>
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input type="text" placeholder="Your Name" style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} />
                <input type="email" placeholder="Your Email" style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} />
                <textarea placeholder="Your Message" rows={5} style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', resize: 'none' }}></textarea>
                <button type="button" className="btn btn-outline" style={{ alignSelf: 'center', marginTop: '15px', cursor: 'pointer' }}>Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
