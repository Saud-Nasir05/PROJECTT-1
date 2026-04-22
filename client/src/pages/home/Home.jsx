import React from 'react';

// Global Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Static Sections
import Hero from './Hero';
import BudgetSection from './BudgetSection';
import HowItWorks from './HowItWorks';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-base-100">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        
      
        <BudgetSection />
        
        <HowItWorks />
        <WhyChooseUs />
      </main>

      <Footer />
    </div>
  );
};

export default Home;