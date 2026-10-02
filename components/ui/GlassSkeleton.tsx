'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassSkeletonProps {
  className?: string;
}

export const GlassSkeleton: React.FC<GlassSkeletonProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'animate-pulse-soft bg-vexa-glass rounded-vexa border border-vexa-glass-light',
        className
      )}
    />
  );
};
