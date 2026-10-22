import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import {
  ArrowUpRight,
  Braces,
  Database,
  Gauge,
  Layers3,
  LifeBuoy,
  Workflow
} from "lucide-react";

const services = [
  { icon: Braces, number: "01", title: "Custom web applications", copy: "Purpose-built web apps shaped around the way your organization works." },
  { icon: Layers3, number: "02", title: "ASP.NET Core APIs", copy: "REST APIs and backend services built with C#, .NET Core, and ASP.NET Core Web API." },
  { icon: Braces, number: "03", title: "Angular development", copy: "Responsive frontend experiences for new applications and existing products." },
  { icon: Workflow, number: "04", title: "Full-stack development", copy: "Frontend, backend, and database work brought together in one solution." },
  { icon: Gauge, number: "05", title: "Database & performance", copy: "Query and frontend performance improvements focused on measurable outcomes." },
  { icon: LifeBuoy, number: "06", title: "Legacy improvements", copy: "Debugging and incremental improvements for software your team already relies on." },
  { icon: Database, number: "07", title: "Business management systems", copy: "Internal tools and management systems that organize everyday business workflows." },
  { icon: Workflow, number: "08", title: "Workflow automation", copy: "Automate repetitive steps and connect the workflows behind day-to-day operations." }
];

const skills = [
  { category: "Frontend", icon: Layers3, items: ["Angular"] },
  { category: "Backend", icon: Braces, items: ["C#", ".NET Core", "ASP.NET Core Web API", "REST APIs", "Entity Framework Core"] },
  { category: "Data", icon: Database, items: ["SQL Server", "PostgreSQL"] },
  { category: "Tools & cloud", icon: Workflow, items: ["Git", "Azure"] }
];

