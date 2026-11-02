import Card from '../components/aboutmecard.js';
export default function AboutMe() {
    return (
        <>
            <div className="min-h-screen bg-transparent flex items-center justify-center p-6 pt-0 m-0">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 bg-transparent shadow-lg p-0 rounded-2xl">


                    <div className="flex flex-col items-center text-center justify-center">
                        <img
                            src="/myphoto.png"
                            alt="Hitanshu Tandon"
                            className="object-cover aspect-auto h-96 "
                        />
                        <h2 className="text-2xl font-bold mt-1 text-red-600">Hitanshu Tandon</h2>
                        <p className="text-white">Full Stack AI Engineer</p>
                        <p className="text-stone-300 text-sm">Software Engineer @ nudgeable.ai</p>
                    </div>

                    <div className="md:col-span-2 space-y-6">


                        <Card title="Experience" icon="💼" >
                            <p><strong>Software Engineer</strong> – nudgeable.ai, Mumbai</p>
                            <p className="text-stone-300 text-sm">Jan 2026 – Present · Promoted from Software Engineer Intern (Aug 2025 – Jan 2026)</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Built and launched an AI-powered behaviour-change SaaS end to end as the sole engineer, serving 450+ participants across 20+ corporate training batches.</li>
                                <li>Built a RAG chatbot over 8 product manuals (~800 pages) using OpenAI and pgvector, cutting answer lookup time by 70–90% with 92% accuracy.</li>
                                <li>Architected a Gemini-powered generation pipeline with background batch jobs, producing 1,600+ personalised actions at a 95% job success rate.</li>
                                <li>Designed prompt strategies and agentic workflows for an enterprise client's AI agents, raising response quality by 40%, with OpenAI and ElevenLabs voice and text.</li>
                                <li>Re-engineered the PostgreSQL data-fetching layer, reducing page load time from 10s to 2–3s.</li>
                            </ul>
                            <br />
                            <p><strong>Software Engineer Intern</strong> – Sheeghram AI, Bengaluru</p>
                            <p className="text-stone-300 text-sm">Apr 2024 – Nov 2024</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Built and optimized backend APIs using FastAPI and PostgreSQL, reducing API response time by 30% and improving query efficiency by 25%.</li>
                                <li>Developed responsive frontend interfaces using Next.js and Tailwind CSS.</li>
                                <li>Built an agent harness for an interview voice agent with ~1 second latency across the STT and TTS layers.</li>
                            </ul>
                        </Card>


                        <Card title="Education" icon="🎓" >
                            <p><strong>B.Tech in Computer Science & Engineering</strong> (2022 – 2026)</p>
                            <p>Dr. A.P.J. Abdul Kalam Technical University (SRMCEM, Lucknow)</p>
                            <p>CGPA: 8.40</p>
                        </Card>


                        <Card title="Achievements" icon="🏆" >
                            <p className='mt-2'>Won <strong>HackX 25</strong>, an online AI hackathon among 450 teams nationwide</p>
                            <p>Top 5 of 1,600 teams at the <strong>Rajasthan Police Hackathon 1.0</strong>, leading team CyberKnights</p>
                            <p>LeetCode contest rating of <strong>1789</strong> with 650+ problems solved · 5-Star in Python on HackerRank</p>
                        </Card>


                        <Card title="Leadership & Clubs" icon="🚀" >

                            <p className='mt-2'><strong>Google Developers Group On Campus</strong> – Lead/Organizer</p>
                            <p><strong>Geek for Geeks Student Chapter</strong> – Technical Head, then PR & Outreach Head</p>
                            <p><strong>Computer Society of India</strong> – PR Coordinator</p>
                            <p><strong>Student Placement Committee, SRMCEM</strong> – Member</p>
                        </Card>



                    </div>

                </div>
            </div>
        </>
    )
}
