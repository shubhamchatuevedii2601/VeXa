'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
};

export const GlassIconButton: React.FC<GlassIconButtonProps> = ({
  children,
  className,
  size = 'md',
  ...props
}) => {
  return (
    <button
      className={cn(
        sizeClasses[size],
        'rounded-full flex items-center justify-center',
        'bg-vexa-glass border border-vexa-glass-light',
        'hover:bg-vexa-glass-hover hover:border-vexa-glass-light',
        'transition-all duration-200 ease-out',
        'focus-visible:outline-vexa-accent focus-visible:outline-2 focus-visible:outline-offset-2',
        'text-vexa-text hover:text-vexa-text',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
