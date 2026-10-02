'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { formatTime } from '@/lib/utils';
import { GlassAvatar } from './GlassAvatar';
import { GlassBadge } from './GlassBadge';
import { Conversation, User } from '@/lib/types';

interface GlassChatRowProps extends React.HTMLAttributes<HTMLDivElement> {
  conversation: Conversation;
  user: User;
  isActive?: boolean;
  onClick?: () => void;
}

export const GlassChatRow: React.FC<GlassChatRowProps> = ({
  conversation,
  user,
  isActive,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left px-4 py-3 rounded-vexa border transition-all duration-200',
        'hover:bg-vexa-glass-hover',
        isActive
          ? 'bg-vexa-glass-light border-vexa-accent shadow-vexa'
          : 'bg-transparent border-vexa-glass-light hover:border-vexa-glass-light',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <GlassAvatar
          fallback={user.displayName[0]}
          size="sm"
          status={user.status}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-semibold text-vexa-text truncate">{user.displayName}</h3>
            {conversation.lastMessageAt && (
              <span className="text-xs text-vexa-text-muted flex-shrink-0">
                {formatTime(conversation.lastMessageAt)}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm text-vexa-text-secondary truncate line-clamp-1">
              {conversation.lastMessage?.content || 'No messages yet'}
            </p>
            {conversation.unreadCount > 0 && (
              <GlassBadge variant="default" className="flex-shrink-0">
                {conversation.unreadCount}
              </GlassBadge>
            )}
          </div>
        </div>
      </div>
    </button>
  );
};
