import React, { useState, useEffect, useRef } from 'react';
import {
  Download,
  Globe,
  Star,
  ShieldCheck,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Info,
  Layers,
  Award,
  Send,
  Share2,
  X,
  ArrowUpRight,
  Youtube,
} from 'lucide-react';
import { TranslationContent } from '../i18n/translations';

interface Section2WelcomeProps {
  onOpenModal: () => void;
  t: TranslationContent['section2'];
}

interface StarPlayerSlide {
  src: string;
  name: string;
  tag: string;
  ovr: string;
}

const STAR_PLAYER_SLIDES: StarPlayerSlide[] = [
  {
    src: 'assets/aistudio/images__28_-removebg-preview_8fccebd3.png',
    name: 'MBAPPE',
    tag: 'VIP PASS',
    ovr: 'FC 27',
  },
  {
    src: 'assets/aistudio/gettyimages-2234200789-removebg-preview_15fe8a72.png',
    name: 'RONALDO',
    tag: 'ICON 7',
    ovr: 'ARENA',
  },
  {
    src: 'assets/aistudio/Messi-2-removebg-preview_5ea71b86.png',
    name: 'MESSI 10',
    tag: 'GOAT PASS',
    ovr: 'FC 27',
  },
  {
    src: 'assets/aistudio/images__32_-removebg-preview_2eb99551.png',
    name: 'YAMAL',
    tag: 'NEXT GEN',
    ovr: '1V1 H2H',
  },
  {
    src: 'assets/aistudio/images__31_-removebg-preview_f89281c1.png',
    name: 'NEYMAR JR',
    tag: 'SKILL PRO',
    ovr: 'FC 27',
  },
  {
    src: 'assets/aistudio/images__30_-removebg-preview_deb450de.png',
    name: 'LEO MESSI',
    tag: 'LEGEND 10',
    ovr: 'ARENA',
  },
  {
    src: 'assets/aistudio/cnf4ksKuECnyo5wG_Stadiumastro-removebg-preview_be0262f3.png',
    name: 'NEYMAR 10',
    tag: 'CHAMPION',
    ovr: '1V1 H2H',
  },
];

interface AppScreenshot {
  src: string;
  title: string;
  caption: string;
}

const APP_SCREENSHOTS: AppScreenshot[] = [
  {
    src: 'assets/aistudio/Screenshot_20261110-130349_c4f7a45e.jpg',
    title: 'Elite Arena Dashboard',
    caption: 'Player passport, 2D Tactics Board & active cups',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-130411_973daa18.jpg',
    title: 'Discover Tournaments',
    caption: 'Join Group + Knockout cups with BDT/USDT prize pools',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-130951_b7e9be32.jpg',
    title: 'Pro Series Tournament Hub',
    caption: 'Live participant counter, group tables, brackets & rules',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-130425_494853a0.jpg',
    title: 'My Match Center',
    caption: 'Track Leg 1 & Leg 2 aggregate scores and match history',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-131055_38c38956.jpg',
    title: 'Group Standings & Fixtures',
    caption: 'Real-time points table (P, W, D, L, GD, PTS) & match deadlines',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-131108_86592d39.jpg',
    title: 'Knockout Quarter Finals',
    caption: 'Interactive left & right bracket progression',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-130808_2774b01b.jpg',
    title: 'Publisher Portal',
    caption: 'Create official competitions or sandbox demo tournaments',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-130905_219b2806.jpg',
    title: 'Tournament Structure Setup',
    caption: 'Configure Group + Knockout formats, 16/32/64 slots & prizes',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-131012_c0652f55.jpg',
    title: 'Host Control Terminal',
    caption: 'Tournament Command center with auto-progression engine',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-131016_96d97fff.jpg',
    title: 'Automated Group & Match Deploy',
    caption: 'Shuffle balanced groups and deploy Home & Away fixtures',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-131028_e45f1a49.jpg',
    title: 'Matchmaking Engine',
    caption: 'Select 1-Match or 2-Match round-robin & custom play deadlines',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-131022_cec34be6.jpg',
    title: 'Score Authority & Custom Fixtures',
    caption: 'Choose Player Upload or Only Publisher score management',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-130442_8a7cd72d.jpg',
    title: 'Verified Player Profile',
    caption: 'Manage your Arena profile and connected social channels',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-130511_b1a781d7.jpg',
    title: 'Dark Glassmorphic UI',
    caption: 'Switch seamlessly between Light Mode and Dark Glass theme',
  },
  {
    src: 'assets/aistudio/Screenshot_20261110-130549_e0985b3c.jpg',
    title: 'Arena Menu & Services',
    caption: 'Push notifications, 24/7 player support & community links',
  },
];

