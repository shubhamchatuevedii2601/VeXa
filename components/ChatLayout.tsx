'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Plus, Settings, LogOut, Bell } from 'lucide-react';
import { GlassCard, GlassInput, GlassAvatar, GlassIconButton, GlassNavigationBar } from '@/components/ui';
import { useAuthStore, useChatStore } from '@/lib/store';
import { useRouter } from 'next/navigation';

export const ChatLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const { conversations } = useChatStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!user) return null;

  return (
    <div className="flex h-screen bg-vexa-gradient overflow-hidden">
      {/* Desktop Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex flex-col w-80 border-r border-vexa-glass-light backdrop-blur-vexa bg-vexa-glass/50 overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 border-b border-vexa-glass-light">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-vexa-accent to-vexa-purple bg-clip-text text-transparent">
              Vexa
            </h1>
            <div className="flex gap-2">
              <Link href="/notifications">
                <GlassIconButton size="md">
                  <Bell size={18} />
                </GlassIconButton>
              </Link>
              <Link href="/settings">
                <GlassIconButton size="md">
                  <Settings size={18} />
                </GlassIconButton>
              </Link>
            </div>
          </div>
          <GlassInput
            placeholder="Search conversations..."
            icon={<Search size={16} />}
            className="text-sm"
          />
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>

        {/* Profile Footer */}
        <div className="p-4 border-t border-vexa-glass-light">
          <Link href="/profile">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-3 rounded-vexa hover:bg-vexa-glass-light transition-all cursor-pointer"
            >
              <GlassAvatar fallback={user.displayName[0]} size="sm" status="online" />
              <div className="flex-1">
                <p className="text-sm font-medium text-vexa-text">{user.displayName}</p>
                <p className="text-xs text-vexa-text-muted">@{user.username}</p>
              </div>
            </motion.div>
          </Link>
          <GlassIconButton
            size="md"
            className="w-full mt-2 justify-center"
            onClick={() => {
              logout();
              router.push('/login');
            }}
          >
            <LogOut size={18} />
          </GlassIconButton>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {children}
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <GlassNavigationBar>
          <Link href="/chats" className="flex-1 flex justify-center">
            <GlassIconButton size="md">
              <Search size={20} />
            </GlassIconButton>
          </Link>
          <Link href="/stories" className="flex-1 flex justify-center">
            <GlassIconButton size="md">
              <div className="w-5 h-5 rounded-full border-2 border-vexa-accent" />
            </GlassIconButton>
          </Link>
          <Link href="/notifications" className="flex-1 flex justify-center">
            <GlassIconButton size="md">
              <Bell size={20} />
            </GlassIconButton>
          </Link>
          <Link href="/profile" className="flex-1 flex justify-center">
            <GlassAvatar fallback={user.displayName[0]} size="xs" status="online" />
          </Link>
        </GlassNavigationBar>
      )}
    </div>
  );
};
