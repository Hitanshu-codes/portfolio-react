import { GitHubIcon, LinkedInIcon, MailIcon } from './icons.js';
import { profile } from '../data/portfolio.js';

export default function Footer() {
    return (
        <footer className="border-t border-stone-900">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-stone-500 sm:flex-row lg:px-8">
                <p>© {new Date().getFullYear()} {profile.name} · Built with React, Tailwind and React Bits</p>
                <div className="flex gap-5">
                    <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-red-600" aria-label="GitHub">
                        <GitHubIcon />
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-red-600" aria-label="LinkedIn">
                        <LinkedInIcon />
                    </a>
                    <a href={`mailto:${profile.email}`} className="hover:text-red-600" aria-label="Email">
                        <MailIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
}
