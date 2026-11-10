import React from 'react';
import { TranslationContent } from '../i18n/translations';

interface Section1HeroProps {
  t: TranslationContent['hero'];
}

export const Section1Hero: React.FC<Section1HeroProps> = ({ t }) => {
  return (
    <section
      id="section-1"
      className="relative w-full bg-[#111215] text-[#f3f3f1] pt-36 sm:pt-32 pb-0 overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Concentric Dark Radar Circles Centered Behind the Hero Stage */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden z-0">
        <div className="w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[660px] md:h-[660px] rounded-full border border-white/[0.06] bg-white/[0.014]" />
        <div className="absolute w-[480px] h-[480px] sm:w-[760px] sm:h-[760px] md:w-[980px] md:h-[980px] rounded-full border border-white/[0.04]" />
      </div>

      {/* Main Editorial Hero Container */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-5 sm:px-8 md:px-12 pt-3 md:pt-6 flex flex-col">
        {/* Top Editorial Announcement Strip */}
        <div className="pb-3 border-b border-white/[0.08]">
          <div className="hero-kicker flex items-center justify-between gap-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.16em] text-zinc-400 mb-3">
            <span className="text-zinc-300 font-semibold">FC ARENA VS OFFICIAL</span>

            {/* Center Triple Vertical Bar Emblem */}
            <div className="flex items-center gap-1.5">
              <span className="w-1 sm:w-1.5 h-5 sm:h-6 bg-white inline-block" />
              <span className="w-1 sm:w-1.5 h-5 sm:h-6 bg-[#d9232e] inline-block" />
              <span className="w-1 sm:w-1.5 h-5 sm:h-6 bg-white inline-block" />
            </div>

            <div className="text-right text-zinc-400">{t.seasonStamp}</div>
          </div>

          {/* Core Platform Highlights: Join H2H Tournament & Create as Publisher */}
          <div className="hero-pillars grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4 items-center text-sm sm:text-base md:text-lg font-editorial font-bold uppercase tracking-[0.06em] text-zinc-100">
            <div className="flex items-center gap-2.5 text-left bg-white/[0.03] border border-white/[0.07] px-3.5 py-2 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-[#d9232e] shrink-0 shadow-[0_0_8px_#d9232e]" />
              <span>{t.joinTournamentPill}</span>
            </div>
            <div className="flex items-center md:justify-end gap-2.5 text-left md:text-right bg-white/[0.03] border border-white/[0.07] px-3.5 py-2 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-white shrink-0" />
              <span>{t.createPublisherPill}</span>
            </div>
          </div>
        </div>

        {/* Center Stage: Giant Condensed "WELCOME TO FC ARENA VS" Typography Only (No Person Image) */}
        <div className="relative my-10 sm:my-14 md:my-20 py-6 sm:py-10 flex items-center justify-center">
          <div
            id="hero-bg-text"
            className="relative z-10 w-full flex flex-col items-center justify-center pointer-events-none"
          >
            {/* Central Vivid Crimson Circle Behind the Giant Editorial Letters */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] rounded-full bg-[#d9232e] shadow-[0_0_85px_rgba(217,35,46,0.55)] z-0" />

            {/* Giant Condensed Editorial Typography: WELCOME TO FC ARENA VS */}
            <h1 className="hero-main-title relative z-10 font-editorial font-bold text-[#f3f3f1] uppercase text-center select-none drop-shadow-[0_12px_34px_rgba(0,0,0,0.65)] flex flex-col items-center">
              <span className="block text-[clamp(2.2rem,9.5vw,7.5rem)] leading-[0.88] tracking-[0.03em] text-white/95">
                WELCOME TO
              </span>
              <span className="block text-[clamp(3.6rem,16.5vw,14.5rem)] leading-[0.84] tracking-[-0.02em] mt-1 sm:mt-2 whitespace-nowrap">
                FC ARENA VS
              </span>
            </h1>
          </div>
        </div>

        {/* Bottom Editorial Row: Left Description Block + Right "JOIN NOW (↗)" & Rotating Stamp */}
        <div className="relative z-30 pb-7 pt-2 flex flex-col md:flex-row items-start md:items-end justify-between gap-5">
          {/* Bottom-Left Editorial Note */}
          <div className="hero-slide-left max-w-md space-y-2 bg-[#111215]/85 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none p-3.5 md:p-0 rounded-xl border border-white/[0.06] md:border-none">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-400">
              <span className="w-4 h-4 rounded-full border border-zinc-600 inline-flex items-center justify-center text-[9px] text-white">
                1
              </span>
              <span>{t.descSeries}</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              <strong className="text-white uppercase tracking-wider">
                {t.descPart1Strong}
              </strong>
              {t.descPart1Text}
            </p>
          </div>

          {/* Bottom-Right "JOIN NOW (↗)" Pill + Circular Rotating Stamp */}
          <div className="hero-slide-right flex items-center justify-between md:justify-end w-full md:w-auto gap-4 self-end">
            <a href="#app-download-store" className="editorial-pill-btn group">
              <span className="font-editorial font-bold text-xs sm:text-sm uppercase tracking-[0.14em]">
                {t.joinNowBtn}
              </span>
              <span className="w-8 h-8 rounded-full bg-[#d9232e] group-hover:scale-105 transition-transform inline-flex items-center justify-center text-white text-xs font-bold">
                &#8599;
              </span>
            </a>

            {/* Rotating Stamp Emblem */}
            <a
              href="#app-download-store"
              className="relative w-13 h-13 sm:w-15 sm:h-15 rounded-full border border-white/25 bg-[#16171b] flex items-center justify-center overflow-hidden shrink-0"
              aria-label="FC Arena VS Official Emblem"
            >
              <img
                src="assets/aistudio/fc-arena-logo.png"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://fc-arena-h2h.github.io/tournament.com/pwa-192x192.png?v=2';
                }}
                alt="FC Arena VS"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover animate-spin-stamp"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Crimson-Red & Black Marquee Ticker Ribbon Divider */}
      <div className="relative z-30 w-full bg-[#d9232e] py-2.5 border-y border-black/30 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.65)]">
        <div className="animate-marquee-ticker flex items-center gap-6">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 shrink-0">
              <span className="w-6 h-6 rounded-full bg-[#111215] text-white font-editorial font-bold text-[10px] inline-flex items-center justify-center">
                VS
              </span>
              <span className="font-editorial font-bold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#111215]">
                {t.tickerText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
