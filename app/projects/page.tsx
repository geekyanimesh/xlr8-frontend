import Link from 'next/link';

export default function ProjectsPage() {
    const projects = [
        {
            title: "Prakriti AI",
            tag: "Generative AI Solutions",
            description: "Integrated Large Language Models via Gemini and OpenAI APIs for automated content generation and highly dynamic, conversational user experiences.",
        },
        {
            title: "Cbooks Library Ecosystem",
            tag: "EdTech & Management Systems",
            description: "Developed a comprehensive mobile and web platform featuring cross-platform synchronization, secure database management, and robust API integrations.",
        },
        {
            title: "Enterprise Data Extraction",
            tag: "Data Automation",
            description: "Engineered scalable Python-based data extraction architectures utilizing Scrapy, BeautifulSoup, and Selenium for high-volume data aggregation.",
        }
    ];

    return (
        <main className="min-h-screen bg-white text-[#111] font-sans selection:bg-[#111] selection:text-white">
            <header className="flex justify-between items-center px-12 py-8 border-b border-[#eaeaea] sticky top-0 bg-white/90 backdrop-blur-md z-50">
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity">xlr8 devs</Link>
                <Link href="/contact" className="text-xs uppercase tracking-widest border border-[#111] px-6 py-3 rounded-full hover:bg-[#111] hover:text-white transition-all">
                    Start Project
                </Link>
            </header>

            <div className="px-12 pt-32 pb-40 max-w-[1600px] mx-auto">
                <h1 className="text-[5rem] font-medium mb-24 tracking-tight border-b border-[#eaeaea] pb-12">Index</h1>
                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-[#eaeaea] group hover:bg-[#fafafa] transition-colors -mx-12 px-12 cursor-pointer">
                            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                                <h2 className="text-4xl font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-500">{project.title}</h2>
                            </div>
                            <div className="w-full md:w-1/3 mb-6 md:mb-0 text-[#666] text-lg leading-relaxed pr-8">
                                {project.description}
                            </div>
                            <div className="w-full md:w-auto flex justify-end">
                                <span className="text-xs uppercase tracking-widest text-[#666] border border-[#eaeaea] bg-white px-6 py-3 rounded-full group-hover:border-[#111] group-hover:text-[#111] transition-all">
                                    {project.tag}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}