const projects = [
    {
        tag: "Education",
        name: "The Kids Square",
        desc: "Marketing and admissions site for a play-school chain — programs, franchise info, and a photo-heavy parent-facing experience.",
        stack: "Next.js · Multi-page",
        url: "https://www.kidssquare.co.in/",
    },
    {
        tag: "Travel & Booking",
        name: "Rightful Tour & Travels",
        desc: "Booking-led site for a Kolkata travel agency — destination browsing, holiday packages, and a custom-quote flow.",
        stack: "Next.js · Quote flow",
        url: "https://www.rightfultourandtravels.com/",
    },
    {
        tag: "EdTech · Counseling",
        name: "Samriddhi Associates",
        desc: "Admissions guidance platform for Medical, Management, IT, and Allied Health programs across India and abroad.",
        stack: "Next.js",
    },
    {
        tag: "Enterprise · ERP",
        name: "College ERP",
        desc: "Internal academic and admin ERP built on Oracle APEX, with a PostgreSQL backend behind it.",
        stack: "Oracle APEX · PostgreSQL",
    },
];

export function Showcase() {
    return (
        <section id="work" className="border-b border-line">
            <div className="mx-auto max-w-7xl px-6 py-28">
                <div className="flex items-baseline justify-between mb-16">
                    <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
                        Recent builds
                    </h2>
                    <span className="font-mono text-xs text-ink-faint hidden sm:block">
                        03 / WORK
                    </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {projects.map((p) => (
                        <div
                            key={p.name}
                            className="border-t-2 border-ink pt-5 transition-transform hover:-translate-y-1"
                        >
                            <span className="font-mono text-xs text-signal">{p.tag}</span>
                            <h3 className="font-display text-xl mt-2 mb-3">{p.name}</h3>
                            <p className="text-sm text-ink-soft leading-relaxed mb-5">
                                {p.desc}
                            </p>
                            <div className="flex items-center justify-between">
                                <p className="font-mono text-[11px] text-ink-faint uppercase tracking-wide">
                                    {p.stack}
                                </p>
                                {p.url && (
                                    <a
                                        href={p.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-mono text-[11px] text-signal hover:underline"
                                    >
                                        Visit →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}