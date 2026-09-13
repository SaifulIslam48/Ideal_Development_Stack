import bannerImg from '../assets/banner-stack.png';
import React from 'react';

const Banner: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12">
            <div className="md:hidden w-full flex justify-center mb-6">
                <img
                    src={bannerImg}
                    alt="Development Stack"
                    className="w-64 object-contain drop-shadow-2xl"
                />
            </div>

            <div className="flex-1 space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                    Build Your Ideal <br className="hidden md:block" />
                    <span className="gradient-brand-text">Development Stack</span>
                </h1>
                <p className="text-base text-slate-600 max-w-xl mx-auto md:mx-0">
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                    <button className="w-full sm:w-auto gradient-brand text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
                        Explore Technologies
                    </button>
                    <button className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="hidden md:flex flex-1 justify-center lg:justify-end">
                <img
                    src={bannerImg}
                    alt="Development Stack"
                    className="w-full max-w-lg object-contain drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
            </div>
        </section>
    );
};

export default Banner;