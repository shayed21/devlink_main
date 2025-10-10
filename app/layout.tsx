import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ClientProviders from '@/components/ClientProviders';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
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
      <body className={inter.className}>
        <ClientProviders>
          <Navigation />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}