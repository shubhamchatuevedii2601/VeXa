import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vexa - Your people. Your vibe.',
  description: 'Premium real-time messaging and social communication platform',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-vexa-gradient text-vexa-text antialiased">
        {children}
      </body>
    </html>
  );
}
