'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassNavigationBarProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassNavigationBar: React.FC<GlassNavigationBarProps> = ({
  children,
  className,
}) => {
  return (
    <nav
      className={cn(
        'fixed bottom-0 left-0 right-0 md:hidden',
        'border-t border-vexa-glass-light backdrop-blur-vexa-lg',
        'bg-vexa-glass shadow-vexa-lg',
        'z-40 safe-area-bottom',
        className
      )}
    >
      <div className="flex items-center justify-around h-16">{children}</div>
    </nav>
  );
};
