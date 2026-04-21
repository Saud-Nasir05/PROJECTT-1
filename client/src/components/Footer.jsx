import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer items-center p-6 bg-neutral text-neutral-content mt-auto">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Logo & Copyright */}
        <aside className="flex items-center gap-3">
          <img src="/genie.png" alt="BizGenie Logo" className="w-8 h-8 object-contain" />
          <p className="font-bold text-lg">
            Biz<span className="text-primary">Genie</span>
            <span className="font-normal text-sm opacity-60 ml-2 border-l border-base-content/20 pl-2">
              © 2026 - All rights reserved.
            </span>
          </p>
        </aside> 
        
        {/* Right Side: Quick Links */}
        <nav className="flex gap-6 text-sm font-medium opacity-80">
          <Link to="/" className="hover:text-primary transition-colors">About FYP</Link>
          <Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;