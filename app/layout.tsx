import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'OBEzy™ - Academic Intelligence Platform',
  description: 'The future operating system for academic quality intelligence and Outcome-Based Education',
  keywords: 'OBE, Accreditation, NAAC, NBA, Academic Analytics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}