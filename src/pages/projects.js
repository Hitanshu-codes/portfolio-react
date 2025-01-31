export default function Projects() {
    const mainProjects = [
        {
            title: "Geo Tagging of Privately Owned Cameras",
            description:
                "Developed using HTML, CSS, JavaScript, OpenCV, Flask, and Python to enable location-based surveillance.",
            image: "/Racam.webp",
            techStack: ["HTML", "CSS", "JavaScript", "OpenCV", "Flask", "Python"],
            link: "#",
        },
        {
            title: "TTS (Text-to-Speech) and STT (Speech-to-Text) Converter",
            description: " Developed using Python and JavaScript to convert text to speech and speech to text.It is a web application that uses the OpenAI API to convert text to speech and speech to text.",
            image: "/tts stt.webp",
            techStack: ["Python", "JavaScript"],
            link: "#",
        },
    ];

    const otherProjects = [
        { title: "Tic Tac Toe", description: "Short description of project.", link: "#", techStack: ["React", "Tailwind"] },
        { title: "Linkedin Clone", description: "Short description of project.", link: "#", techStack: ["Python", "Flask"] },
        { title: "Amazon Clone", description: "Short description of project.", link: "#", techStack: ["JavaScript", "Node.js"] },
        { title: "Delicious Restaurant", description: "Short description of project.", link: "#", techStack: ["React", "Tailwind"] },

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
                        <p className="text-gray-500">{project.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded">
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
