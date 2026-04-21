import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const Droadmap = () => {
  const location = useLocation();
  const idea = location.state?.selectedIdea;

  if (!idea) return <Navigate to="/ideas" />;

  const tasks = idea?.detailedTasks || [
    { task: "Acquire Trade Licenses", dept: "Legal", duration: "3 Weeks", status: "In Progress", badge: "badge-warning" },
    { task: "Hire Key Management Staff", dept: "HR", duration: "4 Weeks", status: "To Do", badge: "badge-ghost" },
    { task: "Setup Digital Marketing Channels", dept: "Marketing", duration: "1 Week", status: "To Do", badge: "badge-ghost" },
    { task: "Quality Assurance Testing", dept: "Operations", duration: "2 Weeks", status: "Blocker", badge: "badge-error" }
  ];

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
          
          <div className="bg-base-200 p-6 rounded-3xl border border-base-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1 rounded-bl-xl">Month 1</div>
            <h3 className="text-2xl font-bold mb-4">Phase 1: Foundation</h3>
            <ul className="steps steps-vertical w-full opacity-80 font-medium">
              <li className="step step-primary">Legal Entity Setup</li>
              <li className="step step-primary">Open Bank Accounts</li>
              <li className="step">Secure Initial Capital</li>
              <li className="step">Co-founder Agreements</li>
            </ul>
          </div>

          <div className="bg-base-200 p-6 rounded-3xl border border-base-300 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-4 py-1 rounded-bl-xl">Month 2-3</div>
            <h3 className="text-2xl font-bold mb-4">Phase 2: Build & Procure</h3>
            <ul className="steps steps-vertical w-full opacity-80 font-medium">
              <li className="step">Sign Commercial Lease</li>
              <li className="step">Purchase Core Assets</li>
              <li className="step">Develop MVP</li>
              <li className="step text-error font-bold">Vendor Agreements</li>
            </ul>
          </div>

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
                    <td className={`font-medium ${item.status === 'Blocker' ? 'font-bold text-error' : ''}`}>{item.task}</td>
                    <td>{item.dept}</td>
                    <td>{item.duration}</td>
                    <td><span className={`badge ${item.badge}`}>{item.status}</span></td>
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