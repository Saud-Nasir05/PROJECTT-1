import React from 'react';
import { Link } from 'react-router-dom';

const Roadmap = ({ idea }) => {
  // YAHAN FIX KIYA: Database wala correct path diya
  const roadmapSteps = idea?.brief?.roadmapSteps || [];

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 mb-8">
      <div className="card-body p-8">
        <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-3">
          <span className="text-primary">📍</span> Execution Roadmap
        </h2>
        <p className="opacity-70 mb-8 font-medium">
          Step-by-step guide to launch <span className="font-bold text-primary">{idea?.title || 'this business'}</span> from scratch.
        </p>
        
        <div className="overflow-x-auto w-full pb-4">
          <ul className="steps steps-vertical lg:steps-horizontal w-full">
            
            {/* Agar steps available hain tabhi loop chalega */}
            {roadmapSteps.length > 0 ? (
              roadmapSteps.map((step, idx) => (
                <li key={idx} className="step step-primary min-w-[150px]">
                  <div className="text-left mt-2 lg:mt-4 lg:text-center px-2">
                    {/* Database ke exact variable names: stepName aur description */}
                    <h4 className="font-bold text-lg">{step.stepName || `Step ${idx + 1}`}</h4>
                    <p className="text-sm opacity-70 leading-tight mt-1">{step.description}</p>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-center opacity-50 w-full">No roadmap steps found.</p>
            )}

          </ul>
        </div>

        <div className="card-actions justify-end mt-8 border-t border-base-200 pt-4">
          <Link to="/detail/Droadmap" state={{ selectedIdea: idea }} className="btn btn-outline btn-primary btn-sm">
            Check Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;