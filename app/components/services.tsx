const services = [
    { n: "01", title: "Full-Stack Web Apps", desc: "Next.js and Django builds — from marketing site to authenticated dashboard, deployed on AWS or Vercel." },
    { n: "02", title: "AI & Automation", desc: "OpenAI-backed features: enrichment pipelines, agents, and search — wired into the product, not bolted on." },
    { n: "03", title: "Mobile Apps", desc: "React Native apps that ship to iOS and Android from one codebase, without the usual platform drift." },
    { n: "04", title: "Cloud & DevOps", desc: "Infra on AWS or GCP — CI/CD pipelines, containerization, and environments that don't fall over under load." },
    { n: "05", title: "Deployment", desc: "Domain, hosting, and go-live handled end to end, so launch day is a non-event instead of a scramble." },
    { n: "06", title: "Site Maintenance", desc: "Ongoing monitoring, patches, and small updates after launch, so the site keeps working while you run the business." },
];

export function Services() {
    return (
        <section id="services" className="border-b border-line">
            <div className="mx-auto max-w-7xl px-6 py-28">
                <div className="flex items-baseline justify-between mb-16">
                    <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
                        What we build
                    </h2>
                    <span className="font-mono text-xs text-ink-faint hidden sm:block">
                        01 / SERVICES
                    </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="bg-paper p-10 transition-colors hover:bg-signal-soft/40"
                        >
                            <span className="font-mono text-xs text-signal tracking-widest">
                                {s.n}
                            </span>
                            <h3 className="font-mono text-xl sm:text-2xl uppercase tracking-tight mt-3 mb-3">
                                {s.title}
                            </h3>
                            <p className="text-ink-soft leading-relaxed text-base">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}