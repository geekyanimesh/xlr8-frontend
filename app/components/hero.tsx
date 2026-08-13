"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AccelerateRule } from "./accelerate-rule";

const words = ["Right", "Fast", "Lean", "Live"];

export function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const id = setInterval(() => {
            setWordIndex((i) => (i + 1) % words.length);
        }, 2200);
        return () => clearInterval(id);
    }, []);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        spotlightRef.current?.style.setProperty("--x", `${x}%`);
        spotlightRef.current?.style.setProperty("--y", `${y}%`);
    }

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative overflow-hidden border-b border-line"
        >
            <div
                className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-signal/10 blur-3xl animate-blob"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-signal/[0.07] blur-3xl animate-blob"
                style={{ animationDelay: "-6s" }}
                aria-hidden="true"
            />
            <div
                ref={spotlightRef}
                className="pointer-events-none absolute inset-0"
                style={
                    {
                        "--x": "50%",
                        "--y": "20%",
                        background:
                            "radial-gradient(500px circle at var(--x) var(--y), rgba(43,78,255,0.07), transparent 45%)",
                    } as React.CSSProperties
                }
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-28 sm:pt-40 sm:pb-36">
                <div className="animate-fade-up">
                    <AccelerateRule className="mb-8" />
                </div>

                <p
                    className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft mb-6 animate-fade-up"
                    style={{ animationDelay: "80ms" }}
                >
                    Freelance dev studio — scoped, shipped, handed over
                </p>

                <h1
                    className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.9] tracking-tight text-ink max-w-5xl animate-fade-up"
                    style={{ animationDelay: "160ms" }}
                >
                    Build fast.
                    <br />
                    Ship{" "}
                    <span className="relative inline-block text-signal">
                        <span key={wordIndex} className="inline-block animate-word-in">
                            {words[wordIndex]}
                        </span>
                    </span>
                    .
                </h1>

                <p
                    className="mt-8 max-w-2xl text-lg sm:text-xl text-ink-soft leading-relaxed animate-fade-up"
                    style={{ animationDelay: "240ms" }}
                >
                    XLR8 Developers builds and ships full-stack web, mobile, and AI
                    products for founders and small teams — production code, fixed
                    scope, no bloated agency overhead. Just the engineers who write it.
                </p>

                <div
                    className="mt-10 flex flex-wrap items-center gap-6 animate-fade-up"
                    style={{ animationDelay: "320ms" }}
                >
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 bg-blue-800 text-white px-7 py-4 text-sm font-medium tracking-wide transition-all hover:bg-blue-700 hover:-translate-y-0.5"
                    >
                        Start a project
                        <span className="transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-ink-faint">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
                        </span>
                    </div>
                </div>
            </div>
        </section >
    );
}