import React from 'react';
import { Hero } from '../components/home/Hero';
import { QuickAbout } from '../components/home/QuickAbout';
import { DomainsSection } from '../components/home/DomainsSection';
import { AgriLucidSpotlight } from '../components/home/AgriLucidSpotlight';
import { FeaturedProjectsSection } from '../components/home/FeaturedProjectsSection';
import { EventsPreviewSection } from '../components/home/EventsPreviewSection';
import { InitiativesSection } from '../components/home/InitiativesSection';
import { PartnersCallSection } from '../components/home/PartnersCallSection';
import { FinalCTASection } from '../components/home/FinalCTASection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Présentation rapide */}
      <QuickAbout />

      {/* 3. Nos domaines d'action */}
      <DomainsSection />

      {/* 4. Projets mis en avant (Spotlight AgriLucid + Portfolio) */}
      <AgriLucidSpotlight />
      <FeaturedProjectsSection />

      {/* 5. Événements */}
      <EventsPreviewSection />

      {/* 6. Initiatives & Formations */}
      <InitiativesSection />

      {/* 7. Appel aux partenaires */}
      <PartnersCallSection />

      {/* 8. Call to action final */}
      <FinalCTASection />
    </div>
  );
};

export default HomePage;
