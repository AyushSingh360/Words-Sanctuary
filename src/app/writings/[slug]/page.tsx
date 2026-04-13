import { notFound } from 'next/navigation';
import Link from 'next/link';
import { writings, getWritingBySlug } from '../data';
import '../writings.css';

export async function generateStaticParams() {
  return writings.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writing = getWritingBySlug(slug);
  if (!writing) return { title: 'Not Found' };
  return {
    title: `${writing.title} | Words & Silence`,
    description: writing.excerpt,
  };
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const writing = getWritingBySlug(slug);

  if (!writing) {
    notFound();
  }

  return (
    <div className="writings-page">
      <article className="writing-article">
        <header className="writing-article-header">
          <Link href="/writings" className="writing-back-link">
            &larr; All Writings
          </Link>
          <time className="writing-article-date">{writing.date}</time>
          <h1 className="writing-article-title">{writing.title}</h1>
        </header>

        <div className="writing-article-body">
          {writing.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p className="writing-article-signature">{writing.signature}</p>
        </div>

        <footer className="writing-article-footer">
          <div className="writing-article-end-mark">&#10043;</div>
        </footer>
      </article>
    </div>
  );
}
