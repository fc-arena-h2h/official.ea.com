import React from 'react';
import { Globe, ArrowUpRight, Youtube } from 'lucide-react';
import { LANGUAGES, LanguageCode, TranslationContent } from '../i18n/translations';

interface NavbarSectionProps {
  lang: LanguageCode;
  onChangeLang: (lang: LanguageCode) => void;
  t: TranslationContent['nav'];
}

const OFFICIAL_YOUTUBE_URL =
  'https://youtube.com/@fc-arena-vs-official?si=tmLv3zw8rNY5d24d';

export const NavbarSection: React.FC<NavbarSectionProps> = ({
  lang,
  onChangeLang,
  t,
}) => {
  return (
    <header
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 bg-[#0e1014]/92 backdrop-blur-xl border-b border-white/[0.08]"
    >
      {/* Row 1: Primary 3-Zone Top Bar */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 h-14 sm:h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark — FC ARENA VS OFFICIAL */}
        <a
          href="#section-1"
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus:outline-none group"
          aria-label="FC ARENA VS OFFICIAL Home"
        >
          <img
            src="assets/aistudio/fc-arena-logo.png"
            onError={(e) => {
              e.currentTarget.src =
                'https://fc-arena-h2h.github.io/tournament.com/pwa-192x192.png?v=2';
            }}
            alt="FC ARENA VS Logo"
            referrerPolicy="no-referrer"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-cover border border-white/15 shrink-0"
          />
          <span className="font-editorial font-bold text-lg sm:text-2xl tracking-tight text-white uppercase">
            FC ARENA <span className="text-[#d9232e]">VS</span> OFFICIAL
          </span>
        </a>

        {/* Zone 2: Desktop Quick Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300"
          aria-label="Primary Navigation"
        >
          <a
            href="#section-1"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t.topCups}
          </a>
          <a
            href="#section-2"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t.arenaStats}
          </a>
          <a
            href="#app-download-store"
            className="text-emerald-400 hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0"
          >
            {t.appDownload}
          </a>
          <a
            href="#section-3"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            {t.rulesGuide}
          </a>
          <a
            href={OFFICIAL_YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#ff4d58] hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            <Youtube className="w-3.5 h-3.5 shrink-0" />
            <span>TUTORIALS</span>
          </a>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center shrink-0">
          <a
            href="#app-download-store"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d9232e] hover:bg-[#b81b25] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors whitespace-nowrap shrink-0 shadow-[0_4px_16px_rgba(217,35,46,0.35)]"
          >
            <span>{t.enterArena}</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>
      </div>

      {/* Row 2: Sub-Header Bar (Mobile Shortcut Links + 6-Language Switcher) */}
      <div className="w-full bg-[#14171f]/95 border-t border-white/[0.06]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 py-1.5 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
          {/* Shortcut Keywords (Always visible below header for mobile & tablet) */}
          <nav
            className="w-full sm:w-auto flex items-center justify-start gap-3 overflow-x-auto no-scrollbar text-[10px] sm:text-[11px] font-mono font-medium tracking-[0.1em] uppercase text-zinc-300 py-0.5"
            aria-label="Section Shortcuts"
          >
            <a
              href="#section-1"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {t.topCups}
            </a>
            <span className="text-zinc-600" aria-hidden="true">
              /
            </span>
            <a
              href="#section-2"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {t.arenaStats}
            </a>
            <span className="text-zinc-600" aria-hidden="true">
              /
            </span>
            <a
              href="#app-download-store"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              {t.appDownload}
            </a>
            <span className="text-zinc-600" aria-hidden="true">
              /
            </span>
            <a
              href="#section-3"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {t.rulesGuide}
            </a>
            <span className="text-zinc-600" aria-hidden="true">
              /
            </span>
            <a
              href={OFFICIAL_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff4d58] hover:text-white font-semibold transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1"
            >
              <Youtube className="w-3 h-3 shrink-0" />
              <span>YOUTUBE</span>
            </a>
          </nav>

          {/* 6-Language Segmented Control Bar */}
          <div className="w-full sm:w-auto flex items-center justify-start sm:justify-end gap-1 overflow-x-auto no-scrollbar pt-1 sm:pt-0 border-t sm:border-t-0 border-white/[0.05]">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400 mr-1 shrink-0">
              <Globe className="w-3 h-3 text-[#d9232e]" />
              <span className="hidden md:inline">{t.languageLabel}:</span>
            </span>
            <div className="inline-flex items-center gap-1 p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
              {LANGUAGES.map((item) => {
                const active = lang === item.code;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => onChangeLang(item.code)}
                    className={`px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#d9232e] text-white font-semibold'
                        : 'text-zinc-300 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    {item.nativeLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
