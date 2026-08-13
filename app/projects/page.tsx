export default function ProjectsPage() {
    const projects = [
        {
            title: "Prakriti AI",
            category: "Generative AI Solutions",
            description: "Integrated Large Language Models via Gemini and OpenAI APIs for automated content generation and highly dynamic, conversational user experiences.",
        },
        {
            title: "Cbooks Library Ecosystem",
            category: "EdTech & Management Systems",
            description: "Developed a comprehensive mobile and web platform featuring cross-platform synchronization, secure database management, and robust API integrations.",
        },
        {
            title: "Enterprise Data Extraction",
            category: "Data Automation",
            description: "Engineered scalable Python-based data extraction architectures utilizing Scrapy, BeautifulSoup, and Selenium for high-volume data aggregation.",
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white p-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-16 tracking-tight">Selected Work</h1>
                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="border-b border-gray-800 pb-12">
                            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">{project.category}</p>
                            <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
                            <p className="text-lg text-gray-400 max-w-2xl">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}