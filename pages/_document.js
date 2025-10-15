// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Meta tags */}
        <meta charSet="UTF-8" />
        <meta name="description" content="Personal portfolio showcasing my projects, skills, and experience as a developer." />
        <meta name="keywords" content="developer, portfolio, web development, react, next.js, javascript" />
        <meta name="author" content="Your Name" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Your Name - Portfolio" />
        <meta property="og:description" content="Personal portfolio showcasing my projects, skills, and experience as a developer." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Name - Portfolio" />
        <meta name="twitter:description" content="Personal portfolio showcasing my projects, skills, and experience as a developer." />
        <meta name="twitter:image" content="/images/twitter-card.jpg" />
        
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Font Loading */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
