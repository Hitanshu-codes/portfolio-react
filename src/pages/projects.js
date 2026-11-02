import { useState } from 'react';
import SpotlightCard from '../components/spotlightcard.js';
import TiltedCard from '../components/tiltedcard.js';
import AnimatedContent from '../components/animatedcontent.js';
import SectionHeading from '../components/sectionheading.js';
import { GitHubIcon } from '../components/icons.js';
import usePageTitle from '../components/usepagetitle.js';
import { otherProjects, projectFilters, projects } from '../data/portfolio.js';

function ProjectVisual({ project }) {
    return (
        <TiltedCard className="h-64 w-full sm:h-80 md:w-1/2">
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full rounded-xl object-cover shadow-lg"
                />
            ) : (
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-red-700 via-stone-900 to-black shadow-lg">
                    <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" aria-hidden="true" />
                    <span className="relative px-4 text-center font-display text-3xl font-bold text-stone-50">{project.badge}</span>
                </div>
            )}
        </TiltedCard>
    );
}

export default function Projects() {
    usePageTitle('Projects');
    const [filter, setFilter] = useState('All');
    const visible = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter));

    return (
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8">
            <SectionHeading eyebrow="Projects" title="Things I've built" subtitle="AI systems, full-stack products and hackathon builds." />

            <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
                {projectFilters.map((name) => (
                    <button
                        key={name}
                        type="button"
                        aria-pressed={filter === name}
                        onClick={() => setFilter(name)}
                        className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${filter === name ? 'border-red-600 bg-red-600 text-white' : 'border-stone-700 text-stone-300 hover:border-red-600 hover:text-red-500'}`}
                    >
                        {name}
                    </button>
                ))}
            </div>

            <div className="space-y-12">
                {visible.map((project, index) => (
                    <AnimatedContent key={project.title}>
                        <SpotlightCard
                            className={`flex flex-col items-center gap-8 md:flex-row ${index % 2 === 0 ? 'border-r-4 border-r-red-600' : 'border-l-4 border-l-red-600 md:flex-row-reverse'}`}
                        >
                            <ProjectVisual project={project} />
                            <div className="md:w-1/2">
                                <p className="text-sm font-semibold text-red-500">{project.metric}</p>
                                <h3 className="mt-1 font-display text-2xl font-bold text-red-600">{project.title}</h3>
                                <p className="mt-2 text-stone-50">{project.description}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="rounded bg-stone-50 px-2.5 py-1 text-xs font-medium text-red-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white shadow transition hover:bg-stone-50 hover:text-red-600"
                                    >
                                        <GitHubIcon /> View code
                                    </a>
                                ) : (
                                    <p className="mt-5 inline-block rounded-lg border border-stone-700 px-4 py-2 text-sm text-stone-400">
                                        Private / client work, code not public
                                    </p>
                                )}
                            </div>
                        </SpotlightCard>
                    </AnimatedContent>
                ))}
            </div>

            <h2 className="mt-16 font-display text-2xl font-bold text-red-600">Other Projects</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project) => (
                    <AnimatedContent key={project.title}>
                        <SpotlightCard className="h-full">
                            <h3 className="text-xl font-semibold text-red-600">{project.title}</h3>
                            <p className="text-stone-50">{project.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="rounded bg-stone-50 px-2.5 py-1 text-xs font-medium text-red-600">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-stone-50 shadow transition hover:bg-stone-50 hover:text-red-600"
                            >
                                <GitHubIcon /> View code
                            </a>
                        </SpotlightCard>
                    </AnimatedContent>
                ))}
            </div>
        </section>
    );
}
