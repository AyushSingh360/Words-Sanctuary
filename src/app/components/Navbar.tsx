'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-content">
        <Link href="/" className="nav-logo">
          Words &amp; Silence
        </Link>
        <div className="nav-links">
          <Link href="#quotes" className="nav-link">Quotes</Link>
          <Link href="/writings" className="nav-link">Writings</Link>
          <Link href="#about" className="nav-link">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
