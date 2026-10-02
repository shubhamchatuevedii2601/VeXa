import { User, Conversation, Message } from './types';

const mockUsers: { [key: string]: User } = {
  'user-1': {
    id: 'user-1',
    username: 'you',
    displayName: 'You',
    email: 'you@vexa.app',
    bio: 'Building the future of messaging',
    avatar: '👤',
    status: 'online',
  },
  'user-2': {
    id: 'user-2',
    username: 'alex_chen',
    displayName: 'Alex Chen',
    email: 'alex@example.com',
    bio: 'Designer & creative',
    avatar: '🎨',
    status: 'online',
  },
  'user-3': {
    id: 'user-3',
    username: 'jordan_dev',
    displayName: 'Jordan Dev',
    email: 'jordan@example.com',
    bio: 'Full-stack developer',
    avatar: '💻',
    status: 'away',
  },
  'user-4': {
    id: 'user-4',
    username: 'sarah_motion',
    displayName: 'Sarah Motion',
    email: 'sarah@example.com',
    bio: 'Animation enthusiast',
    avatar: '✨',
    status: 'offline',
  },
};

const mockMessages: Message[] = [
  {
    id: 'msg-1',
    conversationId: 'conv-1',
    senderId: 'user-2',
    content: 'Hey! How\'s the Vexa build going?',
    reactions: [],
    edited: false,
    deleted: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 30),
    readAt: new Date(Date.now() - 1000 * 60 * 25),
  },
  {
    id: 'msg-2',
    conversationId: 'conv-1',
    senderId: 'user-1',
    content: 'Great! Just finished the Liquid Glass design system. Looking premium ✨',
    reactions: [{ emoji: '🔥', count: 1, users: ['user-2'] }],
    edited: false,
    deleted: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 25),
    readAt: new Date(Date.now() - 1000 * 60 * 20),
  },
  {
    id: 'msg-3',
    conversationId: 'conv-1',
    senderId: 'user-2',
    content: 'That sounds amazing! When can I see it?',
    reactions: [],
    edited: false,
    deleted: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 20),
  },
  {
    id: 'msg-4',
    conversationId: 'conv-2',
    senderId: 'user-3',
    content: 'Did you see the latest design mockups?',
    reactions: [],
    edited: false,
    deleted: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 120),
  },
  {
    id: 'msg-5',
    conversationId: 'conv-2',
    senderId: 'user-1',
    content: 'Not yet, will check them out today',
    reactions: [],
    edited: false,
    deleted: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 115),
  },
  {
    id: 'msg-6',
    conversationId: 'conv-3',
    senderId: 'user-4',
    content: 'Love the new animation framework!',
    reactions: [{ emoji: '❤️', count: 1, users: ['user-1'] }],
    edited: false,
    deleted: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 180),
  },
];

export const mockConversations: Conversation[] = [
  {
    id: 'conv-1',
    participantIds: ['user-1', 'user-2'],
    lastMessage: mockMessages.find((m) => m.id === 'msg-3'),
    lastMessageAt: new Date(Date.now() - 1000 * 60 * 20),
    unreadCount: 0,
    isPinned: false,
    members: [mockUsers['user-2']],
  },
  {
    id: 'conv-2',
    participantIds: ['user-1', 'user-3'],
    lastMessage: mockMessages.find((m) => m.id === 'msg-5'),
    lastMessageAt: new Date(Date.now() - 1000 * 60 * 115),
    unreadCount: 2,
    isPinned: false,
    members: [mockUsers['user-3']],
  },
  {
    id: 'conv-3',
    participantIds: ['user-1', 'user-4'],
    lastMessage: mockMessages.find((m) => m.id === 'msg-6'),
    lastMessageAt: new Date(Date.now() - 1000 * 60 * 180),
    unreadCount: 0,
    isPinned: false,
    members: [mockUsers['user-4']],
  },
];

export function getMockUser(id: string): User | undefined {
  return mockUsers[id];
}

export function getMockConversation(id: string): Conversation | undefined {
  return mockConversations.find((c) => c.id === id);
}

export function getMockMessages(conversationId: string): Message[] {
  return mockMessages.filter((m) => m.conversationId === conversationId).sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
}

export function getCurrentMockUser(): User {
  return mockUsers['user-1'];
}
