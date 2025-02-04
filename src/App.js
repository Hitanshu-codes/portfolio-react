import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Routes, Route, Link, } from 'react-router-dom';

import Home from './pages/homepage';
import AboutMe from './pages/aboutme';
import Skills from './pages/skills';
import Projects from './pages/projects';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About me', href: '/about-me' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-transparent">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between pt-6 pb-1 lg:px-8">
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Link to="/" >
              <img alt="" src="/Deadpool logo without bg.png" className="h-8 w-auto" />
            </Link>

          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-red-600 hover:text-white">
                {item.name}
              </Link>
            ))}
            <a href="https://www.linkedin.com/in/hitanshu-tandon" className="text-sm font-semibold leading-6 text-red-hover:text-white">
              <img alt="" src="/png_gsihf.png" className="h-6 w-6" />
            </a>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              className="text-red-600 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu button */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-base font-semibold text-red-600 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a href="https://www.linkedin.com/in/hitanshu-tandon" className="block text-base font-semibold text-red-600 hover:text-white">
                <img alt="" src="/png_gsihf.png" className="h-6 w-6" />
              </a>
            </div>
          </div>
        )}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
