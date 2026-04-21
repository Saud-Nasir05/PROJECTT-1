import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const Dlocations = () => {
  const location = useLocation();
  const idea = location.state?.selectedIdea;

  if (!idea) return <Navigate to="/ideas" />;

  const zones = idea?.targetZones || [
    { name: "DHA & Clifton", desc: "Premium pricing, SEC A audience.", color: "border-primary" },
    { name: "Shahrah-e-Faisal", desc: "Corporate hub, B2B deals.", color: "border-secondary" },
    { name: "Gulshan & Johar", desc: "Mass market volume.", color: "border-accent" }
  ];

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="flex justify-between items-end border-b border-base-300 pb-4">
          <div>
            <div className="badge badge-accent badge-outline mb-3 font-bold uppercase tracking-wider">
              Local Market Strategy
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-accent mb-2">{idea?.city || 'Karachi'} Market Analysis</h2>
            <p className="opacity-70 font-medium text-lg">Deep dive for {idea.title}</p>
          </div>
          <button onClick={() => window.history.back()} className="btn btn-outline btn-sm hidden md:flex">← Back</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-base-200 p-6 rounded-3xl border border-base-300">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">📍 Target Zones</h3>
              <div className="space-y-3">
                {zones.map((zone, idx) => (
                  <div key={idx} className={`bg-base-100 p-4 rounded-xl shadow-sm border-l-4 ${zone.color}`}>
                    <h4 className="font-bold">{zone.name}</h4>
                    <p className="text-xs opacity-70 mt-1">{zone.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-base-200 p-6 rounded-3xl border border-base-300">
              <h3 className="text-xl font-bold mb-4">Core Demographics</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm flex justify-between"><span>Age: 18 - 25</span> <span className="font-bold">{idea?.demos?.youth || 45}%</span></div>
                  <progress className="progress progress-accent w-full" value={idea?.demos?.youth || 45} max="100"></progress>
                </div>
                <div>
                  <div className="text-sm flex justify-between"><span>Age: 26 - 35</span> <span className="font-bold">{idea?.demos?.pro || 40}%</span></div>
                  <progress className="progress progress-accent w-full" value={idea?.demos?.pro || 40} max="100"></progress>
                </div>
              </div>
              <div className="mt-6 p-4 bg-base-100 rounded-xl">
                <p className="text-sm font-semibold">Target Class:</p>
                <p className="text-lg font-black text-primary">{idea?.secClass || 'SEC A & SEC B+'}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-base-100 p-8 rounded-3xl shadow-xl border border-base-200">
              <h3 className="text-2xl font-bold mb-6">Local Competitor Landscape</h3>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr className="bg-base-200 text-base-content">
                      <th>Region / Zone</th>
                      <th>Saturation</th>
                      <th>Market Gap</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold">South Zone</td>
                      <td><div className="badge badge-error badge-sm">High</div></td>
                      <td className="text-sm">Demand for hyper-personalized experiences.</td>
                    </tr>
                    <tr>
                      <td className="font-bold">East Zone</td>
                      <td><div className="badge badge-warning badge-sm">Medium</div></td>
                      <td className="text-sm">Need for affordable premium quality.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-success/10 p-6 rounded-3xl border border-success/20 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-success text-white rounded-full flex items-center justify-center text-2xl mb-4 shadow-lg">🚀</div>
                <h4 className="font-bold text-success text-lg">{idea?.city || 'Karachi'} Advantage</h4>
                <p className="text-sm mt-2 opacity-80 font-medium leading-relaxed">Massive population density means high footfall. Best place to test MVP.</p>
              </div>
              <div className="bg-error/10 p-6 rounded-3xl border border-error/20 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-error text-white rounded-full flex items-center justify-center text-2xl mb-4 shadow-lg">⚡</div>
                <h4 className="font-bold text-error text-lg">Operational Risks</h4>
                <p className="text-sm mt-2 opacity-80 font-medium leading-relaxed">Utility instability and inflation. Mitigation: Backup systems in CapEx.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden mt-8 text-center border-t border-base-200 pt-6">
          <button onClick={() => window.history.back()} className="btn btn-wide btn-outline">← Back</button>
        </div>
      </div>
    </div>
  );
};

export default Dlocations;