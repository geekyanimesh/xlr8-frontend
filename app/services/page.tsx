export default function ServicesPage() {
    const services = [
        {
            title: "End-to-End Application Development",
            description: "Building robust, high-performance web applications and mobile ecosystems utilizing Next.js, TypeScript, Node.js, and React.",
        },
        {
            title: "Cloud Engineering & DevOps",
            description: "Provisioning secure infrastructure and establishing automated CI/CD pipelines. Proficient in AWS (EC2, S3, RDS, Elastic Beanstalk), Docker, and Kubernetes.",
        },
        {
            title: "Custom AI Integrations",
            description: "Developing intelligent automation tools and integrating generative AI to streamline workflows and analyze complex datasets.",
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white p-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-16 tracking-tight">Capabilities</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                            <p className="text-gray-400 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}