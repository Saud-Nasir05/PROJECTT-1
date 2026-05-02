import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const Dbudget = () => {
  const location = useLocation();
  const idea = location.state?.selectedIdea;

  if (!idea) return <Navigate to="/ideas" />;

  const budget = idea?.detail?.budget;
  const revenueStreams = budget?.revenueStreams || [];
  const allocations = budget?.allocations || [];

  return (
    <>
    <Navbar/>
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
            <div className="stat-value text-primary">{budget?.totalCapexAmount || 'N/A'}</div>
            <div className="stat-desc font-medium mt-1">Setup, licenses, & infra</div>
          </div>
          <div className="stat">
            <div className="stat-title font-bold">Monthly OpEx (Burn)</div>
            <div className="stat-value text-secondary">{budget?.monthlyBurnRate || 'N/A'}</div>
            <div className="stat-desc font-medium mt-1">Salaries, marketing, utilities</div>
          </div>
          <div className="stat">
            <div className="stat-title font-bold">Est. ROI (Year 1)</div>
            <div className="stat-value text-success">{budget?.yearOneRoi || idea?.estRoi || 'N/A'}</div>
            <div className="stat-desc font-medium mt-1">Break-even at {idea?.brief?.breakEvenPoint || 'N/A'}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-base-200 p-8 rounded-3xl shadow-inner border border-base-300">
            <h3 className="text-xl font-bold mb-6">Capital Allocation</h3>
            <div className="space-y-6">
              {allocations.map((alloc, idx) => {
                const colors = ['progress-primary', 'progress-secondary', 'progress-accent', 'progress-error'];
                return (
                  <div key={idx}>
                    <div className="flex justify-between mb-2 text-sm font-bold">
                      <span>{alloc.category}</span>
                      <span>{alloc.percentage}%</span>
                    </div>
                    <progress className={`progress ${colors[idx % 4]} w-full h-3`} value={alloc.percentage} max="100"></progress>
                    <p className="text-xs opacity-70 mt-1">{alloc.description}</p>
                  </div>
                );
              })}
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
                      <td className="font-semibold">{item.streamName}</td>
                      <td><div className="badge badge-success badge-sm">{item.margin}</div></td>
                      <td className="font-mono">{item.estMonthly}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-base-300">
                    <td colSpan="2" className="text-right font-bold">Total Gross Run Rate:</td>
                    <td className="font-bold text-primary font-mono">{budget?.totalGrossRunRate || 'N/A'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Dbudget;