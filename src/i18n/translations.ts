export type LanguageCode = 'en' | 'bn' | 'hi' | 'ar' | 'vi' | 'zh';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: 'EN' },
  { code: 'bn', label: 'Bengali', nativeLabel: 'বাংলা', flag: 'BN' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', flag: 'HI' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', flag: 'AR' },
  { code: 'vi', label: 'Vietnamese', nativeLabel: 'Tiếng Việt', flag: 'VI' },
  { code: 'zh', label: 'Chinese', nativeLabel: '中文', flag: 'ZH' },
];

export interface TranslationContent {
  nav: {
    enterArena: string;
    topCups: string;
    arenaStats: string;
    appDownload: string;
    rulesGuide: string;
    matchHub: string;
    languageLabel: string;
  };
  hero: {
    seasonStamp: string;
    joinTournamentPill: string;
    createPublisherPill: string;
    descSeries: string;
    descPart1Strong: string;
    descPart1Text: string;
    joinNowBtn: string;
    tickerText: string;
  };
  section2: {
    engineTag: string;
    studioBadge: string;
    statMatches: string;
    statActiveCups: string;
    statDivisions: string;
    quote: string;
    seasonPassLabel: string;
    claimPassTitle: string;
    storeBadge: string;
    verifiedApk: string;
    appSubtitle: string;
    reviewsLabel: string;
    downloadsLabel: string;
    androidOsLabel: string;
    ratedLabel: string;
    downloadApkBtn: string;
    continueWebsiteBtn: string;
    telegramBtn: string;
    facebookBtn: string;
    safeApkNote: string;
    screenshotsTitle: string;
    screenshotsSubtitle: string;
    aboutAppTitle: string;
    aboutAppIntro: string;
    aboutBullet1Title: string;
    aboutBullet1Text: string;
    aboutBullet2Title: string;
    aboutBullet2Text: string;
    aboutBullet3Title: string;
    aboutBullet3Text: string;
    aboutBullet4Title: string;
    aboutBullet4Text: string;
    appInfoTitle: string;
    infoSupportedOs: string;
    infoAndroidOnly: string;
    infoRequiredAndroid: string;
    infoAndroidVersion: string;
    infoCurrentVersion: string;
    infoVersionVal: string;
    infoOfferedBy: string;
    infoPrizeSupport: string;
    infoPrizeVal: string;
    infoPackageFormat: string;
  };
  section3: {
    protocolTag: string;
    part2Strong: string;
    part2Text: string;
    headlineLeft: string;
    headlineMid: string;
    headlineRight: string;
    subBarLeft: string;
    subBarRight: string;
    rules: {
      num: string;
      title: string;
      desc: string;
    }[];
    guidesSectionTitle: string;
    guidesSectionSubtitle: string;
    playerGuideTab: string;
    publisherGuideTab: string;
    playerGuideBadge: string;
    playerGuideTitle: string;
    playerGuideIntro: string;
    playerSteps: {
      step: string;
      title: string;
      desc: string;
    }[];
    publisherGuideBadge: string;
    publisherGuideTitle: string;
    publisherGuideIntro: string;
    publisherSteps: {
      step: string;
      title: string;
      desc: string;
    }[];
  };
  section4: {
    topHeadline: string;
    part1Tag: string;
    part1Desc: string;
    part2Tag: string;
    part2Desc: string;
    modulesTitle: string;
    modulesSubtitle: string;
    modules: {
      tab: string;
      title: string;
      desc: string;
      highlights: string[];
    }[];
    featuresTitle: string;
    featuresSubtitle: string;
    features: {
      title: string;
      desc: string;
    }[];
    leftCardTag: string;
    leftCardSub: string;
    leftCardTitle: string;
    centerCardTop: string;
    centerCardSpec1Label: string;
    centerCardSpec1Val: string;
    centerCardSpec2Label: string;
    centerCardSpec2Val: string;
    centerCardSpec3Label: string;
    centerCardSpec3Val: string;
    centerCardBtn: string;
    rightCardTag: string;
    rightCardSub: string;
    rightCardTitle: string;
    telemetryTag: string;
    telemetryTitle: string;
    telemetryDesc: string;
  };
  section5: {
    finalCallTag: string;
    seasonQuestion: string;
    enterPortalBtn: string;
    downloadApkBtn: string;
    telegramBtn: string;
    facebookBtn: string;
    officialSiteLink: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationContent> = {
  en: {
    nav: {
      enterArena: 'Enter Arena',
      topCups: 'TOP CUPS',
      arenaStats: 'ARENA STATS',
      appDownload: 'DOWNLOAD APP',
      rulesGuide: 'RULES & GUIDE',
      matchHub: 'APP MODULES',
      languageLabel: 'Language',
    },
    hero: {
      seasonStamp: 'SEASON 27 / V2.4.5',
      joinTournamentPill: 'You can join FC mobile H2H Tournament.',
      createPublisherPill: 'You can create a tournament as a publisher.',
      descSeries: 'OVERVIEW · V2.4.5 RELEASE',
      descPart1Strong: 'NEXT-GEN ESPORTS — ',
      descPart1Text:
        'The ultimate EA Sports FC Mobile H2H tournament platform. Compete for real BDT & USDT prize pools, track live group standings & knockout brackets, or host your own leagues.',
      joinNowBtn: 'JOIN NOW',
      tickerText: 'FC ARENA VS · H2H TOURNAMENT · BDT & USDT PRIZES · V2.4.5',
    },
    section2: {
      engineTag: 'TOURNAMENT ENGINE',
      studioBadge: 'FC ARENA STUDIO',
      statMatches: 'Matches',
      statActiveCups: 'Active Cups',
      statDivisions: 'Winner Tiers',
      quote:
        '“JOIN H2H TOURNAMENTS, PLAY HOME & AWAY LEGS, AND WIN REAL BDT & USDT PRIZES!”',
      seasonPassLabel: 'FC ARENA PASSPORT',
      claimPassTitle: 'CLAIM YOUR PASS',
      storeBadge: 'OFFICIAL ANDROID APP STORE LISTING',
      verifiedApk: 'VERIFIED APK · V2.4.5',
      appSubtitle: 'EA Sports FC Mobile H2H Tournament & Publisher Platform',
      reviewsLabel: '2.4K reviews',
      downloadsLabel: 'Downloads',
      androidOsLabel: 'Android OS',
      ratedLabel: 'Rated for 3+',
      downloadApkBtn: 'Download App (APK v2.4.5)',
      continueWebsiteBtn: 'Continue to website',
      telegramBtn: 'Join Official Telegram',
      facebookBtn: 'Official Facebook Page',
      safeApkNote:
        'Verified safe Android package (.apk) · Supports Android 7.0 and above · Web PWA & Android APK',
      screenshotsTitle: 'App Screenshots',
      screenshotsSubtitle:
        'Swipe or use arrows to preview all 15 in-app screens (tap any image to enlarge)',
      aboutAppTitle: 'About this app',
      aboutAppIntro:
        'FC ARENA VS (v2.4.5) is a next-generation eSports tournament management platform built for EA Sports FC Mobile players and community organizers. From player registration and automatic group seeding to Home & Away match deployment, live countdown timers, and real-time standings—everything runs in one fast platform.',
      aboutBullet1Title: 'Dual Account System (Player & Host):',
      aboutBullet1Text:
        'Players register with their IGN, numeric-only FC Mobile UID, and Messenger link; Publishers register with their Organization/League name to host 16, 32, or 64-player tournaments.',
      aboutBullet2Title: '1-Match & 2-Match (Home & Away) Engine:',
      aboutBullet2Text:
        'Supports single round-robin or 2-legged Home & Away (Leg 1 & Leg 2 side-by-side cards) with optional +6h, +12h, +24h, or +48h live match countdown timers.',
      aboutBullet3Title: 'Transparent BDT & USDT Prize Modes:',
      aboutBullet3Text:
        'Clear tournament badges show Single Winner (1st Only) or Top 3 Winners (1st, 2nd & 3rd place prize breakdown) in BDT or USDT.',
      aboutBullet4Title: 'Click-Anywhere Profile & 24/7 Support AI:',
      aboutBullet4Text:
        'Tap any player name anywhere to copy their FC Mobile UID or open Messenger directly, backed by a built-in 24/7 bilingual Support AI and Light/Dark Glass UI.',
      appInfoTitle: 'App Info & Compatibility',
      infoSupportedOs: 'Supported Platform',
      infoAndroidOnly: 'Android Only (APK) & Web PWA',
      infoRequiredAndroid: 'Required Android',
      infoAndroidVersion: 'Android 7.0 (Nougat) & up (7+)',
      infoCurrentVersion: 'Current Version',
      infoVersionVal: 'v2.4.5 (Latest Release)',
      infoOfferedBy: 'Offered By',
      infoPrizeSupport: 'Prize Currencies',
      infoPrizeVal: 'BDT & USDT Supported',
      infoPackageFormat: 'Package Format',
    },
    section3: {
      protocolTag: 'ARENA PROTOCOL & WORKFLOW',
      part2Strong: 'COMPLETE ECOSYSTEM — ',
      part2Text:
        'Whether you are competing as a Player for championship prizes or organizing leagues as a Publisher/Host, FC Arena VS automates every stage of the tournament.',
      headlineLeft: 'RULES OF',
      headlineMid: 'THE',
      headlineRight: 'ARENA VS',
      subBarLeft: 'VERSION 2.4.5 — OFFICIAL GUIDE',
      subBarRight: 'PLAYER & PUBLISHER WORKFLOW',
      rules: [
        {
          num: '01',
          title: '1-Match & 2-Match Legs',
          desc: 'Play Group + Knockout or pure Knockout cups with 1-Match or 2-Legged Home & Away aggregate scoring and live countdown timers.',
        },
        {
          num: '02',
          title: '2-Step Result Verification',
          desc: 'Upload full-time match scores with proof; results finalize after opponent or host confirmation to guarantee 100% fair play.',
        },
        {
          num: '03',
          title: 'Click-Anywhere Profiles',
          desc: 'Tap any opponent name in groups, brackets, or match cards to copy their numeric FC Mobile UID and chat directly on Messenger.',
        },
        {
          num: '04',
          title: 'Real BDT & USDT Prizes',
          desc: 'Compete in Public or Invited (INV-XXXXXX) tournaments with transparent Single Winner or Top 3 Winners prize distributions.',
        },
      ],
      guidesSectionTitle: 'COMPLETE PLAYER & PUBLISHER GUIDES',
      guidesSectionSubtitle:
        'Switch tabs below to explore how Players join & compete and how Publishers create & command tournaments.',
      playerGuideTab: '🎮 Player Guide (Competitors)',
      publisherGuideTab: '🛡️ Publisher / Host Guide (Organizers)',
      playerGuideBadge: 'ROLE: PLAYER · FC MOBILE COMPETITORS',
      playerGuideTitle: 'How to Register, Compete & Win as a Player',
      playerGuideIntro:
        'Create a free Player account to join Public or Invited tournaments, coordinate with opponents on Messenger, and win BDT or USDT prizes.',
      playerSteps: [
        {
          step: 'STEP 01',
          title: 'Smart Player Registration',
          desc: 'Select the PLAYER tab on sign-up. Enter your Email, Password, exact FC Mobile In-Game Name (IGN), numeric-only FC Mobile UID (0-9), and valid Facebook/Messenger link.',
        },
        {
          step: 'STEP 02',
          title: 'FC Arena Passport & Dashboard',
          desc: 'Access your personal FC ARENA PASSPORT card with your unique ID (#XXXXXX) and READY TO PLAY status, live 2D Football Tactics Board animation, and instant tournament search.',
        },
        {
          step: 'STEP 03',
          title: 'Discover & Join Public or Invited Cups',
          desc: 'Browse UPCOMING and LIVE cups in the ARENA tab. Join PUBLIC tournaments in one click or enter an INV-XXXXXX key for private cups. Check BDT/USDT prize pools and 1 Winner vs Top 3 badges.',
        },
        {
          step: 'STEP 04',
          title: 'My Match Hub & Opponent Contact',
          desc: 'View your 1-Match or side-by-side 2-Match (LEG 1 & LEG 2) fixtures and live countdown timer (⏳). Tap your opponent’s name to copy their UID and message them on Messenger.',
        },
        {
          step: 'STEP 05',
          title: 'Upload Score & Track Live Standings',
          desc: 'Submit Home & Away goals with match proof via UPLOAD SCORE. Once confirmed by your opponent or host, Group Standings (MP, W, D, L, GD, PTS) and Knockout Aggregate scores update automatically.',
        },
      ],
      publisherGuideBadge: 'ROLE: PUBLISHER / HOST · LEAGUE ORGANIZERS',
      publisherGuideTitle: 'How to Create & Command 16, 32, or 64-Player Tournaments',
      publisherGuideIntro:
        'Forget manual spreadsheets. The FC Arena VS Matchmaking Engine automates group seeding, fixture deployment, standings calculation, and knockout progression.',
      publisherSteps: [
        {
          step: 'STEP 01',
          title: 'Host Account Registration',
          desc: 'Select the HOST tab on registration. Enter your Name, official Organization/League Name (displayed on tournament badges), and your Facebook/Messenger support link (no game UID needed).',
        },
        {
          step: 'STEP 02',
          title: '4-Step Tournament Creation',
          desc: 'Choose Group + Knockout or Knockout format; 16, 32, or 64 Slots; Public or Invited Only; and set Prize Pools in BDT or USDT with Single Winner (1st) or Top 3 Winners (1st, 2nd, 3rd) breakdown.',
        },
        {
          step: 'STEP 03',
          title: '1-Click Auto Group Seeding',
          desc: 'Manage registered players from the Command & Players tabs. Once slots fill, press Auto Group Distribution to shuffle players evenly into Group A, Group B, Group C, and Group D.',
        },
        {
          step: 'STEP 04',
          title: 'Auto Match Deploy & Deadline Timer',
          desc: 'Deploy 1-Match (single round-robin) or 2-Matches (Home & Away double round-robin). Optionally attach a +6h, +12h, +24h, +48h, or custom countdown timer (⏳) to every match card.',
        },
        {
          step: 'STEP 05',
          title: 'Edit Authority & Knockout Progression',
          desc: 'Choose Player Upload or Only Publisher score authority. Approve or edit any match score anytime, advance top players to R16/QF/SF/Final in one click, and crown the Grand Final champion.',
        },
      ],
    },
    section4: {
      topHeadline:
        'FC ARENA VS V2.4.5: 4 CORE APP MODULES, HIGH-SPEED ARCHITECTURE & LIVE TOURNAMENT HUB!',
      part1Tag: 'DUAL ACCOUNT & SMART VALIDATION — PART 1',
      part1Desc:
        'Strict numeric validation for FC Mobile UIDs, verified Facebook/Messenger links, and enforced BDT/USDT prize pool formatting keep every tournament authentic.',
      part2Tag: 'MULTI-SHARD & 24/7 SUPPORT AI — PART 2',
      part2Desc:
        'Powered by a high-speed multi-shard database for hundreds of concurrent cups, plus an offline-ready 24/7 bilingual Support AI in English & Bangla.',
      modulesTitle: '4 CORE APPLICATION MODULES',
      modulesSubtitle:
        'Everything inside FC ARENA VS is organized into 4 streamlined navigation tabs plus a floating 24/7 Support AI.',
      modules: [
        {
          tab: '01 · DASHBOARD',
          title: 'Elite Arena & Passport',
          desc: 'Instant search by tournament name, organizer, or ID, paired with a real-time 2D Football Tactics Board SVG animation.',
          highlights: [
            'FC Arena Passport Card with Role (PLAYER / HOST / ADMIN)',
            'Active Cups showcase with Single Winner & Top 3 badges',
            'Official Facebook Page follow & share integration',
          ],
        },
        {
          tab: '02 · ARENA',
          title: 'My Arena & Discover Hub',
          desc: 'Explore UPCOMING, LIVE, and END tournaments with 16/32/64 slot progress bars and complete 6-tab Arena Detail views.',
          highlights: [
            'Matches, Groups/Standings (MP, W, D, L, GF, GA, GD, PTS)',
            'Visual Knockout Bracket tree with Aggregate scores',
            'Dedicated Host Command terminal for tournament organizers',
          ],
        },
        {
          tab: '03 · MY MATCH',
          title: 'Dedicated Match Center',
          desc: 'Track all your Scheduled, Reported, and Completed matches across every tournament in one unified screen.',
          highlights: [
            'Side-by-side Leg 1 & Leg 2 Home & Away pair cards',
            'Live match deadline countdown timer (⏳)',
            'Direct score upload & 1-click opponent Messenger chat',
          ],
        },
        {
          tab: '04 · PROFILE',
          title: 'Profile, Theme & Host Portal',
          desc: 'Manage your in-game UID, social channels, security settings, and switch between Light Mode and Dark Glassmorphic UI.',
          highlights: [
            'Instant toggle between Light Mode & Dark Cyber-Esports UI',
            'Direct access to Create Tournament & Publisher Dashboard',
            '1-Click In-App Update system via Telegram or Chrome',
          ],
        },
      ],
      featuresTitle: 'KEY PLATFORM HIGHLIGHTS (V2.4.5)',
      featuresSubtitle: 'Engineered specifically for competitive EA Sports FC Mobile communities.',
      features: [
        {
          title: 'Transparent Winner Modes',
          desc: 'Every tournament card clearly displays whether prizes go to a Single Winner (1st Only) or Top 3 Winners (1st, 2nd, 3rd) in BDT or USDT.',
        },
        {
          title: 'Click-Anywhere Player Popup',
          desc: 'Tap any player or host name anywhere in the app to open their profile modal, copy their FC Mobile UID, or message them on Messenger.',
        },
        {
          title: '1-Match & 2-Match Engine',
          desc: 'Deploy single matches or 2-legged Home & Away fixtures with automatic aggregate calculation and optional +6h to +48h timers.',
        },
        {
          title: '24/7 Built-in Support AI',
          desc: 'Instant answers to thousands of tournament, match, and hosting questions in both English and Bangla without external delays.',
        },
      ],
      leftCardTag: 'SQUAD FACE-OFF',
      leftCardSub: 'DIVISION RIVALS',
      leftCardTitle: 'CAPTAINS LINEUP',
      centerCardTop: 'TOURNAMENT',
      centerCardSpec1Label: 'FORMAT:',
      centerCardSpec1Val: '1V1 H2H & KNOCKOUT CUPS',
      centerCardSpec2Label: 'PUBLISHER MODE:',
      centerCardSpec2Val: 'CREATE & HOST TOURNAMENTS',
      centerCardSpec3Label: 'ACTIVE PRIZE TIER:',
      centerCardSpec3Val: 'BDT & USDT · 16/32/64 SQUADS',
      centerCardBtn: 'Join Now',
      rightCardTag: 'FULL 7-PLAYER ROSTER',
      rightCardSub: 'CHAMPIONS STAGE',
      rightCardTitle: 'ARENA SQUAD 2026',
      telemetryTag: '⑥ LIVE ARENA TELEMETRY WIDGETS',
      telemetryTitle: 'REAL-TIME H2H ACTIVITY & LOBBY PULSE',
      telemetryDesc:
        'Live match traffic and community channel synchronization across the FC Arena VS tournament ecosystem.',
    },
    section5: {
      finalCallTag: '⑦ FINAL STAGE CALL · V2.4.5',
      seasonQuestion: 'Season 27 ?',
      enterPortalBtn: 'Enter Web Arena',
      downloadApkBtn: 'Download App (v2.4.5)',
      telegramBtn: 'Official Telegram',
      facebookBtn: 'Facebook Page',
      officialSiteLink: 'OFFICIAL SITE ↗',
    },
  },

  bn: {
    nav: {
      enterArena: 'অ্যারেনায় প্রবেশ',
      topCups: 'টপ কাপস',
      arenaStats: 'অ্যারেনা স্ট্যাটস',
      appDownload: 'অ্যাপ ডাউনলোড',
      rulesGuide: 'নিয়ম ও গাইড',
      matchHub: 'অ্যাপ মডিউল',
      languageLabel: 'ভাষা',
    },
    hero: {
      seasonStamp: 'সিজন ২৭ / V2.4.5',
      joinTournamentPill: 'আপনি FC Mobile H2H টুর্নামেন্টে জয়েন করতে পারবেন।',
      createPublisherPill: 'আপনি পাবলিশার হিসেবে নতুন টুর্নামেন্ট তৈরি করতে পারবেন।',
      descSeries: 'ওভারভিউ · V2.4.5 রিলিজ',
      descPart1Strong: 'নেক্সট-জেন ই-স্পোর্টস — ',
      descPart1Text:
        'FC Mobile প্রো প্লেয়ারদের সেরা টুর্নামেন্ট প্ল্যাটফর্ম — জয়েন করুন, হোম অ্যান্ড অ্যাওয়ে ম্যাচ খেলুন, অথবা নিজেই টুর্নামেন্ট হোস্ট করুন এবং জিতে নিন রিয়েল BDT ও USDT পুরস্কার!',
      joinNowBtn: 'জয়েন করুন',
      tickerText: 'FC ARENA VS · H2H টুর্নামেন্ট · BDT ও USDT পুরস্কার · V2.4.5',
    },
    section2: {
      engineTag: 'টুর্নামেন্ট ইঞ্জিন',
      studioBadge: 'FC ARENA STUDIO',
      statMatches: 'ম্যাচসমূহ',
      statActiveCups: 'চলমান কাপ',
      statDivisions: 'উইনার মোড',
      quote:
        '“পাস ক্লেইম করে অ্যারেনায় প্রবেশ করুন। গ্রুপ লিগ ও নকআউট কাপে খেলে জিতে নিন BDT ও USDT পুরস্কার!”',
      seasonPassLabel: 'FC ARENA পাসপোর্ট',
      claimPassTitle: 'পাস ক্লেইম করুন',
      storeBadge: 'অফিশিয়াল অ্যান্ড্রয়েড অ্যাপ স্টোর লিস্টিং',
      verifiedApk: 'ভেরিফায়েড APK · V2.4.5',
      appSubtitle: 'EA Sports FC Mobile H2H টুর্নামেন্ট ও পাবলিশার প্ল্যাটফর্ম',
      reviewsLabel: '২.৪ হাজার রিভিউ',
      downloadsLabel: 'ডাউনলোড',
      androidOsLabel: 'অ্যান্ড্রয়েড ওএস',
      ratedLabel: '৩+ রেটেড',
      downloadApkBtn: 'অ্যাপ ডাউনলোড করুন (APK v2.4.5)',
      continueWebsiteBtn: 'Continue to website (ওয়েবসাইটে যান)',
      telegramBtn: 'অফিশিয়াল টেলিগ্রাম',
      facebookBtn: 'অফিশিয়াল ফেসবুক পেজ',
      safeApkNote:
        'নিরাপদ ও ভেরিফায়েড অ্যান্ড্রয়েড প্যাকেজ (.apk) · Android 7.0 বা তার উপরের ভার্সন সাপোর্ট করে',
      screenshotsTitle: 'অ্যাপ স্ক্রিনশটসমূহ',
      screenshotsSubtitle:
        'অ্যাপের ১৫টি স্ক্রিনশট দেখতে বামে-ডানে সোয়াইপ করুন (বড় করে দেখতে যেকোনো ছবিতে ট্যাপ করুন)',
      aboutAppTitle: 'এই অ্যাপ সম্পর্কে (About App)',
      aboutAppIntro:
        'FC ARENA VS (v2.4.5) হলো EA Sports FC Mobile গেমার ও কমিউনিটি অর্গানাইজারদের জন্য তৈরি একটি পরবর্তী প্রজন্মের ই-স্পোর্টস টুর্নামেন্ট ম্যানেজমেন্ট অ্যাপ। প্লেয়ার রেজিস্ট্রেশন, অটোমেটিক গ্রুপ সিডিং, হোম অ্যান্ড অ্যাওয়ে ম্যাচ ডিপ্লয়মেন্ট, লাইভ কাউন্টডাউন টাইমার এবং পয়েন্ট টেবিল ও নকআউট ব্র্যাকেট—সবকিছুই এক প্ল্যাটফর্মে স্বয়ংক্রিয়ভাবে চলে।',
      aboutBullet1Title: 'ডুয়াল অ্যাকাউন্ট সিস্টেম (Player & Host):',
      aboutBullet1Text:
        'প্লেয়াররা ইন-গেম নাম, সংখ্যার UID ও মেসেঞ্জার লিংক দিয়ে জয়েন করতে পারে; আর হোস্টরা অর্গানাইজেশন বা লিগ নেম দিয়ে ১৬, ৩২ বা ৬৪ জনের টুর্নামেন্ট পরিচালনা করতে পারে।',
      aboutBullet2Title: '১-ম্যাচ ও ২-ম্যাচ (Home & Away) ইঞ্জিন:',
      aboutBullet2Text:
        '১-ম্যাচ অথবা ২-ম্যাচ (Leg 1 ও Leg 2 পাশাপাশি কার্ড) ডিপ্লয় করার সুবিধা এবং +6h, +12h, +24h বা +48h অপশনাল লাইভ কাউন্টডাউন টাইমার।',
      aboutBullet3Title: 'স্বচ্ছ BDT ও USDT উইনার মোড:',
      aboutBullet3Text:
        'টুর্নামেন্ট কার্ডেই স্পষ্ট ব্যাজ থাকে—শুধু চ্যাম্পিয়ন পুরস্কার পাবে (Single Winner) নাকি প্রথম ৩ জন পাবে (Top 3 Winners - 1st, 2nd, 3rd)।',
      aboutBullet4Title: 'ক্লিক-এনিহোয়ার প্রোফাইল ও ২৪/৭ সাপোর্ট এআই:',
      aboutBullet4Text:
        'অ্যাপের যেকোনো জায়গায় প্লেয়ারের নামের ওপর ক্লিক করলেই তার প্রোফাইল পপআপ, UID কপি বাটন এবং মেসেঞ্জার চ্যাট পাওয়া যায়; সাথে রয়েছে বাংলা ও ইংরেজি ২৪/৭ সাপোর্ট এআই।',
      appInfoTitle: 'অ্যাপ তথ্য ও ডিভাইস সাপোর্ট',
      infoSupportedOs: 'সাপোর্টেড প্ল্যাটফর্ম',
      infoAndroidOnly: 'শুধুমাত্র Android (APK) ও Web PWA',
      infoRequiredAndroid: 'প্রয়োজনীয় অ্যান্ড্রয়েড',
      infoAndroidVersion: 'Android 7.0 (Nougat) বা তার উপরে (7+)',
      infoCurrentVersion: 'বর্তমান ভার্সন',
      infoVersionVal: 'v2.4.5 (লেটেস্ট রিলিজ)',
      infoOfferedBy: 'প্রকাশক',
      infoPrizeSupport: 'পুরস্কারের কারেন্সি',
      infoPrizeVal: 'BDT এবং USDT সাপোর্টেড',
      infoPackageFormat: 'প্যাকেজ ফরম্যাট',
    },
    section3: {
      protocolTag: 'অ্যারেনা প্রোটোকল ও ওয়ার্কফ্লো',
      part2Strong: 'পূর্ণাঙ্গ ইকোসিস্টেম — ',
      part2Text:
        'আপনি প্লেয়ার হিসেবে পুরস্কারের জন্য খেলুন কিংবা পাবলিশার/হোস্ট হিসেবে টুর্নামেন্ট পরিচালনা করুন—FC Arena VS প্রতিটি ধাপ স্বয়ংক্রিয়ভাবে সম্পন্ন করে।',
      headlineLeft: 'RULES OF',
      headlineMid: 'THE',
      headlineRight: 'ARENA VS',
      subBarLeft: 'ভার্সন ২.৪.৫ — অফিশিয়াল গাইড',
      subBarRight: 'প্লেয়ার ও পাবলিশার গাইডলাইন',
      rules: [
        {
          num: '01',
          title: '১-ম্যাচ ও ২-ম্যাচ ফরম্যাট',
          desc: 'Group + Knockout বা Knockout টুর্নামেন্টে ১-ম্যাচ অথবা ২-লেগের (Home & Away) এগ্রিগেট স্কোরিং ও লাইভ কাউন্টডাউন টাইমার।',
        },
        {
          num: '02',
          title: '২-ধাপে রেজাল্ট ভেরিফিকেশন',
          desc: 'ম্যাচ শেষে স্কোর ও প্রুফ আপলোড করার পর প্রতিপক্ষ অথবা হোস্ট কনফার্ম করলেই রেজাল্ট চূড়ান্ত হবে এবং পয়েন্ট টেবিল আপডেট হবে।',
        },
        {
          num: '03',
          title: 'ক্লিক-এনিহোয়ার প্রোফাইল',
          desc: 'গ্রুপ টেবিল, ম্যাচ কার্ড বা ব্র্যাকেটে যেকোনো প্লেয়ারের নামে ক্লিক করে এক ক্লিকে তার FC Mobile UID কপি ও মেসেঞ্জারে চ্যাট করা যায়।',
        },
        {
          num: '04',
          title: 'রিয়েল BDT ও USDT পুরস্কার',
          desc: 'পাবলিক বা প্রাইভেট (INV-XXXXXX) টুর্নামেন্টে Single Winner (১ম স্থান) অথবা Top 3 Winners (১ম, ২য়, ৩য় স্থান) হিসেবে পুরস্কার জিতুন।',
        },
      ],
      guidesSectionTitle: 'পূর্ণাঙ্গ প্লেয়ার এবং পাবলিশার গাইড',
      guidesSectionSubtitle:
        'প্লেয়ার হিসেবে কীভাবে জয়েন করবেন এবং পাবলিশার হিসেবে কীভাবে টুর্নামেন্ট পরিচালনা করবেন তা নিচের ট্যাব থেকে দেখুন।',
      playerGuideTab: '🎮 প্লেয়ার গাইড (Players)',
      publisherGuideTab: '🛡️ পাবলিশার / হোস্ট গাইড (Organizers)',
      playerGuideBadge: 'রোল: PLAYER · FC MOBILE প্রতিযোগী',
      playerGuideTitle: 'প্লেয়ার হিসেবে রেজিস্ট্রেশন ও ম্যাচ খেলার নিয়ম',
      playerGuideIntro:
        'ফ্রিতে প্লেয়ার অ্যাকাউন্ট খুলে পাবলিক বা ইনভাইটেড টুর্নামেন্টে অংশ নিন, মেসেঞ্জারে প্রতিপক্ষের সাথে যোগাযোগ করুন এবং BDT বা USDT পুরস্কার জিতুন।',
      playerSteps: [
        {
          step: 'ধাপ ০১',
          title: 'প্লেয়ার অ্যাকাউন্ট তৈরি',
          desc: 'রেজিস্ট্রেশন পেজে PLAYER ট্যাব সিলেক্ট করে ইমেইল, পাসওয়ার্ড, আপনার FC Mobile ইন-গেম নাম (IGN), শুধুমাত্র সংখ্যার FC Mobile UID (0-9) এবং ফেসবুক/মেসেঞ্জার লিংক দিন।',
        },
        {
          step: 'ধাপ ০২',
          title: 'ড্যাশবোর্ড ও পাসপোর্ট কার্ড',
          desc: 'লগইন করলেই পাবেন নিজস্ব FC ARENA PASSPORT কার্ড (#XXXXXX আইডি ও READY TO PLAY স্ট্যাটাস), লাইভ 2D ট্যাকটিক্স বোর্ড অ্যানিমেশন এবং ইনস্ট্যান্ট টুর্নামেন্ট সার্চ বার।',
        },
        {
          step: 'ধাপ ০৩',
          title: 'টুর্নামেন্ট যাচাই ও জয়েন করা',
          desc: 'ARENA ট্যাবে গিয়ে UPCOMING ও LIVE টুর্নামেন্ট দেখুন। PUBLIC টুর্নামেন্টে সরাসরি এবং INVITED টুর্নামেন্টে INV-XXXXXX কোড দিয়ে জয়েন করুন ও BDT/USDT প্রাইজ পুল দেখুন।',
        },
        {
          step: 'ধাপ ০৪',
          title: 'MY MATCH ট্যাব ও মেসেঞ্জার যোগাযোগ',
          desc: 'MY MATCH ট্যাবে আপনার ১-ম্যাচ বা পাশাপাশি ২-ম্যাচ (LEG 1 ও LEG 2) ফিক্সচার এবং লাইভ কাউন্টডাউন টাইমার (⏳) দেখুন। প্রতিপক্ষের নামে ক্লিক করে UID কপি ও মেসেঞ্জারে কথা বলুন।',
        },
        {
          step: 'ধাপ ০৫',
          title: 'স্কোর আপলোড ও পয়েন্ট টেবিল ট্র্যাকিং',
          desc: 'UPLOAD SCORE বাটনে ক্লিক করে গোল সংখ্যা ও স্ক্রিনশট দিন। প্রতিপক্ষ বা হোস্ট কনফার্ম করলেই পয়েন্ট টেবিল (MP, W, D, L, GD, PTS) ও নকআউট ব্র্যাকেট অটোমেটিক আপডেট হবে।',
        },
      ],
      publisherGuideBadge: 'রোল: PUBLISHER / HOST · টুর্নামেন্ট অর্গানাইজার',
      publisherGuideTitle: '১৬, ৩২ বা ৬৪ জনের টুর্নামেন্ট তৈরি ও পরিচালনার নিয়ম',
      publisherGuideIntro:
        'খাতায় বা এক্সেল শিটে হিসাব রাখার বদলে অ্যাপের Matchmaking Engine স্বয়ংক্রিয়ভাবে গ্রুপ তৈরি, ফিক্সচার ডিপ্লয় এবং নকআউট রাউন্ড পরিচালনা করে।',
      publisherSteps: [
        {
          step: 'ধাপ ০১',
          title: 'হোস্ট অ্যাকাউন্ট রেজিস্ট্রেশন',
          desc: 'রেজিস্ট্রেশন পেজে HOST ট্যাব সিলেক্ট করে আপনার নাম, ই-স্পোর্টস অর্গানাইজেশন বা লিগের নাম এবং ফেসবুক/মেসেঞ্জার লিংক দিন (হোস্টদের গেম UID প্রয়োজন নেই)।',
        },
        {
          step: 'ধাপ ০২',
          title: '৪ ধাপে নতুন টুর্নামেন্ট তৈরি',
          desc: 'Group + Knockout বা Knockout ফরম্যাট, ১৬/৩২/৬৪ স্লট, Public বা Invited এন্ট্রি এবং BDT বা USDT কারেন্সিতে প্রাইজ পুল (Single Winner বা Top 3 Winners) সেট করুন।',
        },
        {
          step: 'ধাপ ০৩',
          title: '১-ক্লিকে অটো গ্রুপ সিডিং',
          desc: 'Command ও Players ট্যাব থেকে সব প্লেয়ার ম্যানেজ করুন। স্লট পূর্ণ হলে Auto Group Distribution বাটনে চাপ দিলেই প্লেয়াররা Group A, B, C, D-তে সমানভাবে ভাগ হয়ে যাবে।',
        },
        {
          step: 'ধাপ ০৪',
          title: 'অটো ম্যাচ ডিপ্লয় ও ডেডলাইন টাইমার',
          desc: '১-ম্যাচ অথবা ২-ম্যাচ (Home & Away) ফিক্সচার ডিপ্লয় করুন এবং চাইলে +6h, +12h, +24h, +48h বা কাস্টম কাউন্টডাউন টাইমার (⏳) যুক্ত করে দিন।',
        },
        {
          step: 'ধাপ ০৫',
          title: 'রেজাল্ট এডিট ও নকআউট প্রগ্রেশন',
          desc: 'প্রতিটি ম্যাচ কার্ডে হোস্টের জন্য EDIT ও Approve বাটন থাকে। গ্রুপ পর্ব শেষে এক ক্লিকে শীর্ষ প্লেয়ারদের কোয়ার্টার ফাইনাল, সেমিফাইনাল ও গ্র্যান্ড ফাইনালে উন্নীত করুন।',
        },
      ],
    },
    section4: {
      topHeadline:
        'FC ARENA VS V2.4.5: ৪টি প্রধান অ্যাপ মডিউল, সুপার-ফাস্ট আর্কিটেকচার এবং লাইভ টুর্নামেন্ট হাব!',
      part1Tag: 'ডুয়াল অ্যাকাউন্ট ও স্মার্ট ভ্যালিডেশন — পার্ট ১',
      part1Desc:
        'গেম UID বক্সে শুধুমাত্র সংখ্যা (0-9), ভেরিফায়েড ফেসবুক/মেসেঞ্জার লিংক এবং প্রাইজ পুলে BDT বা USDT কারেন্সি নিশ্চিত করা হয়।',
      part2Tag: 'মাল্টি-শার্ড ডাটাবেস ও ২৪/৭ সাপোর্ট এআই — পার্ট ২',
      part2Desc:
        'হাজার হাজার ম্যাচেও সুপার-ফাস্ট পারফরম্যান্সের জন্য মাল্টি-শার্ড ডাটাবেস এবং বাংলা ও ইংরেজি প্রশ্নের তাৎক্ষণিক উত্তরের জন্য রয়েছে ২৪/৭ লোকাল সাপোর্ট এআই।',
      modulesTitle: 'অ্যাপের ৪টি প্রধান মডিউল (CORE MODULES)',
      modulesSubtitle:
        'FC ARENA VS অ্যাপের ভেতরে রয়েছে ৪টি প্রধান নেভিগেশন ট্যাব এবং সার্বক্ষণিক ফ্লোটিং সাপোর্ট সিস্টেম।',
      modules: [
        {
          tab: '01 · DASHBOARD',
          title: 'এলিট অ্যারেনা ও পাসপোর্ট',
          desc: 'টুর্নামেন্ট বা অর্গানাইজারের নাম দিয়ে তাৎক্ষণিক সার্চ এবং রিয়েল-টাইম 2D Football Tactics Board অ্যানিমেশন।',
          highlights: [
            'FC Arena Passport কার্ড (PLAYER / HOST / ADMIN রোল)',
            'চলমান টুর্নামেন্টের প্রাইজ পুল ও উইনার ব্যাজ শোকেস',
            'অফিশিয়াল ফেসবুক পেজ ফলো ও শেয়ার কার্ড',
          ],
        },
        {
          tab: '02 · ARENA',
          title: 'MY ARENA ও DISCOVER হাব',
          desc: 'UPCOMING, LIVE ও END স্ট্যাটাসসহ সকল টুর্নামেন্ট কার্ড এবং টুর্নামেন্টের ভেতরে ৬টি বিস্তারিত ট্যাব।',
          highlights: [
            'Matches ও অটোমেটিক Standings (MP, W, D, L, GF, GA, GD, PTS)',
            'নকআউট ব্র্যাকেট ট্রি ও এগ্রিগেট স্কোর ট্র্যাকিং',
            'হোস্টদের জন্য বিশেষ Tournament Command কন্ট্রোল প্যানেল',
          ],
        },
        {
          tab: '03 · MY MATCH',
          title: 'ডেডিকেটেড ম্যাচ সেন্টার',
          desc: 'একজন প্লেয়ার যেসব টুর্নামেন্টে খেলছে তার সবগুলো ম্যাচ (Scheduled, Reported, Completed) এক জায়গায় দেখার পেজ।',
          highlights: [
            'পাশাপাশি Leg 1 ও Leg 2 হোম অ্যান্ড অ্যাওয়ে পেয়ার কার্ড',
            'লাইভ ম্যাচ ডেডলাইন কাউন্টডাউন টাইমার (⏳)',
            'সরাসরি স্কোর আপলোড ও প্রতিপক্ষের মেসেঞ্জার চ্যাট বাটন',
          ],
        },
        {
          tab: '04 · PROFILE',
          title: 'প্রোফাইল, থিম ও হোস্ট পোর্টাল',
          desc: 'ইন-গেম UID, ফেসবুক/মেসেঞ্জার লিংক এডিট, থিম পরিবর্তন এবং হোস্টদের জন্য Create Tournament অ্যাক্সেস।',
          highlights: [
            'Light Mode ও Dark Glassmorphic UI থিম পরিবর্তন',
            'হোস্ট ড্যাশবোর্ড ও নতুন টুর্নামেন্ট তৈরি করার পোর্টাল',
            'Telegram বা Chrome-এর মাধ্যমে ১-ক্লিকে ইন-অ্যাপ আপডেট',
          ],
        },
      ],
      featuresTitle: 'অ্যাপের বিশেষ ও অনন্য ফিচারসমূহ (V2.4.5)',
      featuresSubtitle: 'EA Sports FC Mobile কমিউনিটির জন্য তৈরি আধুনিক ফিচারসমূহ।',
      features: [
        {
          title: 'স্বচ্ছ উইনার মোড (1 Winner / Top 3)',
          desc: 'শুধু চ্যাম্পিয়ন টাকা পাবে নাকি ১ম, ২য় ও ৩য় স্থান অধিকারী ৩ জন পাবে তা BDT/USDT প্রাইজ ব্রেকডাউনসহ স্পষ্টভাবে দেখা যায়।',
        },
        {
          title: 'ক্লিক-এনিহোয়ার প্লেয়ার প্রোফাইল',
          desc: 'অ্যাপের যেকোনো জায়গায় প্লেয়ারের নামের ওপর ক্লিক করলেই তার UID কপি বাটন ও সরাসরি মেসেঞ্জার চ্যাট পপআপ ওপেন হয়।',
        },
        {
          title: '১-ম্যাচ ও ২-ম্যাচ ডিপ্লয় ইঞ্জিন',
          desc: 'হোস্ট এক ক্লিকে সিঙ্গেল বা ডাবল রাউন্ড-রবিন (Home & Away) ম্যাচ এবং +6h থেকে +48h ডেডলাইন টাইমার সেট করতে পারে।',
        },
        {
          title: '২৪/৭ বিল্ট-ইন সাপোর্ট এআই',
          desc: 'বাংলা ও ইংরেজি যেকোনো ভাষায় টুর্নামেন্ট বা ম্যাচ সংক্রান্ত যেকোনো প্রশ্নের তাৎক্ষণিক উত্তর দেওয়ার জন্য নিজস্ব এআই ইঞ্জিন।',
        },
      ],
      leftCardTag: 'স্কোয়াড ফেস-অফ',
      leftCardSub: 'ডিভিশন রাইভালস',
      leftCardTitle: 'ক্যাপ্টেনস লাইনআপ',
      centerCardTop: 'টুর্নামেন্ট',
      centerCardSpec1Label: 'ফরম্যাট:',
      centerCardSpec1Val: '1V1 H2H ও নকআউট কাপ',
      centerCardSpec2Label: 'পাবলিশার মোড:',
      centerCardSpec2Val: 'টুর্নামেন্ট তৈরি ও হোস্ট করুন',
      centerCardSpec3Label: 'প্রাইজ পুল:',
      centerCardSpec3Val: 'BDT ও USDT · ১৬/৩২/৬৪ স্লট',
      centerCardBtn: 'জয়েন করুন',
      rightCardTag: '৭-প্লেয়ার রোস্টার',
      rightCardSub: 'চ্যাম্পিয়নস স্টেজ',
      rightCardTitle: 'অ্যারেনা স্কোয়াড ২০২৬',
      telemetryTag: '⑥ লাইভ অ্যারেনা টেলিমেট্রি উইজেট',
      telemetryTitle: 'রিয়েল-টাইম H2H অ্যাক্টিভিটি ও লবি পালস',
      telemetryDesc:
        'FC Arena VS টুর্নামেন্ট প্ল্যাটফর্মের লাইভ ম্যাচ ট্রাফিক এবং কমিউনিটি চ্যানেল সিঙ্ক্রোনাইজেশন।',
    },
    section5: {
      finalCallTag: '⑦ ফাইনাল স্টেজ কল · V2.4.5',
      seasonQuestion: 'সিজন ২৭ ?',
      enterPortalBtn: 'ওয়েব অ্যারেনায় যান',
      downloadApkBtn: 'অ্যাপ ডাউনলোড (v2.4.5)',
      telegramBtn: 'অফিশিয়াল টেলিগ্রাম',
      facebookBtn: 'ফেসবুক পেজ',
      officialSiteLink: 'অফিশিয়াল সাইট ↗',
    },
  },

  hi: {
    nav: {
      enterArena: 'एरीना में प्रवेश करें',
      topCups: 'टॉप कप्स',
      arenaStats: 'एरीना आँकड़े',
      appDownload: 'ऐप डाउनलोड',
      rulesGuide: 'नियम और गाइड',
      matchHub: 'ऐप मॉड्यूल',
      languageLabel: 'भाषा',
    },
    hero: {
      seasonStamp: 'सीज़न 27 / V2.4.5',
      joinTournamentPill: 'आप FC Mobile H2H टूर्नामेंट में शामिल हो सकते हैं।',
      createPublisherPill: 'आप पब्लिशर के रूप में अपना टूर्नामेंट बना सकते हैं।',
      descSeries: 'अवलोकन · V2.4.5 रिलीज़',
      descPart1Strong: 'नेक्स्ट-जेन ई-स्पोर्ट्स — ',
      descPart1Text:
        'EA Sports FC Mobile खिलाड़ियों के लिए सर्वश्रेष्ठ H2H टूर्नामेंट प्लेटफॉर्म। BDT और USDT पुरस्कार जीतें, लाइव ग्रुप स्टैंडिंग और नॉकआउट ब्रैकेट ट्रैक करें, या अपने खुद के टूर्नामेंट होस्ट करें।',
      joinNowBtn: 'अभी जुड़ें',
      tickerText: 'FC ARENA VS · H2H टूर्नामेंट · BDT और USDT पुरस्कार · V2.4.5',
    },
    section2: {
      engineTag: 'टूर्नामेंट इंजन',
      studioBadge: 'FC ARENA STUDIO',
      statMatches: 'मैच',
      statActiveCups: 'सक्रिय कप',
      statDivisions: 'विजेता मोड',
      quote:
        '“अपना पास प्राप्त करें और एरीना में उतरें। ग्रुप लीग और नॉकआउट कप में खेलकर BDT व USDT पुरस्कार जीतें!”',
      seasonPassLabel: 'FC ARENA पासपोर्ट',
      claimPassTitle: 'अपना पास लें',
      storeBadge: 'आधिकारिक एंड्रॉइड ऐप स्टोर लिस्टिंग',
      verifiedApk: 'सत्यापित APK · V2.4.5',
      appSubtitle: 'EA Sports FC Mobile H2H टूर्नामेंट और पब्लिशर प्लेटफॉर्म',
      reviewsLabel: '2.4K समीक्षाएं',
      downloadsLabel: 'डाउनलोड',
      androidOsLabel: 'एंड्रॉइड OS',
      ratedLabel: '3+ के लिए रेटेड',
      downloadApkBtn: 'ऐप डाउनलोड करें (APK v2.4.5)',
      continueWebsiteBtn: 'Continue to website (वेबसाइट पर जाएं)',
      telegramBtn: 'आधिकारिक टेलीग्राम',
      facebookBtn: 'आधिकारिक फेसबुक पेज',
      safeApkNote:
        'सुरक्षित और सत्यापित एंड्रॉइड पैकेज (.apk) · Android 7.0 और उससे ऊपर का समर्थन करता है',
      screenshotsTitle: 'ऐप स्क्रीनशॉट',
      screenshotsSubtitle:
        'सभी 15 इन-ऐप स्क्रीन देखने के लिए स्वाइप करें (बड़ा करने के लिए किसी भी छवि पर टैप करें)',
      aboutAppTitle: 'इस ऐप के बारे में (About App)',
      aboutAppIntro:
        'FC ARENA VS (v2.4.5) EA Sports FC Mobile खिलाड़ियों और कम्युनिटी आयोजकों के लिए बनाया गया एक नेक्स्ट-जेन ई-स्पोर्ट्स टूर्नामेंट मैनेजमेंट ऐप है। खिलाड़ी पंजीकरण, ऑटो ग्रुप सीडिंग, होम और अवे मैच डिप्लॉयमेंट, लाइव टाइमर और पॉइंट्स टेबल—सब कुछ एक ही प्लेटफॉर्म पर स्वचालित है।',
      aboutBullet1Title: 'डुअल अकाउंट सिस्टम (Player & Host):',
      aboutBullet1Text:
        'खिलाड़ी अपने IGN, केवल संख्या वाले UID और मैसेंजर लिंक के साथ जुड़ते हैं; होस्ट 16, 32 या 64 खिलाड़ियों के टूर्नामेंट बनाने के लिए लीग नाम से पंजीकरण करते हैं।',
      aboutBullet2Title: '1-मैच और 2-मैच (Home & Away) इंजन:',
      aboutBullet2Text:
        '1-मैच या 2-मैच (Leg 1 और Leg 2 साइड-बाय-साइड कार्ड) और वैकल्पिक +6h, +12h, +24h या +48h लाइव काउंटडाउन टाइमर।',
      aboutBullet3Title: 'पारदर्शी BDT और USDT विजेता मोड:',
      aboutBullet3Text:
        'टूर्नामेंट कार्ड पर स्पष्ट बैज दिखाता है कि पुरस्कार केवल चैंपियन (Single Winner) को मिलेगा या शीर्ष 3 विजेताओं (Top 3 Winners) को।',
      aboutBullet4Title: 'क्लिक-एनीवेयर प्रोफाइल और 24/7 सपोर्ट AI:',
      aboutBullet4Text:
        'किसी भी खिलाड़ी के नाम पर टैप करके उसका FC Mobile UID कॉपी करें और सीधे मैसेंजर पर चैट करें, साथ ही 24/7 इन-बिल्ट सपोर्ट AI।',
      appInfoTitle: 'ऐप जानकारी और संगतता',
      infoSupportedOs: 'समर्थित प्लेटफॉर्म',
      infoAndroidOnly: 'केवल Android (APK) और Web PWA',
      infoRequiredAndroid: 'आवश्यक एंड्रॉइड',
      infoAndroidVersion: 'Android 7.0 (Nougat) और ऊपर (7+)',
      infoCurrentVersion: 'वर्तमान संस्करण',
      infoVersionVal: 'v2.4.5 (नवीनतम रिलीज़)',
      infoOfferedBy: 'प्रदाता',
      infoPrizeSupport: 'पुरस्कार मुद्राएं',
      infoPrizeVal: 'BDT और USDT समर्थित',
      infoPackageFormat: 'पैकेज प्रारूप',
    },
    section3: {
      protocolTag: 'एरीना प्रोटोकॉल और वर्कफ़्लो',
      part2Strong: 'संपूर्ण इकोसिस्टम — ',
      part2Text:
        'चाहे आप एक खिलाड़ी के रूप में पुरस्कारों के लिए प्रतिस्पर्धा कर रहे हों या पब्लिशर/होस्ट के रूप में टूर्नामेंट आयोजित कर रहे हों, FC Arena VS हर चरण को आसान बनाता है।',
      headlineLeft: 'RULES OF',
      headlineMid: 'THE',
      headlineRight: 'ARENA VS',
      subBarLeft: 'संस्करण 2.4.5 — आधिकारिक गाइड',
      subBarRight: 'खिलाड़ी और पब्लिशर वर्कफ़्लो',
      rules: [
        {
          num: '01',
          title: '1-मैच और 2-मैच लेग्स',
          desc: 'Group + Knockout या Knockout कप में 1-मैच या 2-लेग (Home & Away) एग्रीगेट स्कोरिंग और लाइव काउंटडाउन टाइमर।',
        },
        {
          num: '02',
          title: '2-स्टेप रिजल्ट वेरिफिकेशन',
          desc: 'मैच के बाद स्कोर और प्रूफ अपलोड करें; प्रतिद्वंद्वी या होस्ट की पुष्टि के बाद स्टैंडिंग अपने आप अपडेट हो जाती है।',
        },
        {
          num: '03',
          title: 'क्लिक-एनीवेयर प्रोफाइल',
          desc: 'किसी भी खिलाड़ी के नाम पर क्लिक करके तुरंत उसका FC Mobile UID कॉपी करें और मैसेंजर पर संपर्क करें।',
        },
        {
          num: '04',
          title: 'असली BDT और USDT पुरस्कार',
          desc: 'पब्लिक या इनवाइटेड (INV-XXXXXX) टूर्नामेंट में Single Winner या Top 3 Winners के रूप में पुरस्कार जीतें।',
        },
      ],
      guidesSectionTitle: 'संपूर्ण खिलाड़ी और पब्लिशर गाइड',
      guidesSectionSubtitle:
        'खिलाड़ी कैसे जुड़ें और पब्लिशर टूर्नामेंट कैसे होस्ट करें, यह जानने के लिए नीचे टैब चुनें।',
      playerGuideTab: '🎮 खिलाड़ी गाइड (Players)',
      publisherGuideTab: '🛡️ पब्लिशर / होस्ट गाइड (Organizers)',
      playerGuideBadge: 'भूमिका: PLAYER · FC MOBILE प्रतियोगी',
      playerGuideTitle: 'खिलाड़ी के रूप में पंजीकरण और जीतने की प्रक्रिया',
      playerGuideIntro:
        'मुफ्त खिलाड़ी खाता बनाएं, पब्लिक या प्राइवेट टूर्नामेंट में भाग लें, मैसेंजर पर प्रतिद्वंद्वी से बात करें और BDT या USDT पुरस्कार जीतें।',
      playerSteps: [
        {
          step: 'चरण 01',
          title: 'स्मार्ट खिलाड़ी पंजीकरण',
          desc: 'PLAYER टैब चुनें। अपना ईमेल, पासवर्ड, FC Mobile इन-गेम नाम (IGN), केवल अंकों वाला FC Mobile UID (0-9) और फेसबुक/मैसेंजर लिंक दर्ज करें।',
        },
        {
          step: 'चरण 02',
          title: 'FC Arena पासपोर्ट और डैशबोर्ड',
          desc: 'लॉगिन करते ही अपना FC ARENA PASSPORT कार्ड (#XXXXXX), लाइव 2D फुटबॉल टैक्टिक्स बोर्ड एनीमेशन और इंस्टेंट टूर्नामेंट सर्च बार पाएं।',
        },
        {
          step: 'चरण 03',
          title: 'टूर्नामेंट खोजें और शामिल हों',
          desc: 'ARENA टैब में UPCOMING और LIVE कप देखें। एक क्लिक में PUBLIC कप में या INV-XXXXXX कोड से प्राइवेट कप में जुड़ें।',
        },
        {
          step: 'चरण 04',
          title: 'MY MATCH हब और मैसेंजर चैट',
          desc: 'MY MATCH टैब में अपने 1-मैच या 2-मैच (LEG 1 और LEG 2) फिक्स्चर और लाइव टाइमर (⏳) देखें। प्रतिद्वंद्वी के नाम पर टैप करके UID कॉपी करें।',
        },
        {
          step: 'चरण 05',
          title: 'स्कोर अपलोड और लाइव स्टैंडिंग',
          desc: 'UPLOAD SCORE से गोल और मैच प्रूफ जमा करें। पुष्टि होते ही पॉइंट्स टेबल (MP, W, D, L, GD, PTS) और नॉकआउट ब्रैकेट अपने आप अपडेट हो जाएंगे।',
        },
      ],
      publisherGuideBadge: 'भूमिका: PUBLISHER / HOST · लीग आयोजक',
      publisherGuideTitle: '16, 32 या 64 खिलाड़ियों के टूर्नामेंट कैसे बनाएं और चलाएं',
      publisherGuideIntro:
        'मैनुअल स्प्रेडशीट भूल जाएं। FC Arena VS का मैचमेकिंग इंजन ग्रुप सीडिंग, फिक्स्चर और नॉकआउट राउंड को स्वचालित करता है।',
      publisherSteps: [
        {
          step: 'चरण 01',
          title: 'होस्ट खाता पंजीकरण',
          desc: 'HOST टैब चुनें। अपना नाम, अपनी संस्था/लीग का नाम और फेसबुक/मैसेंजर संपर्क लिंक दर्ज करें (होस्ट के लिए गेम UID आवश्यक नहीं है)।',
        },
        {
          step: 'चरण 02',
          title: '4 चरणों में टूर्नामेंट निर्माण',
          desc: 'Group + Knockout या Knockout प्रारूप, 16/32/64 स्लॉट, Public या Invited एंट्री और BDT या USDT में पुरस्कार (Single Winner या Top 3) सेट करें।',
        },
        {
          step: 'चरण 03',
          title: '1-क्लिक ऑटो ग्रुप सीडिंग',
          desc: 'स्लॉट भरने पर Auto Group Distribution दबाएं, जिससे सभी खिलाड़ी Group A, B, C, D में बराबर बंट जाएंगे।',
        },
        {
          step: 'चरण 04',
          title: 'ऑटो मैच डिप्लॉय और डेडलाइन टाइमर',
          desc: '1-मैच या 2-मैच (Home & Away) फिक्स्चर डिप्लॉय करें और वैकल्पिक +6h, +12h, +24h या +48h लाइव काउंटडाउन टाइमर (⏳) लगाएं।',
        },
        {
          step: 'चरण 05',
          title: 'रिजल्ट एडिट और नॉकआउट प्रोग्रेशन',
          desc: 'होस्ट किसी भी मैच स्कोर को Approve या Edit कर सकता है और एक क्लिक में शीर्ष खिलाड़ियों को क्वार्टर, सेमी और ग्रैंड फाइनल में भेज सकता है।',
        },
      ],
    },
    section4: {
      topHeadline:
        'FC ARENA VS V2.4.5: 4 मुख्य ऐप मॉड्यूल, हाई-स्पीड आर्किटेक्चर और लाइव टूर्नामेंट हब!',
      part1Tag: 'डुअल अकाउंट और स्मार्ट वैलिडेशन — भाग 1',
      part1Desc:
        'FC Mobile UID के लिए सख्त संख्यात्मक जांच, सत्यापित मैसेंजर लिंक और BDT/USDT पुरस्कार प्रारूप।',
      part2Tag: 'मल्टी-शार्ड डेटाबेस और 24/7 सपोर्ट AI — भाग 2',
      part2Desc:
        'सैकड़ों लाइव टूर्नामेंटों के लिए सुपर-फास्ट मल्टी-शार्ड डेटाबेस और 24/7 इन-बिल्ट सपोर्ट AI।',
      modulesTitle: '4 मुख्य एप्लिकेशन मॉड्यूल',
      modulesSubtitle: 'FC ARENA VS ऐप के 4 मुख्य नेविगेशन टैब और 24/7 सपोर्ट सिस्टम।',
      modules: [
        {
          tab: '01 · DASHBOARD',
          title: 'एलीट एरीना और पासपोर्ट',
          desc: 'टूर्नामेंट खोज, 2D फुटबॉल टैक्टिक्स बोर्ड एनीमेशन और खिलाड़ी पासपोर्ट कार्ड।',
          highlights: [
            'FC Arena Passport कार्ड (PLAYER / HOST / ADMIN)',
            'Single Winner और Top 3 बैज के साथ सक्रिय कप',
            'आधिकारिक फेसबुक पेज फॉलो और शेयर कार्ड',
          ],
        },
        {
          tab: '02 · ARENA',
          title: 'My Arena और Discover हब',
          desc: 'UPCOMING, LIVE और END टूर्नामेंट कार्ड और 6-टैब एरीना डिटेल व्यू।',
          highlights: [
            'Matches और ऑटोमैटिक Standings (MP, W, D, L, GD, PTS)',
            'एग्रीगेट स्कोर के साथ विजुअल नॉकआउट ब्रैकेट',
            'होस्ट के लिए समर्पित Command कंट्रोल पैनल',
          ],
        },
        {
          tab: '03 · MY MATCH',
          title: 'समर्पित मैच सेंटर',
          desc: 'आपके सभी Scheduled, Reported और Completed मैचों को एक ही स्क्रीन पर ट्रैक करने का पेज।',
          highlights: [
            'Leg 1 और Leg 2 साइड-बाय-साइड पेयर कार्ड',
            'लाइव मैच डेडलाइन काउंटडाउन टाइमर (⏳)',
            'सीधे स्कोर अपलोड और मैसेंजर चैट बटन',
          ],
        },
        {
          tab: '04 · PROFILE',
          title: 'प्रोफाइल, थीम और होस्ट पोर्टल',
          desc: 'अपना इन-गेम UID, सोशल लिंक प्रबंधित करें और Light Mode व Dark Glass UI के बीच स्विच करें।',
          highlights: [
            'Light Mode और Dark Cyber-Esports UI टॉगल',
            'Create Tournament और होस्ट डैशबोर्ड एक्सेस',
            'Telegram या Chrome से 1-क्लिक इन-ऐप अपडेट',
          ],
        },
      ],
      featuresTitle: 'प्रमुख प्लेटफॉर्म विशेषताएं (V2.4.5)',
      featuresSubtitle: 'EA Sports FC Mobile कम्युनिटी के लिए विशेष रूप से निर्मित।',
      features: [
        {
          title: 'पारदर्शी विजेता मोड',
          desc: 'Single Winner (केवल प्रथम) या Top 3 Winners (प्रथम, द्वितीय, तृतीय) BDT/USDT पुरस्कार विवरण।',
        },
        {
          title: 'क्लिक-एनीवेयर खिलाड़ी पॉपअप',
          desc: 'ऐप में कहीं भी खिलाड़ी के नाम पर टैप करके UID कॉपी करें और मैसेंजर पर चैट करें।',
        },
        {
          title: '1-मैच और 2-मैच इंजन',
          desc: 'सिंगल या डबल राउंड-रॉबिन (Home & Away) फिक्स्चर और +6h से +48h डेडलाइन टाइमर।',
        },
        {
          title: '24/7 इन-बिल्ट सपोर्ट AI',
          desc: 'टूर्नामेंट और मैचों से जुड़े हजारों सवालों के तुरंत जवाब देने के लिए इन-बिल्ट AI इंजन।',
        },
      ],
      leftCardTag: 'स्क्वाड फेस-ऑफ',
      leftCardSub: 'डिवीजन राइवल्स',
      leftCardTitle: 'कप्तान लाइनअप',
      centerCardTop: 'टूर्नामेंट',
      centerCardSpec1Label: 'प्रारूप:',
      centerCardSpec1Val: '1V1 H2H और नॉकआउट कप',
      centerCardSpec2Label: 'पब्लिशर मोड:',
      centerCardSpec2Val: 'टूर्नामेंट बनाएं और होस्ट करें',
      centerCardSpec3Label: 'पुरस्कार स्तर:',
      centerCardSpec3Val: 'BDT व USDT · 16/32/64 स्क्वाड',
      centerCardBtn: 'अभी जुड़ें',
      rightCardTag: '7-खिलाड़ी रोस्टर',
      rightCardSub: 'चैंपियंस स्टेज',
      rightCardTitle: 'एरीना स्क्वाड 2026',
      telemetryTag: '⑥ लाइव एरीना टेलीमेट्री विजेट',
      telemetryTitle: 'रियल-टाइम H2H गतिविधि और लॉबी पल्स',
      telemetryDesc: 'FC Arena VS टूर्नामेंट इकोसिस्टम में लाइव मैच ट्रैफ़िक और कम्युनिटी सिंक्रोनाइज़ेशन।',
    },
    section5: {
      finalCallTag: '⑦ अंतिम चरण कॉल · V2.4.5',
      seasonQuestion: 'सीज़न 27 ?',
      enterPortalBtn: 'वेब एरीना में जाएं',
      downloadApkBtn: 'ऐप डाउनलोड (v2.4.5)',
      telegramBtn: 'आधिकारिक टेलीग्राम',
      facebookBtn: 'फेसबुक पेज',
      officialSiteLink: 'आधिकारिक साइट ↗',
    },
  },

  ar: {
    nav: {
      enterArena: 'ادخل الساحة',
      topCups: 'أفضل الكؤوس',
      arenaStats: 'إحصائيات الساحة',
      appDownload: 'تحميل التطبيق',
      rulesGuide: 'القواعد والدليل',
      matchHub: 'وحدات التطبيق',
      languageLabel: 'اللغة',
    },
    hero: {
      seasonStamp: 'الموسم 27 / V2.4.5',
      joinTournamentPill: 'يمكنك الانضمام إلى بطولة FC Mobile H2H.',
      createPublisherPill: 'يمكنك إنشاء بطولة خاصة بك كناشر (Publisher).',
      descSeries: 'نظرة عامة · إصدار V2.4.5',
      descPart1Strong: 'الجيل القادم للرياضات الإلكترونية — ',
      descPart1Text:
        'المنصة الاحترافية لبطولات EA Sports FC Mobile H2H. نافس على جوائز حقيقية بعملتي BDT و USDT، وتابع جداول المجموعات والأدوار الإقصائية مباشرة، أو استضف بطولاتك الخاصة.',
      joinNowBtn: 'انضم الآن',
      tickerText: 'FC ARENA VS · بطولة H2H · جوائز BDT و USDT · V2.4.5',
    },
    section2: {
      engineTag: 'محرك البطولات',
      studioBadge: 'FC ARENA STUDIO',
      statMatches: 'المباريات',
      statActiveCups: 'الكؤوس النشطة',
      statDivisions: 'أنماط الفائزين',
      quote:
        '”احصل على بطاقتك وادخل الساحة. نافس في دوريات المجموعات والكؤوس الإقصائية واربح جوائز BDT و USDT!“',
      seasonPassLabel: 'جواز سفر FC ARENA',
      claimPassTitle: 'احصل على بطاقتك',
      storeBadge: 'قائمة متجر تطبيقات أندرويد الرسمية',
      verifiedApk: 'ملف APK موثق · V2.4.5',
      appSubtitle: 'منصة بطولات وناشري EA Sports FC Mobile H2H',
      reviewsLabel: '2.4 ألف مراجعة',
      downloadsLabel: 'التحميلات',
      androidOsLabel: 'نظام أندرويد',
      ratedLabel: 'مناسب لـ 3+',
      downloadApkBtn: 'تحميل التطبيق (APK v2.4.5)',
      continueWebsiteBtn: 'Continue to website (المتابعة للموقع)',
      telegramBtn: 'قناة تيليجرام الرسمية',
      facebookBtn: 'صفحة فيسبوك الرسمية',
      safeApkNote:
        'حزمة أندرويد آمنة وموثقة (.apk) · تدعم نظام Android 7.0 والإصدارات الأحدث',
      screenshotsTitle: 'لقطات شاشة التطبيق',
      screenshotsSubtitle:
        'اسحب أو استخدم الأسهم لمعاينة جميع شاشات التطبيق الـ 15 (اضغط على أي صورة للتكبير)',
      aboutAppTitle: 'عن هذا التطبيق (About App)',
      aboutAppIntro:
        'تطبيق FC ARENA VS (v2.4.5) هو منصة متكاملة لإدارة بطولات EA Sports FC Mobile للاعبين والمنظمين. يقوم بأتمتة تسجيل اللاعبين، توزيع المجموعات، مباريات الذهاب والإياب، مؤقت العد التنازلي المباشر، وجداول الترتيب.',
      aboutBullet1Title: 'نظام الحساب المزدوج (لاعب ومنظم):',
      aboutBullet1Text:
        'يسجل اللاعبون باسم اللعبة ومعرف UID الرقمي ورابط ماسنجر؛ ويسجل المنظمون باسم المنظمة لاستضافة بطولات من 16 أو 32 أو 64 لاعباً.',
      aboutBullet2Title: 'محرك مباراة واحدة أو مباراتين (ذهاب وإياب):',
      aboutBullet2Text:
        'يدعم نظام المباراة الواحدة أو الذهاب والإياب (Leg 1 & Leg 2) مع مؤقت عد تنازلي اختياري (+6h, +12h, +24h, +48h).',
      aboutBullet3Title: 'أوضاع جوائز شفافة بـ BDT و USDT:',
      aboutBullet3Text:
        'شارات واضحة توضح ما إذا كانت الجائزة للفائز الأول فقط (Single Winner) أو لأفضل 3 فائزين (Top 3 Winners).',
      aboutBullet4Title: 'ملف تعريف بنقرة واحدة ودعم ذكي 24/7:',
      aboutBullet4Text:
        'اضغط على اسم أي لاعب لنسخ معرف UID الخاص به أو مراسلته عبر ماسنجر فوراً، مع مساعد دعم ذكي يعمل على مدار الساعة.',
      appInfoTitle: 'معلومات التطبيق والتوافق',
      infoSupportedOs: 'المنصة المدعومة',
      infoAndroidOnly: 'أندرويد فقط (APK) وتطبيق ويب PWA',
      infoRequiredAndroid: 'إصدار أندرويد المطلوب',
      infoAndroidVersion: 'Android 7.0 (Nougat) فما فوق (7+)',
      infoCurrentVersion: 'الإصدار الحالي',
      infoVersionVal: 'v2.4.5 (أحدث إصدار)',
      infoOfferedBy: 'مقدم من',
      infoPrizeSupport: 'عملات الجوائز',
      infoPrizeVal: 'يدعم BDT و USDT',
      infoPackageFormat: 'صيغة الحزمة',
    },
    section3: {
      protocolTag: 'بروتوكول الساحة وسير العمل',
      part2Strong: 'نظام متكامل — ',
      part2Text:
        'سواء كنت تنافس كلاعب للفوز بالجوائز أو تنظم البطولات كناشر/مضيف، فإن FC Arena VS يؤتمت كل مرحلة بسهولة.',
      headlineLeft: 'RULES OF',
      headlineMid: 'THE',
      headlineRight: 'ARENA VS',
      subBarLeft: 'الإصدار 2.4.5 — الدليل الرسمي',
      subBarRight: 'دليل اللاعبين والناشرين',
      rules: [
        {
          num: '01',
          title: 'مباراة واحدة أو ذهاب وإياب',
          desc: 'العب بطولات المجموعات وخروج المغلوب بنظام مباراة واحدة أو مباراتي ذهاب وإياب مع حساب النتيجة الإجمالية.',
        },
        {
          num: '02',
          title: 'تأكيد النتائج من خطوتين',
          desc: 'ارفع النتيجة مع إثبات المباراة؛ يتم اعتماد النتيجة وتحديث الجدول تلقائياً بعد تأكيد الخصم أو المنظم.',
        },
        {
          num: '03',
          title: 'ملف اللاعب بنقرة واحدة',
          desc: 'اضغط على اسم أي خصم في الجداول أو المباريات لنسخ معرف FC Mobile UID والتواصل معه عبر ماسنجر.',
        },
        {
          num: '04',
          title: 'جوائز BDT و USDT حقيقية',
          desc: 'شارك في البطولات العامة أو الخاصة (INV-XXXXXX) بنظام فائز واحد أو أفضل 3 فائزين.',
        },
      ],
      guidesSectionTitle: 'الدليل الشامل للاعبين والناشرين',
      guidesSectionSubtitle:
        'اختر التبويب أدناه لمعرفة كيفية انضمام اللاعبين وكيفية إنشاء وإدارة البطولات للمنظمين.',
      playerGuideTab: '🎮 دليل اللاعب (Players)',
      publisherGuideTab: '🛡️ دليل الناشر / المنظم (Organizers)',
      playerGuideBadge: 'الدور: PLAYER · منافسو FC MOBILE',
      playerGuideTitle: 'كيفية التسجيل والمنافسة والفوز كلاعب',
      playerGuideIntro:
        'أنشئ حساب لاعب مجاني للانضمام إلى البطولات والتنسيق مع الخصوم عبر ماسنجر والفوز بجوائز BDT أو USDT.',
      playerSteps: [
        {
          step: 'الخطوة 01',
          title: 'تسجيل حساب اللاعب الذكي',
          desc: 'اختر تبويب PLAYER وأدخل بريدك الإلكتروني، كلمة المرور، اسمك داخل اللعبة (IGN)، معرف UID الرقمي فقط (0-9)، ورابط فيسبوك/ماسنجر.',
        },
        {
          step: 'الخطوة 02',
          title: 'لوحة التحكم وجواز سفر الساحة',
          desc: 'احصل على بطاقة FC ARENA PASSPORT الخاصة بك (#XXXXXX) وحالة READY TO PLAY مع لوحة التكتيكات المتحركة والبحث الفوري.',
        },
        {
          step: 'الخطوة 03',
          title: 'استكشاف البطولات والانضمام إليها',
          desc: 'تصفح البطولات القادمة والمباشرة في تبويب ARENA. انضم للبطولات العامة بنقرة واحدة أو باستخدام كود INV-XXXXXX للبطولات الخاصة.',
        },
        {
          step: 'الخطوة 04',
          title: 'مركز مبارياتي والتواصل مع الخصم',
          desc: 'شاهد مبارياتك (مباراة واحدة أو ذهاب وإياب LEG 1 & LEG 2) ومؤقت العد التنازلي (⏳)، واضغط على اسم الخصم لنسخ UID ومراسلته.',
        },
        {
          step: 'الخطوة 05',
          title: 'رفع النتيجة ومتابعة الترتيب',
          desc: 'اضغط على UPLOAD SCORE لإدخال الأهداف ولقطة الشاشة. بعد التأكيد يتم تحديث جدول النقاط وشجرة الإقصائيات تلقائياً.',
        },
      ],
      publisherGuideBadge: 'الدور: PUBLISHER / HOST · منظمو البطولات',
      publisherGuideTitle: 'كيفية إنشاء وإدارة بطولات من 16 أو 32 أو 64 لاعباً',
      publisherGuideIntro:
        'يتولى محرك FC Arena VS توزيع المجموعات وجدولة المباريات وحساب النقاط والأدوار الإقصائية تلقائياً.',
      publisherSteps: [
        {
          step: 'الخطوة 01',
          title: 'تسجيل حساب المنظم (Host)',
          desc: 'اختر تبويب HOST وأدخل اسمك، اسم المنظمة أو الدوري الرسمي، ورابط التواصل عبر فيسبوك/ماسنجر.',
        },
        {
          step: 'الخطوة 02',
          title: 'إنشاء البطولة في 4 خطوات',
          desc: 'حدد نظام Group + Knockout أو Knockout، سعة 16/32/64 لاعباً، عامة أو بدعوة، وقيمة الجائزة بـ BDT أو USDT.',
        },
        {
          step: 'الخطوة 03',
          title: 'توزيع المجموعات التلقائي بنقرة واحدة',
          desc: 'عند اكتمال العدد اضغط Auto Group Distribution لتوزيع اللاعبين بالتساوي على المجموعات A و B و C و D.',
        },
        {
          step: 'الخطوة 04',
          title: 'نشر المباريات التلقائي ومؤقت المهلة',
          desc: 'انشر مباريات جولة واحدة أو ذهاب وإياب مع إمكانية تحديد مهلة زمنية (+6h, +12h, +24h, +48h).',
        },
        {
          step: 'الخطوة 05',
          title: 'اعتماد النتائج والتأهل للأدوار الإقصائية',
          desc: 'يمكن للمنظم تعديل أو تأكيد أي نتيجة ونقل المتأهلين إلى ربع ونصف النهائي والنهائي بنقرة واحدة.',
        },
      ],
    },
    section4: {
      topHeadline:
        'FC ARENA VS V2.4.5: 4 وحدات رئيسية، بنية فائقة السرعة ومركز بطولات مباشر!',
      part1Tag: 'حساب مزدوج وتحقق ذكي — الجزء 1',
      part1Desc:
        'تحقق رقمي صارم لمعرف FC Mobile UID وروابط تواصل موثقة وتنسيق دقيق لجوائز BDT و USDT.',
      part2Tag: 'قاعدة بيانات متعددة ودعم ذكي 24/7 — الجزء 2',
      part2Desc:
        'أداء فائق السرعة لمئات البطولات المتزامنة مع مساعد ذكي مدمج يجيب على كافة الاستفسارات.',
      modulesTitle: 'وحدات التطبيق الـ 4 الرئيسية',
      modulesSubtitle: 'كل شيء داخل FC ARENA VS منظم في 4 تبويبات رئيسية مع دعم ذكي.',
      modules: [
        {
          tab: '01 · DASHBOARD',
          title: 'الساحة النخبوية وجواز السفر',
          desc: 'بحث فوري عن البطولات مع رسوم متحركة للوحة تكتيكات كرة القدم ثنائية الأبعاد.',
          highlights: [
            'بطاقة جواز سفر FC Arena (PLAYER / HOST / ADMIN)',
            'عرض الكؤوس النشطة وجوائز الفائز الواحد أو أفضل 3',
            'بطاقة متابعة ومشاركة صفحة فيسبوك الرسمية',
          ],
        },
        {
          tab: '02 · ARENA',
          title: 'ساحتي ومركز الاستكشاف',
          desc: 'استعرض البطولات القادمة والمباشرة والمنتهية مع تفاصيل شاملة في 6 تبويبات.',
          highlights: [
            'المباريات وجداول الترتيب التلقائية (MP, W, D, L, GD, PTS)',
            'شجرة الأدوار الإقصائية مع مجموع الذهاب والإياب',
            'لوحة تحكم Command خاصة بمنظمي البطولات',
          ],
        },
        {
          tab: '03 · MY MATCH',
          title: 'مركز المباريات المخصص',
          desc: 'تابع جميع مبارياتك المجدولة والمرفوعة والمكتملة في شاشة واحدة.',
          highlights: [
            'بطاقات مزدوجة لمباراتي الذهاب والإياب (Leg 1 & Leg 2)',
            'مؤقت عد تنازلي مباشر للمباراة (⏳)',
            'رفع النتيجة مباشرة وزر مراسلة الخصم عبر ماسنجر',
          ],
        },
        {
          tab: '04 · PROFILE',
          title: 'الملف الشخصي والمظهر وبوابة المنظم',
          desc: 'إدارة معرف UID وروابط التواصل والتبديل بين الوضع الفاتح والوضع الداكن.',
          highlights: [
            'التبديل الفوري بين Light Mode و Dark Glass UI',
            'وصول مباشر لإنشاء البطولات ولوحة تحكم المنظم',
            'تحديث التطبيق بنقرة واحدة عبر تيليجرام أو كروم',
          ],
        },
      ],
      featuresTitle: 'أبرز مميزات المنصة (V2.4.5)',
      featuresSubtitle: 'مصممة خصيصاً لمجتمعات EA Sports FC Mobile التنافسية.',
      features: [
        {
          title: 'أوضاع فائزين شفافة',
          desc: 'توضيح كامل لجوائز الفائز الأول فقط أو المراكز الثلاثة الأولى بعملتي BDT و USDT.',
        },
        {
          title: 'نافذة ملف اللاعب بنقرة واحدة',
          desc: 'اضغط على اسم أي لاعب في أي مكان لنسخ UID الخاص به ومراسلته عبر ماسنجر.',
        },
        {
          title: 'محرك مباراة أو مباراتين',
          desc: 'جدولة مباريات فردية أو ذهاب وإياب مع حساب المجموع ومؤقتات من +6h إلى +48h.',
        },
        {
          title: 'مساعد دعم ذكي 24/7',
          desc: 'إجابات فورية لآلاف الأسئلة حول البطولات والمباريات بدون الحاجة لاتصال خارجي.',
        },
      ],
      leftCardTag: 'مواجهة الفرق',
      leftCardSub: 'منافسو القسم',
      leftCardTitle: 'تشكيلة القادة',
      centerCardTop: 'البطولة',
      centerCardSpec1Label: 'النظام:',
      centerCardSpec1Val: '1V1 H2H وكؤوس إقصائية',
      centerCardSpec2Label: 'وضع الناشر:',
      centerCardSpec2Val: 'إنشاء واستضافة البطولات',
      centerCardSpec3Label: 'فئة الجوائز:',
      centerCardSpec3Val: 'BDT و USDT · 16/32/64 فريقاً',
      centerCardBtn: 'انضم الآن',
      rightCardTag: 'قائمة 7 لاعبين',
      rightCardSub: 'مرحلة الأبطال',
      rightCardTitle: 'فريق الساحة 2026',
      telemetryTag: '⑥ مؤشرات الساحة المباشرة',
      telemetryTitle: 'نشاط H2H المباشر ونبض اللوبي',
      telemetryDesc: 'حركة المباريات المباشرة ومزامنة قنوات المجتمع في منصة FC Arena VS.',
    },
    section5: {
      finalCallTag: '⑦ نداء المرحلة النهائية · V2.4.5',
      seasonQuestion: 'الموسم 27 ؟',
      enterPortalBtn: 'دخول ساحة الويب',
      downloadApkBtn: 'تحميل التطبيق (v2.4.5)',
      telegramBtn: 'تيليجرام الرسمي',
      facebookBtn: 'صفحة فيسبوك',
      officialSiteLink: 'الموقع الرسمي ↗',
    },
  },

  vi: {
    nav: {
      enterArena: 'Vào Đấu Trường',
      topCups: 'GIẢI ĐẤU HÀNG ĐẦU',
      arenaStats: 'THỐNG KÊ ARENA',
      appDownload: 'TẢI ỨNG DỤNG',
      rulesGuide: 'LUẬT & HƯỚNG DẪN',
      matchHub: 'CÁC PHÂN HỆ APP',
      languageLabel: 'Ngôn ngữ',
    },
    hero: {
      seasonStamp: 'MÙA 27 / V2.4.5',
      joinTournamentPill: 'Bạn có thể tham gia giải đấu FC Mobile H2H.',
      createPublisherPill: 'Bạn có thể tạo giải đấu với tư cách nhà phát hành.',
      descSeries: 'TỔNG QUAN · PHIÊN BẢN V2.4.5',
      descPart1Strong: 'ESPORTS THẾ HỆ MỚI — ',
      descPart1Text:
        'Nền tảng giải đấu EA Sports FC Mobile H2H đỉnh cao. Tranh tài giành giải thưởng BDT & USDT thực tế, theo dõi bảng xếp hạng & nhánh đấu loại trực tiếp, hoặc tự tổ chức giải đấu.',
      joinNowBtn: 'THAM GIA NGAY',
      tickerText: 'FC ARENA VS · GIẢI ĐẤU H2H · GIẢI THƯỞNG BDT & USDT · V2.4.5',
    },
    section2: {
      engineTag: 'HỆ THỐNG GIẢI ĐẤU',
      studioBadge: 'FC ARENA STUDIO',
      statMatches: 'Trận đấu',
      statActiveCups: 'Cúp đang mở',
      statDivisions: 'Chế độ giải thưởng',
      quote:
        '“NHẬN THẺ PASS VÀ BƯỚC VÀO ĐẤU TRƯỜNG. TRANH TÀI TẠI VÒNG BẢNG & CÚP LOẠI TRỰC TIẾP ĐỂ GIÀNH GIẢI THƯỞNG BDT & USDT!”',
      seasonPassLabel: 'HỘ CHIẾU FC ARENA',
      claimPassTitle: 'NHẬN PASS NGAY',
      storeBadge: 'DANH SÁCH ỨNG DỤNG ANDROID CHÍNH THỨC',
      verifiedApk: 'APK ĐÃ XÁC MINH · V2.4.5',
      appSubtitle: 'Nền tảng Giải đấu & Nhà phát hành EA Sports FC Mobile H2H',
      reviewsLabel: '2.4K đánh giá',
      downloadsLabel: 'Lượt tải',
      androidOsLabel: 'Hệ điều hành Android',
      ratedLabel: 'Độ tuổi 3+',
      downloadApkBtn: 'Tải Ứng Dụng (APK v2.4.5)',
      continueWebsiteBtn: 'Continue to website (Tiếp tục tới Website)',
      telegramBtn: 'Telegram Chính Thức',
      facebookBtn: 'Trang Facebook Chính Thức',
      safeApkNote:
        'Gói cài đặt Android (.apk) an toàn đã xác minh · Hỗ trợ Android 7.0 trở lên',
      screenshotsTitle: 'Ảnh chụp màn hình ứng dụng',
      screenshotsSubtitle:
        'Vuốt hoặc dùng mũi tên để xem toàn bộ 15 màn hình trong ứng dụng (chạm vào ảnh để phóng to)',
      aboutAppTitle: 'Về ứng dụng này (About App)',
      aboutAppIntro:
        'FC ARENA VS (v2.4.5) là nền tảng quản lý giải đấu eSports thế hệ mới dành cho game thủ EA Sports FC Mobile và các nhà tổ chức cộng đồng. Tự động hóa từ đăng ký, chia bảng, xếp lịch Lượt đi & Lượt về, đồng hồ đếm ngược đến bảng điểm và nhánh đấu.',
      aboutBullet1Title: 'Hệ thống Tài khoản Kép (Player & Host):',
      aboutBullet1Text:
        'Người chơi đăng ký bằng IGN, UID số và link Messenger; Nhà tổ chức đăng ký bằng tên Giải đấu/Tổ chức để tạo giải 16, 32 hoặc 64 người.',
      aboutBullet2Title: 'Công cụ 1 Trận & 2 Trận (Lượt đi & Lượt về):',
      aboutBullet2Text:
        'Hỗ trợ đấu 1 trận hoặc 2 trận (Leg 1 & Leg 2 hiển thị song song) cùng bộ đếm ngược thời hạn +6h, +12h, +24h hoặc +48h.',
      aboutBullet3Title: 'Chế độ Giải thưởng BDT & USDT Minh bạch:',
      aboutBullet3Text:
        'Hiển thị rõ ràng huy hiệu Single Winner (Chỉ hạng 1) hoặc Top 3 Winners (Hạng 1, 2, 3) bằng BDT hoặc USDT.',
      aboutBullet4Title: 'Hồ sơ 1-Chạm & AI Hỗ trợ 24/7:',
      aboutBullet4Text:
        'Chạm vào tên bất kỳ người chơi nào để sao chép UID hoặc nhắn tin Messenger ngay lập tức, tích hợp AI hỗ trợ 24/7 và giao diện Sáng/Tối.',
      appInfoTitle: 'Thông tin & Tương thích',
      infoSupportedOs: 'Nền tảng hỗ trợ',
      infoAndroidOnly: 'Chỉ Android (APK) & Web PWA',
      infoRequiredAndroid: 'Yêu cầu Android',
      infoAndroidVersion: 'Android 7.0 (Nougat) trở lên (7+)',
      infoCurrentVersion: 'Phiên bản hiện tại',
      infoVersionVal: 'v2.4.5 (Mới nhất)',
      infoOfferedBy: 'Cung cấp bởi',
      infoPrizeSupport: 'Tiền tệ giải thưởng',
      infoPrizeVal: 'Hỗ trợ BDT & USDT',
      infoPackageFormat: 'Định dạng gói',
    },
    section3: {
      protocolTag: 'QUY TRÌNH & LUẬT ĐẤU TRƯỜNG',
      part2Strong: 'HỆ SINH THÁI TOÀN DIỆN — ',
      part2Text:
        'Dù bạn thi đấu với tư cách Tuyển thủ (Player) hay tổ chức giải với tư cách Nhà phát hành (Publisher/Host), FC Arena VS đều tự động hóa mọi giai đoạn.',
      headlineLeft: 'RULES OF',
      headlineMid: 'THE',
      headlineRight: 'ARENA VS',
      subBarLeft: 'PHIÊN BẢN 2.4.5 — HƯỚNG DẪN CHÍNH THỨC',
      subBarRight: 'QUY TRÌNH PLAYER & PUBLISHER',
      rules: [
        {
          num: '01',
          title: 'Thể thức 1 Trận & 2 Trận',
          desc: 'Thi đấu Vòng bảng + Loại trực tiếp với thể thức 1 trận hoặc 2 lượt (Home & Away) tính tổng tỷ số và đồng hồ đếm ngược.',
        },
        {
          num: '02',
          title: 'Xác minh Kết quả 2 Bước',
          desc: 'Tải lên tỷ số cùng ảnh chụp màn hình trận đấu; kết quả được cập nhật tự động sau khi đối thủ hoặc Host xác nhận.',
        },
        {
          num: '03',
          title: 'Xem Hồ sơ Mọi nơi',
          desc: 'Chạm vào tên đối thủ ở bảng điểm, lịch đấu hoặc nhánh đấu để sao chép FC Mobile UID và nhắn tin qua Messenger.',
        },
        {
          num: '04',
          title: 'Giải thưởng BDT & USDT Thực',
          desc: 'Tham gia giải Công khai (Public) hoặc Mời riêng (INV-XXXXXX) với cơ cấu Single Winner hoặc Top 3 Winners.',
        },
      ],
      guidesSectionTitle: 'HƯỚNG DẪN CHI TIẾT CHO PLAYER & PUBLISHER',
      guidesSectionSubtitle:
        'Chuyển tab bên dưới để xem cách Người chơi tham gia thi đấu và cách Nhà phát hành tạo & điều hành giải đấu.',
      playerGuideTab: '🎮 Hướng dẫn Người chơi (Players)',
      publisherGuideTab: '🛡️ Hướng dẫn Nhà phát hành (Organizers)',
      playerGuideBadge: 'VAI TRÒ: PLAYER · GAME THỦ FC MOBILE',
      playerGuideTitle: 'Cách Đăng ký, Thi đấu & Giành chiến thắng',
      playerGuideIntro:
        'Tạo tài khoản Player miễn phí để tham gia giải đấu, liên hệ đối thủ qua Messenger và giành giải thưởng BDT hoặc USDT.',
      playerSteps: [
        {
          step: 'BƯỚC 01',
          title: 'Đăng ký Tài khoản Player',
          desc: 'Chọn tab PLAYER khi đăng ký. Nhập Email, Mật khẩu, Tên trong game FC Mobile (IGN), FC Mobile UID (chỉ nhập số 0-9) và link Facebook/Messenger.',
        },
        {
          step: 'BƯỚC 02',
          title: 'Thẻ Hộ chiếu & Bảng điều khiển',
          desc: 'Nhận thẻ FC ARENA PASSPORT (#XXXXXX) với trạng thái READY TO PLAY, bảng chiến thuật 2D sống động và thanh tìm kiếm giải đấu tức thì.',
        },
        {
          step: 'BƯỚC 03',
          title: 'Khám phá & Tham gia Giải đấu',
          desc: 'Xem các giải UPCOMING và LIVE trong tab ARENA. Tham gia giải PUBLIC bằng 1 chạm hoặc nhập mã INV-XXXXXX cho giải kín.',
        },
        {
          step: 'BƯỚC 04',
          title: 'Trung tâm MY MATCH & Liên hệ Đối thủ',
          desc: 'Xem lịch đấu 1 trận hoặc 2 trận (LEG 1 & LEG 2) cùng đồng hồ đếm ngược (⏳). Chạm vào tên đối thủ để sao chép UID và nhắn tin Messenger.',
        },
        {
          step: 'BƯỚC 05',
          title: 'Báo cáo Tỷ số & Theo dõi Bảng điểm',
          desc: 'Nhấn UPLOAD SCORE để nhập số bàn thắng và ảnh chụp kết quả. Sau khi xác nhận, bảng xếp hạng (MP, W, D, L, GD, PTS) sẽ tự động cập nhật.',
        },
      ],
      publisherGuideBadge: 'VAI TRÒ: PUBLISHER / HOST · NHÀ TỔ CHỨC GIẢI',
      publisherGuideTitle: 'Cách Tạo & Điều hành Giải đấu 16, 32 hoặc 64 Người',
      publisherGuideIntro:
        'Không cần bảng tính thủ công. Matchmaking Engine của FC Arena VS tự động chia bảng, xếp lịch và điều phối vòng loại trực tiếp.',
      publisherSteps: [
        {
          step: 'BƯỚC 01',
          title: 'Đăng ký Tài khoản Host',
          desc: 'Chọn tab HOST khi đăng ký. Nhập Tên của bạn, Tên Tổ chức/Giải đấu và link Facebook/Messenger hỗ trợ (không cần UID game).',
        },
        {
          step: 'BƯỚC 02',
          title: 'Tạo Giải đấu qua 4 Bước',
          desc: 'Chọn Group + Knockout hoặc Knockout; 16, 32 hoặc 64 Slot; Public hoặc Invited; và thiết lập giải thưởng bằng BDT hoặc USDT (Single Winner hoặc Top 3).',
        },
        {
          step: 'BƯỚC 03',
          title: 'Chia Bảng Tự động bằng 1 Chạm',
          desc: 'Khi đủ người chơi, nhấn Auto Group Distribution để chia đều người chơi vào Bảng A, B, C, D một cách tự động.',
        },
        {
          step: 'BƯỚC 04',
          title: 'Xếp Lịch Tự động & Đồng hồ Đếm ngược',
          desc: 'Triển khai vòng tròn 1 lượt hoặc 2 lượt (Home & Away) và tùy chọn gắn thời hạn +6h, +12h, +24h hoặc +48h (⏳).',
        },
        {
          step: 'BƯỚC 05',
          title: 'Duyệt Kết quả & Tiến vào Vòng Knockout',
          desc: 'Host có quyền Approve hoặc Edit mọi tỷ số và nhấn 1 nút để đưa các tay chơi đầu bảng vào Tứ kết, Bán kết và Chung kết.',
        },
      ],
    },
    section4: {
      topHeadline:
        'FC ARENA VS V2.4.5: 4 PHÂN HỆ CỐT LÕI, KIẾN TRÚC TỐC ĐỘ CAO & TRUNG TÂM GIẢI ĐẤU TRỰC TIẾP!',
      part1Tag: 'TÀI KHOẢN KÉP & XÁC THỰC THÔNG MINH — PHẦN 1',
      part1Desc:
        'Kiểm tra UID dạng số nghiêm ngặt, xác thực link Messenger và định dạng tiền thưởng BDT/USDT chuẩn xác.',
      part2Tag: 'CƠ SỞ DỮ LIỆU ĐA PHÂN MẢNH & AI 24/7 — PHẦN 2',
      part2Desc:
        'Tốc độ xử lý siêu nhanh cho hàng trăm giải đấu cùng lúc và trợ lý AI nội bộ hỗ trợ 24/7.',
      modulesTitle: '4 PHÂN HỆ CHÍNH TRONG ỨNG DỤNG',
      modulesSubtitle: 'Mọi tính năng của FC ARENA VS được bố trí gọn gàng trong 4 tab điều hướng chính.',
      modules: [
        {
          tab: '01 · DASHBOARD',
          title: 'Đấu Trường Elite & Hộ Chiếu',
          desc: 'Tìm kiếm giải đấu tức thì kết hợp hiệu ứng bảng chiến thuật bóng đá 2D thời gian thực.',
          highlights: [
            'Thẻ FC Arena Passport (PLAYER / HOST / ADMIN)',
            'Danh sách Cúp đang mở với huy hiệu Single Winner & Top 3',
            'Thẻ theo dõi & chia sẻ Trang Facebook chính thức',
          ],
        },
        {
          tab: '02 · ARENA',
          title: 'My Arena & Khám Phá Giải Đấu',
          desc: 'Duyệt các giải UPCOMING, LIVE, END với thanh tiến độ 16/32/64 slot và 6 tab chi tiết.',
          highlights: [
            'Lịch thi đấu & Bảng xếp hạng tự động (MP, W, D, L, GD, PTS)',
            'Sơ đồ nhánh đấu Knockout trực quan tính tổng tỷ số',
            'Bảng điều khiển Command dành riêng cho Host',
          ],
        },
        {
          tab: '03 · MY MATCH',
          title: 'Trung Tâm Trận Đấu Cá Nhân',
          desc: 'Theo dõi tất cả các trận đấu Scheduled, Reported và Completed của bạn tại một nơi duy nhất.',
          highlights: [
            'Thẻ cặp trận Lượt đi & Lượt về (Leg 1 & Leg 2) song song',
            'Đồng hồ đếm ngược thời hạn trận đấu (⏳)',
            'Tải lên tỷ số & nút mở chat Messenger đối thủ',
          ],
        },
        {
          tab: '04 · PROFILE',
          title: 'Hồ Sơ, Giao Diện & Cổng Host',
          desc: 'Quản lý UID, liên kết mạng xã hội và chuyển đổi giữa Light Mode và Dark Glassmorphic UI.',
          highlights: [
            'Chuyển đổi mượt mà giữa Light Mode & Dark Cyber-Esports UI',
            'Truy cập nhanh Create Tournament & Host Dashboard',
            'Cập nhật ứng dụng 1 chạm qua Telegram hoặc Chrome',
          ],
        },
      ],
      featuresTitle: 'ĐIỂM NHẤN NỀN TẢNG (V2.4.5)',
      featuresSubtitle: 'Được thiết kế chuyên biệt cho cộng đồng EA Sports FC Mobile.',
      features: [
        {
          title: 'Chế độ Giải thưởng Minh bạch',
          desc: 'Hiển thị rõ giải thưởng dành cho Single Winner (Hạng 1) hay Top 3 Winners (Hạng 1, 2, 3) bằng BDT/USDT.',
        },
        {
          title: 'Hồ sơ Người chơi 1-Chạm',
          desc: 'Chạm vào tên bất kỳ người chơi nào để mở cửa sổ hồ sơ, sao chép UID và nhắn tin Messenger.',
        },
        {
          title: 'Công cụ 1 Trận & 2 Trận',
          desc: 'Hỗ trợ đấu đơn hoặc Lượt đi & Lượt về tự động tính tổng tỷ số cùng hẹn giờ +6h đến +48h.',
        },
        {
          title: 'AI Hỗ trợ Tích hợp 24/7',
          desc: 'Trả lời tức thì hàng ngàn câu hỏi về giải đấu, luật chơi và cách tổ chức giải.',
        },
      ],
      leftCardTag: 'ĐỐI ĐẦU ĐỘI HÌNH',
      leftCardSub: 'DIVISION RIVALS',
      leftCardTitle: 'ĐỘI HÌNH ĐỘI TRƯỞNG',
      centerCardTop: 'GIẢI ĐẤU',
      centerCardSpec1Label: 'THỂ THỨC:',
      centerCardSpec1Val: '1V1 H2H & CÚP LOẠI TRỰC TIẾP',
      centerCardSpec2Label: 'CHẾ ĐỘ PUBLISHER:',
      centerCardSpec2Val: 'TẠO & TỔ CHỨC GIẢI ĐẤU',
      centerCardSpec3Label: 'GIẢI THƯỞNG:',
      centerCardSpec3Val: 'BDT & USDT · 16/32/64 ĐỘI',
      centerCardBtn: 'Tham Gia Ngay',
      rightCardTag: 'ĐỘI HÌNH 7 NGƯỜI',
      rightCardSub: 'CHAMPIONS STAGE',
      rightCardTitle: 'ARENA SQUAD 2026',
      telemetryTag: '⑥ TIỆN ÍCH THỐNG KÊ TRỰC TIẾP',
      telemetryTitle: 'HOẠT ĐỘNG H2H & NHỊP ĐẬP PHÒNG CHỜ',
      telemetryDesc: 'Lưu lượng trận đấu trực tiếp và đồng bộ hóa kênh cộng đồng trên FC Arena VS.',
    },
    section5: {
      finalCallTag: '⑦ LỜI KÊU GỌI CUỐI · V2.4.5',
      seasonQuestion: 'Mùa 27 ?',
      enterPortalBtn: 'Vào Web Arena',
      downloadApkBtn: 'Tải Ứng Dụng (v2.4.5)',
      telegramBtn: 'Telegram Chính Thức',
      facebookBtn: 'Trang Facebook',
      officialSiteLink: 'TRANG CHÍNH THỨC ↗',
    },
  },

  zh: {
    nav: {
      enterArena: '进入竞技场',
      topCups: '热门杯赛',
      arenaStats: '竞技场数据',
      appDownload: '下载应用',
      rulesGuide: '规则与指南',
      matchHub: '核心模块',
      languageLabel: '语言',
    },
    hero: {
      seasonStamp: '第 27 赛季 / V2.4.5',
      joinTournamentPill: '您可以参加 FC Mobile H2H 锦标赛。',
      createPublisherPill: '您可以作为主办方（Publisher）创建专属锦标赛。',
      descSeries: '平台概览 · V2.4.5 正式版',
      descPart1Strong: '次世代电竞平台 — ',
      descPart1Text:
        '专为 EA Sports FC Mobile 打造的终极 H2H 锦标赛管理平台。参与赢取真实 BDT 与 USDT 奖金，实时查看小组积分榜与淘汰赛对阵图，或轻松举办您的专属联赛。',
      joinNowBtn: '立即加入',
      tickerText: 'FC ARENA VS · H2H 锦标赛 · BDT 与 USDT 奖金 · V2.4.5',
    },
    section2: {
      engineTag: '锦标赛引擎',
      studioBadge: 'FC ARENA STUDIO',
      statMatches: '总比赛数',
      statActiveCups: '进行中杯赛',
      statDivisions: '奖励模式',
      quote:
        '“领取您的通行证并进入竞技场。参与小组联赛和淘汰赛，赢取丰厚的 BDT 与 USDT 奖金！”',
      seasonPassLabel: 'FC ARENA 通行证',
      claimPassTitle: '领取通行证',
      storeBadge: '官方 ANDROID 应用商店详情',
      verifiedApk: '官方认证 APK · V2.4.5',
      appSubtitle: 'EA Sports FC Mobile H2H 锦标赛与主办方平台',
      reviewsLabel: '2.4K 条评价',
      downloadsLabel: '下载量',
      androidOsLabel: '安卓系统',
      ratedLabel: '适合 3 岁以上',
      downloadApkBtn: '下载安卓应用 (APK v2.4.5)',
      continueWebsiteBtn: 'Continue to website (继续访问网页版)',
      telegramBtn: '官方 Telegram 频道',
      facebookBtn: '官方 Facebook 主页',
      safeApkNote:
        '经过安全验证的 Android 安装包 (.apk) · 支持 Android 7.0 及以上系统版本',
      screenshotsTitle: '应用内截图预览',
      screenshotsSubtitle:
        '左右滑动或使用箭头浏览全部 15 张应用内界面截图（点击任意图片可放大查看）',
      aboutAppTitle: '关于此应用 (About App)',
      aboutAppIntro:
        'FC ARENA VS (v2.4.5) 是专为 EA Sports FC Mobile 玩家和社区组织者打造的次世代电竞赛事管理应用。从玩家报名、自动分组抽签、主客场赛程部署、实时倒计时到积分榜与淘汰赛对阵表，全流程自动化管理。',
      aboutBullet1Title: '双账户系统（玩家 Player 与主办方 Host）：',
      aboutBullet1Text:
        '玩家使用游戏昵称 (IGN)、纯数字 UID 和 Messenger 链接注册；主办方使用联赛/组织名称注册，可举办 16、32 或 64 人规模的比赛。',
      aboutBullet2Title: '单场与主客场双回合（Home & Away）引擎：',
      aboutBullet2Text:
        '支持单循环或双回合（Leg 1 与 Leg 2 并排卡片展示），并可设置 +6h、+12h、+24h 或 +48h 实时比赛倒计时。',
      aboutBullet3Title: '透明的 BDT 与 USDT 奖金分配模式：',
      aboutBullet3Text:
        '赛事卡片清晰标注独享冠军（Single Winner）或前三名获奖（Top 3 Winners - 冠亚季军奖金明细）。',
      aboutBullet4Title: '随处点击查看资料与 24/7 智能客服 AI：',
      aboutBullet4Text:
        '在应用任意位置点击玩家名字即可复制其 FC Mobile UID 或直接打开 Messenger 聊天，内置全天候智能客服与亮色/暗黑毛玻璃主题。',
      appInfoTitle: '应用信息与设备兼容性',
      infoSupportedOs: '支持平台',
      infoAndroidOnly: '仅限 Android (APK) 与 Web PWA',
      infoRequiredAndroid: '安卓版本要求',
      infoAndroidVersion: 'Android 7.0 (Nougat) 及以上 (7+)',
      infoCurrentVersion: '当前版本',
      infoVersionVal: 'v2.4.5 (最新发布)',
      infoOfferedBy: '开发者/提供方',
      infoPrizeSupport: '支持奖金币种',
      infoPrizeVal: '支持 BDT 与 USDT',
      infoPackageFormat: '安装包格式',
    },
    section3: {
      protocolTag: '竞技场规则与工作流',
      part2Strong: '完整赛事生态 — ',
      part2Text:
        '无论您是争夺冠军奖金的参赛玩家，还是组织大型联赛的主办方，FC Arena VS 都能自动完成每个赛段的管理。',
      headlineLeft: 'RULES OF',
      headlineMid: 'THE',
      headlineRight: 'ARENA VS',
      subBarLeft: '版本 2.4.5 — 官方操作指南',
      subBarRight: '玩家与主办方完整流程',
      rules: [
        {
          num: '01',
          title: '单场与主客场双回合制',
          desc: '支持小组赛+淘汰赛或纯淘汰赛，提供单场决胜或主客场两回合总比分（Aggregate）计算及实时倒计时。',
        },
        {
          num: '02',
          title: '两步赛果验证机制',
          desc: '赛后上传比分与比赛截图凭证，经对手或主办方确认后自动更新积分榜与晋级图，确保绝对公平。',
        },
        {
          num: '03',
          title: '一键复制 UID 与联系对手',
          desc: '在积分榜、对阵表或比赛卡片中点击任意玩家名字，即可一键复制其 FC Mobile UID 并通过 Messenger 联系约战。',
        },
        {
          num: '04',
          title: '真实 BDT 与 USDT 奖金池',
          desc: '参加公开赛（Public）或邀请赛（INV-XXXXXX），赢取冠军独享或前三名分级的丰厚奖励。',
        },
      ],
      guidesSectionTitle: '玩家与主办方完整指南',
      guidesSectionSubtitle:
        '切换下方标签，了解参赛玩家如何报名比赛，以及主办方如何创建和管理锦标赛。',
      playerGuideTab: '🎮 玩家指南 (Players)',
      publisherGuideTab: '🛡️ 主办方指南 (Publishers / Hosts)',
      playerGuideBadge: '角色：PLAYER · FC MOBILE 参赛选手',
      playerGuideTitle: '如何作为玩家注册、参赛并赢取奖金',
      playerGuideIntro:
        '免费注册玩家账号，加入公开或受邀锦标赛，通过 Messenger 与对手约战并赢取 BDT 或 USDT 奖励。',
      playerSteps: [
        {
          step: '步骤 01',
          title: '智能玩家账号注册',
          desc: '在注册页选择 PLAYER 标签，填写邮箱、密码、FC Mobile 游戏内昵称 (IGN)、纯数字 UID (0-9) 以及有效的 Facebook/Messenger 链接。',
        },
        {
          step: '步骤 02',
          title: '专属竞技场通行证与主页',
          desc: '登录后即可查看您的 FC ARENA PASSPORT 卡片（唯一编号 #XXXXXX 与 READY TO PLAY 状态）、实时 2D 战术板动画及赛事搜索栏。',
        },
        {
          step: '步骤 03',
          title: '发现并加入公开或私密杯赛',
          desc: '在 ARENA 标签浏览即将开始和进行中的比赛。一键加入 PUBLIC 公开赛，或输入 INV-XXXXXX 邀请码加入私密赛事。',
        },
        {
          step: '步骤 04',
          title: 'MY MATCH 中心与联系对手',
          desc: '查看您的单场或双回合（LEG 1 & LEG 2）赛程及倒计时（⏳）。点击对手名字即可复制 UID 并在 Messenger 上沟通比赛时间。',
        },
        {
          step: '步骤 05',
          title: '上传比分与实时积分追踪',
          desc: '点击 UPLOAD SCORE 提交主客场进球数与比赛截图。确认后小组积分榜（MP, W, D, L, GD, PTS）和淘汰赛总比分将自动更新。',
        },
      ],
      publisherGuideBadge: '角色：PUBLISHER / HOST · 赛事组织者',
      publisherGuideTitle: '如何创建并管理 16、32 或 64 人锦标赛',
      publisherGuideIntro:
        '告别繁琐的手动表格！FC Arena VS 匹配引擎自动完成分组抽签、赛程生成、积分计算和淘汰赛晋级。',
      publisherSteps: [
        {
          step: '步骤 01',
          title: '注册主办方（Host）账号',
          desc: '在注册页选择 HOST 标签，填写您的姓名、官方赛事组织/联赛名称以及 Facebook/Messenger 联系方式（无需填写游戏 UID）。',
        },
        {
          step: '步骤 02',
          title: '四步快速创建锦标赛',
          desc: '选择小组+淘汰赛或纯淘汰赛；16/32/64 人规模；公开或邀请制；设置 BDT 或 USDT 奖金池（独享冠军或前三名分配）。',
        },
        {
          step: '步骤 03',
          title: '一键自动分组抽签',
          desc: '在 Command 与 Players 页面管理选手。名额满后点击 Auto Group Distribution，系统将自动把选手平均分配至 A、B、C、D 各组。',
        },
        {
          step: '步骤 04',
          title: '自动生成赛程与限时计时器',
          desc: '一键生成单循环（1 场）或双循环主客场（2 场）赛程，并可选择添加 +6h、+12h、+24h 或 +48h 完赛倒计时（⏳）。',
        },
        {
          step: '步骤 05',
          title: '赛果审核权限与一键晋级淘汰赛',
          desc: '主办方拥有随时审核或修改比分的权限。小组赛结束后一键将各组前两名晋级至 16 强、8 强、半决赛直至总决赛。',
        },
      ],
    },
    section4: {
      topHeadline:
        'FC ARENA VS V2.4.5：四大核心功能模块、高速分布式架构与实时赛事中心！',
      part1Tag: '双角色系统与智能校验 — 第一部分',
      part1Desc:
        '严格的纯数字 FC Mobile UID 校验、真实社交链接验证以及规范的 BDT/USDT 奖金池格式。',
      part2Tag: '多分片高速数据库与 24/7 AI — 第二部分',
      part2Desc:
        '采用多节点分片架构确保数百场赛事同时流畅运行，并配备无需外部网络的 24/7 智能客服引擎。',
      modulesTitle: '四大核心应用模块 (CORE MODULES)',
      modulesSubtitle: 'FC ARENA VS 通过 4 个直观的导航标签页与悬浮 AI 助手提供完整体验。',
      modules: [
        {
          tab: '01 · DASHBOARD',
          title: '精英竞技场与通行证',
          desc: '支持按赛事名称、主办方或 ID 即时搜索，配备实时 2D 足球战术板动画展示。',
          highlights: [
            'FC Arena Passport 通行证卡片（PLAYER / HOST / ADMIN）',
            '热门杯赛展示，清晰标注独享冠军或前三名奖励',
            '内置官方 Facebook 主页关注与一键分享卡片',
          ],
        },
        {
          tab: '02 · ARENA',
          title: '我的竞技场与赛事发现中心',
          desc: '浏览即将开始、进行中和已结束的赛事，提供 16/32/64 人进度条与 6 大详情页签。',
          highlights: [
            '赛程表与全自动积分榜（MP, W, D, L, GF, GA, GD, PTS）',
            '可视化淘汰赛晋级树与两回合总比分计算',
            '专为主办方打造的 Command 赛事控制终端',
          ],
        },
        {
          tab: '03 · MY MATCH',
          title: '专属个人比赛中心',
          desc: '在一个页面集中查看您参加的所有待进行、待确认和已完成的比赛。',
          highlights: [
            '主客场双回合（Leg 1 & Leg 2）并排卡片展示',
            '实时完赛倒计时提醒（⏳）',
            '直接上传比分与一键打开对手 Messenger 聊天',
          ],
        },
        {
          tab: '04 · PROFILE',
          title: '个人资料、主题切换与主办方入口',
          desc: '管理您的游戏 UID、社交链接，并在明亮模式与暗黑毛玻璃电竞主题间自由切换。',
          highlights: [
            '一键切换 Light Mode 与 Dark Glassmorphic UI',
            '快速进入 Create Tournament 与主办方管理后台',
            '通过 Telegram 或 Chrome 一键检测并更新应用版本',
          ],
        },
      ],
      featuresTitle: '平台核心亮点功能 (V2.4.5)',
      featuresSubtitle: '专为 EA Sports FC Mobile 电竞社区量身定制。',
      features: [
        {
          title: '透明的奖金分配模式',
          desc: '清晰展示 Single Winner（仅冠军）或 Top 3 Winners（冠亚季军）的 BDT/USDT 奖金明细。',
        },
        {
          title: '随处点击查看选手弹窗',
          desc: '在应用任意列表或对阵图中点击选手名字，即可复制其 UID 并直接发起 Messenger 聊天。',
        },
        {
          title: '单场与主客场双回合引擎',
          desc: '灵活部署单场或两回合主客场赛制，支持自动计算总比分及 +6h 至 +48h 限时倒计时。',
        },
        {
          title: '24/7 内置智能客服 AI',
          desc: '内置本地知识引擎，全天候即时解答关于报名、传图、建赛及规则的各类问题。',
        },
      ],
      leftCardTag: '战队正面对决',
      leftCardSub: '分区宿敌',
      leftCardTitle: '队长首发阵容',
      centerCardTop: '官方锦标赛',
      centerCardSpec1Label: '比赛赛制：',
      centerCardSpec1Val: '1V1 H2H 与淘汰赛杯赛',
      centerCardSpec2Label: '主办方模式：',
      centerCardSpec2Val: '创建并举办专属锦标赛',
      centerCardSpec3Label: '奖金池规模：',
      centerCardSpec3Val: 'BDT & USDT · 16/32/64 支战队',
      centerCardBtn: '立即加入',
      rightCardTag: '7 人完整阵容',
      rightCardSub: '冠军舞台',
      rightCardTitle: '2026 竞技场战队',
      telemetryTag: '⑥ 实时竞技场遥测组件',
      telemetryTitle: '实时 H2H 活跃度与大厅脉搏',
      telemetryDesc: 'FC Arena VS 锦标赛生态系统的实时比赛流量与社区频道同步。',
    },
    section5: {
      finalCallTag: '⑦ 终极舞台召集 · V2.4.5',
      seasonQuestion: '第 27 赛季 ?',
      enterPortalBtn: '进入网页版竞技场',
      downloadApkBtn: '下载应用 (v2.4.5)',
      telegramBtn: '官方 Telegram',
      facebookBtn: 'Facebook 主页',
      officialSiteLink: '官方网站 ↗',
    },
  },
};
