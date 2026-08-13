const credentials = [
    "Smart India Hackathon 2024 — Grand Finalist",
    "Published Researcher — Wiley Geological Journal",
    "Fixed-Price, No Surprise Bills",
    "Weekly Demos, Not Guesswork",
    "You Own 100% of the Code",
    "Next.js · Django · React Native · AWS",
];

export function Credentials() {
    const loop = [...credentials, ...credentials];
    return (
        <section className="border-b border-line bg-surface overflow-hidden">
            <div className="group py-7">
                <div className="flex w-max gap-16 animate-marquee group-hover:[animation-play-state:paused]">
                    {loop.map((c, i) => (
                        <span
                            key={i}
                            className="font-mono text-xs uppercase tracking-wider text-ink-soft whitespace-nowrap"
                        >
                            {c}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}