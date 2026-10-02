import { create } from 'zustand';
import { User, Conversation, Message } from './types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  setUser: (user: User) => void;
}

interface ChatState {
  conversations: Conversation[];
  activeConversationId: string | null;
  messages: { [key: string]: Message[] };
  setConversations: (conversations: Conversation[]) => void;
  setActiveConversation: (id: string) => void;
  addMessage: (conversationId: string, message: Message) => void;
  setMessages: (conversationId: string, messages: Message[]) => void;
  deleteMessage: (conversationId: string, messageId: string) => void;
  addReaction: (conversationId: string, messageId: string, emoji: string, userId: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user: User) => {
    set({ user, isAuthenticated: true });
    localStorage.setItem('vexa_user', JSON.stringify(user));
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem('vexa_user');
  },
  setUser: (user: User) => set({ user, isAuthenticated: true }),
}));

export const useChatStore = create<ChatState>((set) => ({
  conversations: [],
  activeConversationId: null,
  messages: {},
  setConversations: (conversations) => set({ conversations }),
  setActiveConversation: (id) => set({ activeConversationId: id }),
  addMessage: (conversationId, message) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [conversationId]: [...(state.messages[conversationId] || []), message],
      },
    })),
  setMessages: (conversationId, messages) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [conversationId]: messages,
      },
    })),
  deleteMessage: (conversationId, messageId) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [conversationId]: state.messages[conversationId]?.map((m) =>
          m.id === messageId ? { ...m, deleted: true, content: '' } : m
        ) || [],
      },
    })),
  addReaction: (conversationId, messageId, emoji, userId) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [conversationId]: state.messages[conversationId]?.map((m) => {
          if (m.id === messageId) {
            const existing = m.reactions.find((r) => r.emoji === emoji);
            if (existing) {
              return {
                ...m,
                reactions: m.reactions.map((r) =>
                  r.emoji === emoji
                    ? {
                        ...r,
                        count: r.users.includes(userId) ? r.count : r.count + 1,
                        users: r.users.includes(userId) ? r.users.filter((u) => u !== userId) : [...r.users, userId],
                      }
                    : r
                ),
              };
            }
            return { ...m, reactions: [...m.reactions, { emoji, count: 1, users: [userId] }] };
          }
          return m;
        }) || [],
      },
    })),
}));
