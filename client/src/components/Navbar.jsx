import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate add kiya
import { useTheme } from '../theme/Theme';
import { useSelector, useDispatch } from 'react-redux'; // useDispatch add kiya
// Apna path check kar lena
import { logoutUser } from '../../slice/user/userThunk'; 

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  // Redux se check kar rahe hain ke user login hai ya nahi
  const { userInfo } = useSelector((state) => state.user);
  
  // Hooks setup kiye logout ke liye
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Logout ka function
  const handleLogout = () => {
    dispatch(logoutUser()); // Redux aur backend se user uda dega
    navigate('/login');     // Wapas login screen par bhej dega
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 sticky top-0 z-50 transition-colors duration-300">
      
      {/* 1. Left Side - Logo */}
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <img 
            src="/images/genie.png" 
            alt="BizGenie Logo" 
            className="w-10 h-10 object-contain"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="text-2xl font-extrabold tracking-tight">
            Biz<span className="text-primary">Genie</span>
          </span>
        </Link>
      </div>

      {/* 2. Center Side - Flashy Text */}
      <div className="navbar-center hidden md:flex">
        <span className="text-lg font-extrabold bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent animate-pulse tracking-widest">
          ✨ SPARK YOUR NEXT BIG IDEA ✨
        </span>
      </div>
      
      {/* 3. Right Side - Links & Theme Toggle */}
      <div className="navbar-end gap-3 flex items-center">
        
        {/* Navigation Links - Sirf tab dikhao jab user login ho! */}
        {userInfo && (
          <div className="hidden md:flex gap-3 font-medium items-center">
            <Link to="/" className="btn btn-ghost btn-sm">Home</Link>
            
            <Link to="/saved-ideas" className="btn btn-primary btn-sm text-white shadow-md hover:scale-105 transition-transform">
              💡 Saved Ideas
            </Link>

            {/* Logout Button wapas aagaya! */}
            <button onClick={handleLogout} className="btn btn-outline btn-error btn-sm ml-2">
              Logout
            </button>
          </div>
        )}

        {/* 🌙 / ☀️ Dark Mode Toggle Button */}
        <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm">
          <input 
            type="checkbox" 
            onChange={toggleTheme} 
            checked={theme === 'dark'} 
          />
          
          <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
          </svg>
          
          <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;