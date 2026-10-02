'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface GlassBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const GlassBottomSheet: React.FC<GlassBottomSheetProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col">
      <div
        className="flex-1 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="bg-vexa-bg border-t border-vexa-glass-light backdrop-blur-vexa-lg rounded-t-vexa-lg shadow-vexa-lg">
        <div className="p-4 border-b border-vexa-glass-light flex items-center justify-between">
          {title && <h2 className="text-lg font-bold text-vexa-text">{title}</h2>}
          <button
            onClick={onClose}
            className="ml-auto text-vexa-text-muted hover:text-vexa-text"
          >
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[60vh] p-4">{children}</div>
      </div>
    </div>
  );
};
