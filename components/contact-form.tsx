"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";

type FormStatus = { kind: "success" | "error"; message: string } | null;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>(null);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSending(true);
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Unable to send your message.");
      setStatus({ kind: "success", message: result.message ?? "Your message has been sent." });
      formRef.current?.reset();
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Something went wrong. Please try again." });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
      <div className="form-grid">
        <label className="field"><span>Name <b>*</b></span><input autoComplete="name" name="name" maxLength={120} placeholder="Your name" required /></label>
        <label className="field"><span>Email <b>*</b></span><input autoComplete="email" name="email" maxLength={254} placeholder="you@company.com" required type="email" /></label>
        <label className="field"><span>Company</span><input autoComplete="organization" name="company" maxLength={160} placeholder="Company or organization" /></label>
        <label className="field"><span>Project type <b>*</b></span>
          <select defaultValue="" name="projectType" required>
            <option disabled value="">Choose a project type</option>
            <option>Custom web application</option><option>ASP.NET Core API</option><option>Angular development</option>
            <option>Business or internal system</option><option>Database or performance optimization</option>
            <option>Legacy application improvement</option><option>Other</option>
          </select>
        </label>
        <label className="field"><span>Budget range <b>*</b></span>
          <select defaultValue="" name="budget" required>
            <option disabled value="">Choose a range</option>
            <option>Under $1,000</option><option>$1,000–$5,000</option><option>$5,000–$10,000</option>
            <option>$10,000+</option><option>Not sure yet</option>
          </select>
        </label>
        <label className="field field-wide"><span>Project description <b>*</b></span><textarea maxLength={5000} name="description" placeholder="What are you looking to build or improve?" required rows={5} /></label>
        <label aria-hidden="true" className="honeypot" tabIndex={-1}>Website<input autoComplete="off" name="website" tabIndex={-1} /></label>
      </div>
      <div className="form-bottom">
        <p>Submitting shares your details so I can respond about your project.</p>
        <button className="button button-primary" disabled={isSending} type="submit">
          {isSending ? <><LoaderCircle className="spin" size={17} aria-hidden="true" /> Sending</> : <>Let&apos;s discuss your project <ArrowUpRight size={17} aria-hidden="true" /></>}
        </button>
      </div>
      <div aria-live="polite" className={`form-status ${status?.kind ?? ""}`} role="status">{status?.message}</div>
    </form>
  );
}
