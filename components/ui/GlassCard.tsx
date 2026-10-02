'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'interactive';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  variant = 'default',
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-vexa border border-vexa-glass-light backdrop-blur-vexa',
        'bg-vexa-glass shadow-vexa-sm',
        'shadow-vexa-inner',
        variant === 'interactive' && 'hover:bg-vexa-glass-hover hover:shadow-vexa cursor-pointer transition-all',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
