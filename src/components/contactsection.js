import AnimatedContent from './animatedcontent.js';
import Magnet from './magnet.js';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons.js';
import { profile } from '../data/portfolio.js';

export default function ContactSection() {
    return (
        <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-8">
            <AnimatedContent>
                <div className="relative overflow-hidden rounded-3xl border border-red-900/60 bg-gradient-to-br from-red-950/60 via-stone-950 to-black px-6 py-14 text-center sm:px-12">
                    <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl" aria-hidden="true" />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">Contact</p>
                    <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl">Let's build something.</h2>
                    <p className="mx-auto mt-4 max-w-xl text-stone-300">
                        Open to {profile.openTo}. The fastest way to reach me is email or a LinkedIn message.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Magnet padding={40} strength={4}>
                            <a
                                href={`mailto:${profile.email}`}
                                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-white hover:text-red-700"
                            >
                                <MailIcon /> Email me
                            </a>
                        </Magnet>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-red-600 hover:text-red-500"
                        >
                            <LinkedInIcon /> LinkedIn
                        </a>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-red-600 hover:text-red-500"
                        >
                            <GitHubIcon /> GitHub
                        </a>
                    </div>
                </div>
            </AnimatedContent>
        </section>
    );
}
