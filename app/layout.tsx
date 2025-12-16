import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Prism — AI Photo Intelligence',
  description: 'Prism is the intelligent AI photo-sharing platform built for creators, teams, and visionaries.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
};

export const viewport = {
  themeColor: '#0E0E0E'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-void text-white antialiased`}>{children}</body>
    </html>
  );
}
