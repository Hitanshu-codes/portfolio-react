import { Link } from 'react-router-dom';
import DecryptedText from '../components/decryptedtext.js';
import RotatingText from '../components/rotatingtext.js';
import ShinyText from '../components/shinytext.js';
import Magnet from '../components/magnet.js';
import CountUp from '../components/countup.js';
import SpotlightCard from '../components/spotlightcard.js';
import AnimatedContent from '../components/animatedcontent.js';
import SectionHeading from '../components/sectionheading.js';
import ContactSection from '../components/contactsection.js';
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from '../components/icons.js';
import usePageTitle from '../components/usepagetitle.js';
import { achievements, highlights, profile, projects, stats } from '../data/portfolio.js';

export default function Home() {
    usePageTitle();
    const featured = projects.filter((p) => p.featured);

    return (
        <>
            {/* Hero */}
            <section className="relative">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-10 lg:grid-cols-12 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-7">
                        <AnimatedContent distance={20}>
                            <span className="inline-flex items-center gap-2 rounded-full border border-red-900/70 bg-red-950/40 px-3 py-1 text-xs font-semibold text-red-200">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
                                </span>
                                <ShinyText text={`Open to ${profile.openTo}`} speed={4} />
                            </span>
                        </AnimatedContent>

                        <h1 className="mt-6 whitespace-nowrap font-display text-4xl font-bold tracking-tight text-red-700 sm:text-6xl xl:text-7xl">
                            <DecryptedText text={profile.name} animateOn="view" sequential speed={45} />
                        </h1>
                        <p className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">{profile.title}</p>
                        <p className="mt-3 text-xl text-stone-300 sm:text-2xl">
                            I build <RotatingText texts={profile.roles} className="font-semibold text-red-500" />
                        </p>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">{profile.intro}</p>

                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <Magnet padding={40} strength={4}>
                                <Link
                                    to="/projects"
                                    className="inline-flex items-center gap-2 rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-white hover:text-red-700"
                                >
                                    View my work <ArrowRightIcon />
                                </Link>
                            </Magnet>
                            <Link
                                to="/about-me"
                                className="rounded-full border border-stone-700 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-red-600 hover:text-red-500"
                            >
                                About me
                            </Link>
                            <div className="flex items-center gap-4 pl-1 text-stone-400">
                                <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-red-600" aria-label="GitHub">
                                    <GitHubIcon className="h-6 w-6" />
                                </a>
                                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-red-600" aria-label="LinkedIn">
                                    <LinkedInIcon className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
                        <div className="absolute inset-8 rounded-full bg-red-700/30 blur-3xl" aria-hidden="true" />
                        <img
                            alt="Deadpool-style illustration in a red suit"
                            src="/images/deadpool-hero.webp"
                            width="736"
                            height="738"
                            className="relative mx-auto w-full animate-float"
                        />
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {stats.map((stat, i) => (
                        <AnimatedContent key={stat.label} delay={i * 0.1}>
                            <SpotlightCard className="h-full">
                                <p className="font-display text-4xl font-bold text-red-600 sm:text-5xl">
                                    <CountUp to={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className="mt-2 text-sm text-stone-400">{stat.label}</p>
                            </SpotlightCard>
                        </AnimatedContent>
                    ))}
                </div>
            </section>

            {/* What I build */}
            <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <SectionHeading eyebrow="What I do" title="Building AI products, end to end" subtitle="From retrieval and agents to the database, API and UI around them." />
                <div className="grid gap-6 md:grid-cols-3">
                    {highlights.map((item, i) => (
                        <AnimatedContent key={item.title} delay={i * 0.12}>
                            <SpotlightCard className="h-full">
                                <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                                <h3 className="mt-4 font-display text-xl font-bold text-white">{item.title}</h3>
                                <p className="mt-2 text-stone-400">{item.body}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span key={tag} className="rounded-full border border-red-900/60 bg-red-950/40 px-2.5 py-0.5 text-xs font-medium text-red-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </AnimatedContent>
                    ))}
                </div>
            </section>

            {/* Featured projects */}
            <section className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <SectionHeading eyebrow="Selected work" title="Featured projects" className="mb-0" />
                    <Link to="/projects" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-white">
                        All projects <ArrowRightIcon />
                    </Link>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {featured.map((project, i) => (
                        <AnimatedContent key={project.title} delay={i * 0.12}>
                            <SpotlightCard className="flex h-full flex-col">
                                <p className="text-sm font-semibold text-red-500">{project.badge}</p>
                                <h3 className="mt-2 font-display text-lg font-bold text-white">{project.title}</h3>
                                <p className="mt-2 line-clamp-4 flex-1 text-sm text-stone-400">{project.description}</p>
                                <p className="mt-4 font-display text-2xl font-bold text-red-600">{project.metric}</p>
                            </SpotlightCard>
                        </AnimatedContent>
                    ))}
                </div>
            </section>

            {/* Achievements */}
            <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
                <SectionHeading eyebrow="Beyond work" title="Hackathons & competitive coding" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {achievements.map((item, i) => (
                        <AnimatedContent key={item.title} delay={i * 0.08}>
                            <div className="flex h-full items-start gap-4 rounded-2xl border border-stone-800 bg-stone-900/40 p-5">
                                <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                                <div>
                                    <p className="font-semibold text-white">{item.title}</p>
                                    <p className="mt-1 text-sm text-stone-400">{item.detail}</p>
                                </div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </section>

            <ContactSection />
        </>
    );
}
