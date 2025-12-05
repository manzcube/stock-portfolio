import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="font-ThinFont bg-gray-50 text-black antialiased">
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-100">
          <nav className="flex gap-6 text-sm font-light tracking-wide">
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Portfolio
            </Link>
            <Link
              href="/trading"
              className="hover:text-gray-600 transition-colors"
            >
              Trading
            </Link>
          </nav>
        </header>
        <main className="container mx-auto px-6 pt-24 pb-12">{children}</main>
      </body>
    </html>
  );
}
