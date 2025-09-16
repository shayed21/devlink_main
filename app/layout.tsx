import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Dev Flink - Solutions Without Border',
  description: 'Professional software development company providing custom solutions, web & mobile apps, AI automation, and digital transformation services globally.',
  keywords: 'software development, web development, mobile apps, AI automation, digital transformation, international tech company',
  icons: {
    icon: '/DevFlink-Logo-V3.png',
    shortcut: '/DevFlink-Logo-V3.png',
    apple: '/DevFlink-Logo-V3.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider>
          <Navigation />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
