'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated (mock check)
    const isAuthenticated = localStorage.getItem('vexa_user');
    if (isAuthenticated) {
      router.push('/chats');
    } else {
      router.push('/login');
    }
  }, [router]);

  return null;
}
