import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Words Sanctuary - Words from the Heart",
  description: "Inspiration, reflections, and quotes to soothe the soul.",
};

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        <Link href="/" className="nav-brand">
          Words Sanctuary
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/quotes" className="nav-link">Quotes</Link>
          <Link href="/journal" className="nav-link">Journal</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
        <button className="nav-mobile-btn">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">Words Sanctuary</div>
        <div className="footer-links">
          <a href="#" className="footer-icon-link">
            <span className="material-symbols-outlined" data-icon="share">share</span>
          </a>
          <a href="#" className="footer-icon-link">
            <span className="material-symbols-outlined" data-icon="mail">mail</span>
          </a>
          <a href="#" className="footer-icon-link">
            <span className="material-symbols-outlined" data-icon="book">book</span>
          </a>
        </div>
        <p className="footer-copyright">© 2024 Ethereal Reflections. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="relative min-h-screen flex flex-col bg-surface-container-lowest">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
