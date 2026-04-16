export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  year: string;
  thumbnail: string;
  liveUrl?: string;
  technologies: string[];

  // Detail page content
  heroImage: string;
  overview: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  features: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    slug: 'telio',
    title: 'Telio AI Assistant',
    shortDescription: 'Komplexný AI hlasový asistent a dashboard systém pre automatizáciu prevádzky pizzerií a taxi služieb',
    category: 'AI Automation & Dashboard',
    year: '2024',
    thumbnail: '/assets/portfolio/telio/thumbnail.png',
    liveUrl: 'https://telio.sk',
    technologies: ['Next.js', 'React', 'AI Voice Assistant', 'Real-time Dashboard', 'WebSocket', 'Analytics'],

    heroImage: '/assets/portfolio/telio/hero.png',

    overview: `Telio je inovatívny AI hlasový asistent, ktorý funguje 24/7 a dokáže spracovať hovory, rezervácie a objednávky úplne autonómne. Systém je doplnený o sofistikované dashboardy pre real-time sledovanie prevádzky.`,

    challenge: `Klienti potrebovali riešenie, ktoré eliminuje nutnosť mať dispečera 24/7. Hlavnou výzvou bolo vytvoriť AI systém schopný prirodzene komunikovať v slovenčine, spracovať hovory pod 2 sekundy a zároveň poskytovať majiteľom detailný prehľad o prevádzke.`,

    solution: `Navrhli sme multi-odvetvový systém kombinujúci AI hlasovú technológiu s real-time dashboardmi. Systém dokáže prijať hovor, pochopiť požiadavku zákazníka a vytvorí objednávku alebo rezerváciu úplne automaticky.`,

    results: [
      'Priemerný čas odpovede pod 2 sekundy',
      '100% zodpovedaných hovorov - 24/7 dostupnosť',
      'Zníženie nákladov na dispečing o 80%',
      'Real-time sledovanie všetkých objednávok a jázd',
      'Inteligentná analýza dopytu pomocou heatmáp'
    ],

    features: [
      '🎙️ AI Hlasový Asistent - Prirodzená konverzácia v slovenčine',
      '📊 Real-time Dashboard - Live sledovanie jázd a objednávok',
      '🤖 Chatbot s Knowledge Base - Inteligentné odpovede na otázky',
      '📈 Analytics - Detailné štatistiky a kategorizácia otázok',
      '🗺️ Heatmapy - Vizualizácia rozvozov a popularity oblastí',
      '🍕 Editovateľné Menu - Klient si upravuje cenník bez programátora',
      '🚕 Taxi Dispečing - Live GPS sledovanie vozidiel',
      '💳 Automatické Objednávky - Od hovoru k vybaveniu za sekundy'
    ],

    images: [
      '/assets/portfolio/telio/hero.png',                 // 0 - Hero homepage (obrázok 17)
      '/assets/portfolio/telio/taxi-dispatch-clean.png',  // 1 - Taxi dispatch clean (obrázok 20)
      '/assets/portfolio/telio/pizza-orders.png',         // 2 - Pizza orders
      '/assets/portfolio/telio/heatmaps.png',             // 3 - Heatmaps
      '/assets/portfolio/telio/menu-editor.png',          // 4 - Menu editor
      '/assets/portfolio/telio/chatbot-analytics.png'     // 5 - Chatbot analytics (obrázok 18)
    ]
  },

  {
    slug: 'leutschau-caffe',
    title: 'Leutschau Café',
    shortDescription: 'Webová prezentácia historickej kaviarní v srdci Levoče s online menu a galériu',
    category: 'Web Design',
    year: '2024',
    thumbnail: '/assets/portfolio/leutschau/thumbnail.png',
    liveUrl: 'https://websolution4you.github.io/LeutschauCaffe/',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Bootstrap'],

    heroImage: '/assets/portfolio/leutschau/hero-main.png',

    overview: `Leutschau Café je historická kaviareň v Levoči, ktorá sídli v mešťianskom dome z 15. storočia. Vytvorili sme pre nich web, ktorý kombinuje historický charakter s moderným dizajnom a poskytuje návštevníkom všetky potrebné informácie.`,

    challenge: `Kaviareň potrebovala webovú stránku, ktorá by odzrkadľovala jej jedinečný historický charakter a zároveň poskytla moderné funkcie ako online menu, galériu a kontaktný formulár. Dôležité bolo zachovať autentický pocit tradície pri zachovaní prehľadnosti a použiteľnosti.`,

    solution: `Navrhli sme elegantný responzívny web s čistým dizajnom, ktorý zdôrazňuje históriu kaviarene. Implementovali sme jednoduchú navigáciu, filtrovateľné online menu s cenami, foto galériu a kontaktný formulár. Celý web je optimalizovaný pre všetky zariadenia.`,

    results: [
      'Profesionálna webová prezentácia historickej kaviarní',
      'Online menu s kategóriami (Káva, Nealko, Pivo, Alkohol)',
      'Galéria s autentickými fotografiami priestorov',
      'Responzívny dizajn fungujúci na všetkých zariadeniach',
      'SEO optimalizácia pre lepšiu viditeľnosť v Levoči'
    ],

    features: [
      '📱 Responzívny Design - Dokonale funguje na mobile, tablete aj desktope',
      '☕ Online Menu - Prehľadný nápojový lístok s cenami a kategóriami',
      '📸 Galéria - Fotografie interiéru a historických detailov',
      '📝 Kontaktný Formulár - Jednoduchá komunikácia s majiteľmi',
      '🏛️ História Kaviarene - Timeline od roku 2012 po súčasnosť',
      '💼 Sekcia Kariéry - Stránka pre nábor nových zamestnancov',
      '🎨 Historický Dizajn - Autentický vzhľad zachovávajúci tradíciu',
      '⚡ Rýchle Načítanie - Optimalizované obrázky a kód'
    ],

    images: [
      '/assets/portfolio/leutschau/hero-main.png', // 0 - Hero s atmosférou
      '/assets/portfolio/leutschau/menu.png',      // 1 - Menu s cenami
      '/assets/portfolio/leutschau/gallery.png',   // 2 - Galéria
      '/assets/portfolio/leutschau/history.png',   // 3 - História timeline
      '/assets/portfolio/leutschau/contact.png',   // 4 - Kontakt
      '/assets/portfolio/leutschau/careers.png'    // 5 - Kariéra
    ]
  },

  {
    slug: 'planeta-levoca',
    title: 'Planéta Levoča',
    shortDescription: 'Reštauračný web s jedlálnym lístkom upraviteľným majiteľom bez potreby programátora',
    category: 'Web Design',
    year: '2024',
    thumbnail: '/assets/portfolio/planeta-levoca/thumbnail.png',
    liveUrl: 'https://websolution4you.github.io/PlanetaLevoca/',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Google Sheets Integration', 'Admin Panel'],

    heroImage: '/assets/portfolio/planeta-levoca/hero.png',

    overview: `Planéta Levoča je príjemná reštaurácia v centre Levoče, ktorá ponúka slovenskú a medzinárodnú kuchyňu. Vytvorili sme pre nich moderný web s unikátnou funkciou - majiteľ si sám upravuje jedálny lístok bez potreby kontaktovať programátora.`,

    challenge: `Reštaurácia potrebovala web s editorom menu, ktorý by mohla upravovať bez technických vedomostí. Klasické riešenie by si vyžadovalo pravidelné aktualizácie a kontakt s vývojárom. Bolo treba nájsť jedno jednoduché a efektívne riešenie.`,

    solution: `Integrácia s Google Sheets umožňuje majiteľovi upravovať menu priamo v tabuľke, a zmeny sa automaticky zobrazia na webe. Zároveň existuje aj ruční admin panel ako záloha. Všetko je jednoduché a intuitívne.`,

    results: [
      'Majiteľ si sám upravuje menu bez technickej pomoci',
      'Denné menu sa synkuje automaticky z Google Sheets',
      'Jednoduchý admin panel s ruštinou spätne ako záloha',
      'Profesionálny web s galériou a info o reštaurácii',
      'Plne responzívny design pre všetky zariadenia'
    ],

    features: [
      '🍽️ Editovateľné Menu - Majiteľ si upravuje bez programátora',
      '📊 Google Sheets Integrácia - Automatická synchronizácia',
      '📅 Denné Menu - Týždenný program s cenami',
      '⚙️ Admin Panel - Jednoduchá editácia v prípade potreby',
      '📸 Galéria - Fotografie jedál a reštaurácie',
      '📞 Kontakt a Info - Rezervácie, otváracie hodiny, catering',
      '🎨 Moderný Dizajn - Zlatá a oranžová farebnosť',
      '📱 Responzívny Web - Dokonalý na mobile aj desktope'
    ],

    images: [
      '/assets/portfolio/planeta-levoca/hero.png',        // 0 - Hero s zámkom
      '/assets/portfolio/planeta-levoca/menu.png',        // 1 - Denné menu
      '/assets/portfolio/planeta-levoca/admin-panel.png'  // 2 - Admin panel na editáciu
    ]
  },

  {
    slug: 'coming-soon',
    title: 'Ďalšie projekty',
    shortDescription: 'Pripravujeme viac ukážok našej práce',
    category: 'Coming Soon',
    year: '2024',
    thumbnail: '/assets/portfolio.png',
    technologies: [],
    heroImage: '/assets/portfolio.png',
    overview: 'Čoskoro pridáme ďalšie projekty do nášho portfólia.',
    features: [],
    images: []
  }
];
