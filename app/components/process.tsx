"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
    { label: "Discovery", title: "One call, your idea on the table", desc: "30 minutes to walk through the goal, the users, and what “done” looks like." },
    { label: "Spec", title: "A written plan before any code", desc: "A short SRS and architecture doc — features, stack, timeline, price. You approve it first." },
    { label: "Build", title: "Weekly builds, not a black box", desc: "Sprint-based development with a working demo every week, not one reveal at the end." },
    { label: "Launch", title: "Deployed, documented, handed over", desc: "Live on your infra, with docs and a clean repo you or your next dev can actually read." },
    { label: "Support", title: "Two weeks of aftercare", desc: "Bug fixes and small tweaks covered after launch, before anything becomes a paid ticket." },
];

export function Process() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [played, setPlayed] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setReducedMotion(
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        );
        const el = trackRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setPlayed(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const dur = reducedMotion ? "duration-0" : "duration-[1800ms]";

    return (
        <section id="process" className="border-b border-gray-100 bg-white">
            <div className="mx-auto max-w-[1400px] px-6 py-28">
                <div className="flex items-baseline justify-between mb-20">
                    <h2 className="font-sans text-4xl sm:text-5xl font-medium tracking-tight text-gray-900">
                        How a project runs
                    </h2>
                    <span className="font-mono text-xs text-gray-400 uppercase tracking-widest hidden sm:block">
                        02 / PROCESS
                    </span>
                </div>

                {/* Single continuous seekbar */}
                <div ref={trackRef} className="relative h-10 mb-12 hidden sm:block">
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-gray-100 rounded-full" />
                    <div
                        className={`absolute left-0 top-1/2 -translate-y-1/2 h-[3px] bg-blue-600 rounded-full transition-[width] ${dur} ease-out`}
                        style={{ width: played ? "100%" : "0%" }}
                    />
                    {steps.map((s, i) => {
                        const pos = ((i + 0.5) / steps.length) * 100;
                        return (
                            <span
                                key={s.label}
                                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full transition-colors ${dur} ease-out z-10`}
                                style={{
                                    left: `${pos}%`,
                                    backgroundColor: played
                                        ? "#2563eb" // Tailwind blue-600
                                        : "#f3f4f6", // Tailwind gray-100
                                    transitionDelay: played
                                        ? `${(i / steps.length) * 1800}ms`
                                        : "0ms",
                                }}
                            />
                        );
                    })}
                    {/* Animated trailing node */}
                    <span
                        className={`absolute top-1/2 h-3.5 w-3.5 rounded-full bg-blue-600 ring-4 ring-white shadow-sm transition-[left] ${dur} ease-out z-20`}
                        style={{
                            left: played ? "100%" : "0%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                </div>

                <div className="grid sm:grid-cols-5 gap-10 sm:gap-6">
                    {steps.map((s) => (
                        <div key={s.label}>
                            <span className="font-mono text-xs sm:text-sm text-blue-600 tracking-wide">
                                {s.label}
                            </span>
                            <h3 className="font-sans text-lg sm:text-xl font-medium mt-3 mb-3 leading-tight pr-4 text-gray-900">
                                {s.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}