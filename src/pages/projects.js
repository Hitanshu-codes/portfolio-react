export default function Projects() {
    const mainProjects = [
        {
            title: "Localized Multi-Agent RAG Assistant + Eval Harness",
            description:
                "A 4-agent pipeline (orchestrator, retrieval, generation, localization-critic) serving locale-specific knowledge bases in English, Hindi and Spanish. A deterministic evaluation harness over a fixed 15-query test set scored 94% retrieval accuracy and a 100% localization pass rate at ~33ms average latency, tracked with LangSmith.",
            badge: "🤖 Multi-Agent RAG",
            techStack: ["AI Agents", "RAG", "LangSmith"],
        },
        {
            title: "Sales Knowledge-Base RAG Assistant",
            description:
                "A RAG chatbot built for a client's sales team (via Nudgeable Consulting) that answers questions from 8 product user guides (~800 pages). Uses OpenAI and pgvector on Postgres for retrieval, cutting answer-lookup time by 70–90% versus manual search with 92% answer accuracy.",
            badge: "📚 Client Project",
            techStack: ["OpenAI", "pgvector", "PostgreSQL", "RAG"],
        },
        {
            title: "LoRA/QLoRA Fine-Tuning — TinyLlama-1.1B",
            description:
                "Fine-tuned TinyLlama-1.1B-Chat with LoRA (PEFT) under 4-bit quantization (bitsandbytes): rank-16 adapters on the attention projections, trained with a paged AdamW optimizer over 3 epochs (1,881 steps), bringing training loss down from ~2.16 to ~1.73. Training pipeline built on Hugging Face Transformers, PEFT and TRL's SFTTrainer.",
            badge: "🧠 LLM Fine-Tuning",
            techStack: ["Python", "Hugging Face", "PEFT", "TRL", "bitsandbytes"],
            link: "https://github.com/Hitanshu-codes/Finetuning",
        },
        {
            title: "AI Recruiter",
            description: "An AI-driven recruiting tool with voice-based candidate interactions that automates resume parsing and screening, cutting screening time by 90% and improving candidate-matching efficiency by 50%. Uses the OpenAI API for speech-to-text and text-to-speech to run short voice interviews and process candidate responses.",
            image: "/tts stt.webp",
            techStack: ["Python", "JavaScript", "Langchain", "OpenAI"],
            link: "https://github.com/Hitanshu-codes/AI-Recruiter/",
        },
        {
            title: "AI-Powered Proctoring & Quiz Generator",
            description:
                "A full-stack MERN app that lets teachers auto-generate quizzes and tests with the Gemini API, tailored to subject and class level. Runs a real-time proctored exam environment with session monitoring and browser integrity checks, and delivers instant AI-evaluated results and analytics via unique student exam codes.",
            badge: "📝 EdTech",
            techStack: ["MongoDB", "Express.js", "React", "Node.js", "Gemini API"],
            link: "https://github.com/Hitanshu-codes/online-test-application",
        },
        {
            title: "Geo Tagging of Privately Owned Cameras",
            description:
                "Top 5 of 1,600 teams at the Rajasthan Police Hackathon 1.0. A security-focused project that leverages OpenCV for real-time weapon detection in surveillance footage while integrating geotagging of privately owned CCTV cameras. By analyzing video streams, the system identifies armed individuals and updates authorities with precise camera locations for real-time monitoring.",
            image: "/Racam.webp",
            techStack: ["HTML", "CSS", "JavaScript", "OpenCV", "Flask", "Python"],
            link: "https://github.com/Hitanshu-codes/RJPOLICE_HACK_488_CYBER-KNIGHTS_6/tree/main/Testing%20Flask",
        },
    ];

    const otherProjects = [
        { title: "Tic Tac Toe", description: "It is a basic tic-tac-toe game built using React and Tailwind.", link: "https://github.com/Hitanshu-codes/basic-tic-tic-toe", techStack: ["React", "Tailwind"] },
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
                        {project.image ? (
                            <img src={project.image} alt={project.title} className="w-auto h-80 md:w-1/2 rounded-lg shadow-md" />
                        ) : (
                            <div className="flex w-full h-80 md:w-1/2 items-center justify-center rounded-lg shadow-md bg-gradient-to-br from-red-700 via-stone-900 to-black">
                                <span className="text-3xl font-bold text-stone-50 text-center px-4">{project.badge}</span>
                            </div>
                        )}
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
                            {project.link && (
                                <a
                                    href={project.link}
                                    className="mt-4 inline-block text-white bg-red-600 px-4 py-2 rounded-lg shadow hover:bg-stone-50 hover:text-red-600"
                                >
                                    View Project
                                </a>
                            )}
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
