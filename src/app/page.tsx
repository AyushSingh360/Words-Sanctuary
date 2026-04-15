'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { writings } from './writings/data';
import { quotes } from './quotes/data';
import './home.css';

const typewriterWords = ['thoughts', 'silence', 'reflections', 'fragments', 'emotions'];

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  // Typewriter effect
  useEffect(() => {
    const word = typewriterWords[currentWord];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(word.slice(0, displayText.length + 1));
        if (displayText === word) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(word.slice(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % typewriterWords.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord]);

  // Auto-rotate featured quote
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el);
  };

  const featuredWriting = writings[0];
  const recentWritings = writings.slice(1, 4);

  return (
    <div className="home-page">
      {/* ===== HERO ===== */}
      <section className="home-hero">
        <div className="home-hero-orb home-hero-orb--purple"></div>
        <div className="home-hero-orb home-hero-orb--gold"></div>
        <div className="home-hero-orb home-hero-orb--green"></div>

        <div className="container home-hero-content">
          <span className="home-hero-label fade-in">✦ A Quiet Sanctuary</span>
          <h1 className="home-hero-title fade-in">
            Where <span className="typewriter-word">{displayText}<span className="typewriter-cursor">|</span></span><br />
            find their voice.
          </h1>
          <p className="home-hero-subtitle fade-in">
            A minimalist space for poetry, reflections, and the words 
            we carry but rarely say out loud.
          </p>
          <div className="home-hero-actions fade-in">
            <Link href="/writings" className="home-hero-btn home-hero-btn--primary">
              Read Writings
            </Link>
            <Link href="/quotes" className="home-hero-btn home-hero-btn--secondary">
              Explore Quotes
            </Link>
          </div>
          <div className="home-hero-scroll">
            <div className="home-hero-scroll-line"></div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED WRITING ===== */}
      <section
        id="home-featured"
        ref={setRef('home-featured')}
        className={`home-featured ${visibleSections.has('home-featured') ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="home-section-header">
            <span className="home-section-label">Latest</span>
            <h2 className="home-section-title">Featured Fragment</h2>
          </div>

          <Link href={`/writings/${featuredWriting.slug}`} className="featured-card">
            <div className="featured-card-accent"></div>
            <div className="featured-card-content">
              <time className="featured-card-date">{featuredWriting.date}</time>
              <h3 className="featured-card-title">{featuredWriting.title}</h3>
              <p className="featured-card-excerpt">{featuredWriting.excerpt}</p>
              <span className="featured-card-cta">Read this fragment →</span>
            </div>
            <div className="featured-card-signature">{featuredWriting.signature}</div>
          </Link>
        </div>
      </section>

      {/* ===== ROTATING QUOTE ===== */}
      <section
        id="home-quote"
        ref={setRef('home-quote')}
        className={`home-quote-section ${visibleSections.has('home-quote') ? 'visible' : ''}`}
      >
        <div className="container home-quote-container">
          <div className="home-quote-mark">&ldquo;</div>
          <p className="home-quote-text" key={activeQuote}>
            {quotes[activeQuote].content}
          </p>
          <span className="home-quote-author">— {quotes[activeQuote].author}</span>
          <div className="home-quote-dots">
            {quotes.map((_, i) => (
              <button
                key={i}
                className={`home-quote-dot ${activeQuote === i ? 'active' : ''}`}
                onClick={() => setActiveQuote(i)}
                aria-label={`Show quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== RECENT WRITINGS ===== */}
      <section
        id="home-writings"
        ref={setRef('home-writings')}
        className={`home-writings ${visibleSections.has('home-writings') ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="home-section-header">
            <span className="home-section-label">Collection</span>
            <h2 className="home-section-title">Recent Fragments</h2>
          </div>

          <div className="home-writings-grid">
            {recentWritings.map((writing, i) => (
              <Link
                key={writing.slug}
                href={`/writings/${writing.slug}`}
                className="home-writing-card"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="home-writing-card-number">0{i + 1}</div>
                <time className="home-writing-card-date">{writing.date}</time>
                <h3 className="home-writing-card-title">{writing.title}</h3>
                <p className="home-writing-card-excerpt">
                  {writing.excerpt.length > 100
                    ? writing.excerpt.slice(0, 100) + '...'
                    : writing.excerpt}
                </p>
                <span className="home-writing-card-link">Read →</span>
              </Link>
            ))}
          </div>

          <div className="home-writings-cta">
            <Link href="/writings" className="home-view-all">
              View All Writings
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY STRIP ===== */}
      <section
        id="home-philosophy"
        ref={setRef('home-philosophy')}
        className={`home-philosophy ${visibleSections.has('home-philosophy') ? 'visible' : ''}`}
      >
        <div className="container home-philosophy-content">
          <div className="home-philosophy-line"></div>
          <p className="home-philosophy-text">
            Some words are not meant to be spoken.<br />
            They exist only in writing — where silence gives them room to breathe.
          </p>
          <span className="home-philosophy-signature">~ash</span>
        </div>
      </section>
    </div>
  );
}
