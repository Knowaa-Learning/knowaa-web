import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';

const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '500', '600', '700', '900'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Knowaa — Drive real business results through learning',
  description: 'Knowaa is a boutique learning-performance partner for enterprise teams.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={urbanist.className}>
      <body>{children}</body>
    </html>
  );
}
