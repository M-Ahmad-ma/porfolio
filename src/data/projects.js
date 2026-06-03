export const projects = [
  {
    id: 1,
    name: 'Hawia',
    shortName: 'Hawia',
    description: 'React Native water tanker rental marketplace for Saudi Arabia with interactive maps, geolocation, WhatsApp ordering, and bilingual AR/EN support.',
    fullDescription: `A marketplace app connecting users with companies that rent water tankers (hawias) across Saudi Arabia. Features company listings with search and city filtering via drawer navigation, interactive Google Maps with nearby company markers and GPS-based distance filtering, and WhatsApp-mediated ordering with phone number capture and prefilled messages.

Built with React Native 0.82, React Navigation 7 (tab + drawer + stack), TanStack Query for data fetching, NativeWind for styling, and i18next for runtime-fetched Arabic/English translations with full RTL support.`,
    tech: ['React Native', 'TypeScript', 'React Navigation', 'TanStack Query', 'i18next', 'NativeWind', 'TailwindCSS', 'React Native Maps', 'Geolocation'],
    status: 'In Development',
    github: null,
    live: null,
    livePreview: null,
    features: [
      'Company listing with search and city-based filtering',
      'Interactive Google Maps with nearby company markers',
      'GPS-based distance filtering (100km radius)',
      'WhatsApp-mediated ordering with phone capture',
      'Full bilingual AR/EN with RTL support',
      'Runtime-fetched translations from server',
      'Dynamic city drawer populated from API data',
      'Batch loading with tablet-responsive grid layout'
    ],
    architecture: {
      overview: `React Native 0.82 app with TypeScript, React Navigation 7 (bottom tabs + drawer + native stacks), TanStack React Query + Context API for state, i18next with runtime server-fetched translations, NativeWind for TailwindCSS styling, and react-native-maps with Google Maps provider.`,
      layers: [
        { name: 'Presentation', items: ['6 Screens (Home, Map, Details, Contact, Terms, OwnerInfo)', 'Reusable Components (Card, Dialog)', 'Drawer & Tab Navigation'] },
        { name: 'State Management', items: ['React Context (DataContext)', 'TanStack React Query', 'Animated Scroll Values'] },
        { name: 'Services', items: ['API Client (fetch)', 'Geolocation Service', 'i18n Runtime Translation'] },
        { name: 'Infrastructure', items: ['React Native 0.82', 'React Navigation 7', 'React Native Maps', 'NativeWind'] }
      ],
      dataFlow: `App Mount → i18n Fetch → DataProvider → API List → Company Data → React Query/Context → HomeScreen/NearByScreen → Drawer Filter/Map → Details → WhatsApp Order`,
      external: ['hawia.sa API (list, save_whatsapp)', 'Google Maps', 'WhatsApp Intent']
    },
    database: {
      relationships: 'Remote API-based, no local database — WhatsApp-mediated order flow'
    }
  },
  {
    id: 2,
    name: 'MGCOT',
    shortName: 'MGCOT',
    description: 'React Native teacher observation and monitoring app for Punjab DTE with single-grade and multi-grade classroom assessment flows.',
    fullDescription: `A React Native implementation of the DTE monitoring system for teacher observations in Punjab schools. Supports both single-grade and multi-grade observation flows with classroom selection, timed observations, scoring, discussion checklists, and feedback collection.

Features geolocation-based school check-in, timer tracking for observations, and comprehensive form-based assessment across multiple domains. Modern React Native architecture with TypeScript, context-based state management, and bottom tab navigation.`,
    tech: ['React Native', 'TypeScript', 'React Navigation', 'Geolocation', 'AsyncStorage'],
    status: 'Completed',
    github: null,
    live: null,
    livePreview: null,
    features: [
      'Single-grade and multi-grade observation flows',
      'Classroom selection with school and teacher data',
      'Timed observations with MM:SS tracking',
      '13-question rating system across 5 domains',
      'Teacher discussion checklist with conditional follow-up',
      'Additional observations and feedback collection',
      'Geolocation check-in for school visits',
      'Progress/completion tracking throughout the flow'
    ],
    architecture: {
      overview: `React Native 0.83 app with TypeScript, React Navigation (bottom tabs + native stacks), Context API for auth/observation/timer state, geolocation services, and component-based UI architecture.`,
      layers: [
        { name: 'Presentation', items: ['React Native Screens (12)', 'Reusable Components', 'ObservationTimer Component'] },
        { name: 'State Management', items: ['AuthContext', 'ObservationContext', 'TimerContext'] },
        { name: 'Services', items: ['API Service', 'Location Service', 'AsyncStorage Persistence'] },
        { name: 'Infrastructure', items: ['React Native 0.83', 'React Navigation 7', 'Geolocation'] }
      ],
      dataFlow: `Login → School Selection → Grade Type Selection → Classroom Details → Observation/Rating → Discussion → Additional Observations → Feedback → Submission`,
      external: ['REST API Backend', 'GPS Location Services']
    },
    database: {
      relationships: 'AsyncStorage for local persistence, remote API for data storage'
    }
  },
  {
    id: 3,
    name: 'DTE Monitoring App (Android)',
    shortName: 'DTE Android',
    description: 'Native Android app for Punjab DTE school monitoring with Kotlin/Java, supporting single-grade and multi-grade classroom observation flows.',
    fullDescription: `The original native Android implementation of the DTE monitoring system for Punjab education department. Built with Kotlin and Java, this app enables field monitors to conduct school visits, observe teachers, and submit assessment data through a structured multi-step workflow.

Features both single-grade and multi-grade observation flows with per-grade attendance tracking, dynamic subject selection, progress charts from historical data, and conditional checklists based on teacher discussion responses. Uses a 5-step submission process for multigrade observations.`,
    tech: ['Kotlin', 'Java', 'Android SDK', 'Retrofit', 'Ktor Client', 'SQLite'],
    status: 'Completed',
    github: null,
    live: null,
    livePreview: null,
    features: [
      'Single-grade and multigrade observation flows with fragment-based UI',
      'School and teacher selection with location-based data',
      'Per-grade attendance tracking for multigrade observations',
      '13 rating questions across 5 domains with Likert scale',
      'Teacher discussion with conditional checklist for unresolved items',
      'Progress chart showing improvement areas from historical data',
      'Teacher observation timer (MM:SS format)',
      'Multi-step submission process (5 sequential API calls)',
      'Additional observations and feedback collection',
      'Dynamic subject selection based on selected grades'
    ],
    architecture: {
      overview: `Native Android app using Kotlin and Java, Fragment-based navigation with ViewPager pattern, Retrofit + Ktor Client for networking, SQLite for local data with DatabaseHelper, static collections in MainActivity for shared state between fragments.`,
      layers: [
        { name: 'Presentation', items: ['Fragment-based UI', 'Custom Spinners (Single/Multi)', 'Custom Adapters', 'Progress Chart View'] },
        { name: 'Business Logic', items: ['Activity Managers', 'Fragment Controllers', 'Submission Coordinator'] },
        { name: 'Networking', items: ['Retrofit REST Client', 'Ktor HTTP Client', 'API Service Interfaces'] },
        { name: 'Data', items: ['SQLite Database (DatabaseHelper)', 'Static Collections', 'Shared Preferences'] }
      ],
      dataFlow: `Login → GradeTypeSelection → School/Teacher/Grade Selection → Observation Form → Additional Info → Teacher Discussion → [Conditional Checklist] → Progress → Feedback → Multi-step API Submission`,
      external: ['REST API (Dual endpoints: single/multigrade)', 'SQLite Local Database']
    },
    database: {
      relationships: 'SQLite with DatabaseHelper, static in-memory collections for runtime state'
    }
  },
  {
    id: 5,
    name: 'curlie',
    shortName: 'curlie',
    description: 'A curl-like CLI tool for Node.js supporting HTTP, HTTPS, FTP, and local file operations with DNS-over-HTTPS and parallel downloads.',
    fullDescription: `A feature-rich command-line tool written in Node.js that replicates the functionality of curl. Supports HTTP/HTTPS requests (GET, POST, PUT, DELETE) with custom headers, cookies, redirects, and authentication. Full FTP support including directory listing, file download/upload with append mode. Advanced features include DNS-over-HTTPS, custom DNS resolution, parallel downloads, speed limiting, and comprehensive cookie management.

Published as an npm package with global CLI installation, designed as a modern alternative to curl with JavaScript-native implementation.`,
    tech: ['Node.js', 'basic-ftp', 'CLI'],
    status: 'Completed',
    github: null,
    live: null,
    livePreview: null,
    features: [
      'HTTP/HTTPS requests with GET, POST, PUT, DELETE methods',
      'Custom headers, cookies, User-Agent, and Referer support',
      'JSON data posting with automatic Content-Type header',
      'Cookie jar management with save/load',
      'Redirect following with configurable limit',
      'FTP support: listing, download, upload, append',
      'DNS-over-HTTPS and custom DNS resolution',
      'Parallel downloads with configurable concurrency',
      'Speed limiting (e.g., 1M, 100K)',
      'Comprehensive timeout and retry options',
      'IPv4/IPv6 selection',
      'Remote file name extraction (-O)',
      'Verbose mode with request/response details'
    ],
    architecture: {
      overview: `Node.js CLI application with ES modules, argument parsing engine, modular transport handlers for HTTP/HTTPS/FTP/file protocols, custom DNS resolution layer, and parallel download scheduler.`,
      layers: [
        { name: 'CLI Layer', items: ['Argument Parser', 'Help System', 'Exit Code Handler'] },
        { name: 'Transport', items: ['HTTP/HTTPS Handler', 'FTP Handler (basic-ftp)', 'File Protocol Handler'] },
        { name: 'Features', items: ['Cookie Manager', 'DNS Resolution (DoH)', 'Parallel Downloader', 'Rate Limiter', 'Redirect Follower'] },
        { name: 'Infrastructure', items: ['Node.js HTTP/HTTPS', 'basic-ftp Library', 'File System API'] }
      ],
      dataFlow: `CLI Input → Arg Parser → Transport Selection → Protocol Handler → Network I/O → Output (stdout/file)`,
      external: ['basic-ftp (npm)', 'Node.js built-in modules']
    },
    database: {
      relationships: 'None (CLI tool, no database)'
    }
  },
  {
    id: 7,
    name: 'Web Crawler',
    shortName: 'Web Crawler',
    description: 'Multi-purpose web crawler for email extraction, lead generation, wallpaper collection, and Yelp data scraping with browser automation.',
    fullDescription: `A comprehensive web crawling toolkit supporting multiple crawling modes including general page crawling, email extraction from websites, Yelp business data scraping, lead generation, and wallpaper collection from Wallhaven. Features Puppeteer-based browser automation with stealth plugins for anti-detection, cookie extraction, rate limiting, and SQL.js for local data storage.

Includes a CLI interface for easy command-line operation and configurable crawling with depth control and source management.`,
    tech: ['Node.js', 'Puppeteer', 'JSDOM', 'SQL.js', 'Puppeteer Extra', 'Stealth Plugin'],
    status: 'Completed',
    github: null,
    live: null,
    livePreview: null,
    features: [
      'General web crawling with configurable depth',
      'Email extraction from crawled pages',
      'Yelp business data and review scraping',
      'Lead generation pipeline',
      'Wallhaven wallpaper scraper',
      'Browser automation with Puppeteer stealth plugin',
      'Cookie extraction and management',
      'Rate limiting for polite crawling',
      'SQLite-based local data storage via SQL.js',
      'Multi-source crawling with parallel execution',
      'CLI interface with configurable options',
      'CAPTCHA detection and handling'
    ],
    architecture: {
      overview: `Node.js CommonJS application with Puppeteer-based browser automation, JSDOM for server-side DOM parsing, SQL.js for SQLite-compatible local storage, modular source-based scraper architecture with CLI interface.`,
      layers: [
        { name: 'CLI Layer', items: ['CLI Entry Point', 'Config Manager', 'Output Formatter'] },
        { name: 'Crawler Engines', items: ['General Crawler', 'Email Crawler', 'Yelp Scraper', 'Lead Crawler', 'Wallhaven Crawler'] },
        { name: 'Browser Automation', items: ['Puppeteer Manager', 'Stealth Plugin', 'Cookie Extractor', 'Rate Limiter'] },
        { name: 'Data Layer', items: ['SQL.js (SQLite)', 'File System Storage', 'JSON Output'] }
      ],
      dataFlow: `CLI Command → Crawler Selection → URL Input → Puppeteer Browser → Page Parse → Data Extraction → SQL.js/File Output`,
      external: ['Puppeteer (Chromium)', 'SQL.js (SQLite WASM)', 'Wallhaven']
    },
    database: {
      relationships: 'SQL.js (SQLite compiled to WebAssembly) with relational tables'
    }
  },
  {
    id: 8,
    name: 'UI Blocks',
    shortName: 'UI Blocks',
    description: 'shadcn/ui-inspired UI component library with 30+ production-ready components, a Next.js showcase app, and an npm CLI tool for copy-paste installation.',
    fullDescription: `A comprehensive UI component library following the shadcn/ui "copy-and-paste" philosophy. Features 30+ reusable, production-ready React components built with Tailwind CSS 4, Framer Motion animations, and TypeScript. Components include buttons, dialogs, drawers, sheets, tooltips, dropdowns, tabs, accordions, cards, forms, and more.

The project consists of three parts: a Next.js 15 showcase/demo site, a standalone Git-based component registry (ui-registry) as the source of truth, and the @zenblockz/ui-blocks CLI tool published on npm for installing individual components directly into user projects.`,
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion', 'Three.js', 'React Three Fiber'],
    status: 'Completed',
    github: null,
    live: null,
    livePreview: null,
    features: [
      '30+ reusable UI components with full TypeScript types',
      'shadcn/ui copy-paste installation pattern',
      'CLI tool for adding/removing/list components in any project',
      'Framer Motion animations and transitions',
      'Tailwind CSS 4 with oklch color system',
      'Dark mode support with CSS custom properties',
      'Interactive showcase site with live component previews',
      'Three.js 3D components (React Three Fiber)',
      'Responsive and accessible component design',
      'Component dependency management via registry',
      'Usage code snippets for every component',
      'Published npm package @zenblockz/ui-blocks'
    ],
    architecture: {
      overview: `Three-part system: (1) Next.js 15 App Router site for showcase and CLI tooling, (2) ui-registry Git repo containing blocks.json manifest + template .tsx files + examples, (3) CLI tool that fetches component files from GitHub and copies them into user's project. Components use class-variance-authority for variants, Framer Motion for animations, Tailwind CSS 4 with CSS variables for theming.`,
      layers: [
        { name: 'Showcase Site', items: ['Next.js 15 App Router', 'Landing Page', 'Blocks Demo Page', 'Live Previews'] },
        { name: 'Component Registry', items: ['blocks.json Manifest', '30+ Component Templates', 'Usage Examples', 'Theme Configuration'] },
        { name: 'CLI Tool', items: ['@zenblockz/ui-blocks', 'init/add/remove/list/diff Commands', 'GitHub Raw Fetch', 'File System Operations'] },
        { name: 'Component Library', items: ['32 Production Components', 'Framer Motion Animations', 'Three.js 3D', 'Tailwind 4 Theming'] }
      ],
      dataFlow: `User runs CLI → blocks.json fetched from GitHub → Component template downloaded → Copied to components/ui/ in user's project → Fully owned and customizable`,
      external: ['npm Registry (@zenblockz/ui-blocks)', 'GitHub (ui-registry repo)', 'Tailwind CSS 4']
    },
    database: {
      relationships: 'No database — filesystem-based component delivery'
    }
  },
  {
    id: 9,
    name: 'Books',
    shortName: 'Books',
    description: 'Expo-based eBook reader app with local SQLite storage, reading list management, wishlist, and EPUB reader functionality.',
    fullDescription: `A cross-platform eBook reader application built with Expo and React Native. Features a clean reading interface with local SQLite database for storing books and reading progress, tab-based navigation for browsing and managing collections, and a dedicated reader screen for the reading experience.

Supports both iOS and Android platforms with Expo's managed workflow, native performance with react-native-reanimated and gesture handler, and persistent local storage via expo-sqlite.`,
    tech: ['Expo', 'React Native', 'TypeScript', 'SQLite', 'React Navigation', 'TanStack Query', 'NativeWind'],
    status: 'In Development',
    github: null,
    live: null,
    livePreview: null,
    features: [
      'Cross-platform Expo app (iOS + Android)',
      'Local SQLite database for book storage',
      'Tab-based navigation (Home, Reading List, Wishlist, Settings)',
      'Dedicated reader screen with EPUB support',
      'Progress tracking and resume reading',
      'TanStack Query for data management',
      'Bottom sheet for book details and actions',
      'NativeWind/TailwindCSS styling',
      'Expo File System for book file handling'
    ],
    architecture: {
      overview: `Expo SDK 55 app with Expo Router for file-based navigation, React Navigation for tab/stack navigation, expo-sqlite for local database, TanStack Query for data fetching/caching, NativeWind for TailwindCSS styling, and react-native-reanimated for animations.`,
      layers: [
        { name: 'Navigation', items: ['Expo Router', 'Bottom Tab Navigation', 'Stack Screens'] },
        { name: 'Screens', items: ['HomeScreen', 'ReaderScreen', 'ReadingListScreen', 'WishlistScreen', 'SettingScreen'] },
        { name: 'Services', items: ['SQLite Database Service', 'File System Service', 'API Service'] },
        { name: 'Infrastructure', items: ['Expo SDK 55', 'TanStack Query', 'NativeWind', 'Reanimated'] }
      ],
      dataFlow: `User Browse → Screen Components → TanStack Query → SQLite / API → Data Rendering → Reading Experience`,
      external: ['Expo SDK', 'SQLite Local Database']
    },
    database: {
      relationships: 'Local SQLite via expo-sqlite with structured tables for books, reading progress, and collections'
    }
  },
  // {
  //     id: 10,
  //     name: 'Books Expo',
  //     shortName: 'Books Expo',
  //     description: 'Expo-based book reader application with local database, navigation, and reading list management (alternative version).',
  //     fullDescription: `An Expo-based book reader application built alongside the Books project. Features similar functionality including local SQLite storage, tab-based navigation, and a dedicated reader interface. Uses Expo's managed workflow with React Native under the hood for cross-platform compatibility.
  //
  // This project serves as an alternative implementation of the eBook reader concept with slightly different architecture choices and configuration.`,
  //     tech: ['Expo', 'React Native', 'TypeScript', 'SQLite', 'React Navigation', 'TanStack Query', 'NativeWind'],
  //     status: 'In Development',
  //     github: null,
  //     live: null,
  //     livePreview: null,
  //     features: [
  //       'Cross-platform Expo mobile app',
  //       'Local SQLite database with expo-sqlite',
  //       'Bottom tab and stack navigation',
  //       'Book reader with file system support',
  //       'TanStack React Query integration',
  //       'Gesture handler and reanimated animations',
  //       'NativeWind/TailwindCSS theming',
  //       'Expo Router for file-based routing'
  //     ],
  //     architecture: {
  //       overview: `Expo SDK 55 app with Expo Router, React Navigation 7 (bottom tabs + native stacks), expo-sqlite for local persistence, TanStack React Query 5 for state management, NativeWind/TailwindCSS for styling, and gesture handler + reanimated for smooth interactions.`,
  //       layers: [
  //         { name: 'Navigation', items: ['Expo Router Layout', 'Tab Navigation', 'Stack Screens'] },
  //         { name: 'Screens', items: ['Tab-based Screens', 'Reader Views'] },
  //         { name: 'Services', items: ['Database Service (SQLite)', 'File System Access', 'API Service'] },
  //         { name: 'Infrastructure', items: ['Expo SDK 55', 'React Native 0.83', 'TanStack Query'] }
  //       ],
  //       dataFlow: `User Interaction → Expo Router → Screen Components → TanStack Query → SQLite/API → UI Update`,
  //       external: ['Expo SDK', 'SQLite Local Database']
  //     },
  //     database: {
  //       relationships: 'Local SQLite database with expo-sqlite'
  //     }
  //   }
]

export const getProjectById = (id) => projects.find(p => p.id === id)
export const getNextProject = (id) => {
  const idx = projects.findIndex(p => p.id === id)
  return projects[(idx + 1) % projects.length]
}
export const getPrevProject = (id) => {
  const idx = projects.findIndex(p => p.id === id)
  return projects[(idx - 1 + projects.length) % projects.length]
}
