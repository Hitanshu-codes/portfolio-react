import Card from '../components/aboutmecard.js';
import TiltedCard from '../components/tiltedcard.js';
import AnimatedContent from '../components/animatedcontent.js';
import SectionHeading from '../components/sectionheading.js';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/icons.js';
import usePageTitle from '../components/usepagetitle.js';
import { achievements, education, experience, leadership, profile } from '../data/portfolio.js';

export default function AboutMe() {
    usePageTitle('About');

    return (
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8">
            <SectionHeading eyebrow="About me" title="Engineer, builder, hackathon regular" />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <aside className="md:sticky md:top-24 md:self-start">
                    <AnimatedContent>
                        <TiltedCard className="mx-auto max-w-xs">
                            <div className="relative overflow-hidden rounded-3xl border border-stone-800 bg-gradient-to-b from-red-950/60 to-stone-950">
                                <img
                                    src="/images/myphoto.webp"
                                    alt="Hitanshu Tandon"
                                    width="600"
                                    height="708"
                                    className="w-full object-cover"
                                />
                            </div>
                        </TiltedCard>
                        <div className="mt-6 text-center">
                            <h2 className="font-display text-2xl font-bold text-red-600">{profile.name}</h2>
                            <p className="text-white">{profile.title}</p>
                            <p className="text-sm text-stone-400">{profile.currentRole}</p>
                            <p className="text-sm text-stone-500">{profile.location}</p>
                            <div className="mt-4 flex justify-center gap-5 text-stone-300">
                                <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-red-600" aria-label="GitHub">
                                    <GitHubIcon className="h-6 w-6" />
                                </a>
                                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-red-600" aria-label="LinkedIn">
                                    <LinkedInIcon className="h-6 w-6" />
                                </a>
                                <a href={`mailto:${profile.email}`} className="hover:text-red-600" aria-label="Email">
                                    <MailIcon className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </AnimatedContent>
                </aside>

                <div className="space-y-6 md:col-span-2">
                    <AnimatedContent>
                        <Card title="Experience" icon="💼">
                            <ol className="relative mt-4 space-y-8 border-l border-red-900/70 pl-6">
                                {experience.map((job) => (
                                    <li key={`${job.company}-${job.role}`} className="relative">
                                        <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-red-600 ring-4 ring-black" aria-hidden="true" />
                                        <p>
                                            <strong>{job.role}</strong> – {job.company}, {job.location}
                                        </p>
                                        <p className="text-sm text-stone-400">
                                            {job.period}
                                            {job.note && ` · ${job.note}`}
                                        </p>
                                        <ul className="mt-2 list-disc space-y-1 pl-5 text-stone-200">
                                            {job.points.map((point) => (
                                                <li key={point}>{point}</li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ol>
                        </Card>
                    </AnimatedContent>

                    <AnimatedContent>
                        <Card title="Education" icon="🎓">
                            {education.map((item) => (
                                <div key={item.degree}>
                                    <p>
                                        <strong>{item.degree}</strong> ({item.period})
                                    </p>
                                    <p>{item.school}</p>
                                    <p>{item.detail}</p>
                                </div>
                            ))}
                        </Card>
                    </AnimatedContent>

                    <AnimatedContent>
                        <Card title="Achievements" icon="🏆">
                            <ul className="mt-2 grid gap-3 sm:grid-cols-2">
                                {achievements.map((item) => (
                                    <li key={item.title} className="rounded-xl bg-black/30 p-3">
                                        <p className="font-semibold">
                                            <span aria-hidden="true">{item.icon}</span> {item.title}
                                        </p>
                                        <p className="text-sm text-stone-400">{item.detail}</p>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </AnimatedContent>

                    <AnimatedContent>
                        <Card title="Leadership & Clubs" icon="🚀">
                            <ul className="mt-2 space-y-1">
                                {leadership.map((item) => (
                                    <li key={item.org}>
                                        <strong>{item.org}</strong> – {item.role}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    );
}
