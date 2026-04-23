import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const Dgrowth = () => {
  const location = useLocation();
  const idea = location.state?.selectedIdea;

  if (!idea) return <Navigate to="/ideas" />;

  const growth = idea?.detail?.growth;
  const strategies = growth?.scalingTimeline || [];

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
            <div className="radial-progress text-primary mb-2" style={{"--value": growth?.customerRetention || 0, "--size":"4rem"}} role="progressbar">{growth?.customerRetention || 0}%</div>
            <p className="font-bold text-sm">Customer Retention</p>
          </div>
          <div className="bg-base-200 p-6 rounded-2xl text-center border border-base-300">
            <div className="radial-progress text-secondary mb-2" style={{"--value": growth?.grossMargin || 0, "--size":"4rem"}} role="progressbar">{growth?.grossMargin || 0}%</div>
            <p className="font-bold text-sm">Gross Margin</p>
          </div>
          <div className="bg-base-200 p-6 rounded-2xl text-center border border-base-300">
            <div className="radial-progress text-accent mb-2" style={{"--value": growth?.marketPenetration || 0, "--size":"4rem"}} role="progressbar">{growth?.marketPenetration || 0}%</div>
            <p className="font-bold text-sm">Market Penetr.</p>
          </div>
          <div className="bg-base-200 p-6 rounded-2xl text-center border border-base-300">
            <div className="radial-progress text-success mb-2" style={{"--value":100, "--size":"4rem"}} role="progressbar">{growth?.yoyGrowth || 'N/A'}</div>
            <p className="font-bold text-sm">YoY Revenue Growth</p>
          </div>
        </div>

        <div className="bg-base-100 p-8 rounded-3xl shadow-xl border border-base-200 mt-8">
          <h3 className="text-2xl font-bold mb-8">Scaling Strategy</h3>
          <ul className="timeline timeline-vertical lg:timeline-horizontal">
            {strategies.map((strat, idx) => {
              const colors = ['bg-primary', 'bg-secondary', 'bg-accent', 'bg-info'];
              const color = colors[idx % colors.length];
              return (
                <li key={idx}>
                  {idx > 0 && <hr className={color} />}
                  <div className="timeline-start font-black">{strat.year}</div>
                  <div className="timeline-middle"><div className={`w-4 h-4 ${color} rounded-full`}></div></div>
                  <div className={`timeline-end timeline-box ${color.replace('bg-', 'bg-') + '/10 border-none'}`}>
                    <h4 className="font-bold">{strat.title}</h4>
                    <p className="text-xs opacity-70">{strat.description}</p>
                  </div>
                  {idx < strategies.length - 1 && <hr className={color} />}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dgrowth;