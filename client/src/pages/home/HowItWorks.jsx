import React from 'react';

const HowItWorks = () => {
  return (
    <div className="py-24 bg-base-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">How BizGenie Works</h2>
          <p className="opacity-70 text-lg max-w-2xl mx-auto font-medium">
            From raw capital to a polished execution plan in three flawless steps.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6 bg-base-200/50 p-6 md:p-8 rounded-3xl border border-base-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
             <div className="text-7xl font-black text-base-300 group-hover:text-primary transition-colors duration-300 w-24 text-center">
               01
             </div>
             <div className="flex-1 text-center md:text-left">
               <h3 className="text-2xl font-extrabold mb-2">Set Your Capital</h3>
               <p className="opacity-75 text-lg leading-relaxed">
                 Input your exact investment amount. Whether you have 50K or 5M, our system scales to find the perfect match for your pocket.
               </p>
             </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center gap-6 bg-base-200/50 p-6 md:p-8 rounded-3xl border border-base-200 hover:border-secondary/30 hover:shadow-xl transition-all duration-300 group">
             <div className="text-7xl font-black text-base-300 group-hover:text-secondary transition-colors duration-300 w-24 text-center">
               02
             </div>
             <div className="flex-1 text-center md:text-left">
               <h3 className="text-2xl font-extrabold mb-2">Smart AI Filtering</h3>
               <p className="opacity-75 text-lg leading-relaxed">
                 Our proprietary algorithm scans the database to pinpoint the top 3 most viable and profitable business models based on your constraints.
               </p>
             </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6 bg-base-200/50 p-6 md:p-8 rounded-3xl border border-base-200 hover:border-accent/30 hover:shadow-xl transition-all duration-300 group">
             <div className="text-7xl font-black text-base-300 group-hover:text-accent transition-colors duration-300 w-24 text-center">
               03
             </div>
             <div className="flex-1 text-center md:text-left">
               <h3 className="text-2xl font-extrabold mb-2">Execute with Confidence</h3>
               <p className="opacity-75 text-lg leading-relaxed">
                 Get actionable roadmaps, automated CapEx/OpEx breakdowns, and realistic profit margins. No fluff, just concrete plans.
               </p>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HowItWorks;