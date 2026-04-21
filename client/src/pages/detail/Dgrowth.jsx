import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const Dgrowth = () => {
  const location = useLocation();
  const idea = location.state?.selectedIdea;

  if (!idea) return <Navigate to="/ideas" />;

  const strategies = idea?.scalingStrategy || [
    { year: "Year 1", title: "Market Entry", desc: "Achieve break-even, build brand loyalty.", color: "bg-primary" },
    { year: "Year 2-3", title: "City Expansion", desc: "Open new branches, double workforce.", color: "bg-secondary" },
    { year: "Year 4-5", title: "National Scale", desc: "Franchise model or Series A Funding.", color: "bg-base-300" }
  ];

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="flex justify-between items-end border-b border-base-300 pb-4">
          <div>
            <h2 className="text-4xl font-black text-success mb-2">Growth & Projections</h2>
            <p className="opacity-70 font-medium">Scaling plan for <span className="font-bold">{idea.title}</span>.</p>
          </div>
          <button onClick={() => window.history.back()} className="btn btn-outline btn-sm">← Back</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-base-200 p-6 rounded-2xl text-center border border-base-300">
            <div className="radial-progress text-primary mb-2" style={{"--value": idea?.kpi?.retention || 70, "--size":"4rem"}} role="progressbar">{idea?.kpi?.retention || 70}%</div>
            <p className="font-bold text-sm">Customer Retention</p>
          </div>
          <div className="bg-base-200 p-6 rounded-2xl text-center border border-base-300">
            <div className="radial-progress text-secondary mb-2" style={{"--value": idea?.kpi?.margin || 45, "--size":"4rem"}} role="progressbar">{idea?.kpi?.margin || 45}%</div>
            <p className="font-bold text-sm">Gross Margin</p>
          </div>
          <div className="bg-base-200 p-6 rounded-2xl text-center border border-base-300">
            <div className="radial-progress text-accent mb-2" style={{"--value": idea?.kpi?.penetration || 85, "--size":"4rem"}} role="progressbar">{idea?.kpi?.penetration || 85}%</div>
            <p className="font-bold text-sm">Market Penetration</p>
          </div>
          <div className="bg-base-200 p-6 rounded-2xl text-center border border-base-300">
            <div className="radial-progress text-success mb-2" style={{"--value":100, "--size":"4rem"}} role="progressbar">{idea?.kpi?.yoy || '3x'}</div>
            <p className="font-bold text-sm">YoY Revenue Growth</p>
          </div>
        </div>

        <div className="bg-base-100 p-8 rounded-3xl shadow-xl border border-base-200 mt-8">
          <h3 className="text-2xl font-bold mb-8">5-Year Scaling Strategy</h3>
          <ul className="timeline timeline-vertical lg:timeline-horizontal">
            {strategies.map((strat, idx) => (
              <li key={idx}>
                {idx > 0 && <hr className={strat.color} />}
                <div className={`timeline-start font-black ${idx === 2 ? 'text-base-300' : ''}`}>{strat.year}</div>
                <div className="timeline-middle"><div className={`w-4 h-4 ${strat.color} rounded-full`}></div></div>
                <div className={`timeline-end timeline-box ${strat.color === 'bg-base-300' ? 'border-base-300' : strat.color.replace('bg-', 'bg-') + '/10 border-none'}`}>
                  <h4 className="font-bold">{strat.title}</h4>
                  <p className="text-xs opacity-70">{strat.desc}</p>
                </div>
                {idx < strategies.length - 1 && <hr className={strat.color} />}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Dgrowth;