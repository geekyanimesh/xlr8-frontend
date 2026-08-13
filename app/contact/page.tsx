import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-paper">
                <section className="mx-auto max-w-3xl px-6 pt-32 pb-24">
                    <div className="mb-12 animate-fade-up">
                        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.9] tracking-tight text-ink mb-8">
                            Let's build
                            <br />
                            something.
                        </h1>
                        <p className="text-lg text-ink-soft max-w-xl leading-relaxed" style={{ animationDelay: "80ms" }}>
                            Fill out the form below to schedule a discovery call or get a project estimate. We typically respond within 24 hours.
                        </p>
                    </div>
                    <ContactForm />
                </section>
            </main>
            <SiteFooter />
        </>
    );
}