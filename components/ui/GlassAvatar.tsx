'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassAvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away';
  className?: string;
}

const sizeClasses = {
  xs: 'w-6 h-6 text-xs',
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-base',
  lg: 'w-16 h-16 text-2xl',
  xl: 'w-20 h-20 text-3xl',
};

const statusDotSizes = {
  xs: 'w-1.5 h-1.5',
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3.5 h-3.5',
  xl: 'w-4 h-4',
};

export const GlassAvatar: React.FC<GlassAvatarProps> = ({
  src,
  alt = 'Avatar',
  fallback = '?',
  size = 'md',
  status,
  className,
}) => {
  const statusColors = {
    online: 'bg-vexa-success',
    away: 'bg-yellow-500',
    offline: 'bg-vexa-text-secondary',
  };

  return (
    <div className={cn('relative inline-block', className)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={cn(
            sizeClasses[size],
            'rounded-full object-cover border border-vexa-glass-light'
          )}
        />
      ) : (
        <div
          className={cn(
            sizeClasses[size],
            'rounded-full bg-vexa-glass border border-vexa-glass-light',
            'flex items-center justify-center font-semibold text-vexa-text-muted'
          )}
        >
          {fallback}
        </div>
      )}
      {status && (
        <div
          className={cn(
            statusDotSizes[size],
            statusColors[status],
            'absolute bottom-0 right-0 rounded-full border border-vexa-bg',
            'shadow-vexa-sm'
          )}
        />
      )}
    </div>
  );
};
