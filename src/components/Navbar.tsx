import logo from '../assets/logo-text.png';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-slate-600 hover:bg-slate-100 rounded-md"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center gap-2 flex-1 md:flex-none justify-center md:justify-start">
                    <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
                </div>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a href="#" className="text-[#ec4899] transition">Home</a>
                    <a href="#technologies" className="hover:text-purple-600 transition">Technologies</a>
                    <a href="#" className="hover:text-purple-600 transition">Projects</a>
                    <a href="#" className="hover:text-purple-600 transition">About</a>
                    <a href="#" className="hover:text-purple-600 transition">Contact</a>
                </nav>
                <div className="flex items-center gap-3">
                    <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 hidden sm:block">Sign In</button>
                    <button className="text-sm font-semibold gradient-brand text-white px-4 py-2 rounded-full hover:opacity-90">Sign Up</button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-4 shadow-lg absolute w-full">
                    <a href="#" className="text-slate-700 font-medium">Home</a>
                    <a href="#technologies" className="text-slate-700 font-medium">Technologies</a>
                    <a href="#" className="text-slate-700 font-medium">Projects</a>
                    <a href="#" className="text-slate-700 font-medium">About</a>
                    <a href="#" className="text-slate-700 font-medium">Contact</a>
                </div>
            )}
        </header>
    );
};

export default Navbar;