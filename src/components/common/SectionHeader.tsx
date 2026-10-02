import React from 'react';
import { Badge, BadgeProps } from './Badge';
import { cn } from '../../utils/cn';

export interface SectionHeaderProps {
  badgeText?: string;
  badgeVariant?: BadgeProps['variant'];
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeVariant = 'emerald',
  title,
  highlightedWord,
  description,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badgeText && (
        <div className="mb-4">
          <Badge variant={badgeVariant} dot size="md">
            {badgeText}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
        {title}{' '}
        {highlightedWord && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-300">
            {highlightedWord}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
