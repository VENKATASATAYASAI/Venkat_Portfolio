import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venkata Satya Sai Tunikipati — Salesforce Marketing Cloud Consultant",
  description:
    "Salesforce Marketing Cloud Consultant. Certified Marketing Cloud Administrator and Engagement Specialist. M.Eng in Electrical & Computer Engineering.",
  openGraph: {
    title: "Venkata Satya Sai Tunikipati",
    description: "Salesforce Marketing Cloud Consultant — journeys, data, personalization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
