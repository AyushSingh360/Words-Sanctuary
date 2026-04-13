import type { Metadata } from 'next';
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

      <article className="writing-article">
        <header className="writing-article-header">
          <time className="writing-article-date">April 13, 2026</time>
          <h2 className="writing-article-title">A Letter to No One</h2>
        </header>

        <div className="writing-article-body">
          <p>
            If one day you never hear from me again, know that I am finally at
            peace. Because the world is a heavy place, and I&apos;ve done my best to
            carry my part of it.
          </p>

          <p>
            And if the time comes where I can no longer contribute, or where the
            burden becomes too much for me to bear in the way that I have, then I
            will simply go. And that won&apos;t be a tragedy; that will be a
            completion.
          </p>

          <p>
            Don&apos;t look for me in the noise. Look for me in the things I&apos;ve said
            that helped you find your own way. Because that&apos;s where I actually
            live.
          </p>
        </div>

        <footer className="writing-article-footer">
          <div className="writing-article-end-mark">&#10043;</div>
        </footer>
      </article>
    </div>
  );
}
