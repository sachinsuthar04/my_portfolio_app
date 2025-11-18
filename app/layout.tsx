
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sachin Suthar — Mobile & Software Engineer',
  description: 'Portfolio of Sachin Suthar: Mobile apps, AI-powered features, and product-minded engineering.',
  openGraph: {
    title: 'Sachin Suthar — Portfolio',
    description: 'Mobile Application Developer & Software Engineer',
    images: ['/og-image.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
