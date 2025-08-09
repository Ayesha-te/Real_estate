import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import QuickSearch from '../components/Home/QuickSearch';
import FeaturedProperties from '../components/Home/FeaturedProperties';
import NewProjectsHighlight from '../components/Home/NewProjectsHighlight';
import MarketInsights from '../components/Home/MarketInsights';
import WhyChooseUs from '../components/Home/WhyChooseUs';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <QuickSearch />
      <FeaturedProperties />
      <NewProjectsHighlight />
      <MarketInsights />
      <WhyChooseUs />
    </main>
  );
};

export default HomePage;