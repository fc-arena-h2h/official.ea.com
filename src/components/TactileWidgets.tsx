import React from 'react';

export interface TactileWaveCardProps {
  subtitle: string;
  title: string;
  axisLabels?: string[];
  iconType?: 'trophy' | 'flame' | 'bolt' | 'shield';
  onActionClick?: () => void;
}

/**
 * Replicates the exact 3D Rim-Lit Dark Glass & Intertwined Glossy Tube Wave Card
 * from Reference Image 1 with soft studio shading and smooth slide-in reveal.
 */
export const TactileWaveChartCard: React.FC<TactileWaveCardProps> = ({
  subtitle,
  title,
  axisLabels = ['R1', 'R2', 'R16', 'QF', 'SF', 'FINAL'],
  iconType = 'trophy',
  onActionClick,
}) => {
  return (
    <div className="anim-slide-up tactile-glass-card p-7 sm:p-9 w-full max-w-[540px] mx-auto select-none">
      {/* Top Row: Muted Label + Large Bold Value on Left, Glowing Recessed Orb Badge on Right */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm sm:text-base font-normal text-slate-400 tracking-wide">
            {subtitle}
          </p>
          <h4 className="mt-1 text-2xl sm:text-3xl md:text-[34px] font-semibold tracking-tight text-slate-100 tabular-nums">
            {title}
          </h4>
        </div>

        <button
          type="button"
          onClick={onActionClick}
          className="tactile-orb-badge shrink-0 cursor-pointer"
          aria-label={subtitle}
        >
          <svg viewBox="0 0 28 28" className="w-6 h-6" fill="none">
            <defs>
              <linearGradient id="orbIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd466" />
                <stop offset="50%" stopColor="#ff853d" />
                <stop offset="100%" stopColor="#ff3b5c" />
              </linearGradient>
            </defs>
            {iconType === 'trophy' && (
              <path
                d="M8 5H20V11C20 14.3137 17.3137 17 14 17C10.6863 17 8 14.3137 8 11V5ZM5 7H8V11C6.34315 11 5 9.65685 5 8V7ZM23 7H20V11C21.6569 11 23 9.65685 23 8V7ZM12 17H16V21H19V23H9V21H12V17Z"
                fill="url(#orbIconGrad)"
              />
            )}
            {iconType === 'flame' && (
              <path
                d="M14.5 3C14.5 3 19.5 7.5 19.5 13.5C19.5 17.5 16.5 21 12.5 21C14 18.5 13 15.5 11 14C10 16.5 8.5 18 8.5 20.5C6.5 19 5.5 16.5 5.5 14C5.5 9 10.5 5.5 14.5 3Z"
                fill="url(#orbIconGrad)"
              />
            )}
            {iconType === 'bolt' && (
              <path
                d="M15.5 3L7 15H13.5L12.5 25L21 13H14.5L15.5 3Z"
                fill="url(#orbIconGrad)"
              />
            )}
            {iconType === 'shield' && (
              <path
                d="M14 3L22 6.5V13.5C22 18.8 18.6 23.4 14 25C9.4 23.4 6 18.8 6 13.5V6.5L14 3Z"
                fill="url(#orbIconGrad)"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Center 3D Glossy Intertwined Liquid-Tube Wave Graph */}
      <div className="relative mt-6 mb-3">
        <svg
          viewBox="0 0 440 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible"
        >
          <defs>
            {/* Primary Glowing Amber-Coral-Crimson 3D Tube Gradient */}
            <linearGradient id="warmTubeBody" x1="20" y1="165" x2="400" y2="35" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffb338" />
              <stop offset="28%" stopColor="#ff7338" />
              <stop offset="58%" stopColor="#ff8e42" />
              <stop offset="100%" stopColor="#ff4760" />
            </linearGradient>

            {/* Specular Inner Spine Highlight for Primary Tube */}
            <linearGradient id="warmTubeSpecular" x1="20" y1="165" x2="400" y2="35" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fff6cf" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#ffd9ad" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ffc8d0" stopOpacity="0.9" />
            </linearGradient>

            {/* Secondary Smoked-Glass Translucent 3D Tube Gradient */}
            <linearGradient id="smokedTubeBody" x1="40" y1="30" x2="390" y2="65" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#736b7a" stopOpacity="0.86" />
              <stop offset="45%" stopColor="#4a4453" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#806e7b" stopOpacity="0.84" />
              <stop offset="100%" stopColor="#433e4d" stopOpacity="0.76" />
            </linearGradient>

            {/* Soft Ambient Drop Glow Under Warm Tube */}
            <filter id="tubeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="9" floodColor="#ff7338" floodOpacity="0.38" />
            </filter>

            <filter id="darkTubeShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000000" floodOpacity="0.58" />
            </filter>
          </defs>

          {/* 5 Faint Horizontal Reference Grid Lines */}
          <line x1="18" y1="28" x2="422" y2="28" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="18" y1="62" x2="422" y2="62" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="18" y1="96" x2="422" y2="96" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="18" y1="130" x2="422" y2="130" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="18" y1="164" x2="422" y2="164" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

          {/* TUBE 1: Glowing Warm Amber-Coral-Crimson 3D Tube */}
          <path
            d="M 24 166 C 42 75, 58 34, 86 42 C 122 52, 165 108, 210 105 C 255 102, 286 58, 332 48 C 365 41, 388 36, 405 32"
            stroke="url(#warmTubeBody)"
            strokeWidth="16"
            strokeLinecap="round"
            filter="url(#tubeGlow)"
          />
          {/* Specular 3D Highlight Along Spine of Warm Tube */}
          <path
            d="M 24 166 C 42 75, 58 34, 86 42 C 122 52, 165 108, 210 105 C 255 102, 286 58, 332 48 C 365 41, 388 36, 405 32"
            stroke="url(#warmTubeSpecular)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* TUBE 2: Intertwining 3D Smoked-Glass Translucent Tube */}
          <path
            d="M 42 22 C 78 68, 114 134, 156 124 C 198 114, 232 45, 282 48 C 325 51, 355 72, 382 54"
            stroke="url(#smokedTubeBody)"
            strokeWidth="16"
            strokeLinecap="round"
            filter="url(#darkTubeShadow)"
          />
          {/* Specular Edge Highlight on Smoked Tube */}
          <path
            d="M 42 22 C 78 68, 114 134, 156 124 C 198 114, 232 45, 282 48 C 325 51, 355 72, 382 54"
            stroke="rgba(255,255,255,0.26)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Intertwining Overpass Segment */}
          <path
            d="M 245 92 C 272 72, 298 55, 332 48 C 365 41, 388 36, 405 32"
            stroke="url(#warmTubeBody)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M 245 92 C 272 72, 298 55, 332 48 C 365 41, 388 36, 405 32"
            stroke="url(#warmTubeSpecular)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Bottom Axis Labels */}
      <div className="grid grid-cols-6 text-center text-xs sm:text-sm font-medium text-slate-300 pt-1">
        {axisLabels.map((label, idx) => (
          <span key={idx} className="tabular-nums">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export interface SegmentItem {
  label: string;
  color: string;
}

export interface TactileCurvedSegmentCardProps {
  headerTitle: string;
  leftValue: string;
  leftUnit: string;
  rightValue: string;
  rightUnit: string;
  items: SegmentItem[];
}

/**
 * Replicates the exact Squircle Split-Chamber Card with Curved Multi-Segment
 * Glowing Progress Cradle and 2-Column Color-Dot Grid from Reference Image 2.
 */
export const TactileCurvedSegmentCard: React.FC<TactileCurvedSegmentCardProps> = ({
  headerTitle,
  leftValue,
  leftUnit,
  rightValue,
  rightUnit,
  items,
}) => {
  return (
    <div className="anim-slide-up tactile-squircle-card w-full max-w-[390px] mx-auto select-none border border-white/[0.08]">
      {/* Upper Ambient-Lit Chamber with Curved Bottom Lip */}
      <div className="tactile-upper-chamber pt-7 pb-8 px-6 text-center relative">
        <p className="text-sm sm:text-base font-medium text-slate-200 tracking-wide">
          {headerTitle}
        </p>

        {/* Dual Large Metric Counter */}
        <div className="mt-4 flex items-start justify-center gap-5 sm:gap-6">
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-semibold text-white tracking-tight tabular-nums leading-none">
              {leftValue}
            </span>
            <span className="mt-2 text-xs sm:text-sm text-slate-300 font-normal">
              {leftUnit}
            </span>
          </div>

          <span className="text-3xl sm:text-4xl font-semibold text-slate-300 leading-none mt-0.5">
            :
          </span>

          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl font-semibold text-white tracking-tight tabular-nums leading-none">
              {rightValue}
            </span>
            <span className="mt-2 text-xs sm:text-sm text-slate-300 font-normal">
              {rightUnit}
            </span>
          </div>
        </div>

        {/* Exact Curved Multi-Segment Glowing Cradle Bar Along Bottom Edge */}
        <div className="absolute left-0 right-0 bottom-0 pointer-events-none">
          <svg
            viewBox="0 0 380 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block"
          >
            <path
              d="M 4 6 C 8 26, 24 38, 52 38"
              stroke="#ff6250"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            <line
              x1="62"
              y1="38"
              x2="162"
              y2="38"
              stroke="#468af5"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            <line
              x1="172"
              y1="38"
              x2="232"
              y2="38"
              stroke="#4fd1ff"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            <line
              x1="242"
              y1="38"
              x2="268"
              y2="38"
              stroke="#8b6ef6"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            <line
              x1="278"
              y1="38"
              x2="304"
              y2="38"
              stroke="#14c37b"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            <path
              d="M 314 38 C 348 38, 368 26, 376 6"
              stroke="#5c6274"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Lower Chamber: 2-Column Legend Grid */}
      <div className="px-8 py-7 grid grid-cols-2 gap-y-3.5 gap-x-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span
              className="w-3.5 h-3.5 rounded-[4px] shrink-0"
              style={{
                backgroundColor: item.color,
                boxShadow: `0 0 8px ${item.color}66`,
              }}
            />
            <span className="text-sm sm:text-[15px] font-normal text-slate-200 truncate">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export interface SectionShellProps {
  id: string;
  sectionNumber: string;
  sectionTag: string;
  sectionTitle: string;
  accentColor?: 'crimson' | 'cyan' | 'amber';
  children: React.ReactNode;
}

/**
 * Wraps each section of the One-Page website in its own soft, visually distinct,
 * isolated architectural container with slide-in animation hooks.
 */
export const SectionShell: React.FC<SectionShellProps> = ({
  id,
  sectionNumber,
  sectionTag,
  sectionTitle,
  accentColor = 'amber',
  children,
}) => {
  const accentMap = {
    crimson: 'text-[#ff4766]',
    cyan: 'text-[#38bdf8]',
    amber: 'text-[#ff984f]',
  };

  return (
    <section id={id} className="section-block w-full px-4 sm:px-6 md:px-10 py-6 md:py-10">
      <div className="isolated-section-shell">
        {/* Soft Diffused Section Header Bar */}
        <div className="px-6 sm:px-10 py-4 border-b border-white/[0.06] bg-white/[0.02] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs font-display tracking-[0.18em] uppercase">
            <span className={`font-bold ${accentMap[accentColor]}`}>
              SECTION {sectionNumber}
            </span>
            <span className="text-slate-600">&middot;</span>
            <span className="text-slate-300 font-medium">{sectionTag}</span>
          </div>
          <div className="text-xs font-sans text-slate-400 tracking-wide">
            {sectionTitle}
          </div>
        </div>

        {/* Section Body Content */}
        <div className="relative">{children}</div>
      </div>
    </section>
  );
};
