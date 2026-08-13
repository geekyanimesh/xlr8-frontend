// components/Comparison.tsx
import React from 'react';

const rows: [string, string][] = [
    ["Scope grows as you go", "Fixed scope, written down before day one"],
    ["Radio silence for days", "Async updates every few days, no chasing"],
    ["One person juggling five gigs", "One project in focus at a time"],
    ["“I'll get to it”", "Delivery date agreed upfront, in writing"],
    ["Code nobody else can read", "Documented handover, clean commit history"],
];

const CrossIcon = () => (
    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const TickIcon = () => (
    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
);

export function Comparison() {
    return (
        <section className="border-b border-gray-100 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-28">
                <h2 className="font-sans text-4xl sm:text-5xl font-medium tracking-tight mb-16 max-w-xl text-gray-900">
                    Why founders skip the usual freelancer
                </h2>
                <div className="border border-gray-100 shadow-sm rounded-lg overflow-hidden">
                    <div className="grid grid-cols-2 border-b border-gray-100">
                        <div className="p-6 sm:p-8 border-r border-gray-100 bg-white">
                            <span className="font-mono text-sm sm:text-base font-semibold uppercase tracking-wider text-gray-400">
                                Typical Freelancer
                            </span>
                        </div>
                        <div className="p-6 sm:p-8 bg-[#111]">
                            <span className="font-mono text-sm sm:text-base font-semibold uppercase tracking-wider text-white">
                                XLR8 Developers
                            </span>
                        </div>
                    </div>
                    {rows.map(([left, right], i) => (
                        <div
                            key={left}
                            className={`grid grid-cols-2 ${i !== rows.length - 1 ? "border-b border-gray-100" : ""
                                }`}
                        >
                            <div className="p-6 sm:p-8 border-r border-gray-100 text-gray-400 text-base sm:text-lg flex items-start gap-4 bg-white">
                                <CrossIcon />
                                <span>{left}</span>
                            </div>
                            <div className="p-6 sm:p-8 text-gray-900 text-base sm:text-lg font-medium bg-gray-50/50 flex items-start gap-4">
                                <TickIcon />
                                <span>{right}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}