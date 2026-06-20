'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from './data/projects';

export default function HomePage() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const isScrollingRef = useRef(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const sections = [
    { id: 'home', title: 'HOME' },
    { id: 'portfolio', title: 'PORTFOLIO' },
    { id: 'about', title: 'ABOUT' },
    { id: 'team', title: 'TEAM' },
    { id: 'services', title: 'SERVICES' },
    { id: 'contact', title: 'CONTACT' },
  ];

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Check if returning from portfolio detail page
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const sectionIndex = sections.findIndex(s => s.id === hash);
      if (sectionIndex !== -1) {
        setCurrentSectionIndex(sectionIndex);
        // Instant jump without smooth scroll
        setTimeout(() => {
          sectionRefs.current[sectionIndex]?.scrollIntoView({
            behavior: 'auto',
          });
        }, 50);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrollingRef.current) return;

      if (e.deltaY > 0) {
        goToSection(currentSectionIndex + 1);
      } else {
        goToSection(currentSectionIndex - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSectionIndex]);

  const isFirstMount = useRef(true);

  // Scroll back to top of Portfolio when switching pages
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    const portfolioSection = sectionRefs.current[1];
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [currentPage]);

  // Adjust items per page on window resize (client-side only)
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 900 ? 3 : 6);
    };
    
    // Initial run
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToSection = (index: number) => {
    if (index < 0 || index >= sections.length) return;
    if (isScrollingRef.current && index !== currentSectionIndex) return;

    isScrollingRef.current = true;
    setIsScrolling(true);
    setCurrentSectionIndex(index);

    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
    });

    setIsHamburgerActive(false);

    setTimeout(() => {
      setIsScrolling(false);
      isScrollingRef.current = false;
    }, 1000);
  };


  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const paginatedProjects = projects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Clamp current page if it becomes out of bounds due to resize
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  return (
    <>
      {/* Globálny animovaný overlay */}
      <div
        id="global-overlay"
        className={`fixed-overlay ${currentSectionIndex > 0 ? 'fullscreen' : ''}`}
      ></div>

      {/* Logo & Mobile Menu */}
      <header className="header">
        <div className="logo">TelioLabs</div>
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
            <h1>Profesionálne weby a systémy na mieru</h1>
            <p>Nevytvárame len jednoduché stránky zo šablóny. Navrhujeme funkčné riešenia,<br />ktoré pomáhajú firmám získavať zákazníkov a automatizovať procesy.</p>

            <div className="cta-buttons">
              <a href="#services" className="btn btn-primary" onClick={(e) => { e.preventDefault(); goToSection(4); }}>Naše služby</a>
              <a href="#portfolio" className="btn btn-outline" onClick={(e) => { e.preventDefault(); goToSection(1); }}>Ukážky prác <i className="fa-solid fa-chevron-right"></i></a>
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

        {/* Portfolio Sekcia */}
        <section
          id="portfolio"
          className="section portfolio-section"
          ref={(el) => { sectionRefs.current[1] = el; }}
        >
          <div className="container">
            <div className="section-header">
              <h2>Portfolio</h2>
              <div className="divider"></div>
            </div>

            <div className="portfolio-grid">
              {paginatedProjects.map((project) => (
                <Link href={`/portfolio/${project.slug}`} key={project.slug} className="portfolio-card-link">
                  <div className="portfolio-card">
                    <div className="img-wrapper">
                      <img src={project.thumbnail} alt={project.title} />
                    </div>
                    <div className="card-info">
                      <h3>{project.title}</h3>
                      <span className="project-category">{project.category}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  className="page-btn"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`page-number ${currentPage === page ? 'active' : ''}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
                <button
                  className="page-btn"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* About Sekcia */}
        <section
          id="about"
          className="section about-section"
          ref={(el) => { sectionRefs.current[2] = el; }}
        >
          <div className="container">
            <div className="section-header">
              <h2>Ako pracujeme</h2>
              <div className="divider"></div>
              <p>Každý projekt navrhujeme individuálne podľa potrieb firmy.</p>
            </div>
            <div className="about-content" style={{ display: 'flex', gap: '40px', textAlign: 'left', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.8', color: 'var(--text-color)', fontSize: '14px' }}>
              <div>
                <p><strong>1. Analýza a stratégia</strong><br />Najskôr si prejdeme, čo firma potrebuje, aké procesy chce zjednodušiť a aké funkcie má web plniť. Potom navrhneme nákladovo efektívne, no pritom inovatívne riešenie, ktoré prinesie maximálne výsledky.</p>
                <br />
                <p><strong>2. Návrh a realizácia</strong><br />Vytvoríme vám profesionálnu webstránku rýchlo, jednoducho a za rozumnú cenu. Vždy zabezpečíme kompletné nastavenie témy, hostingu, domény a základnej SEO optimalizácie, aby vás zákazníci zaručene našli na Googli.</p>
              </div>
              <div>
                <p><strong>3. Vzdelávanie a automatizácia</strong><br />Naše weby môžu pre vašu firmu získavať nových zákazníkov, zjednodušiť komunikáciu a automatizovať objednávky či rezervácie. Po dokončení vás vždy kvalitne zaškolíme (aj cez videohovor), aby ste si stránku a jej editovateľné sekcie vedeli jednoducho spravovať aj sami.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Sekcia */}
        <section
          id="team"
          className="section team-section"
          ref={(el) => { sectionRefs.current[3] = el; }}
        >
          <div className="container">
            <div className="section-header">
              <h2>Team</h2>
              <div className="divider"></div>
              <p>Navrhujeme riešenia pre rôzne odvetvia. Každý náš model sa dá upraviť na mieru<br />podľa špecifických potrieb vašej firmy a vašich zákazníkov.</p>
            </div>

            <div className="team-grid">
              {[1, 2, 3, 4].map((member) => (
                <div className="team-card" key={member}>
                  <div className="img-wrapper">
                    <img src="/assets/team.png" alt="Ukážka odvetvia" />
                  </div>
                  <div className="card-info">
                    <h3>{member === 1 ? 'TAXI SLUŽBA' : member === 2 ? 'AUTOSERVIS' : member === 3 ? 'UBYTOVANIE' : 'REŠTAURÁCIE'}</h3>
                    <span>{member === 1 ? 'AI hlasový dispečer' : member === 2 ? 'Online rezervačný systém' : member === 3 ? 'Rezervačný & riadiaci panel' : 'Objednávky stolov cez web'}</span>
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
          ref={(el) => { sectionRefs.current[4] = el; }}
        >
          <div className="container">
            <div className="section-header">
              <h2>Čo vieme vytvoriť</h2>
              <div className="divider"></div>
              <p>Pripravíme celý arzenál inteligentných digitálnych služieb.<br />Tak, aby váš biznis hladko a neustále bežal aj bez vašej prítomnosti.</p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <i className="fa-solid fa-laptop-code"></i>
                <h3>MODERNÉ WEBY</h3>
                <p>Profesionálna web stránka prispôsobená pre každé zariadenie. Ošetrená SEO optimalizácia, prepojenie s doménou a hostingom.</p>
              </div>
              <div className="service-card">
                <i className="fa-solid fa-server"></i>
                <h3>APPKY NA MIERU</h3>
                <p>Rezervačné a objednávkové systémy, zákaznícke portály či interné firemné dashboardy plné praktických dát a štatistík.</p>
              </div>
              <div className="service-card">
                <i className="fa-solid fa-robot"></i>
                <h3>AI AUTOMATIZÁCIA</h3>
                <p>Autonómny hlasový AI dispečer, ktorý dokáže vybaviť hovor, alebo špecializovaný chatbot pre inteligentnú online komunikáciu so zákazníkom.</p>
              </div>
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
              <h2>Kontakt&nbsp;od&nbsp;150&nbsp;€</h2>
              <div className="divider"></div>
              <p>Máme za sebou weby pre reštaurácie, kaviarne, autodetailing a e-commerce projekty.<br />Napíšte nám správu a dohodneme sa rýchlo a bez zbytočností.</p>
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
