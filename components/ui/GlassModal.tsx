'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { GlassButton } from './GlassButton';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const GlassModal: React.FC<GlassModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-vexa-bg border border-vexa-glass-light backdrop-blur-vexa-lg rounded-vexa-lg shadow-vexa-lg max-w-md w-full p-6">
        {title && (
          <h2 className="text-xl font-bold text-vexa-text mb-4">{title}</h2>
        )}
        <div>{children}</div>
        {footer && <div className="mt-6">{footer}</div>}
      </div>
    </div>
  );
};
