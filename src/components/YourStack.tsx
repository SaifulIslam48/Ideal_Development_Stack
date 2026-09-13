import React from 'react';
import type { Technology } from '../types/technology';

interface Props {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack: React.FC<Props> = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 sticky top-24 shadow-sm">
      <div className="pb-4 border-b border-slate-100">
        <h2 className="text-lg font-bold text-slate-900">Your Stack</h2>
        <p className="text-sm text-slate-500">
          {stack.length === 0 ? 'No technologies selected yet' : `${stack.length} Technology Selected`}
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-3 min-h-[150px]">
        {stack.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-slate-400 text-sm">Your stack is empty</div>
        ) : (
          <>
            {stack.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                  <h4 className="text-sm font-semibold text-slate-800">{item.name}</h4>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-slate-400 hover:text-red-500 font-bold">✕</button>
              </div>
            ))}
            <button onClick={onRemoveAll} className="mt-4 text-sm text-red-500 font-semibold border border-red-100 bg-red-50 py-2 rounded-md">
              Remove All
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default YourStack;