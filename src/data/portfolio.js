// Single source for portfolio content. Facts mirror master resume v3.

export const profile = {
    name: 'Hitanshu Tandon',
    title: 'Full Stack AI Engineer',
    currentRole: 'Software Engineer at Nudgeable Consulting',
    location: 'Lucknow, India',
    email: 'hitanshutandon8@gmail.com',
    github: 'https://github.com/Hitanshu-codes',
    linkedin: 'https://www.linkedin.com/in/hitanshu-tandon',
    leetcode: 'https://leetcode.com/u/Hitman_codes/',
    intro:
        'Software Engineer building Generative AI applications, AI agents and production web platforms end to end. I work across the stack with React/Next.js, Node.js/FastAPI and PostgreSQL, and build with LangChain, LangGraph, RAG and Model Context Protocol (MCP). Hackathon winner and competitive coder at heart.',
    roles: ['AI agents', 'RAG systems', 'full-stack products', 'LLM pipelines'],
    openTo: 'AI Engineer, Full Stack and Backend roles',
};

export const stats = [
    { value: 450, suffix: '+', label: 'participants served by a SaaS I built as the sole engineer' },
    { value: 92, suffix: '%', label: 'answer accuracy on a RAG chatbot over ~800 pages of manuals' },
    { value: 1789, suffix: '', label: 'LeetCode contest rating' },
    { value: 650, suffix: '+', label: 'LeetCode problems solved' },
];

export const highlights = [
    {
        icon: '🤖',
        title: 'Generative AI & agents',
        body: 'RAG over real documents, multi-agent pipelines, LangChain and LangGraph, MCP integrations, prompt strategy and evaluation with LangSmith.',
        tags: ['RAG', 'LangGraph', 'MCP', 'LangSmith'],
    },
    {
        icon: '🧱',
        title: 'Full-stack products',
        body: 'Product work from database design to deployment: Next.js and React on the front, FastAPI and Node.js on the back, PostgreSQL and Supabase underneath.',
        tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Supabase'],
    },
    {
        icon: '🚀',
        title: 'Shipping to production',
        body: 'Background batch jobs with backoff, idempotent schedulers and webhooks, passwordless auth and query tuning that took page loads from 10s to 2–3s.',
        tags: ['Docker', 'Kubernetes', 'Vercel Cron', 'Redis'],
    },
];

export const experience = [
    {
        role: 'Software Engineer',
        company: 'Nudgeable Consulting',
        location: 'Mumbai',
        period: 'Jan 2026 – Present',
        note: 'Promoted from Software Engineer Intern (Aug 2025 – Jan 2026)',
        points: [
            'Built and launched an AI-powered behaviour-change SaaS end to end as the sole engineer, serving 450+ participants across 20+ corporate training batches with 2,500+ actions completed.',
            'Built a RAG chatbot over 8 product manuals (~800 pages) using OpenAI and pgvector, cutting answer lookup time by 70–90% with 92% accuracy.',
            'Architected a Gemini-powered generation pipeline with background batch jobs, a concurrency limiter and exponential backoff, producing 1,600+ personalised actions at a 95% job success rate.',
            "Designed prompt strategies and agentic workflows for an enterprise client's AI agents, raising response quality by 40%, with OpenAI and ElevenLabs for voice and text.",
            'Engineered an idempotent scheduling engine on Vercel Cron and atomic PostgreSQL claim functions, sending 500+ reminders with zero duplicates.',
            'Re-engineered the PostgreSQL data-fetching layer, reducing page load time from 10s to 2–3s.',
        ],
    },
    {
        role: 'Software Engineer Intern',
        company: 'Sheeghram AI',
        location: 'Bengaluru',
        period: 'Apr 2024 – Nov 2024',
        points: [
            'Built and optimized backend APIs using FastAPI and PostgreSQL, reducing API response time by 30% and improving query efficiency by 25%.',
            'Developed responsive frontend interfaces using Next.js and Tailwind CSS.',
            'Built an agent harness for an interview voice agent with ~1 second latency across the STT and TTS layers.',
        ],
    },
];

export const education = [
    {
        degree: 'B.Tech, Computer Science & Engineering',
        school: 'Dr. A.P.J. Abdul Kalam Technical University (SRMCEM, Lucknow)',
        period: '2022 – 2026',
        detail: 'CGPA: 8.40',
    },
];

export const achievements = [
    { icon: '🏆', title: 'Winner, HackX 25', detail: 'Online AI hackathon among 450 teams nationwide' },
    { icon: '🚓', title: 'Top 5, Rajasthan Police Hackathon 1.0', detail: 'Out of 1,600 teams, leading team CyberKnights' },
    { icon: '⚡', title: 'LeetCode 1789', detail: 'Contest rating, with 650+ problems solved' },
    { icon: '🐍', title: '5-Star in Python', detail: 'HackerRank' },
];

export const leadership = [
    { org: 'Google Developers Group On Campus', role: 'Lead/Organizer' },
    { org: 'Geek for Geeks Student Chapter', role: 'Technical Head, then PR & Outreach Head' },
    { org: 'Computer Society of India', role: 'PR Coordinator' },
    { org: 'Student Placement Committee, SRMCEM', role: 'Member' },
];

