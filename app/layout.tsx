import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Muhammad Sajid | Full Stack .NET Developer",
    template: "%s | Muhammad Sajid"
  },
  description:
    "Muhammad Sajid is a Full Stack .NET Developer in Pakistan building custom web applications, ASP.NET Core APIs, business systems, and performance improvements.",
  keywords: [
    ".NET developer",
    "ASP.NET Core developer",
    "full stack developer Pakistan",
    "custom software development"
  ],
  icons: {
    icon: "/favicon.svg"
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Muhammad Sajid | Full Stack .NET Developer",
    description:
      "Custom software development for small businesses and organizations, from internal tools and business systems to APIs and web applications.",
    type: "website",
    locale: "en_US",
    url: siteUrl
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sajid | Full Stack .NET Developer",
    description:
      "Full Stack .NET Developer building reliable software for businesses and organizations."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
