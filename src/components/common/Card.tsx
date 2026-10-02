import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
  hoverGlow?: 'emerald' | 'cyan' | 'amber' | 'none';
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  interactive = false,
  hoverGlow = 'none',
  bordered = true,
  className,
  ...props
}) => {
  const glowStyles = {
    none: '',
    emerald: 'hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10',
    cyan: 'hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10',
    amber: 'hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10',
  };

  return (
    <div
      className={cn(
        'rounded-2xl bg-slate-900/70 backdrop-blur-md p-6 text-slate-100 transition-all duration-300',
        bordered && 'border border-slate-800/80',
        interactive && 'hover:-translate-y-1 cursor-pointer',
        glowStyles[hoverGlow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
