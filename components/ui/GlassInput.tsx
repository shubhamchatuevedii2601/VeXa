'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const GlassInput: React.FC<GlassInputProps> = ({
  className,
  label,
  error,
  icon,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-vexa-text mb-2">{label}</label>
      )}
      <div className="relative">
        {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-vexa-text-muted">{icon}</div>}
        <input
          className={cn(
            'w-full rounded-vexa border border-vexa-glass-light backdrop-blur-vexa',
            'bg-vexa-glass px-4 py-2.5 text-vexa-text placeholder-vexa-text-muted',
            'focus:border-vexa-accent focus:bg-vexa-glass-light',
            'focus-visible:outline-none transition-all duration-200',
            'shadow-vexa-inner',
            icon && 'pl-10',
            error && 'border-vexa-destructive',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-vexa-destructive mt-1">{error}</p>}
    </div>
  );
};
