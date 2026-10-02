'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading,
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary:
      'bg-vexa-accent hover:bg-vexa-accent-light text-white border border-vexa-accent-dark shadow-vexa-sm',
    secondary:
      'bg-vexa-glass border border-vexa-glass-light text-vexa-text hover:bg-vexa-glass-hover hover:border-vexa-glass',
    ghost: 'hover:bg-vexa-glass-light text-vexa-text border border-transparent',
    destructive:
      'bg-vexa-destructive hover:bg-red-600 text-white border border-red-700 shadow-vexa-sm',
  };

  return (
    <button
      className={cn(
        'rounded-vexa font-medium transition-all duration-200 ease-out',
        'focus-visible:outline-vexa-accent focus-visible:outline-2 focus-visible:outline-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? '...' : children}
    </button>
  );
};
