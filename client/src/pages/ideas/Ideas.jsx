import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveIdeaToProfile } from '../../../slice/ideas/ideasthunk'; 

const Ideas = () => {
  const dispatch = useDispatch();
  const { matchingIdeas, isLoading } = useSelector((state) => state.ideas);

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
      showNotification("Idea succesfully saved", "success");
    } catch (err) {
      showNotification(err || "idea was already saved", "error"); 
    }
  };

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 relative">
      
      {/* TOAST UI */}
      {toast && (
        <div className="toast toast-top toast-end z-[100] mt-16 animate-fade-in">
          <div className={`alert ${toast.type === 'success' ? 'alert-success text-white' : 'alert-warning font-bold'} shadow-lg`}>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-block badge badge-primary badge-outline px-4 py-2 font-bold uppercase tracking-wider mb-2">
            AI Analysis Complete 🧠
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Top Matches for Your Budget
          </h2>
          <p className="opacity-70 text-lg font-medium">
            Based on your input, our AI has generated the following optimized business models.
          </p>
        </div>
        {isLoading && <div className="text-center"><span className="loading loading-spinner loading-lg text-primary"></span></div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {matchingIdeas && matchingIdeas.map((idea, index) => {
            const badgeColors = ["badge-primary", "badge-secondary", "badge-accent"];
            const borderColors = ["hover:border-primary/50", "hover:border-secondary/50", "hover:border-accent/50"];
            const btnColors = ["btn-primary", "btn-secondary btn-outline hover:!text-white", "btn-accent btn-outline hover:!text-white"];
            const tags = ["Recommended", "Safest Bet", "High Reward"];
            
            const currentBadge = badgeColors[index % 3];
            const currentBorder = borderColors[index % 3];
            const currentBtn = btnColors[index % 3];
            const currentTag = tags[index % 3];

            return (
              <div key={idea._id} className={`card bg-base-200 border border-base-300 shadow-xl hover:-translate-y-2 ${currentBorder} transition-all duration-300 relative`}>
                
                <button 
                  onClick={() => handleSave(idea._id)}
                  disabled={isLoading}
                  className="absolute top-4 right-4 z-10 btn btn-circle btn-sm shadow-md bg-base-100 border-none hover:bg-base-300 disabled:opacity-50" 
                  title="Save Idea"
                >
                  🤍
                </button>

                <div className="card-body mt-2">
                  <div className="flex justify-between items-start mb-2 pr-8">
                    <div>
                      <div className={`badge ${currentBadge} font-bold mr-2`}>{currentTag}</div>
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

                  <div className="card-actions justify-end mt-auto border-t border-base-300 pt-4">
                    <Link 
                      to="/breif" 
                      state={{ selectedIdea: idea }} 
                      className={`btn w-full shadow-lg ${currentBtn}`}
                    >
                      Check Business Brief 🚀
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Ideas;