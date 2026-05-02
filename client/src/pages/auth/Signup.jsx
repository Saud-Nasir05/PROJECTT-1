import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../slice/user/userThunk'; 
import { clearUserErrors } from '../../../slice/user/userSlice';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  
  const { isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(clearUserErrors());
  }, [dispatch]);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password) return;
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card bg-base-100 shadow-2xl max-w-md w-full overflow-hidden border-t-4 border-accent">
        
        <div className="card-body p-8 lg:p-10">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-3">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               <span className="text-4xl font-extrabold text-base-content">Biz<span className="text-accent">Genie</span></span>
            </div>
            <h1 className="text-2xl font-bold">Get Started</h1>
            <p className="text-base-content/60 mt-1">Create your free account today</p>
          </div>

          {/* Error Message UI */}
          {error && <div className="alert alert-error text-white text-sm mb-4 rounded-lg p-3">{error}</div>}

<form onSubmit={handleSignup} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input 
                type="text" 
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                // Yahan border-gray-300 add kiya hai taake border clearly nazar aaye
                className="input input-bordered border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent w-full" 
                required 
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent w-full" 
                required 
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="Create a strong password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered border-gray-300 focus:border-accent focus:ring-1 focus:ring-accent w-full" 
                required 
              />
            </div>

            <div className="form-control mt-8">
              <button 
                type="submit" 
                disabled={isLoading}
                // btn-accent ki jagah bg-accent aur border-none use kiya hai force background ke liye
                className="btn bg-accent hover:bg-accent/90 border-none w-full text-lg shadow-md text-white"
              >
                {isLoading ? <span className="loading loading-spinner"></span> : 'Sign Up'}
              </button>
            </div>
          </form>

          <div className="text-center mt-8 pt-6 border-t border-base-300">
            <p className="text-sm">
              Already have an account?{' '}
              <Link to="/login" className="link link-accent font-bold">Log in here</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;