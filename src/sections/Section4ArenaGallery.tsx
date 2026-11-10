import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import {
  TactileWaveChartCard,
  TactileCurvedSegmentCard,
} from '../components/TactileWidgets';
import { TranslationContent } from '../i18n/translations';

interface Section4ArenaGalleryProps {
  liveUrl: string;
  t: TranslationContent['section4'];
}

export const Section4ArenaGallery: React.FC<Section4ArenaGalleryProps> = ({
  t,
}) => {
  return (
    <section
      id="section-4"
      data-section-id="04-gallery"
      className="scroll-mt-28 relative w-full bg-[#f4f4f0] text-[#111215] py-16 md:py-24 px-5 md:px-12 overflow-hidden border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Centered Condensed Sub-Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14 anim-slide-up">
          <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight leading-[1.08] text-[#111215]">
            {t.topHeadline}
          </h3>
        </div>

        {/* Middle 2-Column Editorial Detail Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-16 pb-10 border-b border-black/10">
          {/* Left Column: 4 Circular Badges + ④ DUAL ACCOUNT & SMART VALIDATION */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start anim-slide-left">
            <div className="sm:col-span-4 flex items-center -space-x-2">
              <div className="w-10 h-10 rounded-full bg-[#111215] text-white border-2 border-[#f4f4f0] flex items-center justify-center font-editorial text-xs font-bold">
                VS
              </div>
              <div className="w-10 h-10 rounded-full bg-[#d9232e] text-white border-2 border-[#f4f4f0] flex items-center justify-center font-editorial text-xs font-bold">
                H2H
              </div>
              <div className="w-10 h-10 rounded-full bg-[#24262b] text-white border-2 border-[#f4f4f0] flex items-center justify-center font-editorial text-xs font-bold">
                CUP
              </div>
              <div className="w-10 h-10 rounded-full bg-white text-[#111215] border-2 border-[#111215]/15 flex items-center justify-center font-mono text-[11px] font-bold">
                2.4
              </div>
            </div>

            <div className="sm:col-span-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-black/40 text-[9px] font-mono font-bold">
                  4
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-[#111215]">
                  {t.part1Tag}
                </span>
              </div>
              <p className="text-xs text-black/65 leading-relaxed">
                {t.part1Desc}
              </p>
            </div>
          </div>

          {/* Right Column: Circular Stamp Emblem + ⑤ MULTI-SHARD & 24/7 SUPPORT AI */}
          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start anim-slide-right">
            <div className="sm:col-span-4 flex sm:justify-center">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full animate-spin-stamp text-[#111215]"
                >
                  <path
                    id="arenaCirclePath4"
                    d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    fill="none"
                  />
                  <text className="text-[9.5px] font-mono uppercase tracking-[0.22em] fill-current font-bold">
                    <textPath href="#arenaCirclePath4">
                      • FC ARENA VS • OFFICIAL H2H HUB
                    </textPath>
                  </text>
                </svg>
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#d9232e]" />
              </div>
            </div>

            <div className="sm:col-span-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-black/40 text-[9px] font-mono font-bold">
                  5
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-[#111215]">
                  {t.part2Tag}
                </span>
              </div>
              <p className="text-xs text-black/65 leading-relaxed">
                {t.part2Desc}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================================
            4 CORE APP MODULES (From 03_app_overview_and_features.md)
        ====================================================================== */}
        <div className="mb-16 anim-slide-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#d9232e] font-bold block mb-1.5">
                ARCHITECTURE · V2.4.5
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#111215]">
                {t.modulesTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-md">
              {t.modulesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.modules.map((mod) => (
              <div
                key={mod.tab}
                className="rounded-3xl bg-white border border-black/10 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#111215] text-white font-mono text-[10px] font-bold uppercase tracking-widest mb-4">
                    {mod.tab}
                  </span>
                  <h4 className="font-editorial text-2xl font-bold uppercase tracking-wide text-[#111215] mb-2">
                    {mod.title}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                    {mod.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-black/[0.07]">
                  {mod.highlights.map((hl, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-[11px] text-zinc-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#01875f] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================================
            KEY PLATFORM HIGHLIGHTS GRID (From 03_app_overview_and_features.md)
        ====================================================================== */}
        <div className="mb-16 rounded-3xl bg-black/[0.04] border border-black/10 p-6 sm:p-8 anim-slide-up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#d9232e]" />
              <h4 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#111215]">
                {t.featuresTitle}
              </h4>
            </div>
            <p className="text-xs text-zinc-600">{t.featuresSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.features.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-5 border border-black/[0.07] space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-[#d9232e]">
                    0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#111215]" />
                </div>
                <h5 className="font-editorial font-bold text-lg uppercase tracking-wide text-[#111215]">
                  {feat.title}
                </h5>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Card Staggered Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-20">
          {/* Left Red-Tinted Showcase Card */}
          <div className="lg:col-span-4 anim-slide-left">
            <div className="relative rounded-[1.6rem] overflow-hidden bg-[#d9232e] p-3.5 shadow-[0_20px_50px_rgba(217,35,46,0.22)] group">
              <div className="flex items-center justify-between text-white/90 px-1 pb-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                  {t.leftCardTag}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest">
                  [01]
                </span>
              </div>
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#111215]">
                <img
                  src="assets/aistudio/Screenshot_20261110-072518_4b2a73ad.jpg"
                  alt="FC Arena VS Close-up Squad"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#d9232e]/60 via-transparent to-transparent mix-blend-multiply" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/80">
                      {t.leftCardSub}
                    </p>
                    <h4 className="font-editorial text-xl font-bold uppercase tracking-tight">
                      {t.leftCardTitle}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Tall Featured Dark Ticket Card with Overlapping Character Cutout */}
          <div className="lg:col-span-4 anim-slide-up">
            <div className="relative rounded-[1.8rem] bg-[#141518] text-white p-7 sm:p-8 shadow-[0_30px_70px_rgba(17,18,21,0.35)] overflow-visible">
              <div className="flex items-center justify-between text-white/50 text-[10px] font-mono uppercase tracking-[0.22em] mb-1">
                <span>{t.centerCardTop}</span>
                <span>V2.4.5</span>
              </div>

              <h3 className="font-editorial text-4xl sm:text-5xl font-bold uppercase tracking-tight leading-none text-white mb-6">
                FC ARENA VS
              </h3>

              <div className="space-y-4 border-y border-white/10 py-5 mb-6 relative z-10">
                <div>
                  <div className="flex items-center gap-2 text-white/50 font-mono text-[10px] uppercase tracking-[0.18em] mb-1">
                    <span>①</span>
                    <span>{t.centerCardSpec1Label}</span>
                  </div>
                  <p className="font-editorial text-lg font-bold uppercase tracking-wide text-white">
                    {t.centerCardSpec1Val}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-white/50 font-mono text-[10px] uppercase tracking-[0.18em] mb-1">
                    <span>②</span>
                    <span>{t.centerCardSpec2Label}</span>
                  </div>
                  <p className="font-editorial text-lg font-bold uppercase tracking-wide text-white">
                    {t.centerCardSpec2Val}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-white/50 font-mono text-[10px] uppercase tracking-[0.18em] mb-1">
                    <span>③</span>
                    <span>{t.centerCardSpec3Label}</span>
                  </div>
                  <p className="font-editorial text-2xl font-bold uppercase tracking-tight text-[#d9232e]">
                    {t.centerCardSpec3Val}
                  </p>
                </div>
              </div>

              <div className="relative z-20 flex items-center justify-between pt-2">
                <a
                  href="#app-download-store"
                  className="inline-flex items-center gap-2.5 bg-[#d9232e] hover:bg-[#b91c26] text-white font-mono text-[11px] font-bold uppercase tracking-[0.18em] px-5 py-3 rounded-full transition-all shadow-lg"
                >
                  <span>{t.centerCardBtn}</span>
                  <span className="w-5 h-5 rounded-full bg-black/25 flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>

              <img
                src="assets/aistudio/1793092487462-Picsart-BackgroundRemover.jpg_92f29578.png"
                alt="FC Arena Cutout"
                className="w-40 sm:w-44 h-auto object-contain absolute -bottom-4 -right-3 z-20 pointer-events-none drop-shadow-[0_14px_24px_rgba(0,0,0,0.75)]"
              />
            </div>
          </div>

          {/* Right Red-Tinted Showcase Card */}
          <div className="lg:col-span-4 anim-slide-right">
            <div className="relative rounded-[1.6rem] overflow-hidden bg-[#d9232e] p-3.5 shadow-[0_20px_50px_rgba(217,35,46,0.22)] group">
              <div className="flex items-center justify-between text-white/90 px-1 pb-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                  {t.rightCardTag}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest">
                  [02]
                </span>
              </div>
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#111215]">
                <img
                  src="assets/aistudio/Screenshot_20261110-072539_d71ef251.jpg"
                  alt="FC Arena VS Full Roster"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#d9232e]/60 via-transparent to-transparent mix-blend-multiply" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/80">
                      {t.rightCardSub}
                    </p>
                    <h4 className="font-editorial text-xl font-bold uppercase tracking-tight">
                      {t.rightCardTitle}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Telemetry Widget Band */}
        <div className="rounded-[2rem] bg-[#111215] text-white p-6 sm:p-10 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.18)] anim-slide-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#d9232e] font-bold block mb-2">
                {t.telemetryTag}
              </span>
              <h4 className="font-editorial text-3xl sm:text-4xl font-bold uppercase tracking-tight">
                {t.telemetryTitle}
              </h4>
            </div>
            <p className="text-xs text-white/55 max-w-sm leading-relaxed">
              {t.telemetryDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <TactileWaveChartCard
                subtitle="Arena Match Views"
                title="2,670 Live H2H"
                axisLabels={['8am', '10am', '12pm', '2pm', '4pm', '6pm']}
                iconType="trophy"
              />
            </div>
            <div className="lg:col-span-5">
              <TactileCurvedSegmentCard
                headerTitle="Lobby Activity"
                leftValue="04"
                leftUnit="Hours"
                rightValue="36"
                rightUnit="Minutes"
                items={[
                  { label: 'H2H Cups', color: '#ff5e4d' },
                  { label: 'Telegram', color: '#4d94ff' },
                  { label: 'Brackets', color: '#5ce1e6' },
                  { label: 'Facebook', color: '#8c7ae6' },
                  { label: 'Messenger', color: '#2ecc71' },
                  { label: 'Host Hub', color: '#636e72' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
