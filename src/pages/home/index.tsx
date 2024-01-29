import Footer from '../../components/Footer';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import FormSection from './FormSection';
import HomeContainer from './HomeContainer';
import ProjectSection from './ProjectSection';

export default function Home() {
  return (
    <>
      <HomeContainer />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <FormSection />
      <Footer />
    </>
  );
}
