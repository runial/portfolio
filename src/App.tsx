import { NavBar } from './NavBar.tsx';
import { Hero } from './Hero.tsx';
import { EducationSection } from './EducationSection.tsx';
import { InterestsSection } from './InterestsSection.tsx';
import { ProjectsSection } from './ProjectsSection.tsx';
import { ContactSection } from './ContactSection.tsx';
import { Footer } from './Footer.tsx';
import { LicensingModal } from './LicensingModal.tsx';
import { useState } from 'react';

function App() {
  const [licensingModalOpen, setLicensingModalOpen] = useState(false);

  return (
    <main className="flex flex-col justify-center items-center w-full">
      <NavBar />
      <Hero />
      <EducationSection />
      <InterestsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer licensingModalOpen={licensingModalOpen} setLicensingModalOpen={setLicensingModalOpen} />
      <LicensingModal licensingModalOpen={licensingModalOpen} setLicensingModalOpen={setLicensingModalOpen} />
    </main>
  );
}

export default App;
