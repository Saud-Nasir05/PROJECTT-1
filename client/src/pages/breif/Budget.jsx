import React from 'react';
import { Link } from 'react-router-dom';

const Budget = ({ idea }) => {
  // YAHAN FIX KIYA: Database ke exact keys use kiye hain
  const capEx = idea?.brief?.capexPercentage || 50; 
  const opEx = idea?.brief?.opexPercentage || 50;

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 mb-8">
      <div className="card-body p-8">
        <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-3">
          <span className="text-secondary">💰</span> Financial Breakdown
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-error/5 p-6 rounded-2xl border border-error/20">
            <h3 className="text-xl font-bold text-error mb-2">CapEx</h3>
            <p className="text-sm opacity-70 mb-4">One-time setup costs.</p>
            <div className="text-4xl font-black text-base-content mb-4">{capEx}%</div>
            <progress className="progress progress-error w-full" value={parseInt(capEx)} max="100"></progress>
          </div>

          <div className="bg-warning/5 p-6 rounded-2xl border border-warning/20">
            <h3 className="text-xl font-bold text-warning mb-2">OpEx</h3>
            <p className="text-sm opacity-70 mb-4">Monthly running costs.</p>
            <div className="text-4xl font-black text-base-content mb-4">{opEx}%</div>
            <progress className="progress progress-warning w-full" value={parseInt(opEx)} max="100"></progress>
          </div>
        </div>

        <div className="card-actions justify-end mt-6 border-t border-base-200 pt-4">
          <Link to="/detail/Dbudget" state={{ selectedIdea: idea }} className="btn btn-outline btn-secondary btn-sm">
            Check Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Budget;