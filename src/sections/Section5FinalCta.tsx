import React from 'react';
import { ArrowUpRight, Download, Send, Share2 } from 'lucide-react';
import { TranslationContent } from '../i18n/translations';

interface Section5FinalCtaProps {
  liveUrl: string;
  t: TranslationContent['section5'];
}

const APK_DOWNLOAD_URL =
  'https://github.com/fc-arena-h2h/Tournament.app/releases/download/V2.4.5/FC.ARENA.VS.v.2.4.5.apk';
const OFFICIAL_TELEGRAM_URL = 'https://t.me/fcarenavsofficial';
const OFFICIAL_FACEBOOK_URL =
  'https://www.facebook.com/profile.php?id=61595965529079';

export const Section5FinalCta: React.FC<Section5FinalCtaProps> = ({
  liveUrl,
  t,
}) => {
  return (
    <section
      id="section-5-cta"
      data-section-id="05-cta"
      className="relative w-full bg-[#f4f4f0] text-[#111215] pt-16 md:pt-24 pb-12 overflow-hidden border-t border-black/10"
    >
      {/* Concentric Target Rings in Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full border border-black/[0.06] bg-black/[0.015]" />
        <div className="absolute w-[520px] h-[520px] sm:w-[700px] sm:h-[700px] rounded-full border border-black/[0.05]" />
        <div className="absolute w-[740px] h-[740px] sm:w-[980px] sm:h-[980px] rounded-full border border-black/[0.04]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12">
        {/* Top Metadata Row */}
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.24em] text-black/50 mb-8 anim-slide-up">
          <span>{t.finalCallTag}</span>
          <span>FC-ARENA-H2H.GITHUB.IO</span>
        </div>

        {/* Center Target Stage with Flanking Labels + Giant Condensed Title */}
        <div className="relative flex flex-col items-center justify-center text-center py-6 md:py-10 anim-slide-up">
          <div className="w-full flex items-center justify-between gap-4">
            <span className="hidden md:inline-block font-editorial text-2xl lg:text-3xl font-bold uppercase text-black/80 tracking-tight">
              {t.seasonQuestion}
            </span>

            <h2 className="font-editorial text-[17vw] sm:text-[15vw] md:text-[12.5rem] lg:text-[14.5rem] font-bold uppercase leading-[0.82] tracking-[-0.03em] text-[#111215] select-none mx-auto">
              FC ARENA VS
            </h2>

            <span className="hidden md:inline-block font-editorial text-2xl lg:text-3xl font-bold uppercase text-black/80 tracking-tight">
              2026
            </span>
          </div>

          {/* Mobile Flanking Labels */}
          <div className="flex md:hidden items-center justify-between w-full max-w-xs mt-2 text-sm font-editorial font-bold uppercase text-black/75">
            <span>{t.seasonQuestion}</span>
            <span>2026</span>
          </div>

          {/* Overlapping Cutout Squad Image at Bottom Center */}
          <div className="relative -mt-6 sm:-mt-12 md:-mt-20 z-20 flex flex-col items-center">
            <img
              src="/assets/aistudio/1793092487462-Picsart-BackgroundRemover.jpg_92f29578.png"
              alt="FC Arena VS Champions Cutout"
              className="w-[290px] sm:w-[390px] md:w-[470px] h-auto object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.35)]"
            />

            {/* Primary CTA Buttons Overlapping Base */}
            <div className="-mt-6 relative z-30 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href={APK_DOWNLOAD_URL}
                download="FC.ARENA.VS.v.2.4.5.apk"
                className="inline-flex items-center gap-2.5 bg-[#01875f] hover:bg-[#016d4d] text-white font-mono text-xs uppercase tracking-[0.18em] font-bold px-7 py-4 rounded-full shadow-[0_18px_40px_rgba(1,135,95,0.35)] hover:-translate-y-0.5 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>{t.downloadApkBtn}</span>
              </a>

              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#d9232e] hover:bg-[#b81b25] text-white font-mono text-xs uppercase tracking-[0.18em] font-bold px-7 py-4 rounded-full shadow-[0_18px_40px_rgba(217,35,46,0.4)] hover:-translate-y-0.5 transition-all"
              >
                <span>{t.enterPortalBtn}</span>
                <span className="w-6 h-6 rounded-full bg-black/25 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </div>

            {/* Official Telegram & Facebook Community Links */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={OFFICIAL_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/15 hover:border-[#0088cc] text-[#0077b5] text-xs font-semibold transition-all shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.telegramBtn}</span>
              </a>
              <a
                href={OFFICIAL_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/15 hover:border-[#1877f2] text-[#1877f2] text-xs font-semibold transition-all shadow-xs"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{t.facebookBtn}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Editorial Footer Strip */}
        <footer className="mt-16 pt-8 border-t border-black/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.18em] text-black/60">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/fc-arena-logo.png"
              alt="FC Arena VS Logo"
              className="w-6 h-6 rounded-md object-cover"
            />
            <span className="font-bold text-[#111215]">
              FC ARENA VS OFFICIAL
            </span>
            <span>· V2.4.5 · EA SPORTS FC MOBILE H2H</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href={OFFICIAL_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0088cc] transition-colors"
            >
              TELEGRAM
            </a>
            <a
              href={OFFICIAL_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877f2] transition-colors"
            >
              FACEBOOK
            </a>
            <a
              href="#app-download-store"
              className="hover:text-[#01875f] transition-colors"
            >
              APK V2.4.5
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d9232e] font-bold hover:underline"
            >
              {t.officialSiteLink}
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};
