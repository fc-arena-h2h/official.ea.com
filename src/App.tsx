import React, { useEffect, useState } from 'react';
import { NavbarSection } from './sections/NavbarSection';
import { Section1Hero } from './sections/Section1Hero';
import { Section2Welcome } from './sections/Section2Welcome';
import { Section3Rules } from './sections/Section3Rules';
import { Section4ArenaGallery } from './sections/Section4ArenaGallery';
import { Section5FinalCta } from './sections/Section5FinalCta';
import { LanguageCode, TRANSLATIONS } from './i18n/translations';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

const LIVE_TOURNAMENT_URL = 'https://fc-arena-h2h.github.io/tournament.com';

export function App() {
  // Default language is English ('en') as requested
  const [lang, setLang] = useState<LanguageCode>('en');
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const initAnimations = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      if (!gsap || !ScrollTrigger) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        heroTl
          .fromTo(
            '.hero-kicker',
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 }
          )
          .fromTo(
            '.hero-pillars > div',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
            '-=0.4'
          )
          .fromTo(
            '.hero-main-title',
            { scale: 0.92, y: 30, opacity: 0 },
            { scale: 1, y: 0, opacity: 1, duration: 0.9 },
            '-=0.4'
          );

        gsap.utils.toArray('.anim-slide-up').forEach((el: any) => {
          gsap.fromTo(
            el,
            { y: 48, opacity: 0, scale: 0.98 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });

        gsap.utils.toArray('.anim-slide-left').forEach((el: any) => {
          gsap.fromTo(
            el,
            { x: -48, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });

        gsap.utils.toArray('.anim-slide-right').forEach((el: any) => {
          gsap.fromTo(
            el,
            { x: 48, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      });

      return () => ctx.revert();
    };

    const timer = setTimeout(initAnimations, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen w-full bg-[#111215] text-[#f4f4f0] selection:bg-[#d9232e] selection:text-white overflow-x-hidden"
    >
      {/* Editorial Top Header + Sub-Header Shortcut & Language Switcher Bar */}
      <NavbarSection lang={lang} onChangeLang={setLang} t={t.nav} />

      {/* Main One-Page Modular Sections */}
      <main>
        {/* Section 1: Dark Editorial Hero + Concentric Circles + Giant FC ARENA + Red Marquee Ticker */}
        <Section1Hero t={t.hero} />

        {/* Section 2: Dark Curved Arch Stage + Google Play Store Mobile App Download Section */}
        <Section2Welcome
          onOpenModal={() => {
            const el = document.getElementById('app-download-store');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          t={t.section2}
        />

        {/* Section 3: Crisp Off-White Editorial Rules + Complete Player & Publisher Workflow Guides */}
        <Section3Rules t={t.section3} />

        {/* Section 4: 4 Core App Modules + Key Platform Highlights + 3-Card Showcase + Telemetry Widgets */}
        <Section4ArenaGallery liveUrl={LIVE_TOURNAMENT_URL} t={t.section4} />

        {/* Section 5: Concentric Target Ring Finale + Giant FC ARENA VS + Official Community Links */}
        <Section5FinalCta liveUrl={LIVE_TOURNAMENT_URL} t={t.section5} />
      </main>
    </div>
  );
}

export default App;
