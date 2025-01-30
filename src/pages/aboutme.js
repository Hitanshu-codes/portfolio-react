import Card from '../components/card.js';
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
                        <p className="text-white">Software Developer | AI/ML Enthusiast</p>
                    </div>

                    <div className="md:col-span-2 space-y-6">


                        <Card title="Education" icon="🎓" >
                            <p><strong>B.Tech in Computer Science & Engineering</strong></p>
                            <br />
                            <p>SRMCEM, 3rd Year</p>
                            <p>CGPA: 8.40 (up to 4th semester)</p>
                        </Card>


                        <Card title="Experience" icon="💼" >
                            <p><strong>Junior Software Engineer Intern</strong> – SHEEGHRAM</p>
                            <br />
                            <p>Worked with React, JavaScript, PostgreSQL, FastAPI.</p>
                            <p>Gained hands-on experience in full-stack development. I built and optimized APIs using FastAPI, improved database performance with PostgreSQL, and developed responsive UIs with Next.js and Tailwind CSS. Additionally, I explored LLMs and integrated APIs to solve real-world problems efficiently, enhancing my understanding of scalable web applications. </p>
                        </Card>


                        <Card title="Leadership & Clubs" icon="🚀" >

                            <p className='mt-2'><strong>Google Developers Group On Campus</strong> – Lead/Organizer</p>
                            <p><strong>Computer Society of India</strong> – PR Coordinator</p>
                            <p><strong>Geek for Geeks Student Chapter</strong> – PR Head & Technical Coordinator</p>
                        </Card>



                    </div>

                </div>
            </div>
        </>
    )
}