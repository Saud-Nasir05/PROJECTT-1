import React from 'react';
import { Link } from 'react-router-dom';

const Location = ({ idea }) => {
  // YAHAN FIX KIYA: Database ke exact paths use kiye hain
  const targetAreas = idea?.brief?.targetAreas || ["Commercial Zone", "High Traffic Area", "Urban City"];
  const requirements = idea?.brief?.spaceRequirements || ["Minimum 500 sq ft.", "Commercial Electricity", "Parking Space"];

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 mb-8">
      <div className="card-body p-8">
        <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-3">
          <span className="text-accent">🗺️</span> Location & Space
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h4 className="font-bold text-lg mb-3">Target Areas</h4>
            <div className="flex flex-wrap gap-2">
              {/* Dynamic Badges Map */}
              {targetAreas.map((area, idx) => (
                <div key={idx} className="badge badge-lg p-4 font-bold border-base-300">
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-base-200 p-6 rounded-2xl">
            <h4 className="font-bold text-lg mb-3">Requirements</h4>
            <ul className="space-y-2 opacity-80 font-medium">
              {/* Dynamic List Map */}
              {requirements.map((req, idx) => (
                <li key={idx}>✔️ {req}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card-actions justify-end mt-6 border-t border-base-200 pt-4">
          <Link to="/detail/Dlocations" state={{ selectedIdea: idea }} className="btn btn-outline btn-accent btn-sm">
            Check Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Location;