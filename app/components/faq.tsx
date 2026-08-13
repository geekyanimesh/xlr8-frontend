"use client";
import { useState } from "react";

const faqs = [
    {
        q: "What's the typical timeline?",
        a: "Most MVP-scale builds land between 1 and 2 weeks, depending on scope. You get a firm estimate after the spec call, not a guess up front.",
    },
    {
        q: "Do I own the code after delivery?",
        a: "Yes, fully. The repo and the IP transfer to you at handover — no ongoing license or retainer required to keep using it.",
    },
    {
        q: "What's included in the price?",
        a: "Design, development, deployment, and documentation for the agreed scope, plus two weeks of post-launch bug fixes. Anything outside scope is quoted separately, upfront.",
    },
    {
        q: "Can you work with my existing codebase?",
        a: "Usually, yes. We'll audit it first and tell you honestly whether it's faster to extend it or rebuild the parts holding you back.",
    },
    {
        q: "What happens after the two weeks of support end?",
        a: "You can book ad-hoc fixes or move to a small monthly retainer if you want ongoing help entirely optional.",
    },
];

export function Faq() {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section id="faq" className="border-b border-line">
            <div className="mx-auto max-w-4xl px-6 py-28">
                <h2 className="font-display text-4xl sm:text-5xl tracking-tight mb-14">
                    Questions, answered
                </h2>
                <div className="border-t border-line">
                    {faqs.map((f, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={f.q} className="border-b border-line">
                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between gap-4 py-6 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-display text-xl">{f.q}</span>
                                    <span className="font-mono text-ink-faint text-lg shrink-0">
                                        {isOpen ? "\u2212" : "+"}
                                    </span>
                                </button>
                                {isOpen && (
                                    <p className="pb-7 text-base text-ink-soft leading-relaxed max-w-xl animate-fade-up">
                                        {f.a}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}