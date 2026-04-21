import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="lg:w-1/2 relative w-full">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-30"></div>
          <img 
            src="/meeting.jpg" 
            alt="BizGenie Team Strategy" 
            className="relative rounded-2xl shadow-2xl border-4 border-base-100 object-cover w-full h-[350px] md:h-[450px]"
          />
          
          <div className="absolute -bottom-6 -right-2 md:-right-6 bg-base-100 p-4 rounded-xl shadow-xl flex items-center gap-3 border border-base-200">
            <div className="bg-success text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <p className="text-xs md:text-sm font-bold opacity-70">Success Rate</p>
              <p className="text-lg md:text-xl font-extrabold text-success">Verified Ideas</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-8 mt-10 lg:mt-0">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">Why Choose BizGenie?</h2>
            <p className="text-lg opacity-75 leading-relaxed">
              We bridge the gap between theoretical knowledge and practical execution, saving you from expensive trial and error in the real market.
            </p>
          </div>
          
          <ul className="space-y-6">
            {/* Feature 1 */}
            <li className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Automated Financial Analytics</h4>
                <p className="opacity-70 text-sm md:text-base">No complex Excel sheets. We instantly calculate your exact Capital Expenditure (CapEx) and Operational Costs (OpEx) based on your budget.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-xl shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Market-Specific Ideas</h4>
                <p className="opacity-70 text-sm md:text-base">Receive highly targeted business suggestions that actually work in your local economic environment.</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;