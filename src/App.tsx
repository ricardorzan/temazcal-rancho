import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WaterDifference } from './components/WaterDifference';
import { ProcessSection } from './components/ProcessSection';
import { ProductCatalog } from './components/ProductCatalog';
import { LogisticsSection } from './components/LogisticsSection';
import { OrderBuilderCTA } from './components/OrderBuilderCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { useReveal } from './hooks/useReveal';

export const App: React.FC = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-cream-50 text-ink-950">
      <Navbar />
      <main>
        <HeroSection />
        <WaterDifference />
        <ProcessSection />
        <ProductCatalog />
        <LogisticsSection />
        <OrderBuilderCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
