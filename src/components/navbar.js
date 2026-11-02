import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { GitHubIcon, LinkedInIcon } from './icons.js';
import { profile } from '../data/portfolio.js';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About me', href: '/about-me' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
];

const linkClass = ({ isActive }) =>
    `relative text-sm font-semibold leading-6 transition-colors ${isActive ? 'text-white' : 'text-red-600 hover:text-white'}`;

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => setMobileMenuOpen(false), [pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled || mobileMenuOpen ? 'border-b border-stone-800/80 bg-black/70 backdrop-blur-md' : 'bg-transparent'}`}
        >
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <Link to="/" className="-m-1.5 flex items-center gap-2 p-1.5">
                    <span className="sr-only">{profile.name}, home</span>
                    <img alt="" src="/images/logo.webp" className="h-8 w-auto" />
                </Link>

                <div className="hidden items-center lg:flex lg:gap-x-10">
                    {navigation.map((item) => (
                        <NavLink key={item.name} to={item.href} end className={linkClass}>
                            {({ isActive }) => (
                                <>
                                    {item.name}
                                    {isActive && <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded bg-red-600" />}
                                </>
                            )}
                        </NavLink>
                    ))}
                    <span className="h-5 w-px bg-stone-700" aria-hidden="true" />
                    <a href={profile.github} target="_blank" rel="noreferrer" className="text-stone-300 hover:text-red-600" aria-label="GitHub">
                        <GitHubIcon />
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-stone-300 hover:text-red-600" aria-label="LinkedIn">
                        <LinkedInIcon />
                    </a>
                </div>

                <button
                    type="button"
                    className="text-red-600 hover:text-white lg:hidden"
                    aria-expanded={mobileMenuOpen}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </nav>

            {mobileMenuOpen && (
                <div className="space-y-1 px-6 pb-4 lg:hidden">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            end
                            className={({ isActive }) =>
                                `block rounded-lg px-3 py-2 text-base font-semibold ${isActive ? 'bg-red-600/15 text-white' : 'text-red-600 hover:text-white'}`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <div className="flex gap-5 px-3 pt-3 text-stone-300">
                        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-red-600" aria-label="GitHub">
                            <GitHubIcon className="h-6 w-6" />
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-red-600" aria-label="LinkedIn">
                            <LinkedInIcon className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
