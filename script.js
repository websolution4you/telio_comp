document.addEventListener('DOMContentLoaded', () => {
    // Zabránenie prehliadaču pamätať si pozíciu pri refreshi, aby sa logike "nerozbili" sekcie
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const sectionElements = Array.from(document.querySelectorAll('.section'));
    const navLinks = document.querySelectorAll('.side-nav a');
    const globalOverlay = document.getElementById('global-overlay');
    const hamburger = document.querySelector('.hamburger');
    let currentSectionIndex = 0;
    let isScrolling = false;

    // Hlavná funkcia na presun medzi sekciami
    function goToSection(index) {
        if (index < 0 || index >= sectionElements.length) return;
        if (isScrolling && index !== currentSectionIndex) return;

        isScrolling = true;
        currentSectionIndex = index;

        // Fyzický posun okna na novú sekciu
        sectionElements[currentSectionIndex].scrollIntoView({
            behavior: 'smooth'
        });

        // Ovládanie "živého" animovaného pozadia (iba Home je zmenšený)
        if (currentSectionIndex === 0) {
            globalOverlay.classList.remove('fullscreen');
        } else {
            globalOverlay.classList.add('fullscreen');
        }

        // Prepnutie zvýraznenia odkazu v pravom menu
        navLinks.forEach(link => link.classList.remove('active'));
        const activeId = sectionElements[currentSectionIndex].getAttribute('id');
        const activeLink = document.querySelector(`.side-nav a[href="#${activeId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Zámok (debounce), ktorý počká na dokončenie presunu
        setTimeout(() => {
            isScrolling = false;
        }, 800); 
    }

    // 1. Kliknutia na položky pravej navigácie
    navLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Zabrániť natívnemu nekontrolovanému skoku
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            // Nájsť poradové číslo sekcie
            const targetIndex = sectionElements.findIndex(sec => `#${sec.id}` === targetId);
            if (targetIndex !== -1) {
                goToSection(targetIndex);
                
                // Ak je otvorené responzívne menu, po kliku ho zavrieme
                if (window.innerWidth <= 900) {
                    navLinks[0].closest('.side-nav').classList.remove('open');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Otváranie a zatváranie hamburger menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks[0].closest('.side-nav').classList.toggle('open');
        });
    }

    // 2. Skrolovanie kolieskom myši
    window.addEventListener('wheel', (e) => {
        e.preventDefault(); // Zamedzenie klasickému rolovaniu obrazovky
        
        if (isScrolling) return;

        if (e.deltaY > 0) {
            // Myšou dole -> ďalšia sekcia
            goToSection(currentSectionIndex + 1);
        } else {
            // Myšou hore -> predošlá sekcia
            goToSection(currentSectionIndex - 1);
        }
    }, { passive: false });

    // 3. Demo logika pre šípky v portfóliu (animácia mriežky)
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    const pGrid = document.querySelector('.portfolio-grid');
    
    if(prevBtn && nextBtn && pGrid) {
        prevBtn.addEventListener('click', () => {
            // Posunie horizontálne doľava o šírku jednej karty + gap (~330px)
            pGrid.scrollBy({ left: -330, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            // Posunie horizontálne doprava
            pGrid.scrollBy({ left: 330, behavior: 'smooth' });
        });
    }
});
