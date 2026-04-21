import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../slice/user/userThunk'; 
import { clearUserErrors } from '../../../slice/user/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  
  const { isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(clearUserErrors());
  }, [dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card bg-base-100 shadow-2xl max-w-md w-full overflow-hidden border-t-4 border-primary">
        
        <div className="card-body p-8 lg:p-10">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-3">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               <span className="text-4xl font-extrabold text-base-content">Biz<span className="text-primary">Genie</span></span>
            </div>
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
            <p className="text-base-content/60 mt-1">Sign in to your account</p>
          </div>

          {error && <div className="alert alert-error text-white text-sm mb-4 rounded-lg p-3">{error}</div>}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered focus:input-primary w-full" 
                required 
              />
            </div>

            <div className="form-control">
              <div className="flex justify-between items-center mb-1">
                 <label className="label p-0">
                    <span className="label-text font-semibold">Password</span>
                 </label>
                 <a href="#" className="label-text-alt link link-hover text-primary p-0">Forgot password?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered focus:input-primary w-full" 
                required 
              />
            </div>

            <div className="form-control mt-8">
              <button 
                type="submit" 
                disabled={isLoading} 
                className="btn btn-primary w-full text-lg shadow-md"
              >
                {isLoading ? <span className="loading loading-spinner"></span> : 'Login'}
              </button>
            </div>
          </form>

          <div className="text-center mt-8 pt-6 border-t border-base-300">
            <p className="text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="link link-primary font-bold">Create Account</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;