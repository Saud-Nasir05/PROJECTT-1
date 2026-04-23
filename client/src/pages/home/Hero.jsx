import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-[85vh] bg-base-100 flex items-center relative overflow-hidden">
      
      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        <div className="lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-base-200 border border-base-300 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
            </span>
            <span className="text-sm font-bold tracking-wide">BizGenie 2.0 is Live</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Your Personal <br/>
            <span className="text-primary relative inline-block mt-2">
              Business
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-secondary/30 rounded-full skew-x-12"></div>
            </span> Expert.
          </h1>
          
          <p className="text-lg sm:text-xl opacity-80 max-w-xl font-medium">
            Stop struggling with guesswork. We provide instant financial models, marketing plans, and market research based exactly on your budget.
          </p>
          


          {/* Trust Stats */}
          <div className="flex gap-8 pt-6 border-t border-base-300 w-full justify-center lg:justify-start">
            <div>
              <strong className="block text-3xl font-black text-base-content">10k+</strong> 
              <span className="text-sm opacity-60 font-semibold uppercase tracking-wider">Ideas Generated</span>
            </div>
            <div>
              <strong className="block text-3xl font-black text-base-content">99%</strong> 
              <span className="text-sm opacity-60 font-semibold uppercase tracking-wider">Data Accuracy</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative w-full h-[400px] sm:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] transform rotate-3 opacity-30 blur-sm"></div>
          <img 
            src="/graph.jpg" 
            alt="Analytics Dashboard" 
            className="absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl transform -rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 border-4 border-base-100" 
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;