const processSteps = ["Discovery", "Requirements", "Proposal", "Development", "Testing", "Deployment", "Support"];

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-intro">
      <p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-lead">{copy}</p>}
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="section-shell section-about" id="about">
      <div className="container-shell">
        <div className="about-layout">
          <SectionIntro eyebrow="About me" title="Experience built around the details that matter." />
          <div className="about-copy">
            <p>I&apos;m a full stack .NET developer with 3+ years of professional experience building and improving web software. I work across frontend, backend, APIs, and databases, helping teams translate real operational needs into useful, maintainable software.</p>
            <p>At CareCloud, I work as a Software Engineer on CareCloud Live, a telehealth platform. I have optimized database queries and frontend performance, reducing page load times by approximately 40%.</p>
            <p>For business projects, that means a development partner who can consider the whole system, communicate clearly, and keep performance and maintainability in view.</p>
          </div>
        </div>

        <div className="timeline-grid">
          <article className="timeline-item">
            <span className="timeline-marker" aria-hidden="true" />
            <p className="timeline-label">PROFESSIONAL EXPERIENCE</p>
            <h3>Software Engineer</h3>
            <p className="timeline-meta">CareCloud <span>·</span> Formerly MTBC</p>
            <p className="timeline-detail">Contributing to CareCloud Live, a telehealth platform.</p>
          </article>
          <article className="timeline-item">
            <span className="timeline-marker" aria-hidden="true" />
            <p className="timeline-label">EDUCATION</p>
            <h3>BS Software Engineering</h3>
            <p className="timeline-meta">COMSATS University Islamabad</p>
            <p className="timeline-detail">Software engineering education.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="section-shell section-services" id="services">
      <div className="container-shell">
        <SectionIntro eyebrow="What I do" title="Software development for the work behind your business." copy="From a focused improvement to a complete application, the work starts with the problem your team needs solved." />
        <div className="service-grid">
          {services.map(({ icon: Icon, number, title, copy }) => (
            <article className="service-card" key={number}>
              <div className="service-card-top"><span className="service-icon"><Icon size={19} aria-hidden="true" /></span><span>{number}</span></div>
              <h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section className="section-shell section-projects" id="projects">
      <div className="container-shell">
        <SectionIntro eyebrow="Selected work" title="A real-world performance improvement." copy="One sanitized case study from my professional experience. No confidential company information, proprietary code, or patient data is included." />
        <article className="project-feature">
          <div className="project-art" aria-label="Abstract interface illustration for a telehealth platform" role="img">
            <div className="project-art-window"><div className="art-window-bar"><i /><i /><i /><span>CARE PLATFORM</span></div><div className="art-window-content"><div className="art-sidebar"><b /><b /><b /><b /></div><div className="art-dashboard"><span className="art-label">TELEHEALTH</span><div className="art-title-line" /><div className="art-panels"><div /><div /><div /></div><div className="art-data-line" /><div className="art-data-line short" /></div></div></div>
          </div>
          <div className="project-details">
            <div className="project-heading"><span className="project-type">HEALTHCARE · TELEHEALTH</span><span className="project-index">01 / 01</span></div>
            <h3>CareCloud Live</h3>
            <p className="project-description">A telehealth platform at CareCloud. My contribution included optimizing database queries and frontend performance to reduce page load times by approximately 40%.</p>
            <div className="project-result"><span>~40%</span><p>Reduction in page load times through query and frontend performance optimization.</p></div>
            <div className="project-tags"><span>C#</span><span>.NET Core</span><span>Angular</span><span>SQL Server</span></div>
            <p className="project-stack-note">Related technologies from my stack</p>
            <p className="project-confidential">Professional work · Details intentionally limited to protect confidential information.</p>
          </div>
        </article>
        <div className="demo-grid">
          {["01", "02"].map((number) => (
            <article className="demo-card" key={number}>
              <div className="demo-top"><span>DEMO PROJECT</span><span>PLACEHOLDER · {number}</span></div>
              <h3>Future demo project</h3>
              <p>Placeholder for a future demonstration project. This is not client work.</p>
              <span className="demo-status">Not yet published</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="section-shell section-skills" id="skills">
      <div className="container-shell skills-layout">
        <SectionIntro eyebrow="Technology" title="A practical full-stack toolkit." copy="Tools I have worked with professionally. The right choices depend on the project and its existing environment." />
        <div className="skill-groups">
          {skills.map(({ category, icon: Icon, items }) => (
            <div className="skill-group" key={category}>
              <h3><Icon size={15} aria-hidden="true" />{category}</h3>
              <div className="skill-pills">{items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  const reasons = [
    ["Real production experience", "3+ years as a software engineer, contributing to a telehealth platform."],
    ["Full-stack perspective", "Frontend, APIs, backend logic, and databases considered together."],
    ["Performance-minded", "A track record of improving database queries and frontend load performance."],
    ["Clear, reliable collaboration", "Practical communication through discovery, delivery, and support."]
  ];

  return (
    <section className="section-shell section-why">
      <div className="container-shell why-layout">
        <SectionIntro eyebrow="Why work with me" title="A steady partner from first conversation to delivery." />
        <div className="reason-list">
          {reasons.map(([title, copy], index) => <article className="reason-item" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section-shell section-process" id="process">
      <div className="container-shell">
        <SectionIntro eyebrow="How we work" title="A clear path from idea to ongoing support." />
        <ol className="process-list">
          {processSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step}</h3></li>)}
        </ol>
      </div>
    </section>
  );
}

export function PricingSection() {
  const tiers = ["Starter", "Business", "Custom"];
  return (
    <section className="section-shell section-pricing" id="pricing">
      <div className="container-shell">
        <SectionIntro eyebrow="Project estimates" title="The right scope comes before the estimate." copy="Every project is different. We will discuss your goals, requirements, and constraints before I provide an estimate." />
        <div className="pricing-grid">
          {tiers.map((tier, index) => <article className={`pricing-item ${index === 1 ? "pricing-featured" : ""}`} key={tier}><span className="pricing-number">0{index + 1}</span><h3>{tier}</h3><p>For software work scoped to your needs and goals.</p><Link href="#contact">Contact me for a project estimate <ArrowUpRight size={16} aria-hidden="true" /></Link></article>)}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section-shell section-contact" id="contact">
      <div className="container-shell">
        <div className="contact-heading"><div><SectionIntro eyebrow="Get in touch" title="Tell me what you need to make work better." copy="Share a little about the project. I’ll review the details and follow up using the email you provide." /></div><span className="contact-aside">01<br /><span>OPEN<br />CONVERSATION</span></span></div>
        <div className="contact-layout">
          <div className="contact-details">
            <p className="contact-detail-label">DIRECT CONTACT</p>
            <div className="contact-detail"><span>Email</span><strong><a href="mailto:s4sajidkhan112@gmail.com">s4sajidkhan112@gmail.com</a><br /><a href="mailto:talktosajid939@gmail.com">talktosajid939@gmail.com</a></strong></div>
            <div className="contact-detail"><span>Phone</span><strong><a href="tel:+923039601939">03039601939</a><br /><a href="tel:+923098530679">03098530679</a></strong></div>
            <div className="contact-detail"><span>LinkedIn</span><strong>[ADD LINKEDIN URL]</strong></div>
            <div className="contact-detail"><span>GitHub</span><strong>[ADD GITHUB URL]</strong></div>
            <div className="contact-placeholder-note">Add your LinkedIn and GitHub profile URLs and resume before launch.</div>
            <div className="resume-link"><span>RESUME</span><strong>[RESUME PLACEHOLDER]</strong></div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}