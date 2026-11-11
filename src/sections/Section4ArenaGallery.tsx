import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
      className="scroll-mt-28 relative w-full bg-[#f4f4f0] text-[#0e1014] py-16 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden border-t border-black/10"
    >
      <div className="max-w-[1360px] mx-auto space-y-20">
        {/* =====================================================================
            BLOCK 1: 4 CORE APP MODULES
        ====================================================================== */}
        <div className="anim-slide-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-black/15">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#d9232e] font-semibold block mb-1.5">
                04. ARCHITECTURE · V2.4.5
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#0e1014]">
                {t.modulesTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-md leading-relaxed">
              {t.modulesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.modules.map((mod) => (
              <div
                key={mod.tab}
                className="rounded-2xl bg-white border border-black/[0.08] p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#d9232e] pb-3 mb-3 border-b border-black/[0.06]">
                    {mod.tab}
                  </div>
                  <h3 className="font-editorial text-2xl font-bold uppercase tracking-wide text-[#0e1014] mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                    {mod.desc}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-black/[0.06]">
                  {mod.highlights.map((hl, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-zinc-800"
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
            BLOCK 2: KEY PLATFORM CAPABILITIES & 3-CARD VISUAL SHOWCASE
        ====================================================================== */}
        <div className="anim-slide-up space-y-12">
          {/* 8 Key Platform Capabilities Grid */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500 font-semibold block mb-1">
                  PLATFORM CAPABILITIES
                </span>
                <h3 className="font-editorial text-2xl sm:text-4xl font-bold uppercase tracking-wide text-[#0e1014]">
                  {t.featuresTitle}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-md">
                {t.featuresSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-5 border border-black/[0.08] space-y-2"
                >
                  <div className="font-mono text-xs font-bold text-[#d9232e] tabular-nums">
                    0{idx + 1}.
                  </div>
                  <h4 className="font-editorial font-bold text-lg sm:text-xl uppercase tracking-wide text-[#0e1014]">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Card Balanced Visual Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Showcase Card */}
            <div className="lg:col-span-4 anim-slide-left flex">
              <div className="w-full rounded-2xl overflow-hidden bg-[#0e1014] border border-black/10 p-4 flex flex-col justify-between group">
                <div className="flex items-center justify-between text-zinc-400 px-1 pb-3 text-[11px] font-mono uppercase tracking-[0.16em]">
                  <span>{t.leftCardTag}</span>
                  <span className="tabular-nums">01</span>
                </div>
                <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-zinc-900">
                  <img
                    src="assets/aistudio/Screenshot_20261110-072518_4b2a73ad.jpg"
                    alt="FC Arena VS Close-up Squad"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ff4d58]">
                      {t.leftCardSub}
                    </p>
                    <h4 className="font-editorial text-2xl font-bold uppercase tracking-tight mt-0.5">
                      {t.leftCardTitle}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Featured Pass Card */}
            <div className="lg:col-span-4 anim-slide-up flex">
              <div className="relative w-full rounded-2xl bg-[#151821] text-white p-6 sm:p-7 shadow-xl border border-white/10 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-zinc-400 text-[11px] font-mono uppercase tracking-[0.18em] mb-2">
                    <span>{t.centerCardTop}</span>
                    <span className="tabular-nums">V2.4.5</span>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-none text-white mb-5">
                    FC ARENA VS
                  </h3>

                  <div className="space-y-3.5 border-y border-white/10 py-4 mb-5 relative z-10">
                    <div>
                      <div className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.16em]">
                        01 · {t.centerCardSpec1Label}
                      </div>
                      <p className="font-editorial text-base sm:text-lg font-bold uppercase tracking-wide text-white mt-0.5">
                        {t.centerCardSpec1Val}
                      </p>
                    </div>

                    <div>
                      <div className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.16em]">
                        02 · {t.centerCardSpec2Label}
                      </div>
                      <p className="font-editorial text-base sm:text-lg font-bold uppercase tracking-wide text-white mt-0.5">
                        {t.centerCardSpec2Val}
                      </p>
                    </div>

                    <div>
                      <div className="text-zinc-400 font-mono text-[10px] uppercase tracking-[0.16em]">
                        03 · {t.centerCardSpec3Label}
                      </div>
                      <p className="font-editorial text-xl font-bold uppercase tracking-tight text-[#ff4d58] mt-0.5">
                        {t.centerCardSpec3Val}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative z-20 flex items-center justify-between pt-1">
                  <a
                    href="#app-download-store"
                    className="inline-flex items-center gap-2 bg-[#d9232e] hover:bg-[#b91c26] text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <span>{t.centerCardBtn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <img
                  src="assets/aistudio/1793092487462-Picsart-BackgroundRemover.jpg_92f29578.png"
                  alt="FC Arena Cutout"
                  referrerPolicy="no-referrer"
                  className="w-36 sm:w-40 h-auto object-contain absolute -bottom-3 -right-2 z-10 pointer-events-none drop-shadow-[0_14px_24px_rgba(0,0,0,0.75)]"
                />
              </div>
            </div>

            {/* Right Showcase Card */}
            <div className="lg:col-span-4 anim-slide-right flex">
              <div className="w-full rounded-2xl overflow-hidden bg-[#0e1014] border border-black/10 p-4 flex flex-col justify-between group">
                <div className="flex items-center justify-between text-zinc-400 px-1 pb-3 text-[11px] font-mono uppercase tracking-[0.16em]">
                  <span>{t.rightCardTag}</span>
                  <span className="tabular-nums">02</span>
                </div>
                <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-zinc-900">
                  <img
                    src="assets/aistudio/Screenshot_20261110-072539_d71ef251.jpg"
                    alt="FC Arena VS Full Roster"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                      {t.rightCardSub}
                    </p>
                    <h4 className="font-editorial text-2xl font-bold uppercase tracking-tight mt-0.5">
                      {t.rightCardTitle}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            BLOCK 3: LIVE ARENA TELEMETRY & ACTIVITY BAND
        ====================================================================== */}
        <div className="rounded-3xl bg-[#0e1014] text-white p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.14)] anim-slide-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#ff4d58] font-semibold block mb-1.5">
                {t.telemetryTag}
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl font-bold uppercase tracking-tight">
                {t.telemetryTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
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
