import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMatchingIdeas } from '../../../slice/ideas/ideasthunk'; // Apna exact path check kar lena

const BudgetSection = () => {
  const [budget, setBudget] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!budget) return;

    dispatch(getMatchingIdeas({ budget: Number(budget) }));

    navigate('/ideas');
  };

  return (
    <div id="budget-section" className="py-20 bg-base-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="card bg-base-100 shadow-2xl border-t-4 border-primary">
          <div className="card-body p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Define Your Investment</h2>
            <p className="opacity-70 mb-10 max-w-xl mx-auto">
              Tell us how much capital you are willing to invest, and our AI will generate the top viable business models for you in seconds.
            </p>
            
            <form onSubmit={handleGenerate} className="max-w-2xl mx-auto w-full">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="form-control w-full">
                  <div className="relative">
                    <span className="absolute left-6 top-4 font-extrabold text-primary text-lg">PKR</span>
                    <input 
                      type="number" 
                      placeholder="e.g. 500000" 
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      required
                      className="input input-bordered input-primary w-full pl-20 py-8 text-xl font-bold rounded-2xl shadow-inner focus:outline-offset-4" 
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg text-white shadow-lg hover:scale-105 transition-transform h-16 px-8 rounded-2xl w-full md:w-auto"
                >
                  Generate 🪄
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetSection;