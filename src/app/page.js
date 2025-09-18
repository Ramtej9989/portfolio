// src/app/page.js
import Navbar from '../components/Navbar';
import InteractiveBackground from '../components/InteractiveBackground';
import NameAnimation from '../components/NameAnimation';
import SkillsOrbit from '../components/SkillsOrbit';
import AboutSection from '../components/AboutSection';
import EducationTimeline from '../components/EducationTimeline';
import CertificateCarousel from '../components/CertificateCarousel';

export default function Home() {
  return (
    <main>
      <InteractiveBackground />
      <Navbar />
      
      <div className="content">
        <div className="page-content">
          <NameAnimation />
          
          <div className="right-section">
            <SkillsOrbit />
          </div>
        </div>
      </div>
      
      <AboutSection />
      <EducationTimeline />
      <CertificateCarousel />
      
      <div className="section">
        <h2>Section Two</h2>
        <p>The background effect continues as you scroll.</p>
      </div>
    </main>
  );
}
