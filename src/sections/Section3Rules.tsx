import React, { useState } from 'react';
import { UserCheck, Shield, CheckCircle2 } from 'lucide-react';
import { TranslationContent } from '../i18n/translations';

interface Section3RulesProps {
  t: TranslationContent['section3'];
}

export const Section3Rules: React.FC<Section3RulesProps> = ({ t }) => {
  const [activeGuideTab, setActiveGuideTab] = useState<'player' | 'publisher'>(
    'player'
  );

  return (
    <section
      id="section-3"
      className="scroll-mt-28 relative w-full bg-[#f4f4f0] text-[#111215] pt-14 sm:pt-20 pb-16 px-5 md:px-12 overflow-hidden select-none"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Top-Right Editorial Note Above Giant Headline */}
        <div className="anim-slide-right flex justify-end mb-4 md:mb-6">
          <div className="max-w-md space-y-2 text-left">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-500">
              <span className="w-4 h-4 rounded-full border border-zinc-400 inline-flex items-center justify-center text-[9px] text-[#111215] font-bold">
                3
              </span>
              <span>{t.protocolTag}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              <strong className="text-[#111215] uppercase tracking-wider">
                {t.part2Strong}
              </strong>
              {t.part2Text}
            </p>
          </div>
        </div>

        {/* Giant Full-Width Split Editorial Headline */}
        <div className="anim-slide-up py-4 border-b border-black/15 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-editorial font-bold text-[#111215] uppercase leading-[0.86] tracking-[-0.02em] text-[clamp(3.2rem,11.2vw,10.2rem)]">
            {t.headlineLeft}
          </h2>
          <span className="font-editorial font-bold text-xl sm:text-3xl md:text-4xl uppercase tracking-[0.08em] text-[#d9232e] mx-auto self-center">
            {t.headlineMid}
          </span>
          <h2 className="font-editorial font-bold text-[#111215] uppercase leading-[0.86] tracking-[-0.02em] text-[clamp(3.2rem,11.2vw,10.2rem)]">
            {t.headlineRight}
          </h2>
        </div>

        {/* Sub-bar Label */}
        <div className="mt-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-500">
          <span>{t.subBarLeft}</span>
          <span>{t.subBarRight}</span>
        </div>

        {/* 4-Column Numbered Editorial Rules Strip (01 | 02 | 03 | 04) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 pt-6 border-t border-black/10">
          {t.rules.map((rule) => (
            <div
              key={rule.num}
              className="anim-slide-up group space-y-2.5 pb-4 border-b sm:border-b-0 border-black/10"
            >
              <div className="flex items-center justify-between">
                <span className="font-editorial font-bold text-lg sm:text-xl text-[#111215]">
                  {rule.num}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#d9232e] opacity-75 group-hover:scale-125 transition-transform" />
              </div>
              <h3 className="font-editorial font-bold text-xl sm:text-2xl uppercase tracking-wide text-[#111215]">
                {rule.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>

        {/* =====================================================================
            COMPLETE PLAYER GUIDE & PUBLISHER/HOST WORKFLOW (From .md files)
        ====================================================================== */}
        <div className="mt-14 pt-12 border-t border-black/15">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-editorial font-bold text-2xl sm:text-4xl uppercase tracking-tight text-[#111215]">
              {t.guidesSectionTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600">
              {t.guidesSectionSubtitle}
            </p>

            {/* Interactive Tab Switcher: Player Guide vs Publisher Guide */}
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-black/[0.06] border border-black/10">
              <button
                type="button"
                onClick={() => setActiveGuideTab('player')}
                className={`px-5 py-2.5 rounded-xl font-editorial font-bold text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  activeGuideTab === 'player'
                    ? 'bg-[#111215] text-white shadow-lg'
                    : 'text-zinc-700 hover:bg-black/5'
                }`}
              >
                <UserCheck className="w-4 h-4 text-[#d9232e]" />
                <span>{t.playerGuideTab}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveGuideTab('publisher')}
                className={`px-5 py-2.5 rounded-xl font-editorial font-bold text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  activeGuideTab === 'publisher'
                    ? 'bg-[#d9232e] text-white shadow-lg'
                    : 'text-zinc-700 hover:bg-black/5'
                }`}
              >
                <Shield className="w-4 h-4 text-white" />
                <span>{t.publisherGuideTab}</span>
              </button>
            </div>
          </div>

          {/* Guide Content Card */}
          {activeGuideTab === 'player' ? (
            <div className="rounded-[2rem] bg-[#111215] text-white p-6 sm:p-10 shadow-[0_24px_60px_rgba(17,18,21,0.18)] border border-black/10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-white/10">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#d9232e]/20 border border-[#d9232e]/40 text-[#ff4d58] font-mono text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
                {t.playerSteps.map((stepItem) => (
                  <div
                    key={stepItem.step}
                    className="rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#d9232e]/60 p-5 flex flex-col justify-between transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#d9232e]">
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
            <div className="rounded-[2rem] bg-[#16181f] text-white p-6 sm:p-10 shadow-[0_24px_60px_rgba(17,18,21,0.18)] border border-[#d9232e]/30">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-white/10">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#d9232e] text-white font-mono text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
                {t.publisherSteps.map((stepItem) => (
                  <div
                    key={stepItem.step}
                    className="rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:border-[#d9232e] p-5 flex flex-col justify-between transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
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
        </div>
      </div>
    </section>
  );
};
