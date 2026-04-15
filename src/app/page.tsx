'use client';

import React from 'react';
import Hero from './components/Hero';
import WritingCard from './components/WritingCard';
import { writings } from './writings/data';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />

      <main className="container">
        <section id="writings" className="section-spacing" style={{ marginTop: '4rem', marginBottom: '8rem' }}>
          <h2 className="section-title" style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '4rem',
            color: 'var(--text-dark)'
          }}>Selected Fragments</h2>

          <div className="writings-list" style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {writings.slice(0, 5).map(writing => (
              <WritingCard
                key={writing.slug}
                title={writing.title}
                excerpt={writing.excerpt}
                date={writing.date}
              />
            ))}
          </div>
          
          {writings.length > 5 && (
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <a href="/writings" style={{
                color: 'var(--accent-gold)',
                textDecoration: 'none',
                fontWeight: '500',
                borderBottom: '1px solid var(--accent-gold)',
                paddingBottom: '2px'
              }}>
                View All Fragments
              </a>
            </div>
          )}
          
          {writings.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No writings found.</p>
          )}
        </section>
      </main>
    </div>
  );
}