export const skillGroups = [
    { title: 'Languages', skills: ['Python', 'JavaScript', 'SQL', 'Java'] },
    { title: 'AI / GenAI', skills: ['AI Agents', 'LangChain', 'LangGraph', 'RAG', 'Model Context Protocol (MCP)', 'OpenAI API', 'Google Gemini API', 'LangSmith', 'LoRA/QLoRA', 'PEFT', 'Hugging Face Transformers'] },
    { title: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS'] },
    { title: 'Backend', skills: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs'] },
    { title: 'Databases', skills: ['PostgreSQL', 'pgvector', 'Supabase', 'MySQL', 'Redis', 'MongoDB'] },
    { title: 'Cloud & DevOps', skills: ['Docker', 'Kubernetes', 'AWS EC2', 'GCP', 'Linux', 'Git', 'N8N'] },
];

export const projectFilters = ['All', 'AI & LLMs', 'Full Stack', 'Hackathon'];

export const projects = [
    {
        title: 'Localized Multi-Agent RAG Assistant + Eval Harness',
        description:
            'A 4-agent pipeline (orchestrator, retrieval, generation, localization-critic) serving locale-specific knowledge bases in English, Hindi and Spanish. A deterministic evaluation harness over a fixed 15-query test set scored 94% retrieval accuracy and a 100% localization pass rate at ~33ms average latency, tracked with LangSmith.',
        badge: '🤖 Multi-Agent RAG',
        metric: '94% retrieval accuracy',
        categories: ['AI & LLMs'],
        techStack: ['AI Agents', 'RAG', 'LangSmith'],
        featured: true,
    },
    {
        title: 'Sales Knowledge-Base RAG Assistant',
        description:
            "A RAG chatbot built for a client's sales team (via Nudgeable Consulting) that answers questions from 8 product user guides (~800 pages). Uses OpenAI and pgvector on Postgres for retrieval, cutting answer-lookup time by 70–90% versus manual search with 92% answer accuracy.",
        badge: '📚 Client Project',
        metric: '92% answer accuracy',
        categories: ['AI & LLMs'],
        techStack: ['OpenAI', 'pgvector', 'PostgreSQL', 'RAG'],
        featured: true,
    },
    {
        title: 'LoRA/QLoRA Fine-Tuning — TinyLlama-1.1B',
        description:
            'Fine-tuned TinyLlama-1.1B-Chat with LoRA (PEFT) under 4-bit quantization (bitsandbytes): rank-16 adapters on the attention projections, trained with a paged AdamW optimizer over 3 epochs (1,881 steps), bringing training loss down from ~2.16 to ~1.73. Training pipeline built on Hugging Face Transformers, PEFT and TRL\'s SFTTrainer.',
        badge: '🧠 LLM Fine-Tuning',
        metric: 'Loss 2.16 → 1.73',
        categories: ['AI & LLMs'],
        techStack: ['Python', 'Hugging Face', 'PEFT', 'TRL', 'bitsandbytes'],
        link: 'https://github.com/Hitanshu-codes/Finetuning',
        featured: true,
    },
    {
        title: 'AI Recruiter',
        description:
            'An AI-driven recruiting tool with voice-based candidate interactions that automates resume parsing and screening, cutting screening time by 90% and improving candidate-matching efficiency by 50%. Uses the OpenAI API for speech-to-text and text-to-speech to run short voice interviews and process candidate responses.',
        image: '/images/ai-recruiter.webp',
        metric: '90% less screening time',
        categories: ['AI & LLMs', 'Full Stack'],
        techStack: ['Python', 'JavaScript', 'Langchain', 'OpenAI'],
        link: 'https://github.com/Hitanshu-codes/AI-Recruiter/',
    },
    {
        title: 'AI-Powered Proctoring & Quiz Generator',
        description:
            'A full-stack MERN app that lets teachers auto-generate quizzes and tests with the Gemini API, tailored to subject and class level. Runs a real-time proctored exam environment with session monitoring and browser integrity checks, and delivers instant AI-evaluated results and analytics via unique student exam codes.',
        badge: '📝 EdTech',
        metric: 'Real-time proctoring',
        categories: ['Full Stack', 'AI & LLMs'],
        techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Gemini API'],
        link: 'https://github.com/Hitanshu-codes/online-test-application',
    },
    {
        title: 'Geo Tagging of Privately Owned Cameras',
        description:
            'Top 5 of 1,600 teams at the Rajasthan Police Hackathon 1.0. A security-focused project that leverages OpenCV for real-time weapon detection in surveillance footage while integrating geotagging of privately owned CCTV cameras. By analyzing video streams, the system identifies armed individuals and updates authorities with precise camera locations for real-time monitoring.',
        image: '/images/geo-tagging.webp',
        metric: 'Top 5 of 1,600 teams',
        categories: ['Hackathon', 'AI & LLMs'],
        techStack: ['HTML', 'CSS', 'JavaScript', 'OpenCV', 'Flask', 'Python'],
        link: 'https://github.com/Hitanshu-codes/RJPOLICE_HACK_488_CYBER-KNIGHTS_6/tree/main/Testing%20Flask',
    },
];

export const otherProjects = [
    {
        title: 'Tic Tac Toe',
        description: 'It is a basic tic-tac-toe game built using React and Tailwind.',
        link: 'https://github.com/Hitanshu-codes/basic-tic-tic-toe',
        techStack: ['React', 'Tailwind'],
    },
];
