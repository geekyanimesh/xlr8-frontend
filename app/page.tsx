import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Credentials } from "@/components/credentials";
import { Services } from "@/components/services";
import { Comparison } from "@/components/comparison";
import { Process } from "@/components/process";
import { Showcase } from "@/components/showcase";
import { Faq } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Credentials />
        <Services />
        <Comparison />
        <Process />
        <Showcase />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}