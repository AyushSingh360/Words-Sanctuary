import type { Metadata } from 'next';
import Link from 'next/link';
import { writings } from './data';
import './writings.css';

export const metadata: Metadata = {
  title: 'Writings | Words & Silence',
  description: 'A quiet space for longer reflections and fragments of thought.',
};

export default function WritingsPage() {
  return (
    <div className="writings-page">
      <div className="writings-page-header">
        <h1 className="writings-page-title">Writings</h1>
        <p className="writings-page-subtitle">
          Longer fragments. Quieter truths.
        </p>
        <div className="writings-page-divider"></div>
      </div>

      <div className="writings-list">
        {writings.map((writing) => (
          <Link
            key={writing.slug}
            href={`/writings/${writing.slug}`}
            className="writings-list-item"
          >
            <time className="writings-list-date">{writing.date}</time>
            <h2 className="writings-list-title">{writing.title}</h2>
            <p className="writings-list-excerpt">{writing.excerpt}</p>
            <span className="writings-list-read">Read &rsaquo;</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
