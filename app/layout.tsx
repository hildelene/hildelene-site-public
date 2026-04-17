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
  title: 'Hildelene Nautidesign',
  description:
    'Pioneirismo no futuro da engenharia naval com inovacao, precisao e excelencia tecnologica. A Hildelene Nautidesign e uma equipe dedicada a superar limites na tecnologia maritima.',
  keywords:
    'engenharia naval, tecnologia maritima, projeto de embarcacoes, competicao, inovacao',
  authors: [{ name: 'Hildelene Nautidesign' }],
  openGraph: {
    title: 'Hildelene Nautidesign',
    description: 'Excelencia em Engenharia Naval',
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
