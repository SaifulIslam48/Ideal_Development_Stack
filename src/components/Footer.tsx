import React from 'react';
import logo from '../assets/logo-text.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="md:col-span-1 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-3 pt-2 text-sm font-semibold text-slate-600">
              <a href="#" className="hover:text-slate-900 transition">GitHub</a>
              <span className="text-slate-400">•</span>
              <a href="#" className="hover:text-slate-900 transition">Twitter</a>
              <span className="text-slate-400">•</span>
              <a href="#" className="hover:text-slate-900 transition">LinkedIn</a>
            </div>
          </div>

          <div className="hidden md:block space-y-4">
            <h4 className="font-bold text-slate-900 text-sm tracking-wider uppercase">Product</h4>
            <div className="flex flex-col space-y-3 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-900 transition">Home</a>
              <a href="#" className="hover:text-slate-900 transition">Technologies</a>
              <a href="#" className="hover:text-slate-900 transition">Projects</a>
            </div>
          </div>

          <div className="hidden md:block space-y-4">
            <h4 className="font-bold text-slate-900 text-sm tracking-wider uppercase">Company</h4>
            <div className="flex flex-col space-y-3 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-900 transition">About</a>
              <a href="#" className="hover:text-slate-900 transition">Contact</a>
              <a href="#" className="hover:text-slate-900 transition">Careers</a>
            </div>
          </div>

          <div className="hidden md:block space-y-4">
            <h4 className="font-bold text-slate-900 text-sm tracking-wider uppercase">Legal</h4>
            <div className="flex flex-col space-y-3 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-900 transition">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition">Terms of Service</a>
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-900 transition">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;