'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'destructive' | 'secondary';
}

export const GlassBadge: React.FC<GlassBadgeProps> = ({
  children,
  className,
  variant = 'default',
  ...props
}) => {
  const variantClasses = {
    default: 'bg-vexa-accent text-white',
    success: 'bg-vexa-success text-white',
    destructive: 'bg-vexa-destructive text-white',
    secondary: 'bg-vexa-glass text-vexa-text border border-vexa-glass-light',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
