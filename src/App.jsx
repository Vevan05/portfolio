import { useCallback, useRef, useState } from 'react';
import Loader from './components/Loader.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Library from './components/Library.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Hotbar from './components/Hotbar.jsx';
import SoundControls from './components/SoundControls.jsx';
import ToastStack from './components/ToastStack.jsx';
import { useAudio } from './hooks/useAudio.js';
import { useActiveSection } from './hooks/useActiveSection.js';
import { useAchievementToasts } from './hooks/useAchievementToasts.js';

export default function App() {
  const { musicOn, toggleMusic, playBlip } = useAudio();
  const activeId = useActiveSection();
  const [toasts, setToasts] = useState([]);
  const toastIdRef = useRef(0);

  const showToast = useCallback(
    (title, caption) => {
      const id = ++toastIdRef.current;
      setToasts((prev) => [...prev, { id, title, caption }]);
      playBlip(660, 0.08);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3700);
    },
    [playBlip]
  );

  useAchievementToasts(showToast);

  const handleNav = useCallback(
    (target, isDownload) => {
      playBlip(320, 0.05);
      if (isDownload){
        const link = document.createElement('a');
        link.href = target;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return; 
      } 
        
      if (target.startsWith('#')) {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = target;
      }
    },
    [playBlip]
  );

  return (
    <>
      <Loader />
      <ToastStack toasts={toasts} />

      <Hero onNav={handleNav} />
      <About />
      <Skills />
      <Projects />
      <Library />
      <Education />
      <Achievements />
      <Contact />
      <Footer />

      <Hotbar activeId={activeId} onNav={handleNav} />
      <SoundControls musicOn={musicOn} onToggle={toggleMusic} />
    </>
  );
}
