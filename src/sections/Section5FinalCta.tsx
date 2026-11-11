import React from 'react';
import { ArrowUpRight, Download, Send, Share2, Youtube } from 'lucide-react';
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
const OFFICIAL_YOUTUBE_URL =
  'https://youtube.com/@fc-arena-vs-official?si=tmLv3zw8rNY5d24d';

export const Section5FinalCta: React.FC<Section5FinalCtaProps> = ({
  liveUrl,
  t,
}) => {
  return (
    <section
      id="section-5-cta"
      data-section-id="05-cta"
      className="relative w-full bg-[#0e1014] arena-grid-bg text-white pt-16 md:pt-24 pb-12 overflow-hidden border-t border-white/10"
    >
      {/* Concentric Target Rings in Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] rounded-full border border-white/[0.06] bg-white/[0.01]" />
        <div className="absolute w-[520px] h-[520px] sm:w-[720px] sm:h-[720px] rounded-full border border-white/[0.04]" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Top Metadata Row */}
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-400 pb-4 border-b border-white/[0.08] mb-8 anim-slide-up">
          <span>{t.finalCallTag}</span>
          <span className="tabular-nums">FC ARENA VS OFFICIAL · 2026</span>
        </div>

        {/* Center Target Stage with Flanking Labels + Giant Condensed Title */}
        <div className="relative flex flex-col items-center justify-center text-center py-4 md:py-8 anim-slide-up">
          <div className="w-full flex items-center justify-between gap-4">
            <span className="hidden md:inline-block font-editorial text-2xl lg:text-3xl font-bold uppercase text-zinc-400 tracking-tight">
              {t.seasonQuestion}
            </span>

            <h2 className="font-editorial text-[16vw] sm:text-[14vw] md:text-[11.5rem] lg:text-[13.5rem] font-bold uppercase leading-[0.84] tracking-[-0.02em] text-white select-none mx-auto">
              FC ARENA VS
            </h2>

            <span className="hidden md:inline-block font-editorial text-2xl lg:text-3xl font-bold uppercase text-zinc-400 tracking-tight tabular-nums">
              2026
            </span>
          </div>

          {/* Overlapping Cutout Squad Image at Bottom Center */}
          <div className="relative -mt-6 sm:-mt-10 md:-mt-16 z-20 flex flex-col items-center">
            <img
              src="assets/aistudio/1793092487462-Picsart-BackgroundRemover.jpg_92f29578.png"
              alt="FC Arena VS Champions Cutout"
              referrerPolicy="no-referrer"
              className="w-[270px] sm:w-[360px] md:w-[440px] h-auto object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.65)]"
            />

            {/* Primary CTA Buttons Overlapping Base */}
            <div className="-mt-5 relative z-30 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href={APK_DOWNLOAD_URL}
                download="FC.ARENA.VS.v.2.4.5.apk"
                className="inline-flex items-center gap-2.5 bg-[#01875f] hover:bg-[#016d4d] text-white font-mono text-xs uppercase tracking-[0.14em] font-bold px-6 py-3.5 rounded-xl shadow-[0_14px_30px_rgba(1,135,95,0.35)] hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>{t.downloadApkBtn}</span>
              </a>

              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#d9232e] hover:bg-[#b81b25] text-white font-mono text-xs uppercase tracking-[0.14em] font-bold px-6 py-3.5 rounded-xl shadow-[0_14px_30px_rgba(217,35,46,0.35)] hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                <span>{t.enterPortalBtn}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Official YouTube, Telegram & Facebook Community Links */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={OFFICIAL_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151821] border border-white/15 hover:border-[#ff0000] text-[#ff4d58] text-xs font-semibold transition-colors whitespace-nowrap"
              >
                <Youtube className="w-3.5 h-3.5 shrink-0 text-[#ff0000]" />
                <span>Official YouTube Tutorials</span>
              </a>
              <a
                href={OFFICIAL_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151821] border border-white/15 hover:border-[#0088cc] text-[#38bdf8] text-xs font-semibold transition-colors whitespace-nowrap"
              >
                <Send className="w-3.5 h-3.5 shrink-0" />
                <span>{t.telegramBtn}</span>
              </a>
              <a
                href={OFFICIAL_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151821] border border-white/15 hover:border-[#1877f2] text-[#60a5fa] text-xs font-semibold transition-colors whitespace-nowrap"
              >
                <Share2 className="w-3.5 h-3.5 shrink-0" />
                <span>{t.facebookBtn}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Structured Quiet Official Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <img
              src="assets/aistudio/fc-arena-logo.png"
              alt="FC Arena VS Logo"
              referrerPolicy="no-referrer"
              className="w-7 h-7 rounded-md object-cover border border-white/15"
            />
            <span className="font-semibold text-white">
              FC ARENA VS OFFICIAL
            </span>
            <span>·</span>
            <span>APK V2.4.5</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 uppercase tracking-wider text-[11px]">
            <a
              href={OFFICIAL_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff4d58] hover:text-white transition-colors font-semibold"
            >
              YouTube
            </a>
            <a
              href={OFFICIAL_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Telegram
            </a>
            <a
              href={OFFICIAL_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="#app-download-store"
              className="hover:text-emerald-400 transition-colors"
            >
              Download App
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline"
            >
              {t.officialSiteLink}
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};
