export function AccelerateRule({ className = "" }: { className?: string }) {
    const count = 28;
    return (
        <div className={`flex items-center h-4 ${className}`} aria-hidden="true">
            {Array.from({ length: count }).map((_, i) => {
                const t = i / (count - 1);
                const marginRight = 14 * (1 - t) + 2; // wide gaps -> tight gaps
                return (
                    <span
                        key={i}
                        className="w-px h-full bg-ink/25"
                        style={{ marginRight }}
                    />
                );
            })}
        </div>
    );
}