import React from 'react';
import { Link } from 'react-router-dom';

const Roadmap = ({ idea }) => {
  const roadmapSteps = idea?.roadmap || [
    { title: "Legal & Setup", desc: "Register business & open bank account" },
    { title: "Infrastructure", desc: "Secure location and equipment" },
    { title: "Hiring", desc: "Recruit core team members" },
    { title: "Launch", desc: "Marketing & grand opening" }
  ];

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 mb-8">
      <div className="card-body p-8">
        <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-3">
          <span className="text-primary">📍</span> Execution Roadmap
        </h2>
        <p className="opacity-70 mb-8 font-medium">Step-by-step guide to launch <span className="font-bold text-primary">{idea?.title}</span> from scratch.</p>
        
        <div className="overflow-x-auto w-full pb-4">
          <ul className="steps steps-vertical lg:steps-horizontal w-full">
            {/* Dynamic Steps Map */}
            {roadmapSteps.map((step, idx) => (
              <li key={idx} className="step step-primary min-w-[150px]">
                <div className="text-left mt-2 lg:mt-4 lg:text-center px-2">
                  {/* Agar backend ne object bheja hai toh .title, warna seedha string */}
                  <h4 className="font-bold text-lg">{step.title || `Step ${idx + 1}`}</h4>
                  <p className="text-sm opacity-70 leading-tight mt-1">{step.desc || step}</p>
                </div>
              </li>
            ))}
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