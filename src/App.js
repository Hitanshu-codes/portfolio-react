import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/homepage';
import AboutMe from './pages/aboutme';
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About me', href: '/about-me' },
  { name: 'Skills', href: '#' },
  { name: 'Projects', href: '#' },
];

function App() {
  return (
    <>
      <header className="bg-transparent">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between pt-6 pb-1 lg:px-8">
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="/Deadpool logo without bg.png" className="h-8 w-auto" />
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
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </>

  );
}

export default App;
