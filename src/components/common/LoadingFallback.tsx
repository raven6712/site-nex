import React from 'react';

export const LoadingFallback: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 animate-ping" />
        <div className="w-12 h-12 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin" />
      </div>
      <p className="text-xs font-mono text-slate-400 tracking-wider uppercase animate-pulse">
        Chargement Nexora237...
      </p>
    </div>
  );
};
