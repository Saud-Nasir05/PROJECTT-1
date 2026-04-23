import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const Droadmap = () => {
  const location = useLocation();
  const idea = location.state?.selectedIdea;

  if (!idea) return <Navigate to="/ideas" />;

  const roadmapDetail = idea?.detail?.roadmap;
  const phases = roadmapDetail?.phases || [];
  const tasks = roadmapDetail?.detailedTasks || [];

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="flex justify-between items-end border-b border-base-300 pb-4">
          <div>
            <h2 className="text-4xl font-black text-secondary mb-2">Execution Roadmap</h2>
            <p className="opacity-70 font-medium">Timeline-driven plan for <span className="font-bold">{idea.title}</span>.</p>
          </div>
          <button onClick={() => window.history.back()} className="btn btn-outline btn-sm">← Back</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {phases.map((phase, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="bg-base-200 p-6 rounded-3xl border border-base-300 relative overflow-hidden">
                <div className={`absolute top-0 right-0 ${isEven ? 'bg-primary' : 'bg-secondary'} text-white text-xs font-bold px-4 py-1 rounded-bl-xl`}>
                  {phase.monthRange}
                </div>
                <h3 className="text-2xl font-bold mb-4">{phase.phaseName} Phase</h3>
                <ul className="steps steps-vertical w-full opacity-80 font-medium">
                  {phase.tasks.map((task, tIdx) => (
                    <li key={tIdx} className={`step ${isEven ? 'step-primary' : 'step-secondary'}`}>{task}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-base-100 rounded-3xl shadow-xl border border-base-200 overflow-hidden mt-8">
          <div className="bg-neutral text-neutral-content p-4">
            <h3 className="text-xl font-bold">Detailed Task Backlog</h3>
          </div>
          <div className="overflow-x-auto p-4">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Task Description</th>
                  <th>Department</th>
                  <th>Duration</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((item, idx) => (
                  <tr key={idx} className={`hover ${item.status === 'Blocker' ? 'bg-error/5' : ''}`}>
                    <td className={`font-medium ${item.status === 'Blocker' ? 'font-bold text-error' : ''}`}>{item.description}</td>
                    <td>{item.department}</td>
                    <td>{item.duration}</td>
                    <td>
                      <span className={`badge ${item.status === 'In Progress' ? 'badge-warning' : item.status === 'Done' ? 'badge-success' : item.status === 'Blocker' ? 'badge-error' : 'badge-ghost'}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Droadmap;