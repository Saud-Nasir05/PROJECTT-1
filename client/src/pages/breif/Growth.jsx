import React from 'react';
import { Link } from 'react-router-dom';

const Growth = ({ idea }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 mb-8">
      <div className="card-body p-8">
        <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-3">
          <span className="text-success">📈</span> Growth & Projections
        </h2>
        
        <div className="stats stats-vertical lg:stats-horizontal shadow-inner bg-base-200 w-full">
          <div className="stat">
            <div className="stat-title font-semibold">Est. ROI</div>
            {/* Database keys exactly match karti hain */}
            <div className="stat-value text-success">{idea?.estRoi || 'N/A'}</div>
          </div>
          
          <div className="stat">
            <div className="stat-title font-semibold">Time to Launch</div>
            <div className="stat-value text-primary">{idea?.timeToLaunch || 'N/A'}</div>
          </div>
          
          <div className="stat">
            <div className="stat-title font-semibold">Risk Level</div>
            <div className="stat-value text-warning">{idea?.riskLevel || 'N/A'}</div>
          </div>
        </div>

        <div className="card-actions justify-end mt-6 border-t border-base-200 pt-4">
          <Link to="/detail/Dgrowth" state={{ selectedIdea: idea }} className="btn btn-outline btn-success btn-sm">
            Check Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Growth;