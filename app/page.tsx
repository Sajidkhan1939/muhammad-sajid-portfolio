import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  AboutSection,
  ContactSection,
  PricingSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  SkillsSection,
  WhySection
} from "@/components/portfolio-sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <WhySection />
        <ProcessSection />
        <PricingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
