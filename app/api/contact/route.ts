import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  projectType?: unknown;
  budget?: unknown;
  description?: unknown;
  website?: unknown;
};

function isText(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Please submit a valid form." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ message: "Your message has been sent." });
  }

  if (
    !isText(payload.name, 120) ||
    !isText(payload.email, 254) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) ||
    !isText(payload.projectType, 120) ||
    !isText(payload.budget, 120) ||
    !isText(payload.description, 5000) ||
    (payload.company !== undefined && typeof payload.company !== "string") ||
    (typeof payload.company === "string" && payload.company.length > 160)
  ) {
    return NextResponse.json({ message: "Check the required fields and try again." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  const port = Number(SMTP_PORT);

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !SMTP_FROM_EMAIL || !CONTACT_TO_EMAIL || !port) {
    return NextResponse.json(
      { message: "The contact form is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD }
    });

    const name = payload.name.trim();
    const email = payload.email.trim();
    const company = typeof payload.company === "string" ? payload.company.trim() : "Not provided";
    const projectType = payload.projectType.trim();
    const budget = payload.budget.trim();
    const description = payload.description.trim();

    await transporter.sendMail({
      from: SMTP_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Portfolio inquiry: ${projectType}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Project type: ${projectType}`,
        `Budget range: ${budget}`,
        "",
        "Project description:",
        description
      ].join("\n"),
      html: `<h2>New portfolio inquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Company:</strong> ${escapeHtml(company)}</p><p><strong>Project type:</strong> ${escapeHtml(projectType)}</p><p><strong>Budget range:</strong> ${escapeHtml(budget)}</p><p><strong>Project description:</strong></p><p>${escapeHtml(description).replace(/\n/g, "<br>")}</p>`
    });

    return NextResponse.json({ message: "Thanks. Your project inquiry has been sent." });
  } catch (error) {
    console.error("Contact email delivery failed", error);
    return NextResponse.json(
      { message: "We could not send your message right now. Please try again later." },
      { status: 502 }
    );
  }
}