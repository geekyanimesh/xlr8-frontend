import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-24">
      <section className="max-w-4xl mx-auto flex flex-col justify-center min-h-[60vh]">
        <h1 className="text-6xl font-bold tracking-tight mb-6">
          Shipping production-grade software at scale.
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          xlr8 devs is a premium B2B software development and cloud engineering agency specializing in end-to-end web applications, custom AI integrations, and automated DevOps pipelines.
        </p>
        <div className="flex gap-4">
          <Link href="/projects" className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-gray-200 transition-colors">
            View Our Work
          </Link>
          <Link href="/contact" className="border border-gray-600 text-white px-6 py-3 rounded font-medium hover:border-gray-400 transition-colors">
            Start a Project
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-24 border-t border-gray-800 pt-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">01. Architecture</h3>
            <p className="text-gray-400 text-sm">Defining robust database schemas and scalable cloud infrastructure requirements utilizing AWS and MongoDB.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">02. Prototyping</h3>
            <p className="text-gray-400 text-sm">Rapid development of core logic and responsive user interfaces utilizing the MERN stack and Next.js.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">03. Deployment</h3>
            <p className="text-gray-400 text-sm">Production-grade containerized deployment employing Docker, Kubernetes, and automated GitHub Actions CI/CD pipelines.</p>
          </div>
        </div>
      </section>
    </main>
  );
}