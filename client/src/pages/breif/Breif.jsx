import React, { useState } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { saveIdeaToProfile } from '../../../slice/ideas/ideasthunk'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import Roadmap from './Roadmap'; 
import Budget from './Budget';
import Growth from './Growth';
import Location from './Location';

const Brief = () => {
  const location = useLocation();
  const idea = location.state?.selectedIdea;

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.ideas);

  const [toast, setToast] = useState(null);

  const showNotification = (message, type) => {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleSave = async (ideaId) => {
    try {
      await dispatch(saveIdeaToProfile({ templateId: ideaId })).unwrap();
      showNotification("idea successfully saved", "success");
    } catch (err) {
      showNotification(err || "idea was already saved", "error"); 
    }
  };

  if (!idea) {
    return <Navigate to="/ideas" />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-base-200 relative">
      
      {toast && (
        <div className="toast toast-top toast-end z-[100] mt-16 animate-fade-in">
          <div className={`alert ${toast.type === 'success' ? 'alert-success text-white' : 'alert-warning font-bold'} shadow-lg`}>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      <Navbar />

      <main className="flex-grow py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-10">
            <Link to="/ideas" className="btn btn-ghost btn-sm mb-6 opacity-70 hover:opacity-100">
              ← Back to Ideas
            </Link>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="badge badge-primary badge-outline mb-3 font-bold uppercase tracking-wider">
                  {idea.category}
                </div>
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">{idea.title}</h1>
                <p className="text-lg opacity-70 mt-2 font-medium">{idea.description}</p>
              </div>
              
              <button 
                onClick={() => handleSave(idea._id)} 
                disabled={isLoading} 
                className="btn btn-primary text-white shadow-lg px-8 rounded-full hover:scale-105 transition-transform disabled:opacity-50"
              >
                {isLoading ? "Saving..." : "🤍 Save to Profile"}
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <Roadmap idea={idea} />
            <Budget idea={idea} />
            <Growth idea={idea} />
            <Location idea={idea} />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Brief;