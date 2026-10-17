"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = savedTheme ? savedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", useDark);
    setIsDark(useDark);
  }, []);

  function toggleTheme() {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("portfolio-theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  }

  return (
    <button aria-label={`Switch to ${isDark ? "light" : "dark"} mode`} className="icon-button" onClick={toggleTheme} type="button">
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-shell header-inner">
        <Link href="#top" className="brand" aria-label="Muhammad Sajid, home">
          <span className="brand-mark" aria-hidden="true">MS</span>
          <span>Muhammad Sajid<span className="brand-period">.</span></span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link href="#contact" className="button button-small header-cta">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
          <button aria-expanded={isMenuOpen} aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} className="icon-button menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} type="button">
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav aria-label="Mobile navigation" className="mobile-nav">
          {navItems.map((item) => <Link href={item.href} key={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</Link>)}
        </nav>
      )}
    </header>
  );
}
