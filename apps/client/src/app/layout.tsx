import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TripDot',
  description: 'TripDot',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body>{children}</body>
    </html>
  );
}
