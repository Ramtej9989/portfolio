// pages/_app.js
import { useEffect } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import emailjs from '@emailjs/browser';
import '../styles/globals.css';

// Initialize the Inter font with Latin subset
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  // Handle page transitions and initialize EmailJS
  useEffect(() => {
    // Scroll to top when changing pages
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
    
    // Initialize EmailJS with your public key
    emailjs.init("4Ao4839wgAlhH9coH");
    
    // Clean up the event listener when component unmounts
    return () => {
      // This would be needed if we had a router event listener
    };
  }, []);

  return (
    <>
<Head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#000000" />
  <link rel="icon" href="/images/logo.png" /> 
</Head>

      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
