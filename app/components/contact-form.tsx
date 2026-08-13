"use client";

import { useState } from "react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        scope: "",
        timeline: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://xlr8-backend.onrender.com/api/submit-lead/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", scope: "", timeline: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full animate-fade-up" style={{ animationDelay: "160ms" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div>
                    <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-ink-soft mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-line bg-transparent py-3 text-ink focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-ink-soft mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-b border-line bg-transparent py-3 text-ink focus:outline-none focus:border-blue-600 transition-colors"
                        placeholder="john@company.com"
                    />
                </div>
            </div>

            <div className="mb-8">
                <label htmlFor="scope" className="block font-mono text-xs uppercase tracking-wider text-ink-soft mb-2">
                    Project Scope
                </label>
                <textarea
                    id="scope"
                    name="scope"
                    value={formData.scope}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full border-b border-line bg-transparent py-3 text-ink focus:outline-none focus:border-blue-600 transition-colors resize-none"
                    placeholder="Tell us about the product you want to build..."
                />
            </div>

            <div className="mb-12">
                <label htmlFor="timeline" className="block font-mono text-xs uppercase tracking-wider text-ink-soft mb-2">
                    Expected Timeline
                </label>
                <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-line bg-transparent py-3 text-ink focus:outline-none focus:border-blue-800 transition-colors"
                    placeholder="e.g., 4-6 weeks"
                />
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex items-center gap-2 bg-blue-800 text-white px-7 py-4 text-sm font-medium tracking-wide transition-all hover:bg-blue-700 hover:-translate-y-0.5 disabled:bg-gray-400 disabled:hover:translate-y-0"
            >
                {status === "loading" ? "Submitting..." : "Submit Project Details"}
                <span className="transition-transform group-hover:translate-x-1">
                    →
                </span>
            </button>

            {status === "success" && (
                <div className="mt-6 p-4 bg-green-50/10 text-green-600 border border-green-200/20 text-sm">
                    Thanks for reaching out! We have received your details and will get back to you shortly.
                </div>
            )}

            {status === "error" && (
                <div className="mt-6 p-4 bg-red-50/10 text-red-600 border border-red-200/20 text-sm">
                    Something went wrong while submitting the form. Please check your connection and try again.
                </div>
            )}
        </form>
    );
}