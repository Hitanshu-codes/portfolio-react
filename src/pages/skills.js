import InfiniteScroll from '../components/infinitescroll';
import AllSkillCard from '../components/allskillcard.js';
import SpotlightCard from '../components/spotlightcard.js';
import AnimatedContent from '../components/animatedcontent.js';
import SectionHeading from '../components/sectionheading.js';
import usePageTitle from '../components/usepagetitle.js';
import { skillGroups } from '../data/portfolio.js';

const items = [
    { content: <AllSkillCard iconPath={'/icons/nodejs.png'} name="Node.js" /> },
    { content: <AllSkillCard iconPath={'/icons/javascript.png'} name="JavaScript" /> },
    { content: <AllSkillCard iconPath={'/icons/react.png'} name="React" /> },
    { content: <AllSkillCard iconPath={'/icons/bootstrap.png'} name="Bootstrap" /> },
    { content: <AllSkillCard iconPath={'/icons/python.png'} name="Python" /> },
    { content: <AllSkillCard iconPath={'/icons/mongodb.png'} name="MongoDB" /> },
    { content: <AllSkillCard iconPath={'/icons/git.png'} name="Git" /> },
    { content: <AllSkillCard iconPath={'/icons/css.png'} name="CSS" /> },
    { content: <AllSkillCard iconPath={'/icons/html.png'} name="HTML" /> },
    { content: <AllSkillCard iconPath={'/icons/opencv.png'} name="OpenCV" /> },
];

export default function Skills() {
    usePageTitle('Skills');

    return (
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8">
            <SectionHeading eyebrow="Skills" title="Tools I build with" subtitle="Languages, frameworks and platforms I use to ship AI products." />

            <div className="grid items-center gap-10 lg:grid-cols-5">
                <div className="h-[420px] lg:col-span-2 lg:h-[560px]">
                    <InfiniteScroll
                        items={items}
                        isTilted={true}
                        tiltDirection="left"
                        autoplay={true}
                        autoplaySpeed={0.5}
                        autoplayDirection="down"
                        pauseOnHover={true}
                        width="20rem"
                    />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
                    {skillGroups.map((group, i) => (
                        <AnimatedContent key={group.title} delay={i * 0.08}>
                            <SpotlightCard className="h-full border-l-4 border-l-red-600">
                                <h3 className="font-display text-xl font-bold text-red-600">{group.title}</h3>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span key={skill} className="rounded bg-stone-50 px-2.5 py-1 text-xs font-medium text-red-600">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
