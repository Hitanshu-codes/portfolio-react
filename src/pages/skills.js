//import { div } from 'framer-motion/client';
import InfiniteScroll from '../components/infinitescroll';
import AllSkillCard from '../components/allskillcard.js'

const items = [

    { content: <AllSkillCard iconPath={'/icons/nodejs.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/javascript.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/react.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/bootstrap.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/python.png'} /> },

    { content: <AllSkillCard iconPath={'/icons/mongodb.png'} /> },

    { content: <AllSkillCard iconPath={'/icons/git.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/css.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/html.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/opencv.png'} /> },
];

const skillGroups = [
    { title: "Languages", skills: ["Python", "JavaScript", "SQL", "Java"] },
    { title: "AI / GenAI", skills: ["AI Agents", "LangChain", "LangGraph", "RAG", "Model Context Protocol (MCP)", "OpenAI API", "Google Gemini API", "LangSmith", "LoRA/QLoRA", "PEFT", "Hugging Face Transformers"] },
    { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs"] },
    { title: "Databases", skills: ["PostgreSQL", "pgvector", "Supabase", "MySQL", "Redis", "MongoDB"] },
    { title: "Cloud & DevOps", skills: ["Docker", "Kubernetes", "AWS EC2", "GCP", "Linux", "Git", "N8N"] },
];

export default function Skills() {
    return (
        <>
            <div style={{ height: '500px', positon: 'relative', marginTop: '100px' }}>
                <InfiniteScroll
                    items={items}
                    isTilted={true}
                    tiltDirection='left'
                    autoplay={true}
                    autoplaySpeed={0.5}
                    autoplayDirection="down"
                    pauseOnHover={true}
                />
            </div>

            <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                {skillGroups.map((group) => (
                    <div key={group.title} className="bg-stone-600 bg-opacity-40 p-6 shadow-md rounded-xl border-l-4 border-red-600">
                        <h3 className="text-xl font-bold text-red-600">{group.title}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span key={skill} className="bg-stone-50 text-red-600 text-xs font-medium px-2.5 py-1 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}