const APK_DOWNLOAD_URL =
  'https://github.com/fc-arena-h2h/Tournament.app/releases/download/V2.4.5/FC.ARENA.VS.v.2.4.5.apk';
const LIVE_WEBSITE_URL = 'https://fc-arena-h2h.github.io/tournament.com';
const OFFICIAL_TELEGRAM_URL = 'https://t.me/fcarenavsofficial';
const OFFICIAL_FACEBOOK_URL =
  'https://www.facebook.com/profile.php?id=61595965529079';
const OFFICIAL_YOUTUBE_URL =
  'https://youtube.com/@fc-arena-vs-official?si=tmLv3zw8rNY5d24d';

export const Section2Welcome: React.FC<Section2WelcomeProps> = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlashActive, setIsFlashActive] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] =
    useState<AppScreenshot | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlashActive(true);
      setActiveIndex((prev) => (prev + 1) % STAR_PLAYER_SLIDES.length);
      setTimeout(() => setIsFlashActive(false), 1000);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  const handleManualStep = (dir: 'prev' | 'next') => {
    setIsFlashActive(true);
    setActiveIndex((prev) =>
      dir === 'next'
        ? (prev + 1) % STAR_PLAYER_SLIDES.length
        : (prev - 1 + STAR_PLAYER_SLIDES.length) % STAR_PLAYER_SLIDES.length
    );
    setTimeout(() => setIsFlashActive(false), 1000);
  };

  const scrollScreenshots = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const amount = direction === 'left' ? -320 : 320;
    scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const leftSlideIndex = activeIndex;
  const rightSlideIndex = (activeIndex + 1) % STAR_PLAYER_SLIDES.length;

  return (
    <section
      id="section-2"
      className="relative w-full bg-[#f4f4f0] overflow-hidden select-none"
    >
      {/* =====================================================================
          PART A: DARK CURVED-ARCH TOURNAMENT ENGINE & STAR PLAYER SHOWCASE
      ====================================================================== */}
      <div className="dark-arch-bottom relative w-full bg-[#0e1014] arena-grid-bg text-[#f3f3f1] pt-16 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-6 md:px-10 shadow-[0_24px_60px_rgba(0,0,0,0.2)] overflow-hidden">
        {/* Subtle Concentric Circle Behind Center Collage */}
        <div className="pointer-events-none absolute left-1/2 bottom-[-140px] -translate-x-1/2 w-[440px] h-[440px] sm:w-[600px] sm:h-[600px] rounded-full border border-white/[0.06] bg-white/[0.01]" />

        <div className="relative z-10 max-w-[1360px] mx-auto">
          {/* Top Section Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="anim-slide-left space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#ff4d58]">
                02. {t.engineTag}
              </div>
              <h2 className="font-editorial font-bold text-3xl sm:text-5xl uppercase tracking-tight text-white">
                {t.studioBadge}
              </h2>
            </div>

            <p className="anim-slide-right font-editorial font-bold text-sm sm:text-lg uppercase leading-snug tracking-[0.04em] text-zinc-300 max-w-md md:text-right">
              {t.quote}
            </p>
          </div>

          {/* Structured 3-Card Tournament Metric Strip */}
          <div className="anim-slide-up grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto mt-8 sm:mt-10">
            <div className="rounded-2xl bg-[#f4f4f0] text-[#0e1014] p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-lg">
              <span className="text-[10px] sm:text-xs font-mono font-semibold text-zinc-600 uppercase tracking-wider">
                {t.statMatches}
              </span>
              <span className="font-editorial font-bold text-3xl sm:text-5xl leading-none mt-1.5 tabular-nums">
                147
              </span>
            </div>

            <div className="rounded-2xl bg-[#d9232e] text-white p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_12px_30px_rgba(217,35,46,0.35)]">
              <span className="text-[10px] sm:text-xs font-mono font-semibold text-white/90 uppercase tracking-wider">
                {t.statActiveCups}
              </span>
              <span className="font-editorial font-bold text-3xl sm:text-5xl leading-none mt-1.5 tabular-nums">
                6
              </span>
            </div>

            <div className="rounded-2xl bg-[#151821] border border-white/15 text-white p-4 sm:p-6 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] sm:text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                {t.statDivisions}
              </span>
              <span className="font-editorial font-bold text-3xl sm:text-5xl leading-none mt-1.5 tabular-nums">
                3
              </span>
            </div>
          </div>

          {/* Center 3-Card Fanned Stage (Foreground Squad Card + Left & Right Star Player Cards) */}
          <div className="anim-slide-up relative mt-20 sm:mt-24 flex flex-col items-center">
            <div className="relative mx-auto w-full max-w-[370px] sm:max-w-[560px] md:max-w-[650px] flex items-center justify-center pt-16 sm:pt-16">
              {/* Ambient Light Aura Behind Cards */}
              <div
                className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-60 rounded-full blur-3xl transition-all duration-1000 ${
                  isFlashActive
                    ? 'bg-gradient-to-r from-[#ff3b47]/45 via-amber-300/35 to-[#38bdf8]/45 scale-110 opacity-100'
                    : 'bg-gradient-to-r from-[#d9232e]/25 via-white/10 to-[#38bdf8]/20 scale-100 opacity-75'
                }`}
              />

              {/* LEFT TILTED CRIMSON BACK CARD */}
              <div className="absolute -top-12 sm:-top-10 -left-3 sm:left-2 md:left-6 w-36 sm:w-48 md:w-52 h-48 sm:h-60 md:h-64 rounded-2xl bg-gradient-to-b from-[#ef2935] to-[#9e111b] -rotate-[16deg] sm:-rotate-[18deg] shadow-[0_20px_50px_rgba(217,35,46,0.45)] border border-white/25 p-3 sm:p-3.5 flex flex-col justify-between overflow-hidden z-10">
                <div
                  className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-1000 ${
                    isFlashActive ? 'opacity-95' : 'opacity-40'
                  }`}
                  style={{
                    background:
                      'radial-gradient(circle at 45% 35%, rgba(255,245,200,0.58) 0%, rgba(255,255,255,0.14) 45%, transparent 75%)',
                  }}
                />
                <div
                  className={`pointer-events-none absolute -inset-y-10 w-16 bg-gradient-to-r from-transparent via-white/45 to-transparent rotate-12 transition-transform duration-1000 ease-in-out ${
                    isFlashActive ? 'translate-x-56' : '-translate-x-28'
                  }`}
                />

                <div className="relative z-20 flex items-center justify-between">
                  <span className="font-editorial font-bold text-[10px] sm:text-xs tracking-widest text-white uppercase drop-shadow">
                    {STAR_PLAYER_SLIDES[leftSlideIndex].tag}
                  </span>
                </div>

                <div className="relative z-10 flex-1 w-full flex items-center justify-center">
                  {STAR_PLAYER_SLIDES.map((player, idx) => {
                    const isActive = idx === leftSlideIndex;
                    return (
                      <img
                        key={player.src}
                        src={player.src}
                        alt={player.name}
                        referrerPolicy="no-referrer"
                        className={`absolute left-0 right-2 bottom-[-4px] mx-auto w-[94%] h-[112%] object-contain object-bottom transition-all duration-1000 ease-in-out drop-shadow-[0_10px_20px_rgba(0,0,0,0.65)] ${
                          isActive
                            ? 'opacity-100 scale-100 translate-y-0 brightness-105 delay-150'
                            : 'opacity-0 scale-90 translate-y-2 brightness-125 pointer-events-none duration-500'
                        }`}
                      />
                    );
                  })}
                </div>

                <div className="relative z-20 flex items-end justify-between">
                  <span className="font-editorial font-bold text-lg sm:text-2xl text-white uppercase leading-none drop-shadow">
                    {STAR_PLAYER_SLIDES[leftSlideIndex].ovr}
                  </span>
                  <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-white/90 bg-black/30 px-1.5 py-0.5 rounded">
                    {STAR_PLAYER_SLIDES[leftSlideIndex].name}
                  </span>
                </div>
              </div>

              {/* RIGHT TILTED DARK BACK CARD */}
              <div className="absolute -top-12 sm:-top-10 -right-3 sm:right-2 md:right-6 w-36 sm:w-48 md:w-52 h-48 sm:h-60 md:h-64 rounded-2xl bg-gradient-to-b from-[#252834] to-[#13151c] rotate-[16deg] sm:rotate-[18deg] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20 p-3 sm:p-3.5 flex flex-col justify-between text-right overflow-hidden z-10">
                <div
                  className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-1000 ${
                    isFlashActive ? 'opacity-95' : 'opacity-45'
                  }`}
                  style={{
                    background:
                      'radial-gradient(circle at 55% 35%, rgba(56,189,248,0.45) 0%, rgba(217,35,46,0.25) 50%, transparent 75%)',
                  }}
                />
                <div
                  className={`pointer-events-none absolute -inset-y-10 w-16 bg-gradient-to-r from-transparent via-white/35 to-transparent -rotate-12 transition-transform duration-1000 ease-in-out ${
                    isFlashActive ? 'translate-x-56' : '-translate-x-28'
                  }`}
                />

                <div className="relative z-20 flex items-center justify-end">
                  <span className="font-editorial font-bold text-[10px] sm:text-xs tracking-widest text-[#ff4d58] uppercase drop-shadow">
                    {STAR_PLAYER_SLIDES[rightSlideIndex].tag}
                  </span>
                </div>

                <div className="relative z-10 flex-1 w-full flex items-center justify-center">
                  {STAR_PLAYER_SLIDES.map((player, idx) => {
                    const isActive = idx === rightSlideIndex;
                    return (
                      <img
                        key={player.src}
                        src={player.src}
                        alt={player.name}
                        referrerPolicy="no-referrer"
                        className={`absolute left-2 right-0 bottom-[-4px] mx-auto w-[94%] h-[112%] object-contain object-bottom transition-all duration-1000 ease-in-out drop-shadow-[0_10px_20px_rgba(0,0,0,0.75)] ${
                          isActive
                            ? 'opacity-100 scale-100 translate-y-0 brightness-105 delay-150'
                            : 'opacity-0 scale-90 translate-y-2 brightness-125 pointer-events-none duration-500'
                        }`}
                      />
                    );
                  })}
                </div>

                <div className="relative z-20 flex items-end justify-between">
                  <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-white/85 bg-white/10 px-1.5 py-0.5 rounded">
                    {STAR_PLAYER_SLIDES[rightSlideIndex].name}
                  </span>
                  <span className="font-editorial font-bold text-lg sm:text-2xl text-white uppercase leading-none drop-shadow">
                    {STAR_PLAYER_SLIDES[rightSlideIndex].ovr}
                  </span>
                </div>
              </div>

              {/* Main Foreground Squad Card */}
              <a
                href="#app-download-store"
                className="relative z-20 w-48 sm:w-64 md:w-72 rounded-2xl overflow-hidden bg-[#181a22] border-2 border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.92)] cursor-pointer group block"
              >
                <img
                  src="assets/aistudio/Screenshot_20261110-072518_4b2a73ad.jpg"
                  alt="FC ARENA VS Official Squad"
                  referrerPolicy="no-referrer"
                  className="w-full h-40 sm:h-48 md:h-52 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3.5 sm:p-4 bg-[#14151b] flex items-center justify-between">
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      {t.seasonPassLabel}
                    </div>
                    <div className="font-editorial font-bold text-sm sm:text-base uppercase text-white tracking-wide">
                      {t.claimPassTitle}
                    </div>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-[#d9232e] text-white inline-flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </div>

            {/* Integrated Player Card Control Bar Directly Underneath the Collage */}
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#151821] border border-white/10">
              <button
                type="button"
                onClick={() => handleManualStep('prev')}
                className="w-7 h-7 rounded-full bg-white/[0.06] hover:bg-[#d9232e] flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Previous Star Player Card"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-1.5 px-1">
                {STAR_PLAYER_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => {
                      setIsFlashActive(true);
                      setActiveIndex(idx);
                      setTimeout(() => setIsFlashActive(false), 1000);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIndex
                        ? 'w-6 bg-[#d9232e]'
                        : 'w-2 bg-zinc-600 hover:bg-zinc-400'
                    }`}
                    aria-label={`Show ${slide.name}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => handleManualStep('next')}
                className="w-7 h-7 rounded-full bg-white/[0.06] hover:bg-[#d9232e] flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Next Star Player Card"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          PART B: OFFICIAL GOOGLE PLAY STORE STYLE MOBILE APP DOWNLOAD HUB
      ====================================================================== */}
      <div
        id="app-download-store"
        className="scroll-mt-28 relative w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 pt-14 sm:pt-20 pb-12 text-[#0e1014]"
      >
        <div className="anim-slide-up rounded-3xl bg-white border border-black/[0.08] shadow-[0_20px_50px_rgba(14,16,20,0.06)] p-5 sm:p-8 md:p-10">
          {/* Top Store Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-7 border-b border-black/[0.07]">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.14em] text-[#0e1014]">
              <Smartphone className="w-4 h-4 text-[#01875f]" />
              <span>{t.storeBadge}</span>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 tabular-nums">
              {t.verifiedApk}
            </span>
          </div>

          {/* Balanced 12-Column App Store Hero Grid (App Identity on Left + Action Box on Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 Columns: App Icon + Title + Publisher + Play Store 4-Stat Strip */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                {/* App Squircle Icon */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-md border border-black/10 shrink-0 bg-[#0e1014]">
                  <img
                    src="assets/aistudio/fc-arena-logo.png"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://fc-arena-h2h.github.io/tournament.com/pwa-512x512.png?v=2';
                    }}
                    alt="FC ARENA VS App Icon"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* App Title & Company Name */}
                <div className="space-y-1">
                  <h2 className="font-editorial font-bold text-3xl sm:text-4xl tracking-tight text-[#0e1014] uppercase leading-none">
                    FC ARENA VS
                  </h2>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <span className="text-xs sm:text-sm font-bold text-[#01875f] tracking-wide uppercase">
                      FC ARENA VS OFFICIAL
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#01875f] shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    {t.appSubtitle}
                  </p>
                </div>
              </div>

              {/* Play Store Style Rating, Downloads, OS & Age Strip */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 py-4 px-3 rounded-2xl bg-zinc-50 border border-black/[0.06]">
                <div className="flex flex-col items-center justify-center px-2 border-r border-black/[0.08]">
                  <div className="flex items-center gap-1 font-bold text-sm sm:text-lg text-[#0e1014] tabular-nums">
                    <span>4.9</span>
                    <Star className="w-3.5 h-3.5 fill-[#0e1014] text-[#0e1014]" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-zinc-500 mt-0.5 text-center">
                    {t.reviewsLabel}
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center px-2 border-r border-black/[0.08]">
                  <span className="font-bold text-sm sm:text-lg text-[#0e1014] tabular-nums">
                    10K+
                  </span>
                  <span className="text-[10px] sm:text-xs text-zinc-500 mt-0.5 text-center">
                    {t.downloadsLabel}
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center px-2 border-r border-black/[0.08]">
                  <span className="font-bold text-sm sm:text-lg text-[#01875f] tabular-nums">
                    7.0+
                  </span>
                  <span className="text-[10px] sm:text-xs text-zinc-500 mt-0.5 text-center">
                    {t.androidOsLabel}
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center px-2">
                  <span className="px-1.5 py-0.5 rounded border border-black/30 font-bold text-[10px] sm:text-xs text-[#0e1014] leading-none tabular-nums">
                    3+
                  </span>
                  <span className="text-[10px] sm:text-xs text-zinc-500 mt-1 text-center">
                    {t.ratedLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Dedicated Download & Portal Action Panel */}
            <div className="lg:col-span-5 rounded-2xl bg-zinc-50 border border-black/[0.08] p-4 sm:p-5 flex flex-col gap-3">
              {/* Primary APK Download Button */}
              <a
                href={APK_DOWNLOAD_URL}
                download="FC.ARENA.VS.v.2.4.5.apk"
                className="w-full py-3.5 px-6 rounded-xl bg-[#01875f] hover:bg-[#016f4e] active:scale-[0.99] text-white font-semibold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-[0_8px_20px_rgba(1,135,95,0.25)] transition-all cursor-pointer whitespace-nowrap"
              >
                <Download className="w-5 h-5 shrink-0" />
                <span>{t.downloadApkBtn}</span>
              </a>

              {/* Secondary Button Directly Below: "Continue to website" */}
              <a
                href={LIVE_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-white hover:bg-zinc-100 border border-black/15 text-[#0e1014] font-semibold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                <Globe className="w-4 h-4 text-[#d9232e] shrink-0" />
                <span>{t.continueWebsiteBtn}</span>
              </a>

              {/* Official YouTube Channel (Video Tutorials) */}
              <a
                href={OFFICIAL_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#ff0000]/10 hover:bg-[#ff0000]/15 border border-[#ff0000]/25 text-[#cc0000] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
              >
                <Youtube className="w-4 h-4 shrink-0 text-[#ff0000]" />
                <span>Official YouTube (Video Tutorials)</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>

              {/* Official Community Links (Telegram & Facebook Page) */}
              <div className="grid grid-cols-2 gap-2.5 pt-0.5">
                <a
                  href={OFFICIAL_TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white hover:bg-[#0088cc]/10 border border-black/10 text-[#0077b5] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{t.telegramBtn}</span>
                </a>
                <a
                  href={OFFICIAL_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-white hover:bg-[#1877f2]/10 border border-black/10 text-[#1877f2] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                >
                  <Share2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{t.facebookBtn}</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-600 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#01875f] shrink-0" />
                <span>{t.safeApkNote}</span>
              </div>
            </div>
          </div>

          {/* 4. Play Store Horizontal App Screenshots Carousel */}
          <div className="mt-10 pt-8 border-t border-black/[0.08]">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-editorial font-bold text-2xl sm:text-3xl uppercase tracking-wide text-[#0e1014]">
                  {t.screenshotsTitle}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
                  {t.screenshotsSubtitle}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => scrollScreenshots('left')}
                  className="w-10 h-10 rounded-full border border-black/15 hover:bg-[#0e1014] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Scroll screenshots left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollScreenshots('right')}
                  className="w-10 h-10 rounded-full border border-black/15 hover:bg-[#0e1014] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Scroll screenshots right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Horizontal Scrollable Screenshot Strip */}
            <div
              ref={scrollContainerRef}
              className="flex items-stretch gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory"
            >
              {APP_SCREENSHOTS.map((shot, idx) => (
                <div
                  key={shot.src}
                  onClick={() => setSelectedScreenshot(shot)}
                  className="snap-start shrink-0 w-[170px] sm:w-[205px] md:w-[225px] rounded-2xl overflow-hidden bg-[#0e1014] border border-black/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col"
                >
                  <div className="relative aspect-[9/19] w-full overflow-hidden bg-zinc-900">
                    <img
                      src={shot.src}
                      alt={shot.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/70 text-white font-mono text-[10px] tabular-nums">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="p-3 bg-white border-t border-black/5">
                    <p className="font-semibold text-xs text-[#0e1014] truncate">
                      {shot.title}
                    </p>
                    <p className="text-[11px] text-zinc-500 truncate mt-0.5">
                      {shot.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Play Store "About this app" Section + Technical Specifications */}
          <div className="mt-10 pt-8 border-t border-black/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-[#01875f]" />
                <h3 className="font-editorial font-bold text-2xl sm:text-3xl uppercase tracking-wide text-[#0e1014]">
                  {t.aboutAppTitle}
                </h3>
              </div>

              <p className="text-sm text-zinc-700 leading-relaxed">
                {t.aboutAppIntro}
              </p>

              {/* Structured 2x2 Feature Highlight Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="rounded-xl bg-zinc-50 border border-black/[0.06] p-4 space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-[#0e1014]">
                    <Award className="w-4 h-4 text-[#d9232e] shrink-0" />
                    <span>{t.aboutBullet1Title}</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {t.aboutBullet1Text}
                  </p>
                </div>

                <div className="rounded-xl bg-zinc-50 border border-black/[0.06] p-4 space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-[#0e1014]">
                    <Layers className="w-4 h-4 text-[#01875f] shrink-0" />
                    <span>{t.aboutBullet2Title}</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {t.aboutBullet2Text}
                  </p>
                </div>

                <div className="rounded-xl bg-zinc-50 border border-black/[0.06] p-4 space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-[#0e1014]">
                    <Star className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{t.aboutBullet3Title}</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {t.aboutBullet3Text}
                  </p>
                </div>

                <div className="rounded-xl bg-zinc-50 border border-black/[0.06] p-4 space-y-1.5">
                  <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-[#0e1014]">
                    <Smartphone className="w-4 h-4 text-[#0e1014] shrink-0" />
                    <span>{t.aboutBullet4Title}</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {t.aboutBullet4Text}
                  </p>
                </div>
              </div>

              {/* Clean Unboxed Metadata Line */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-zinc-500">
                <span>Sports</span>
                <span>·</span>
                <span>eSports Tournament</span>
                <span>·</span>
                <span>FC Mobile H2H</span>
                <span>·</span>
                <span>BDT &amp; USDT Prizes</span>
                <span>·</span>
                <span>Publisher Portal</span>
                <span>·</span>
                <span>Android APK v2.4.5</span>
              </div>
            </div>

            {/* Right 5 Columns: App Info / Device Compatibility Table */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-zinc-50 border border-black/[0.08] p-5 sm:p-6 space-y-4">
                <h4 className="font-editorial font-bold text-lg sm:text-xl uppercase tracking-wide text-[#0e1014] border-b border-black/[0.08] pb-3">
                  {t.appInfoTitle}
                </h4>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-1.5 border-b border-black/[0.05]">
                    <span className="text-zinc-500">{t.infoSupportedOs}</span>
                    <span className="font-semibold text-[#01875f]">
                      {t.infoAndroidOnly}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-black/[0.05]">
                    <span className="text-zinc-500">
                      {t.infoRequiredAndroid}
                    </span>
                    <span className="font-semibold text-[#0e1014] tabular-nums">
                      {t.infoAndroidVersion}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-black/[0.05]">
                    <span className="text-zinc-500">
                      {t.infoCurrentVersion}
                    </span>
                    <span className="font-semibold text-[#0e1014] tabular-nums">
                      {t.infoVersionVal}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-black/[0.05]">
                    <span className="text-zinc-500">{t.infoPrizeSupport}</span>
                    <span className="font-semibold text-[#d9232e]">
                      {t.infoPrizeVal}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-black/[0.05]">
                    <span className="text-zinc-500">{t.infoOfferedBy}</span>
                    <span className="font-semibold text-[#0e1014]">
                      FC ARENA VS OFFICIAL
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-zinc-500">{t.infoPackageFormat}</span>
                    <span className="font-mono text-xs font-semibold text-[#0e1014]">
                      FC.ARENA.VS.v.2.4.5.apk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal when user clicks any App Screenshot */}
      {selectedScreenshot && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div
            className="relative max-w-sm w-full bg-[#151821] rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 text-white">
              <div>
                <h4 className="font-editorial font-bold text-base uppercase tracking-wide">
                  {selectedScreenshot.title}
                </h4>
                <p className="text-[11px] text-zinc-400">
                  {selectedScreenshot.caption}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedScreenshot(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#d9232e] flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close screenshot preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto bg-black flex justify-center">
              <img
                src={selectedScreenshot.src}
                alt={selectedScreenshot.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
