"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#work", label: "Work" },
    { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 bg-paper/85 backdrop-blur-md transition-shadow ${scrolled
                ? "shadow-[0_1px_0_0_var(--color-line)]"
                : "border-b border-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
                <Link href="/" className="font-display text-2xl tracking-tight">
                    XLR8<span className="text-signal">.</span>
                </Link>
                <nav className="hidden md:flex items-center gap-10">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="group relative text-base font-medium text-ink-soft hover:text-ink transition-colors py-1"
                        >
                            {l.label}
                            <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-signal transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <Link
                    href="/contact"
                    className="text-sm font-semibold bg-blue-800 text-white px-5 py-3 hover:bg-blue-700 transition-colors"
                >
                    Book Appointment
                </Link>
            </div >
        </header >
    );
}