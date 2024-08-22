import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../style/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nea - Web Development e App Mobile',
  description: 'Nea offre servizi di sviluppo web e applicazioni mobili iOS e Android.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}