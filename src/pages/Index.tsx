import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LiveMetrics from '@/components/LiveMetrics';
import TechnologyShowcase from '@/components/TechnologyShowcase';
import ROICalculator from '@/components/ROICalculator';
import InvestmentTiers from '@/components/InvestmentTiers';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LiveMetrics />
      <TechnologyShowcase />
      <ROICalculator />
      <InvestmentTiers />
      <Footer />
    </div>
  );
};

export default Index;