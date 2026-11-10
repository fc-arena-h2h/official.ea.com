import React from 'react';
import { Globe } from 'lucide-react';
import { LANGUAGES, LanguageCode, TranslationContent } from '../i18n/translations';

interface NavbarSectionProps {
  lang: LanguageCode;
  onChangeLang: (lang: LanguageCode) => void;
  t: TranslationContent['nav'];
}

export const NavbarSection: React.FC<NavbarSectionProps> = ({
  lang,
  onChangeLang,
  t,
}) => {
  return (
    <header
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#111215]/95 backdrop-blur-md border-b border-white/[0.08]"
    >
      {/* Top Main Header Bar: Brand Name "FC ARENA VS OFFICIAL" + Right CTA */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* Brand Wordmark: FC ARENA VS OFFICIAL */}
        <a
          href="#section-1"
          className="group inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0 focus:outline-none"
          aria-label="FC ARENA VS OFFICIAL Home"
        >
          <span className="font-editorial font-bold text-lg sm:text-2xl tracking-tight text-white uppercase">
            FC ARENA
          </span>
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#d9232e] inline-flex items-center justify-center text-[10px] sm:text-xs font-bold text-white shadow-[0_0_12px_rgba(217,35,46,0.75)] group-hover:scale-110 transition-transform">
            VS
          </span>
          <span className="font-editorial font-bold text-lg sm:text-2xl tracking-tight text-zinc-200 uppercase">
            OFFICIAL
          </span>
        </a>

        {/* Primary Action Button */}
        <div className="flex items-center shrink-0">
          <a
            href="#app-download-store"
            className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#d9232e] hover:bg-[#b81b25] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all whitespace-nowrap shrink-0 shadow-[0_0_18px_rgba(217,35,46,0.45)]"
          >
            {t.enterArena}
          </a>
        </div>
      </div>

      {/* Sub-Header Row 1: Shortcut Keywords Bar (Visible on Both Mobile & Desktop Below Header) */}
      <div className="w-full bg-[#16181d]/95 border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-12 py-1.5 flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Navigation Shortcut Keywords */}
          <nav
            className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2.5 sm:gap-4 overflow-x-auto no-scrollbar text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.14em] uppercase text-zinc-300"
            aria-label="Shortcut Navigation"
          >
            <a
              href="#section-1"
              className="hover:text-[#d9232e] transition-colors whitespace-nowrap shrink-0"
            >
              {t.topCups}
            </a>
            <span className="text-[#d9232e] font-bold" aria-hidden="true">
              &middot;
            </span>
            <a
              href="#section-2"
              className="hover:text-[#d9232e] transition-colors whitespace-nowrap shrink-0"
            >
              {t.arenaStats}
            </a>
            <span className="text-[#d9232e] font-bold" aria-hidden="true">
              &middot;
            </span>
            <a
              href="#app-download-store"
              className="hover:text-[#d9232e] transition-colors whitespace-nowrap shrink-0 text-emerald-400"
            >
              {t.appDownload}
            </a>
            <span className="text-[#d9232e] font-bold" aria-hidden="true">
              &middot;
            </span>
            <a
              href="#section-3"
              className="hover:text-[#d9232e] transition-colors whitespace-nowrap shrink-0"
            >
              {t.rulesGuide}
            </a>
            <span className="text-[#d9232e] font-bold" aria-hidden="true">
              &middot;
            </span>
            <a
              href="#section-4"
              className="hover:text-[#d9232e] transition-colors whitespace-nowrap shrink-0"
            >
              {t.matchHub}
            </a>
          </nav>

          {/* Language Switcher Bar Directly Below Header */}
          <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end gap-1.5 pt-1 sm:pt-0 border-t sm:border-t-0 border-white/[0.05] overflow-x-auto no-scrollbar">
            <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400 mr-1 shrink-0">
              <Globe className="w-3 h-3 text-[#d9232e]" />
              <span className="hidden md:inline">{t.languageLabel}:</span>
            </span>
            {LANGUAGES.map((item) => {
              const active = lang === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => onChangeLang(item.code)}
                  className={`px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#d9232e] text-white font-semibold shadow-[0_0_10px_rgba(217,35,46,0.5)]'
                      : 'bg-white/[0.06] text-zinc-300 hover:bg-white/[0.14] hover:text-white'
                  }`}
                >
                  {item.nativeLabel}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
