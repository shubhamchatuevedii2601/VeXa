'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { formatTimeDetailed } from '@/lib/utils';

interface GlassMessageBubbleProps {
  content: string;
  isOwn: boolean;
  timestamp: Date;
  readAt?: Date;
  reactions?: { emoji: string; count: number; users: string[] }[];
  replyTo?: { senderName: string; content: string };
  deleted?: boolean;
}

export const GlassMessageBubble: React.FC<GlassMessageBubbleProps> = ({
  content,
  isOwn,
  timestamp,
  readAt,
  reactions = [],
  replyTo,
  deleted,
}) => {
  return (
    <div
      className={cn('flex gap-2 mb-1', isOwn ? 'flex-row-reverse' : 'flex-row')}
    >
      <div className={cn('flex-1 flex', isOwn ? 'justify-end' : 'justify-start')}>
        <div className="flex flex-col max-w-xs gap-1">
          {replyTo && (
            <div
              className={cn(
                'text-xs px-3 py-1.5 rounded-lg',
                'border-l-2 border-vexa-accent',
                isOwn
                  ? 'bg-vexa-glass-light text-vexa-text-secondary'
                  : 'bg-vexa-glass text-vexa-text-secondary'
              )}
            >
              <p className="font-medium text-vexa-accent">{replyTo.senderName}</p>
              <p className="text-xs opacity-75 line-clamp-1">{replyTo.content}</p>
            </div>
          )}
          <div
            className={cn(
              'px-4 py-2.5 rounded-vexa border backdrop-blur-vexa shadow-vexa-sm',
              isOwn
                ? 'bg-vexa-accent text-white border-vexa-accent-dark'
                : 'bg-vexa-glass border-vexa-glass-light text-vexa-text'
            )}
          >
            {deleted ? (
              <p className="text-xs italic opacity-60">Message deleted</p>
            ) : (
              <p className="text-sm break-words">{content}</p>
            )}
          </div>

          {reactions.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {reactions.map((reaction) => (
                <button
                  key={reaction.emoji}
                  className="px-2 py-1 rounded-full bg-vexa-glass border border-vexa-glass-light text-xs hover:bg-vexa-glass-hover transition-all"
                >
                  {reaction.emoji} {reaction.count}
                </button>
              ))}
            </div>
          )}

          <div
            className={cn(
              'flex items-center gap-1 text-xs',
              isOwn ? 'justify-end' : 'justify-start',
              'text-vexa-text-muted'
            )}
          >
            <span>{formatTimeDetailed(timestamp)}</span>
            {isOwn && readAt && <span>✓✓</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
