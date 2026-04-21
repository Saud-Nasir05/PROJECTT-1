import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserSavedIdeas, removeSavedIdea } from '../../../slice/ideas/ideasthunk'; 
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SavedIdeas = () => {
  const dispatch = useDispatch();
  const { savedIdeas, isLoading, error } = useSelector((state) => state.ideas);
  
  useEffect(() => {
    dispatch(getUserSavedIdeas());
  }, [dispatch]);

  // 🔥 FIX: window.confirm hata diya. Ab direct delete hoga!
  const handleRemove = (ideaId) => {
    dispatch(removeSavedIdea(ideaId));
  };

  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <Navbar />

      <main className="flex-grow py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-block badge badge-secondary badge-outline px-4 py-2 font-bold uppercase tracking-wider mb-2">
              Your Dashboard 💼
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              My Saved Business Ideas
            </h2>
            <p className="opacity-70 text-lg font-medium">
              Review and manage the business models you've shortlisted for execution.
            </p>
          </div>
          
          {isLoading && <div className="text-center"><span className="loading loading-spinner loading-lg text-secondary"></span></div>}
          {error && <div className="text-center text-error font-bold">{error}</div>}
          
          {!isLoading && (!savedIdeas || savedIdeas.length === 0) && !error && (
            <div className="text-center bg-base-100 p-10 rounded-3xl shadow-sm border border-base-300 max-w-2xl mx-auto animate-fade-in">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-2xl font-bold mb-2">No ideas saved yet!</h3>
              <p className="opacity-70 mb-6">You haven't added any business models to your portfolio. Start exploring to find your next big venture.</p>
              <Link to="/" className="btn btn-primary shadow-lg">Explore Ideas 🪄</Link>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedIdeas && savedIdeas.map((idea, index) => {
              const badgeColors = ["badge-primary", "badge-secondary", "badge-accent"];
              const borderColors = ["hover:border-primary/50", "hover:border-secondary/50", "hover:border-accent/50"];
              const btnColors = ["btn-primary", "btn-secondary btn-outline hover:!text-white", "btn-accent btn-outline hover:!text-white"];
              
              const currentBadge = badgeColors[index % 3];
              const currentBorder = borderColors[index % 3];
              const currentBtn = btnColors[index % 3];

              return (
                <div key={idea._id} className={`card bg-base-100 border border-base-300 shadow-xl hover:-translate-y-2 ${currentBorder} transition-all duration-300 relative`}>
                  
                  {/* DELETE BUTTON */}
                  <button 
                    onClick={() => handleRemove(idea._id)}
                    className="absolute top-4 right-4 z-10 btn btn-circle btn-sm btn-error shadow-md text-white hover:scale-110 transition-transform" 
                    title="Remove Idea"
                  >
                    🗑️
                  </button>

                  <div className="card-body mt-2">
                    <div className="flex justify-between items-start mb-2 pr-8">
                      <div>
                        <div className={`badge ${currentBadge} font-bold mr-2`}>Saved</div>
                        <div className="badge badge-outline">{idea.category}</div>
                      </div>
                    </div>
                    
                    <h3 className="card-title text-2xl font-black mb-2">{idea.title}</h3>
                    <p className="opacity-75 text-sm mb-4 min-h-[60px]">
                      {idea.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm"><span className="opacity-70">Est. ROI:</span> <span className="font-bold text-success">{idea.estRoi}</span></div>
                      <div className="flex justify-between text-sm"><span className="opacity-70">Risk Level:</span> <span className={`font-bold ${index === 2 ? 'text-error' : index === 1 ? 'text-success' : 'text-warning'}`}>{idea.riskLevel}</span></div>
                      <div className="flex justify-between text-sm"><span className="opacity-70">Time to Launch:</span> <span className="font-bold">{idea.timeToLaunch}</span></div>
                    </div>

                    <div className="card-actions justify-end mt-auto border-t border-base-200 pt-4">
                      <Link 
                        to="/breif" 
                        state={{ selectedIdea: idea }} 
                        className={`btn w-full shadow-lg ${currentBtn}`}
                      >
                        Review Business Brief 🚀
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SavedIdeas;