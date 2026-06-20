export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  year: string;
  thumbnail: string;
  mobileThumbnail?: string;
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
    mobileThumbnail: '/assets/portfolio/telio/mobile_thumbnail.png',
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
    slug: 'jdm-lifts',
    title: 'JDM Lifts',
    shortDescription: 'Prezentácia spoločnosti pre profesionálnu montáž a elektrooživenie výťahových systémov',
    category: 'Web Design',
    year: '2024',
    thumbnail: '/assets/portfolio/jdm-lifts/thumbnail.png',
    mobileThumbnail: '/assets/portfolio/jdm-lifts/mobile_thumbnail.png',
    liveUrl: 'https://jdmlifts-b1238.web.app/',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Firebase Hosting'],

    heroImage: '/assets/portfolio/jdm-lifts/hero.png',

    overview: `JDMlifts s.r.o. sa špecializuje na profesionálnu montáž, mechanickú inštaláciu a elektrické oživenie výťahov v spolupráci s poprednými partnermi v obore ako napríklad Schindler v Holandsku. Webová prezentácia kladie dôraz na bezpečnosť, kvalitu práce a certifikované procesy.`,

    challenge: `Vytvoriť reprezentatívny firemný web, ktorý by prehľadne predstavil zameranie firmy, jej služby a partnerstvá pre európsky trh s dôrazom na prísne bezpečnostné predpisy.`,

    solution: `Navrhli sme moderný jednostránkový web v korporátnych farbách s detailným rozpisom služieb, sekciou s číselnými ukazovateľmi úspešnosti a jednoduchým kontaktným formulárom.`,

    results: [
      'Profesionálna vizitka spoločnosti pre medzinárodných partnerov',
      'Prehľadne rozdelené sekcie služieb (mechanická časť, elektrická časť)',
      'Prezentácia kľúčových hodnôt a dôrazu na bezpečnosť pri práci',
      'Kompletne responzívny web optimalizovaný pre mobilné zobrazenie'
    ],

    features: [
      '📱 Plná responzivita - Perfektný vzhľad na počítačoch aj mobiloch',
      '🏗️ Detailné služby - Rozpis technických fáz montáže výťahov',
      '📊 Štatistiky úspešnosti - Prehľadné zobrazenie kľúčových firemných ukazovateľov',
      '✉️ Rýchly kontakt - Jednoduchý formulár a kontaktné údaje pre záujemcov'
    ],

    images: [
      '/assets/portfolio/jdm-lifts/hero.png',
      '/assets/portfolio/jdm-lifts/features.png'
    ]
  },

  {
    slug: 'detskezlavy',
    title: 'DetskéZľavy.sk',
    shortDescription: 'Agregátor zliav a výhodných ponúk pre deti a rodičov',
    category: 'Web Design',
    year: '2024',
    thumbnail: '/assets/portfolio/detskezlavy/thumbnail.png',
    mobileThumbnail: '/assets/portfolio/detskezlavy/mobile_thumbnail.png',
    liveUrl: 'https://detskezlavy.sk/',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Select2', 'PHP'],

    heroImage: '/assets/portfolio/detskezlavy/hero.png',

    overview: `DetskéZľavy.sk is a Slovak discount aggregator that specializes exclusively on offers and deals related to baby goods, toys, clothes, or family experiences. It allows users to find the best discounts in one place.`,

    challenge: `Vytvoriť prehľadný vyhľadávací a filtračný systém, ktorý umožní rodičom rýchlo vyhľadať zľavy podľa lokality, kategórie alebo výšky zľavy.`,

    solution: `Navrhli sme minimalistické a rýchle prostredie s jednoduchým rozcestníkom zliav na hlavnej stránke (do 30%, do 50%, nad 50%) a vyhľadávacou stránkou s filtrami pomocou Select2.`,

    results: [
      'Prehľadný agregátor zliav na mieru pre rodičov',
      'Jednoduché rozdelenie do kategórií podľa výšky zliav',
      'Filtrovanie ponúk na základe lokality (miest) a kategórií',
      'Plne responzívne zobrazenie optimalizované pre smartfóny'
    ],

    features: [
      '🔍 Filtrovanie a vyhľadávanie - Rýchle vyhľadanie zliav podľa kľúčových slov',
      '🏷️ Percentuálne sekcie - Rozcestník pre zľavy do 30%, do 50% a nad 50%',
      '📍 Lokálne ponuky - Možnosť filtrovania podľa miest a krajov',
      '📧 Newsletter - Registrácia na odber najnovších výhodných ponuk e-mailom'
    ],

    images: [
      '/assets/portfolio/detskezlavy/hero.png',
      '/assets/portfolio/detskezlavy/deals.png'
    ]
  },

  {
    slug: 'atelier-inak',
    title: 'Ateliér INAK',
    shortDescription: 'Kreatívny web pre umelecký ateliér zameraný na arteterapiu, zážitkové workshopy a vzdelávanie',
    category: 'Web Design',
    year: '2024',
    thumbnail: '/assets/portfolio/atelier-inak/thumbnail.png',
    mobileThumbnail: '/assets/portfolio/atelier-inak/mobile_thumbnail.png',
    liveUrl: 'https://websolution4you.github.io/AtelierInak/index.html',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'GLightbox', 'GitHub Pages'],

    heroImage: '/assets/portfolio/atelier-inak/hero.png',

    overview: `Ateliér INAK, vedený Irenou Lehotskou, je miestom pre tvorivý rozvoj a sebapoznanie. Ponúka individuálnu aj skupinovú arteterapiu, kreatívne workshopy pre deti a dospelých a metodické vzdelávanie pre učiteľov.`,

    challenge: `Vytvoriť priateľský, inšpiratívny a vizuálne pestrý web, ktorý by odrážal slobodnú tvorivú atmosféru ateliéru a zároveň prehľadne štruktúroval rôznorodé služby a workshopy.`,

    solution: `Navrhli sme teplý a umelecky ladený web s farebnou paletou na mieru, interaktívnou galériou prác účastníkov s lightboxom, prehľadnými popismi služieb a referenciami klientov.`,

    results: [
      'Útulný a inšpiratívny dizajn zodpovedajúci identite ateliéru',
      'Prehľadná filtrovateľná galéria výtvarných diel',
      'Zrozumiteľný zoznam workshopov pre deti, dospelých aj školy',
      'Sekcia s najnovšími aktualitami a chystanými podujatiami'
    ],

    features: [
      '🎨 Umelecký vzhľad - Paleta teplých farieb navodzujúca príjemnú atmosféru',
      '📸 Foto-galéria - Integrácia GLightbox pre pohodlné prezeranie diel',
      '💬 Referencie účastníkov - Recenzie a spätná väzba od rodičov a klientov',
      '📰 Aktuality - Priestor pre oznamy o plánovaných kurzoch a akciách'
    ],

    images: [
      '/assets/portfolio/atelier-inak/hero.png',
      '/assets/portfolio/atelier-inak/gallery.png'
    ]
  },

  {
    slug: 'leutschau-caffe',
    title: 'Leutschau Café',
    shortDescription: 'Webová prezentácia historickej kaviarní v srdci Levoče s online menu a galériu',
    category: 'Web Design',
    year: '2024',
    thumbnail: '/assets/portfolio/leutschau/thumbnail.png',
    mobileThumbnail: '/assets/portfolio/leutschau/mobile_thumbnail.png',
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
      'SEO optimalizácia pre lelšiu viditeľnosť v Levoči'
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
      '/assets/portfolio/leutschau/hero-main.png',
      '/assets/portfolio/leutschau/menu.png',
      '/assets/portfolio/leutschau/gallery.png',
      '/assets/portfolio/leutschau/history.png',
      '/assets/portfolio/leutschau/contact.png',
      '/assets/portfolio/leutschau/careers.png'
    ]
  },

  {
    slug: 'planeta-levoca',
    title: 'Planéta Levoča',
    shortDescription: 'Reštauračný web s jedlálnym lístkom upraviteľným majiteľom bez potreby programátora',
    category: 'Web Design',
    year: '2024',
    thumbnail: '/assets/portfolio/planeta-levoca/thumbnail.png',
    mobileThumbnail: '/assets/portfolio/planeta-levoca/mobile_thumbnail.png',
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
      '/assets/portfolio/planeta-levoca/hero.png',
      '/assets/portfolio/planeta-levoca/menu.png',
      '/assets/portfolio/planeta-levoca/admin-panel.png'
    ]
  },

  {
    slug: 'milansimon',
    title: 'Milan Šimon Photography',
    shortDescription: 'Profesionálne fotografické portfólio zamerané na portréty, šport a reportáže',
    category: 'Photography Portfolio',
    year: '2024',
    thumbnail: '/assets/portfolio/milansimon/thumbnail.png',
    mobileThumbnail: '/assets/portfolio/milansimon/mobile_thumbnail.png',
    liveUrl: 'https://www.milansimon.com/',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    heroImage: '/assets/portfolio/milansimon/thumbnail.png',
    overview: 'Milan Šimon sa venuje umeleckej a športovej fotografii. Prezentácia slúži ako prehľadné portfólio rozdelené podľa kategórií prác.',
    features: [
      '📸 Portfólio rozdelené do kategórií (Portréty, Šport, Eventy)',
      '✉️ Kontaktný formulár a informácie',
      '⚡ Plne responzívny dizajn pre mobily a počítače'
    ],
    images: []
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
    overview: 'Čoskoro pridáme ďalšie projekty do nášho portfólio.',
    features: [],
    images: []
  }
];
