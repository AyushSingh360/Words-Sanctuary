'use client';

import React from 'react';
import { quotes } from './data';
import QuoteCard from '../components/QuoteCard';
import './quotes.css';

const QuotesPage = () => {
  return (
    <div className="quotes-container">
      <header className="quotes-header fade-in">
        <div className="container">
          <span className="subtitle">Wisdom in Brevity</span>
          <h1 className="luxury-text">Quotes Sanctuary</h1>
          <p className="description">
            A curated collection of thoughts that linger in the silence.
          </p>
        </div>
      </header>

      <section className="quotes-grid-section container">
        <div className="quotes-grid">
          {quotes.map((quote) => (
            <QuoteCard 
              key={quote.id} 
              quote={quote.content} 
              author={quote.author} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default QuotesPage;
