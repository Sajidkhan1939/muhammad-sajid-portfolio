import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-shell footer-inner">
        <div><p className="footer-name">Muhammad Sajid</p><p className="footer-meta">Full Stack .NET Developer</p></div>
        <p className="footer-copy">© {new Date().getFullYear()} · <Link href="#top">Back to top ↑</Link></p>
      </div>
    </footer>
  );
}
