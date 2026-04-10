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
  title: 'Hildelene Nautidesign - Excelência em Engenharia Naval',
  description:
    'Hildelene Nautidesign é uma equipe dedicada a impulsionar a engenharia naval com inovação, precisão e excelência tecnológica.',
  keywords:
    'engenharia naval, tecnologia marítima, design de embarcações, competição, inovação',
  authors: [{ name: 'Hildelene Nautidesign' }],
  openGraph: {
    title: 'Hildelene Nautidesign',
    description: 'Excelência em engenharia naval',
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
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
