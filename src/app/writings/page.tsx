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
          <h2 className="writing-article-title">A Letter to Someone</h2>
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

          <p className="writing-article-signature">~ash</p>
        </div>

        <footer className="writing-article-footer">
          <div className="writing-article-end-mark">&#10043;</div>
        </footer>
      </article>

      <article className="writing-article">
        <header className="writing-article-header">
          <time className="writing-article-date">April 1, 2026</time>
          <h2 className="writing-article-title">Tulips in Every Season</h2>
        </header>

        <div className="writing-article-body">
          <p>
            I don&apos;t know where to begin, except with the truth&mdash;I still
            miss you. What we had was real, deep, and rare. We didn&apos;t fall
            apart because the love faded; we fell apart because circumstances
            were heavier than our hands could hold. And even now, after
            everything shattered, my heart hasn&apos;t learned how to stop loving
            you. I miss you every second, every minute, every hour&mdash;every
            quiet moment in between when the world slows down and your absence
            feels loudest.
          </p>

          <p>
            I still pray for us, not out of desperation, but out of hope. Hope
            that somehow life softens, situations change, and we find our way
            back to what we once were&mdash;two people who chose each other
            without fear. Wherever you are, I hope you are safe. I hope you are
            eating well, sleeping peacefully, and smiling without forcing it. I
            pray that all your wishes come true, that success runs toward you in
            every form you&apos;ve ever dreamed of. I pray that your home feels
            lighter, that your parents speak more gently, that the weight on
            your heart eases with time.
          </p>

          <p>
            If I could, I would give you the rest of my life in exchange for
            your long, healthy, beautiful one. You deserve years filled with
            growth, achievements, and quiet happiness. And when I see tulips, I
            think of you&mdash;delicate yet strong, standing tall even in
            changing seasons. Loving you was never a mistake. It was the purest
            part of me. And no matter where life takes us, a part of my heart
            will always whisper your name with gratitude, hope, and love.
          </p>

          <p className="writing-article-signature">~ash</p>
        </div>

        <footer className="writing-article-footer">
          <div className="writing-article-end-mark">&#10043;</div>
        </footer>
      </article>
    </div>
  );
}
