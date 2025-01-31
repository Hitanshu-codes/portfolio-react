export default function Projects() {
    const mainProjects = [
        {
            title: "Geo Tagging of Privately Owned Cameras",
            description:
                "A security-focused project that leverages OpenCV for real-time weapon detection in surveillance footage while integrating geotagging of privately owned CCTV cameras. By analyzing video streams, the system identifies armed individuals and updates authorities with precise camera locations for real-time monitoring, enhancing security and situational awareness.",
            image: "/Racam.webp",
            techStack: ["HTML", "CSS", "JavaScript", "OpenCV", "Flask", "Python"],
            link: "https://github.com/Hitanshu-codes/RJPOLICE_HACK_488_CYBER-KNIGHTS_6/tree/main/Testing%20Flask",
        },
        {
            title: "AI Recruiter",
            description: " AI Recruiter is a web-based application developed using Python and JavaScript that streamlines recruitment through AI-driven voice interactions. Utilizing the OpenAI API for speech-to-text (STT) and text-to-speech (TTS) conversion, it conducts short voice interviews, memorizes conversations, and intelligently processes candidate responses. ",
            image: "/tts stt.webp",
            techStack: ["Python", "JavaScript", "Langchain", "OpenAI"],
            link: "https://github.com/Hitanshu-codes/AI-Recruiter/",
        },
    ];

    const otherProjects = [
        { title: "Tic Tac Toe", description: "It is a basic tic-tac-toe game built using React and Tailwind.", link: "https://github.com/Hitanshu-codes/basic-tic-tic-toe", techStack: ["React", "Tailwind"] },
        { title: "Linkedin Clone", description: "It is a basic linkedin clone built using HTML and CSS.", link: "#", techStack: ["HTML", "CSS"] },
        {
            title: "Amazon Clone", description: "Short description of project.", link: "#", techStack: ["JavaScript", "Node.js", "HTML", "CSS"],

        },
        { title: "Delicious Restaurant", description: "It is a very basic restaurant website built using HTML and CSS.", link: "#", techStack: ["HTML", "CSS"] },

    ];

    return (
        <section className="p-8 bg-transparent">

            <div className="space-y-12">
                {mainProjects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row border-r-4 " : "md:flex-row-reverse border-l-4"
                            } gap-8 bg-stone-600 bg-opacity-40 p-6 rounded-xl shadow-md  border-red-600`}
                    >
                        <img src={project.image} alt={project.title} className="w-auto h-80 md:w-1/2 rounded-lg shadow-md" />
                        <div className="md:w-1/2">
                            <h3 className="text-red-600 text-2xl font-bold">{project.title}</h3>
                            <p className=" text-stone-50 mt-2">{project.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="bg-stone-50 text-red-600 text-xs font-medium px-2.5 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                className="mt-4 inline-block text-white bg-red-600 px-4 py-2 rounded-lg shadow hover:bg-stone-50 hover:text-red-600"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>


            <h2 className="text-2xl font-bold mt-12 text-red-600">Other Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {otherProjects.map((project, index) => (
                    <div key={index} className="bg-stone-600 bg-opacity-40 p-6 shadow-md rounded-lg">
                        <h3 className="text-red-600 text-xl font-semibold">{project.title}</h3>
                        <p className="text-stone-50">{project.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="bg-stone-50 text-red-600 text-xs font-medium px-2.5 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            className="mt-4 inline-block text-stone-50 bg-red-600 px-4 py-2 rounded-lg shadow hover:bg-stone-50 hover:text-red-600"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
