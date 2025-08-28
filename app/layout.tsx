import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bella Vita Ristorante',
  description: 'Authentic Italian cuisine in San Francisco since 1985',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
