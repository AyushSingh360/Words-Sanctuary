'use client';

import React, { useState, useEffect, useRef } from 'react';
import './about.css';

const milestones = [
  {
    year: '2024',
    title: 'The First Word',
    description: 'It started with a single thought scribbled on a phone at 3 AM — the first seed of what would become this sanctuary.',
  },
  {
    year: '2025',
    title: 'Finding the Voice',
    description: 'Raw emotions began shaping into reflections. The writing stopped being a release and started becoming an identity.',
  },
  {
    year: '2026',
    title: 'Words & Silence',
    description: 'A quiet corner of the internet was born — not to be loud, but to be felt. Every word placed here carries a piece of truth.',
  },
];

const values = [
  {
    icon: '✦',
    title: 'Authenticity',
    description: 'Every word is lived before it is written. No pretense, no performance — just raw, unfiltered honesty.',
  },
  {
    icon: '◈',
    title: 'Vulnerability',
    description: 'Strength isn\'t hiding what hurts. It\'s letting the world see it and choosing not to look away.',
  },
  {
    icon: '❋',
    title: 'Silence',
    description: 'Sometimes the most powerful thing you can say is nothing. The spaces between words matter just as much.',
  },
];

const stats = [
  { number: '8', label: 'Writings', suffix: '+' },
  { number: '5', label: 'Quotes', suffix: '+' },
  { number: '1', label: 'Voice', suffix: '' },
  { number: '∞', label: 'Emotions', suffix: '' },
];

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el);
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-glow about-hero-glow--purple"></div>
        <div className="about-hero-glow about-hero-glow--gold"></div>
        <div className="container about-hero-content">
          <span className="about-label">The Story Behind</span>
          <h1 className="about-hero-title luxury-text">
            Words & Silence
          </h1>
          <p className="about-hero-subtitle">
            Not a blog. Not a portfolio. A sanctuary — where thoughts rest 
            and emotions find the language they were always searching for.
          </p>
          <div className="about-hero-scroll-indicator">
            <span className="scroll-line"></span>
            <span className="scroll-text">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="about-stats"
        ref={setRef('about-stats')}
        className={`about-stats-section ${visibleSections.has('about-stats') ? 'visible' : ''}`}
      >
        <div className="container about-stats-grid">
          {stats.map((stat, i) => (
            <div key={i} className="about-stat" style={{ animationDelay: `${i * 0.15}s` }}>
              <span className="about-stat-number">
                {stat.number}<span className="about-stat-suffix">{stat.suffix}</span>
              </span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Origin Story */}
      <section
        id="about-origin"
        ref={setRef('about-origin')}
        className={`about-origin ${visibleSections.has('about-origin') ? 'visible' : ''}`}
      >
        <div className="container about-origin-content">
          <div className="about-origin-text">
            <span className="about-section-label">Origin</span>
            <h2 className="about-section-title">Why This Exists</h2>
            <p>
              This space was never planned. It grew out of necessity — the kind that comes 
              at 2 AM when the silence is too heavy and the only way to breathe is to write.
            </p>
            <p>
              I don&apos;t write to be read. I write because some feelings are too large 
              to carry alone, and too fragile to speak aloud. Words & Silence is what 
              happens when those worlds collide — when saying something and saying nothing 
              both feel equally impossible.
            </p>
            <p>
              If you&apos;re here, maybe you understand that too.
            </p>
          </div>
          <div className="about-origin-visual">
            <div className="origin-quote-card">
              <span className="origin-quote-mark">&ldquo;</span>
              <p className="origin-quote-text">
                I don&apos;t write to be heard. I write because silence was never enough 
                to hold everything I feel.
              </p>
              <span className="origin-quote-author">~ash</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        id="about-values"
        ref={setRef('about-values')}
        className={`about-values ${visibleSections.has('about-values') ? 'visible' : ''}`}
      >
        <div className="container">
          <span className="about-section-label center">Philosophy</span>
          <h2 className="about-section-title center">What Guides The Words</h2>
          <div className="about-values-grid">
            {values.map((value, i) => (
              <div key={i} className="about-value-card" style={{ animationDelay: `${i * 0.2}s` }}>
                <span className="about-value-icon">{value.icon}</span>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section
        id="about-timeline"
        ref={setRef('about-timeline')}
        className={`about-timeline ${visibleSections.has('about-timeline') ? 'visible' : ''}`}
      >
        <div className="container">
          <span className="about-section-label center">Journey</span>
          <h2 className="about-section-title center">The Path So Far</h2>

          <div className="timeline-container">
            <div className="timeline-nav">
              {milestones.map((m, i) => (
                <button
                  key={i}
                  className={`timeline-nav-item ${activeTimeline === i ? 'active' : ''}`}
                  onClick={() => setActiveTimeline(i)}
                >
                  <span className="timeline-year">{m.year}</span>
                  <span className="timeline-dot"></span>
                </button>
              ))}
              <div
                className="timeline-progress"
                style={{ width: `${(activeTimeline / (milestones.length - 1)) * 100}%` }}
              ></div>
            </div>

            <div className="timeline-content">
              <h3 className="timeline-content-title">{milestones[activeTimeline].title}</h3>
              <p className="timeline-content-description">{milestones[activeTimeline].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section
        id="about-note"
        ref={setRef('about-note')}
        className={`about-note ${visibleSections.has('about-note') ? 'visible' : ''}`}
      >
        <div className="container about-note-content">
          <div className="about-note-line"></div>
          <p className="about-note-text">
            If any of these words ever made you feel less alone —<br />
            then this sanctuary has done its job.
          </p>
          <span className="about-note-signature">~ash</span>
          <div className="about-note-end-mark">✦</div>
        </div>
      </section>
    </div>
  );
}
