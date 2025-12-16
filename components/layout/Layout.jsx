// components/layout/Layout.jsx
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react"; // ✅ ADD THIS
import Navbar from './Navbar';
import Footer from './Footer';
import SubtleBackground from '../ui/SubtleBackground';
import AIChat from '../ui/AIChat';

export default function Layout({ children }) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <title>RamTej - Portfolio</title>
        <meta name="description" content="Full Stack Developer specializing in Next.js, React, and modern web technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="developer, portfolio, web developer, next.js, react" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SubtleBackground />

      <div className="flex flex-col min-h-screen">
        <Navbar toggleChat={toggleChat} isChatOpen={isChatOpen} />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </div>

      <AIChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />

      {/* ✅ Vercel Analytics */}
      <Analytics />
    </>
  );
}
