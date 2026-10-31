import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yehia's Career Path",
  description: "A simple plan for Yehia's first job.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <nav className="flex justify-center gap-8 border-b border-slate-200 p-4 text-sm font-medium text-slate-700">

          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/plan" className="hover:text-blue-600">
            Plan
          </Link>

          <Link href="/opportunities" className="hover:text-blue-600">
            Opportunities
          </Link>

          <Link href="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>

        </nav>

        {children}

      </body>
    </html>
  );
}