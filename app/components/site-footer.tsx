export function SiteFooter() {
    const stats = [
        { label: "Live Products", value: "4+" },
        { label: "Shipping Since", value: "2023" },
        { label: "Code Ownership", value: "100%" },
    ];

    return (
        <footer id="contact" className="bg-ink text-paper">
            <div className="mx-auto max-w-7xl px-6 py-16 grid sm:grid-cols-3 gap-12">
                <div>
                    <p className="font-display text-2xl mb-3">
                        XLR8<span className="text-signal">.</span>
                    </p>
                    <p className="text-sm text-paper/60 max-w-xs leading-relaxed mb-8">
                        A small, senior-minded dev studio shipping web, mobile, and AI
                        products for founders.
                    </p>
                    <div className="flex gap-8">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <p className="font-display text-2xl text-signal">{s.value}</p>
                                <p className="font-mono text-[10px] uppercase tracking-wider text-paper/40">
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-paper/40 mb-4">
                        Company
                    </p>
                    <ul className="space-y-2 text-sm text-paper/80">
                        <li><a href="#services" className="hover:text-signal">Services</a></li>
                        <li><a href="#process" className="hover:text-signal">Process</a></li>
                        <li><a href="#work" className="hover:text-signal">Work</a></li>
                        <li><a href="#faq" className="hover:text-signal">FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-paper/40 mb-4">
                        Connect
                    </p>
                    <p className="text-sm text-paper/80">xlr8developers@gmail.com</p>
                    <p className="text-sm text-paper/50 mt-4">
                        Working with founders across India and abroad.
                    </p>
                </div>
            </div>
            <div className="border-t border-paper/10">
                <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-paper/40">
                    © {new Date().getFullYear()} XLR8 Developers. All rights reserved.
                </div>
            </div>
        </footer>
    );
}