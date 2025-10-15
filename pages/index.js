// pages/index.js
import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Journey from '../components/sections/Journey'; // Keep this import
import Certificates from '@/components/sections/Certificates';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  // Once loaded, add a class to the body to enable animations
  useEffect(() => {
    document.body.classList.add('loaded');
    
    // Optional: Analytics event for page view
    // if (window.gtag) {
    //   window.gtag('event', 'page_view', {
    //     page_title: 'Portfolio Home',
    //     page_location: window.location.href,
    //     page_path: '/',
    //   });
    // }
  }, []);
  
  return (
    <>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Full Stack Developer specializing in React, Next.js and modern web technologies." />
        {/* Additional custom meta tags for this page */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>
      
      <Layout>
        <main>
          {/* Hero Section - Landing area with introduction */}
          <Hero />
          
          {/* Education Section - Educational background */}
          <Education />
          
          {/* Skills Section - Technical skills and competencies */}
          <Skills />
          
          {/* Journey Section - Keep this in the layout */}
          <Journey />
          
          {/* Certificates Section - Certifications and courses */}
          <Certificates />
          
          {/* Projects Section - Portfolio projects showcase */}
          <Projects />
          
          {/* Contact Section - Contact form and details */}
          <Contact />
        </main>
      </Layout>
    </>
  );
}
