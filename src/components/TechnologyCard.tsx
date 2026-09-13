import React from 'react';
import type { Technology } from '../types/technology';

interface Props {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const TechnologyCard: React.FC<Props> = ({ tech, isAdded, onAdd }) => {
  return (
    <div className="bg-white border border-slate-200 p-5 rounded-xl flex flex-col justify-between hover:shadow-md">
      <div>
        <div className="flex justify-between items-start mb-3">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
          <span className="text-xs text-cyan-600 font-medium">{tech.badge}</span>
        </div>
        <h3 className="font-bold text-lg text-slate-900">{tech.name}</h3>
        <p className="text-sm text-slate-500 mt-1 mb-4">{tech.description}</p>
      </div>
      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
          <span className="bg-slate-100 px-2 py-0.5 rounded">{tech.category}</span>
          <span>{tech.difficulty}</span>
          <span className="text-amber-500 font-semibold">★ {tech.rating}</span>
        </div>
        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-lg text-sm font-semibold transition ${
            isAdded ? 'bg-slate-900 text-white cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;