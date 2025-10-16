// components/layout/Layout.jsx
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import SubtleBackground from '../ui/SubtleBackground';
import AIChat from '../ui/AIChat';

export default function Layout({ children }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Toggle chat function
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Scroll to top on page load
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
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="RamTej - Portfolio" />
        <meta property="og:description" content="Full Stack Developer specializing in Next.js, React, and modern web technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/images/og-image.jpg" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RamTej - Portfolio" />
        <meta name="twitter:description" content="Full Stack Developer specializing in Next.js, React, and modern web technologies." />
        <meta name="twitter:image" content="https://yourwebsite.com/images/twitter-image.jpg" />
      </Head>
      
      {/* Interactive background */}
      <SubtleBackground />
      
      <div className="flex flex-col min-h-screen">
        {/* Navigation with chat toggle */}
        <Navbar toggleChat={toggleChat} isChatOpen={isChatOpen} />
        
        {/* Main content */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
      
      {/* AI Chat assistant with isOpen state */}
      <AIChat isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </>
  );
}
