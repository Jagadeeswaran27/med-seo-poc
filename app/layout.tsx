import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MRB TN Exam Coaching | Medical Record Clerk Exam Preparation',
  description: 'Premier coaching for Tamil Nadu Medical Services Recruitment Board (MRB) Medical Record Clerk examination. Expert guidance, comprehensive study materials, and proven success rate.',
  keywords: 'MRB TN exam, Medical Record Clerk exam, MRB coaching, Tamil Nadu Medical Services, Medical Record Clerk preparation, MRB study materials, Medical Record Department exam',
  openGraph: {
    title: 'MRB TN Exam Coaching - Medical Record Clerk Preparation',
    description: 'Join the leading coaching program for Tamil Nadu Medical Record Clerk (MRB) examination. Get expert guidance and comprehensive preparation materials.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}