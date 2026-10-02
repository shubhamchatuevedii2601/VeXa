export interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  bio?: string;
  avatar?: string;
  status: 'online' | 'offline' | 'away';
  lastSeen?: Date;
}

export interface Profile {
  id: string;
  userId: string;
  displayName: string;
  bio: string;
  avatar: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  attachments?: string[];
  reactions: { emoji: string; count: number; users: string[] }[];
  replyTo?: string;
  edited: boolean;
  deleted: boolean;
  createdAt: Date;
  deliveredAt?: Date;
  readAt?: Date;
}

export interface Conversation {
  id: string;
  participantIds: string[];
  lastMessage?: Message;
  lastMessageAt?: Date;
  unreadCount: number;
  isPinned: boolean;
  members: User[];
}

export interface ConversationMember {
  id: string;
  conversationId: string;
  userId: string;
  joinedAt: Date;
}
