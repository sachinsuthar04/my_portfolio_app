
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
      <body className="relative min-h-screen overflow-x-hidden bg-bg text-fg">
        {/* Ambient Glowing Background Orbs */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] rounded-full bg-brand/8 blur-[120px] animate-float" />
          <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] rounded-full bg-indigo-500/8 blur-[130px] animate-float-delayed" />
          <div className="absolute top-[35%] left-[20%] w-[35vw] h-[35vw] max-w-[350px] rounded-full bg-emerald-500/5 blur-[100px] animate-pulse-slow" />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
