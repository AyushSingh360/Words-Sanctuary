import React from 'react';
import './WritingCard.css';

interface WritingCardProps {
  title: string;
  excerpt: string;
  date: string;
}

const WritingCard: React.FC<WritingCardProps> = ({ title, excerpt, date }) => {
  return (
    <article className="writing-card">
      <div className="writing-card-meta">
        <time className="writing-card-date">{date}</time>
        <span className="writing-card-line"></span>
      </div>
      <h3 className="writing-card-title">{title}</h3>
      <p className="writing-card-excerpt">{excerpt}</p>
      <button className="writing-card-read-more">Read Fragment &rsaquo;</button>
    </article>
  );
};

export default WritingCard;
