import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const Dbudget = () => {
  const location = useLocation();
  const idea = location.state?.selectedIdea;

  if (!idea) return <Navigate to="/ideas" />;

  const revenueStreams = idea?.revenueStreams || [
    { stream: "Direct B2C Sales", margin: "High (40%)", est: "PKR 450K", badge: "badge-success" },
    { stream: "B2B Contracts", margin: "Med (25%)", est: "PKR 300K", badge: "badge-warning" },
    { stream: "Subscription Services", margin: "High (80%)", est: "PKR 150K", badge: "badge-info" }
  ];

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="flex justify-between items-end border-b border-base-300 pb-4">
          <div>
            <h2 className="text-4xl font-black text-primary mb-2">Financial Projections</h2>
            <p className="opacity-70 font-medium">Breakdown for <span className="font-bold">{idea.title}</span>.</p>
          </div>
          <button onClick={() => window.history.back()} className="btn btn-outline btn-sm">← Back</button>
        </div>
        
        <div className="stats stats-vertical lg:stats-horizontal shadow-xl w-full border border-base-200">
          <div className="stat">
            <div className="stat-title font-bold">Total Initial CapEx</div>
            <div className="stat-value text-primary">{idea?.totalBudget || 'PKR 1.5M'}</div>
            <div className="stat-desc font-medium mt-1">Setup, licenses, & infra</div>
          </div>
          <div className="stat">
            <div className="stat-title font-bold">Monthly OpEx (Burn)</div>
            <div className="stat-value text-secondary">{idea?.monthlyOpex || 'PKR 250K'}</div>
            <div className="stat-desc font-medium mt-1">Salaries, marketing, utilities</div>
          </div>
          <div className="stat">
            <div className="stat-title font-bold">Est. ROI (Year 1)</div>
            <div className="stat-value text-success">{idea?.estRoi || '32%'}</div>
            <div className="stat-desc font-medium mt-1">Break-even at {idea?.timeToLaunch || 'Month 8'}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Detailed Budget Allocation */}
          <div className="bg-base-200 p-8 rounded-3xl shadow-inner border border-base-300">
            <h3 className="text-xl font-bold mb-6">Capital Allocation</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-sm font-bold"><span>Core Infrastructure</span><span>{idea?.allocations?.infra || 45}%</span></div>
                <progress className="progress progress-primary w-full h-3" value={idea?.allocations?.infra || 45} max="100"></progress>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm font-bold"><span>Marketing & Customer Acq.</span><span>{idea?.allocations?.marketing || 25}%</span></div>
                <progress className="progress progress-secondary w-full h-3" value={idea?.allocations?.marketing || 25} max="100"></progress>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm font-bold"><span>Working Capital (Buffer)</span><span>{idea?.allocations?.buffer || 20}%</span></div>
                <progress className="progress progress-accent w-full h-3" value={idea?.allocations?.buffer || 20} max="100"></progress>
              </div>
              <div>
                <div className="flex justify-between mb-2 text-sm font-bold"><span>Legal & Contingency</span><span>{idea?.allocations?.legal || 10}%</span></div>
                <progress className="progress progress-error w-full h-3" value={idea?.allocations?.legal || 10} max="100"></progress>
              </div>
            </div>
          </div>

          <div className="bg-base-100 p-8 rounded-3xl shadow-xl border border-base-200">
            <h3 className="text-xl font-bold mb-6">Projected Revenue Streams</h3>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr className="bg-base-200">
                    <th>Stream</th>
                    <th>Margin</th>
                    <th>Est. Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueStreams.map((item, idx) => (
                    <tr key={idx}>
                      <td className="font-semibold">{item.stream}</td>
                      <td><div className={`badge ${item.badge} badge-sm`}>{item.margin}</div></td>
                      <td className="font-mono">{item.est}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-base-300">
                    <td colSpan="2" className="text-right font-bold">Total Gross Run Rate:</td>
                    <td className="font-bold text-primary font-mono">{idea?.totalRevenue || 'PKR 900K'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dbudget;