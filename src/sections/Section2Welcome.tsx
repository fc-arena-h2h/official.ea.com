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

export const Section2Welcome: React.FC<Section2WelcomeProps> = ({
  onOpenModal,
  t,
}) => {
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

  const handleManualNext = () => {
    setIsFlashActive(true);
    setActiveIndex((prev) => (prev + 1) % STAR_PLAYER_SLIDES.length);
    setTimeout(() => setIsFlashActive(false), 1000);
  };

  const scrollScreenshots = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const amount = direction === 'left' ? -300 : 300;
    scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const leftSlideIndex = activeIndex;
  const rightSlideIndex = (activeIndex + 1) % STAR_PLAYER_SLIDES.length;

  return (
    <section
      id="section-2"
      className="relative w-full bg-[#f4f4f0] overflow-hidden select-none"
    >
      {/* Dark Curved-Arch Stage Sitting Above the Off-White Editorial Section */}
      <div className="dark-arch-bottom relative w-full bg-[#111215] text-[#f3f3f1] pt-16 sm:pt-20 pb-20 sm:pb-28 px-3 sm:px-6 md:px-12 shadow-[0_24px_60px_rgba(0,0,0,0.22)] overflow-hidden">
        {/* Subtle Concentric Radar Circle Behind the Center Collage */}
        <div className="pointer-events-none absolute left-1/2 bottom-[-120px] -translate-x-1/2 w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] rounded-full border border-white/[0.06] bg-white/[0.015]" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-3 sm:px-0">
          {/* Top 3-Zone Editorial Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-10">
            {/* Left Column: ② TOURNAMENT ENGINE + Red "FC ARENA STUDIO" Badge + Play Button & Dots */}
            <div className="anim-slide-left lg:col-span-3 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                  <span className="w-4 h-4 rounded-full border border-zinc-600 inline-flex items-center justify-center text-[9px] text-white">
                    2
                  </span>
                  <span>{t.engineTag}</span>
                </div>

                <div className="inline-block px-3.5 py-1.5 bg-[#d9232e] text-white font-editorial font-bold text-base sm:text-lg tracking-[0.12em] uppercase">
                  {t.studioBadge}
                </div>
              </div>

              {/* Circular Action Button & 7 Interactive Pagination Dots */}
              <div className="pt-4 space-y-4">
                <button
                  type="button"
                  onClick={handleManualNext}
                  className="w-10 h-10 rounded-full border border-white/25 hover:border-[#d9232e] flex items-center justify-center text-white text-xs transition-colors cursor-pointer"
                  aria-label="Cycle Star Player Cards"
                >
                  &#9655;
                </button>
                <div className="flex items-center gap-2">
                  {STAR_PLAYER_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setIsFlashActive(true);
                        setActiveIndex(idx);
                        setTimeout(() => setIsFlashActive(false), 1000);
                      }}
                      className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                        idx === activeIndex
                          ? 'w-5 bg-[#d9232e] shadow-[0_0_10px_rgba(217,35,46,0.8)]'
                          : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                      }`}
                      aria-label={`Select player card ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Center Column: 3 Circular Stat Badges */}
            <div className="anim-slide-up lg:col-span-6 flex items-center justify-center gap-3 sm:gap-5">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#f4f4f0] text-[#111215] flex flex-col items-center justify-center shadow-xl shrink-0">
                <span className="text-[10px] sm:text-xs font-medium text-zinc-600 uppercase tracking-wider text-center px-2">
                  {t.statMatches}
                </span>
                <span className="font-editorial font-bold text-3xl sm:text-5xl leading-none mt-1 tabular-nums">
                  147
                </span>
              </div>

              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#d9232e] text-white flex flex-col items-center justify-center shadow-[0_12px_35px_rgba(217,35,46,0.45)] shrink-0">
                <span className="text-[10px] sm:text-xs font-medium text-white/85 uppercase tracking-wider text-center px-2">
                  {t.statActiveCups}
                </span>
                <span className="font-editorial font-bold text-3xl sm:text-5xl leading-none mt-1 tabular-nums">
                  6
                </span>
              </div>

              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#18191e] border border-white/15 text-white flex flex-col items-center justify-center shrink-0">
                <span className="text-[10px] sm:text-xs font-medium text-zinc-400 uppercase tracking-wider text-center px-2">
                  {t.statDivisions}
                </span>
                <span className="font-editorial font-bold text-3xl sm:text-5xl leading-none mt-1 tabular-nums">
                  3
                </span>
              </div>
            </div>

            {/* Right Column: Uppercase Condensed Editorial Quote */}
            <div className="anim-slide-right lg:col-span-3 flex flex-col items-start lg:items-end text-left lg:text-right">
              <p className="font-editorial font-bold text-sm sm:text-base md:text-lg uppercase leading-snug tracking-[0.04em] text-zinc-200 max-w-[260px]">
                {t.quote}
              </p>
            </div>
          </div>

          {/* Center Arch Collage & Flanking Left/Right Circular Orbs */}
          <div className="relative mt-20 sm:mt-24 flex items-end justify-between gap-4">
            <a
              href="#app-download-store"
              className="hidden lg:flex w-14 h-14 rounded-full bg-[#d9232e] hover:scale-105 transition-transform items-center justify-center text-white shadow-[0_10px_28px_rgba(217,35,46,0.5)] shrink-0"
              aria-label="Download App"
            >
              <span className="w-2 h-2 rounded-full bg-white" />
            </a>

            {/* Wide Collage Container so Left & Right Back Cards Sit Clearly Out to Both Sides */}
            <div className="anim-slide-up relative mx-auto w-full max-w-[370px] sm:max-w-[560px] md:max-w-[640px] flex items-center justify-center pt-16 sm:pt-16">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_#fcd34d]" />
                </div>

                <div className="relative z-10 flex-1 w-full flex items-center justify-center">
                  {STAR_PLAYER_SLIDES.map((player, idx) => {
                    const isActive = idx === leftSlideIndex;
                    return (
                      <img
                        key={player.src}
                        src={player.src}
                        alt={player.name}
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

                <div className="relative z-20 flex items-center justify-between">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
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
                <div className="p-3 sm:p-4 bg-[#14151b] flex items-center justify-between">
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      {t.seasonPassLabel}
                    </div>
                    <div className="font-editorial font-bold text-sm sm:text-base uppercase text-white tracking-wide">
                      {t.claimPassTitle}
                    </div>
                  </div>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d9232e] text-white inline-flex items-center justify-center text-xs font-bold shrink-0">
                    &#8599;
                  </span>
                </div>
              </a>
            </div>

            <button
              type="button"
              onClick={onOpenModal}
              className="hidden lg:flex w-14 h-14 rounded-full bg-[#f4f4f0] hover:scale-105 transition-transform items-center justify-center text-[#111215] shadow-xl shrink-0 cursor-pointer"
              aria-label="Inspect Pass"
            >
              <span className="w-2 h-2 rounded-full bg-[#111215]" />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          GOOGLE PLAY STORE STYLE MOBILE APP DOWNLOAD SECTION (Below Section 2)
      ====================================================================== */}
      <div
        id="app-download-store"
        className="scroll-mt-28 relative w-full max-w-[1160px] mx-auto px-4 sm:px-6 md:px-10 pt-12 sm:pt-16 pb-10 text-[#111215]"
      >
        <div className="anim-slide-up rounded-[2rem] bg-white border border-black/[0.08] shadow-[0_24px_60px_rgba(17,18,21,0.08)] p-5 sm:p-8 md:p-10">
          {/* Top Store Badge Kicker */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-black/[0.07]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111215] text-white text-[10px] font-mono uppercase tracking-[0.18em]">
              <Smartphone className="w-3.5 h-3.5 text-[#d9232e]" />
              <span>{t.storeBadge}</span>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
              {t.verifiedApk}
            </span>
          </div>

          {/* 1. App Icon + Title + Publisher Company Name ("FC ARENA VS OFFICIAL") */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4 sm:gap-6">
              {/* App Squircle Icon */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[1.35rem] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.22)] border border-black/10 shrink-0 bg-[#111215]">
                <img
                  src="assets/aistudio/fc-arena-logo.png"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://fc-arena-h2h.github.io/tournament.com/pwa-512x512.png?v=2';
                  }}
                  alt="FC ARENA VS App Icon"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* App Title & Company Name */}
              <div className="space-y-1">
                <h2 className="font-editorial font-bold text-2xl sm:text-4xl tracking-tight text-[#111215] uppercase leading-none">
                  FC ARENA VS
                </h2>
                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className="text-xs sm:text-sm font-bold text-[#01875f] tracking-wide uppercase">
                    FC ARENA VS OFFICIAL
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#01875f] shrink-0" />
                </div>
                <p className="text-xs text-zinc-500">{t.appSubtitle}</p>
              </div>
            </div>

            {/* 2. Play Store Style Rating, Downloads, Version & Age Strip */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 pt-2 md:pt-0 border-t md:border-t-0 border-black/[0.07]">
              <div className="flex flex-col items-center justify-center px-2 border-r border-black/[0.08]">
                <div className="flex items-center gap-1 font-bold text-sm sm:text-base text-[#111215]">
                  <span>4.9</span>
                  <Star className="w-3.5 h-3.5 fill-[#111215] text-[#111215]" />
                </div>
                <span className="text-[10px] sm:text-xs text-zinc-500 mt-0.5 text-center">
                  {t.reviewsLabel}
                </span>
              </div>

              <div className="flex flex-col items-center justify-center px-2 border-r border-black/[0.08]">
                <span className="font-bold text-sm sm:text-base text-[#111215]">
                  10K+
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 mt-0.5 text-center">
                  {t.downloadsLabel}
                </span>
              </div>

              <div className="flex flex-col items-center justify-center px-2 border-r border-black/[0.08]">
                <span className="font-bold text-sm sm:text-base text-[#01875f]">
                  7.0+
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 mt-0.5 text-center">
                  {t.androidOsLabel}
                </span>
              </div>

              <div className="flex flex-col items-center justify-center px-2">
                <span className="px-1.5 py-0.5 rounded border border-black/30 font-bold text-[10px] sm:text-xs text-[#111215] leading-none">
                  3+
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 mt-1 text-center">
                  {t.ratedLabel}
                </span>
              </div>
            </div>
          </div>

          {/* 3. Action Buttons: Download APK + Continue to Website + Official Telegram & Facebook */}
          <div className="mt-7 flex flex-col gap-3 max-w-2xl">
            {/* Primary APK Download Button */}
            <a
              href={APK_DOWNLOAD_URL}
              download="FC.ARENA.VS.v.2.4.5.apk"
              className="w-full py-3.5 px-6 rounded-xl bg-[#01875f] hover:bg-[#016f4e] active:scale-[0.99] text-white font-semibold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-[0_10px_25px_rgba(1,135,95,0.28)] transition-all cursor-pointer"
            >
              <Download className="w-5 h-5 shrink-0" />
              <span>{t.downloadApkBtn}</span>
            </a>

            {/* Secondary Button Directly Below: "Continue to website" */}
            <a
              href={LIVE_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 border border-black/15 text-[#111215] font-semibold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-[#d9232e] shrink-0" />
              <span>{t.continueWebsiteBtn}</span>
            </a>

            {/* Official Community Links from .md files (Telegram & Facebook Page) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <a
                href={OFFICIAL_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#0088cc]/10 hover:bg-[#0088cc]/20 border border-[#0088cc]/25 text-[#0077b5] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span>{t.telegramBtn}</span>
              </a>
              <a
                href={OFFICIAL_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#1877f2]/10 hover:bg-[#1877f2]/20 border border-[#1877f2]/25 text-[#1877f2] font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Share2 className="w-4 h-4 shrink-0" />
                <span>{t.facebookBtn}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-zinc-500 pt-0.5">
              <ShieldCheck className="w-4 h-4 text-[#01875f] shrink-0" />
              <span>{t.safeApkNote}</span>
            </div>
          </div>

          {/* 4. Play Store Horizontal App Screenshots Carousel */}
          <div className="mt-9 pt-7 border-t border-black/[0.08]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-editorial font-bold text-xl sm:text-2xl uppercase tracking-wide text-[#111215]">
                  {t.screenshotsTitle}
                </h3>
                <p className="text-xs text-zinc-500">{t.screenshotsSubtitle}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollScreenshots('left')}
                  className="w-9 h-9 rounded-full border border-black/15 hover:bg-black hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Scroll screenshots left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollScreenshots('right')}
                  className="w-9 h-9 rounded-full border border-black/15 hover:bg-black hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Scroll screenshots right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Horizontal Scrollable Screenshot Strip */}
            <div
              ref={scrollContainerRef}
              className="flex items-stretch gap-3.5 sm:gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory"
            >
              {APP_SCREENSHOTS.map((shot, idx) => (
                <div
                  key={shot.src}
                  onClick={() => setSelectedScreenshot(shot)}
                  className="snap-start shrink-0 w-[165px] sm:w-[200px] md:w-[220px] rounded-2xl overflow-hidden bg-[#111215] border border-black/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col"
                >
                  <div className="relative aspect-[9/19] w-full overflow-hidden bg-zinc-900">
                    <img
                      src={shot.src}
                      alt={shot.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/65 text-white font-mono text-[9px]">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="p-2.5 bg-white border-t border-black/5">
                    <p className="font-semibold text-xs text-[#111215] truncate">
                      {shot.title}
                    </p>
                    <p className="text-[10px] text-zinc-500 truncate mt-0.5">
                      {shot.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Play Store "About this app" Section + Technical Specifications */}
          <div className="mt-8 pt-7 border-t border-black/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-[#01875f]" />
                <h3 className="font-editorial font-bold text-xl sm:text-2xl uppercase tracking-wide text-[#111215]">
                  {t.aboutAppTitle}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                {t.aboutAppIntro}
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <Award className="w-4 h-4 text-[#d9232e] shrink-0 mt-0.5" />
                  <span>
                    <strong>{t.aboutBullet1Title}</strong> {t.aboutBullet1Text}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <Layers className="w-4 h-4 text-[#01875f] shrink-0 mt-0.5" />
                  <span>
                    <strong>{t.aboutBullet2Title}</strong> {t.aboutBullet2Text}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>{t.aboutBullet3Title}</strong> {t.aboutBullet3Text}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                  <Smartphone className="w-4 h-4 text-[#111215] shrink-0 mt-0.5" />
                  <span>
                    <strong>{t.aboutBullet4Title}</strong> {t.aboutBullet4Text}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Sports',
                  'eSports Tournament',
                  'FC Mobile H2H',
                  'BDT & USDT Prizes',
                  'Publisher Portal',
                  'Android APK v2.4.5',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-zinc-100 border border-black/10 text-xs font-medium text-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: App Info / Device Compatibility Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-zinc-50 border border-black/[0.08] p-5 space-y-3.5">
                <h4 className="font-editorial font-bold text-base sm:text-lg uppercase tracking-wide text-[#111215] border-b border-black/[0.07] pb-2.5">
                  {t.appInfoTitle}
                </h4>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-1 border-b border-black/[0.05]">
                    <span className="text-zinc-500">{t.infoSupportedOs}</span>
                    <span className="font-semibold text-[#01875f]">
                      {t.infoAndroidOnly}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-black/[0.05]">
                    <span className="text-zinc-500">
                      {t.infoRequiredAndroid}
                    </span>
                    <span className="font-semibold text-[#111215]">
                      {t.infoAndroidVersion}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-black/[0.05]">
                    <span className="text-zinc-500">
                      {t.infoCurrentVersion}
                    </span>
                    <span className="font-semibold text-[#111215]">
                      {t.infoVersionVal}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-black/[0.05]">
                    <span className="text-zinc-500">{t.infoPrizeSupport}</span>
                    <span className="font-semibold text-[#d9232e]">
                      {t.infoPrizeVal}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-black/[0.05]">
                    <span className="text-zinc-500">{t.infoOfferedBy}</span>
                    <span className="font-semibold text-[#111215]">
                      FC ARENA VS OFFICIAL
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-zinc-500">{t.infoPackageFormat}</span>
                    <span className="font-mono text-xs font-semibold text-[#111215]">
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
            className="relative max-w-sm w-full bg-[#16181d] rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
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
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
