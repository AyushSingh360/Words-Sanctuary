import React from 'react';
import './QuoteCard.css';

interface QuoteCardProps {
  quote: string;
  author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author }) => {
  return (
    <div className="quote-card">
      <div className="quote-card-content">
        <span className="quote-mark">"</span>
        <h3 className="quote-text">{quote}</h3>
        <p className="quote-author">&mdash; {author}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
