'use client';

import React, { useState } from 'react';
import Hero from './components/Hero';
import QuoteCard from './components/QuoteCard';
import WritingCard from './components/WritingCard';
import TagFilter from './components/TagFilter';

const ALL_TAGS = ['All', 'Silence', 'Growth', 'Nature', 'Time', 'Reflection'];

// Mock Data
const sampleQuotes = [
  { id: 1, quote: "Silence is not empty, it is full of answers.", author: "Anonymous", tag: "Silence" },
  { id: 2, quote: "To plant a garden is to believe in tomorrow.", author: "Audrey Hepburn", tag: "Nature" },
  { id: 3, quote: "Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to.", author: "Lao Tzu", tag: "Time" },
  { id: 4, quote: "The quieter you become, the more you are able to hear.", author: "Rumi", tag: "Reflection" }
];

const sampleWritings = [
  {
    id: 1,
    title: "The Architecture of Silence",
    date: "April 13, 2026",
    excerpt: "There is a structure to quiet moments that we often overlook. It isn't merely the absence of noise, but a presence of calm. When we strip away the constant hum of expectations, what remains is the pure form of our own thoughts...",
    tag: "Silence"
  },
  {
    id: 2,
    title: "Seasons of the Mind",
    date: "April 10, 2026",
    excerpt: "Just as the earth cycles through its periods of dormancy and bloom, so too does human creativity. We cannot force the spring, nor should we resent the winter. Every phase serves a purpose in the grander ecosystem of our growth...",
    tag: "Growth"
  },
  {
    id: 3,
    title: "Footprints in Sand",
    date: "April 5, 2026",
    excerpt: "We spend much of our lives trying to leave a mark, forgetting that the most beautiful things in nature are often entirely ephemeral. A sunset leaves no trace, yet it changes everyone who witnesses it...",
    tag: "Nature"
  }
];

export default function Home() {
  const [activeTag, setActiveTag] = useState('All');

  const filteredQuotes = activeTag === 'All' 
    ? sampleQuotes 
    : sampleQuotes.filter(q => q.tag === activeTag);
    
  const filteredWritings = activeTag === 'All'
    ? sampleWritings
    : sampleWritings.filter(w => w.tag === activeTag);

  return (
    <div className="home-page">
      <Hero />
      
      <main className="container" id="quotes">
        <section className="section-spacing">
          <TagFilter 
            tags={ALL_TAGS} 
            activeTag={activeTag} 
            onTagSelect={setActiveTag} 
          />
          
          <div className="quotes-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2.5rem',
            marginTop: '3rem'
          }}>
            {filteredQuotes.map(quote => (
              <QuoteCard 
                key={quote.id} 
                quote={quote.quote} 
                author={quote.author} 
              />
            ))}
          </div>
          {filteredQuotes.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No quotes found for this category.</p>
          )}
        </section>

        <section id="writings" className="section-spacing" style={{ marginTop: '8rem', marginBottom: '8rem' }}>
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
            {filteredWritings.map(writing => (
              <WritingCard 
                key={writing.id}
                title={writing.title}
                excerpt={writing.excerpt}
                date={writing.date}
              />
            ))}
          </div>
          {filteredWritings.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No writings found for this category.</p>
          )}
        </section>
      </main>
    </div>
  );
}
