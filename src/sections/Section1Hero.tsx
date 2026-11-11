import React from 'react';
import { Trophy, Shield, ArrowUpRight } from 'lucide-react';
import { TranslationContent } from '../i18n/translations';

interface Section1HeroProps {
  t: TranslationContent['hero'];
}

export const Section1Hero: React.FC<Section1HeroProps> = ({ t }) => {
  return (
    <section
      id="section-1"
      className="relative w-full bg-[#0e1014] arena-grid-bg text-[#f3f3f1] pt-32 sm:pt-28 pb-0 overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Concentric Architectural Radar Circles Centered Behind the Hero Stage */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden z-0">
        <div className="w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] md:w-[640px] md:h-[640px] rounded-full border border-white/[0.06] bg-white/[0.01]" />
        <div className="absolute w-[460px] h-[460px] sm:w-[720px] sm:h-[720px] md:w-[940px] md:h-[940px] rounded-full border border-white/[0.04]" />
      </div>

      {/* Main Editorial Hero Container */}
      <div className="relative z-10 max-w-[1360px] w-full mx-auto px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 flex flex-col">
        {/* Top Metadata Strip */}
        <div className="hero-kicker pb-4 border-b border-white/[0.08] flex items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-400">
          <span className="text-zinc-200 font-semibold">FC ARENA VS OFFICIAL</span>
          <span className="hidden sm:inline text-zinc-500">·</span>
          <span className="hidden sm:inline text-zinc-400">EA SPORTS FC MOBILE H2H PLATFORM</span>
          <span className="hidden sm:inline text-zinc-500">·</span>
          <span className="text-zinc-300 tabular-nums">{t.seasonStamp}</span>
        </div>

        {/* Center Stage: Giant Condensed "WELCOME TO FC ARENA VS" Typography */}
        <div className="relative my-8 sm:my-12 md:my-16 py-6 sm:py-10 flex items-center justify-center">
          <div
            id="hero-bg-text"
            className="relative z-10 w-full flex flex-col items-center justify-center text-center"
          >
            {/* Central Sculpted Crimson Halo Behind the Giant Editorial Letters */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[170px] h-[170px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] rounded-full bg-[#d9232e] shadow-[0_0_90px_rgba(217,35,46,0.5)] z-0" />

            {/* Giant Condensed Editorial Typography: WELCOME TO FC ARENA VS */}
            <h1 className="hero-main-title relative z-10 font-editorial font-bold text-[#f3f3f1] uppercase text-center select-none drop-shadow-[0_12px_34px_rgba(0,0,0,0.7)] flex flex-col items-center">
              <span className="block text-[clamp(2rem,8vw,6.2rem)] leading-[0.9] tracking-[0.04em] text-white/95">
                WELCOME TO
              </span>
              <span className="block text-[clamp(3.5rem,15.5vw,13.5rem)] leading-[0.84] tracking-[-0.02em] mt-1 sm:mt-2 whitespace-nowrap">
                FC ARENA VS
              </span>
            </h1>
          </div>
        </div>

        {/* Structured 2-Column Role Cards: Player H2H Tournament & Publisher Portal */}
        <div className="hero-pillars grid grid-cols-1 md:grid-cols-2 gap-4 pb-8 border-b border-white/[0.08]">
          <a
            href="#app-download-store"
            className="group rounded-2xl bg-[#151821]/90 hover:bg-[#1a1e29] border border-white/[0.08] hover:border-[#d9232e]/50 p-5 sm:p-6 transition-all flex items-start justify-between gap-4"
          >
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-[#ff4d58]">
                <Trophy className="w-3.5 h-3.5 shrink-0" />
                <span>01 · PLAYER COMPETITIONS</span>
              </div>
              <p className="font-editorial font-bold text-lg sm:text-2xl uppercase tracking-wide text-white">
                {t.joinTournamentPill}
              </p>
            </div>
            <span className="w-9 h-9 rounded-full bg-white/[0.06] group-hover:bg-[#d9232e] text-white inline-flex items-center justify-center transition-colors shrink-0 mt-1">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>

          <a
            href="#section-3"
            className="group rounded-2xl bg-[#151821]/90 hover:bg-[#1a1e29] border border-white/[0.08] hover:border-white/30 p-5 sm:p-6 transition-all flex items-start justify-between gap-4"
          >
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-emerald-400">
                <Shield className="w-3.5 h-3.5 shrink-0" />
                <span>02 · ORGANIZER &amp; HOST HUB</span>
              </div>
              <p className="font-editorial font-bold text-lg sm:text-2xl uppercase tracking-wide text-white">
                {t.createPublisherPill}
              </p>
            </div>
            <span className="w-9 h-9 rounded-full bg-white/[0.06] group-hover:bg-white group-hover:text-[#0e1014] text-white inline-flex items-center justify-center transition-colors shrink-0 mt-1">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Bottom Editorial Row: Left Overview + Right Primary Action */}
        <div className="relative z-30 py-6 sm:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Editorial Description */}
          <div className="hero-slide-left max-w-xl space-y-1.5">
            <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-400">
              01. {t.descSeries}
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              <strong className="text-white font-semibold">
                {t.descPart1Strong}
              </strong>
              {t.descPart1Text}
            </p>
          </div>

          {/* Right "JOIN NOW" CTA + Official Emblem */}
          <div className="hero-slide-right flex items-center justify-between md:justify-end w-full md:w-auto gap-4">
            <a href="#app-download-store" className="editorial-pill-btn group">
              <span className="font-editorial font-bold text-sm sm:text-base uppercase tracking-[0.12em]">
                {t.joinNowBtn}
              </span>
              <span className="w-9 h-9 rounded-full bg-[#d9232e] group-hover:scale-105 transition-transform inline-flex items-center justify-center text-white">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>

            <a
              href="#app-download-store"
              className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-[#151821] flex items-center justify-center overflow-hidden shrink-0 hover:border-[#d9232e] transition-colors"
              aria-label="FC Arena VS Official Emblem"
            >
              <img
                src="assets/aistudio/fc-arena-logo.png"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://fc-arena-h2h.github.io/tournament.com/pwa-192x192.png?v=2';
                }}
                alt="FC Arena VS"
                referrerPolicy="no-referrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Crimson-Red & Obsidian Marquee Ticker Ribbon Divider */}
      <div className="relative z-30 w-full bg-[#d9232e] py-2.5 border-y border-black/30 overflow-hidden">
        <div className="animate-marquee-ticker flex items-center gap-6">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 shrink-0">
              <span className="w-5 h-5 rounded-full bg-[#0e1014] text-white font-editorial font-bold text-[10px] inline-flex items-center justify-center">
                VS
              </span>
              <span className="font-editorial font-bold text-xs sm:text-sm uppercase tracking-[0.18em] text-[#0e1014]">
                {t.tickerText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
