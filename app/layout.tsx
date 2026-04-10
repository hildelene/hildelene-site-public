import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hildelene Nautidesign - Naval Engineering Excellence',
  description:
    'Pioneering the future of naval engineering through innovation, precision, and technological excellence. Hildelene Nautidesign is a dedicated team committed to pushing boundaries in maritime technology.',
  keywords:
    'naval engineering, maritime technology, boat design, competition, innovation',
  authors: [{ name: 'Hildelene Nautidesign' }],
  openGraph: {
    title: 'Hildelene Nautidesign',
    description: 'Excellence in Naval Engineering',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
