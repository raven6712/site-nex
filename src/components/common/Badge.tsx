import React, { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'emerald' | 'cyan' | 'amber' | 'purple' | 'slate' | 'rose' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'emerald',
  size = 'md',
  className,
  dot = false,
}) => {
  const base = 'inline-flex items-center font-medium rounded-full tracking-wide transition-colors';

  const variants = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    slate: 'bg-slate-800 text-slate-300 border border-slate-700/80',
    rose: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
    outline: 'bg-transparent text-slate-400 border border-slate-700/60',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2',
  };

  const dotColors = {
    emerald: 'bg-emerald-400',
    cyan: 'bg-cyan-400',
    amber: 'bg-amber-400',
    purple: 'bg-purple-400',
    slate: 'bg-slate-400',
    rose: 'bg-rose-400',
    outline: 'bg-slate-400',
  };

  return (
    <span className={cn(base, variants[variant], sizes[size], className)}>
      {dot && (
        <span className="flex h-1.5 w-1.5 relative">
          <span className={cn('animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', dotColors[variant])} />
          <span className={cn('relative inline-flex rounded-full h-1.5 w-1.5', dotColors[variant])} />
        </span>
      )}
      {children}
    </span>
  );
};
