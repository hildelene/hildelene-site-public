import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import React from "react";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UERJ Hildelene Nautidesign',
  description:
    'Pioneirismo no futuro da engenharia naval com inovacao, precisao e excelencia tecnologica. A Hildelene Nautidesign e uma equipe dedicada a superar limites na tecnologia maritima.',
  keywords:
    'engenharia naval, tecnologia maritima, projeto de embarcacoes, competicao, inovacao',
  authors: [{ name: 'Hildelene Nautidesign' }],
  openGraph: {
    title: 'UERJ Hildelene Nautidesign',
    description: 'Equipe universitária de nautimodelismo',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
