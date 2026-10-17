import Link from "next/link";
import { ArrowDown, ArrowUpRight, Link2 } from "lucide-react";

export function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="container-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" />Full Stack .NET Developer</p>
          <h1>Thoughtful software.<br /><span>Built for real work.</span></h1>
          <p className="hero-intro">I&apos;m Muhammad Sajid. I help businesses turn complex workflows into dependable web applications, APIs, and internal tools.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#contact">Start a project <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link className="button button-quiet" href="#projects">Explore my work <ArrowDown size={16} aria-hidden="true" /></Link>
          </div>
          <Link className="resume-cta" href="#contact">Resume <span>[PLACEHOLDER]</span> <ArrowUpRight size={13} aria-hidden="true" /></Link>
          <div className="hero-socials" aria-label="Social profile placeholders">
            <span className="social-label">CONNECT</span>
            <span className="social-placeholder"><Link2 size={15} aria-hidden="true" /> [ADD LINKEDIN URL]</span>
            <span className="social-placeholder"><Link2 size={15} aria-hidden="true" /> [ADD GITHUB URL]</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Professional summary">
          <div className="visual-topline"><span>SELECTED EXPERIENCE</span><span>01 / 01</span></div>
          <div className="visual-main">
            <span className="visual-index">01</span>
            <div><p className="visual-overline">CURRENT ROLE</p><h2>Software Engineer</h2><p className="visual-company">CareCloud <span>·</span> CareCloud Live</p></div>
          </div>
          <div className="visual-divider" />
          <div className="visual-result">
            <div className="result-number">~40<span>%</span></div>
            <div><p className="visual-overline">PERFORMANCE IMPROVEMENT</p><p className="result-copy">Reduced page load times through database query and frontend optimization.</p></div>
          </div>
          <div className="visual-stack"><span>C#</span><span>.NET Core</span><span>Angular</span><span>SQL Server</span></div>
          <div className="visual-note"><span className="note-mark">+</span> 3+ years building production software</div>
          <span className="visual-orbit orbit-one" aria-hidden="true" /><span className="visual-orbit orbit-two" aria-hidden="true" />
        </div>
      </div>
      <div className="hero-bottom container-shell"><span>PAKISTAN · CUSTOM SOFTWARE DEVELOPMENT</span><a href="#about" aria-label="Scroll to about section"><ArrowDown size={18} aria-hidden="true" /></a></div>
    </section>
  );
}
