import React, { useState } from 'react';
import { UserCheck, Shield, CheckCircle2, Youtube, ArrowUpRight } from 'lucide-react';
import { TranslationContent } from '../i18n/translations';

interface Section3RulesProps {
  t: TranslationContent['section3'];
}

const OFFICIAL_YOUTUBE_URL =
  'https://youtube.com/@fc-arena-vs-official?si=tmLv3zw8rNY5d24d';

export const Section3Rules: React.FC<Section3RulesProps> = ({ t }) => {
  const [activeGuideTab, setActiveGuideTab] = useState<'player' | 'publisher'>(
    'player'
  );

  return (
    <section
      id="section-3"
      className="scroll-mt-28 relative w-full bg-[#f4f4f0] text-[#0e1014] pt-14 sm:pt-20 pb-16 px-4 sm:px-6 md:px-10 overflow-hidden select-none border-t border-black/[0.07]"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/15">
          <div className="anim-slide-left space-y-2">
            <div className="text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#d9232e]">
              03. {t.protocolTag}
            </div>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h2 className="font-editorial font-bold text-[#0e1014] uppercase leading-[0.9] tracking-tight text-4xl sm:text-6xl md:text-7xl">
                {t.headlineLeft}
              </h2>
              <span className="font-editorial font-bold text-2xl sm:text-4xl uppercase tracking-[0.06em] text-[#d9232e]">
                {t.headlineMid}
              </span>
              <h2 className="font-editorial font-bold text-[#0e1014] uppercase leading-[0.9] tracking-tight text-4xl sm:text-6xl md:text-7xl">
                {t.headlineRight}
              </h2>
            </div>
          </div>

          <div className="anim-slide-right max-w-md space-y-1.5">
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              <strong className="text-[#0e1014] font-semibold uppercase tracking-wide">
                {t.part2Strong}
              </strong>
              {t.part2Text}
            </p>
          </div>
        </div>

        {/* Sub-bar Metadata */}
        <div className="mt-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-500">
          <span>{t.subBarLeft}</span>
          <span>{t.subBarRight}</span>
        </div>

        {/* 4-Column Architectural Rules Cards (01 | 02 | 03 | 04) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {t.rules.map((rule) => (
            <div
              key={rule.num}
              className="anim-slide-up rounded-2xl bg-white border border-black/[0.08] p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-3"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-black/[0.06] pb-2.5">
                  <span className="font-mono font-bold text-xs uppercase tracking-widest text-[#d9232e] tabular-nums">
                    RULE {rule.num}
                  </span>
                </div>
                <h3 className="font-editorial font-bold text-xl sm:text-2xl uppercase tracking-wide text-[#0e1014]">
                  {rule.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================================
            COMPLETE PLAYER GUIDE & PUBLISHER/HOST WORKFLOW
        ====================================================================== */}
        <div className="mt-16 pt-12 border-t border-black/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.16em] text-zinc-500 block mb-1.5">
                STEP-BY-STEP WORKFLOW
              </span>
              <h3 className="font-editorial font-bold text-3xl sm:text-4xl uppercase tracking-tight text-[#0e1014]">
                {t.guidesSectionTitle}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 max-w-xl">
                {t.guidesSectionSubtitle}
              </p>
            </div>

            {/* Interactive Segmented Tab Switcher: Player Guide vs Publisher Guide */}
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-xl bg-black/[0.06] border border-black/10 self-start lg:self-end">
              <button
                type="button"
                onClick={() => setActiveGuideTab('player')}
                className={`px-4 sm:px-5 py-2.5 rounded-lg font-editorial font-bold text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                  activeGuideTab === 'player'
                    ? 'bg-[#0e1014] text-white shadow-sm'
                    : 'text-zinc-700 hover:text-[#0e1014]'
                }`}
              >
                <UserCheck className="w-4 h-4 text-[#d9232e] shrink-0" />
                <span>{t.playerGuideTab}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveGuideTab('publisher')}
                className={`px-4 sm:px-5 py-2.5 rounded-lg font-editorial font-bold text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                  activeGuideTab === 'publisher'
                    ? 'bg-[#d9232e] text-white shadow-sm'
                    : 'text-zinc-700 hover:text-[#0e1014]'
                }`}
              >
                <Shield className="w-4 h-4 shrink-0" />
                <span>{t.publisherGuideTab}</span>
              </button>
            </div>
          </div>

          {/* Guide Content Card */}
          {activeGuideTab === 'player' ? (
            <div className="rounded-3xl bg-[#0e1014] text-white p-6 sm:p-9 shadow-[0_20px_50px_rgba(14,16,20,0.14)] border border-black/10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-7 border-b border-white/10">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#ff4d58] font-semibold block mb-1.5">
                    {t.playerGuideBadge}
                  </span>
                  <h4 className="font-editorial font-bold text-2xl sm:text-4xl uppercase tracking-tight text-white">
                    {t.playerGuideTitle}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
                  {t.playerGuideIntro}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {t.playerSteps.map((stepItem) => (
                  <div
                    key={stepItem.step}
                    className="rounded-2xl bg-[#151821] border border-white/[0.08] hover:border-[#d9232e]/60 p-5 flex flex-col justify-between transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/[0.06]">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#ff4d58] tabular-nums">
                          {stepItem.step}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      </div>
                      <h5 className="font-editorial font-bold text-lg sm:text-xl uppercase tracking-wide text-white mb-2">
                        {stepItem.title}
                      </h5>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {stepItem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-3xl bg-[#151821] text-white p-6 sm:p-9 shadow-[0_20px_50px_rgba(14,16,20,0.14)] border border-[#d9232e]/30">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-7 border-b border-white/10">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-amber-400 font-semibold block mb-1.5">
                    {t.publisherGuideBadge}
                  </span>
                  <h4 className="font-editorial font-bold text-2xl sm:text-4xl uppercase tracking-tight text-white">
                    {t.publisherGuideTitle}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-md leading-relaxed">
                  {t.publisherGuideIntro}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {t.publisherSteps.map((stepItem) => (
                  <div
                    key={stepItem.step}
                    className="rounded-2xl bg-white/[0.04] border border-white/[0.1] hover:border-[#d9232e] p-5 flex flex-col justify-between transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/[0.06]">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-amber-400 tabular-nums">
                          {stepItem.step}
                        </span>
                        <Shield className="w-4 h-4 text-[#d9232e] shrink-0" />
                      </div>
                      <h5 className="font-editorial font-bold text-lg sm:text-xl uppercase tracking-wide text-white mb-2">
                        {stepItem.title}
                      </h5>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {stepItem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Official YouTube Channel Video Tutorials Hub Card */}
          <div className="mt-6 rounded-2xl bg-white border border-black/[0.08] p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-xs">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#ff0000]/10 border border-[#ff0000]/20 flex items-center justify-center shrink-0">
                <Youtube className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff0000]" />
              </div>
              <div className="space-y-1">
                <div className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#d9232e]">
                  OFFICIAL VIDEO TUTORIALS · @FC-ARENA-VS-OFFICIAL
                </div>
                <h4 className="font-editorial font-bold text-xl sm:text-2xl uppercase tracking-wide text-[#0e1014]">
                  Watch FC ARENA VS Step-by-Step Video Guides on YouTube
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl">
                  Learn how to join FC Mobile H2H tournaments, submit match scores, manage your squad tactics, and create leagues in the Publisher Portal on our official YouTube channel.
                </p>
              </div>
            </div>

            <a
              href={OFFICIAL_YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold text-xs sm:text-sm tracking-wide transition-colors whitespace-nowrap shrink-0 shadow-[0_8px_20px_rgba(255,0,0,0.22)]"
            >
              <Youtube className="w-4 h-4 shrink-0" />
              <span>Watch on YouTube</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
