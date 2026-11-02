import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig, motion } from 'framer-motion';

import Home from './pages/homepage';
import AboutMe from './pages/aboutme';
import Skills from './pages/skills';
import Projects from './pages/projects';
import NotFound from './pages/notfound';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Particles from './components/particles.js';
import ClickSpark from './components/clickspark.js';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <MotionConfig reducedMotion="user">
      <ClickSpark>
        <Particles />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <motion.main
            key={location.pathname}
            className="flex-1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.main>
          <Footer />
        </div>
      </ClickSpark>
      <Analytics />
    </MotionConfig>
  );
}

export default App;
