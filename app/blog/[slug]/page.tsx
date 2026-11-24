import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { notFound } from "next/navigation";
import { CTA } from "../../components/shared";
import { articles, getArticle } from "../../lib/articles";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const article = getArticle(slug); return article ? { title: article.title, description: article.excerpt } : {}; }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = getArticle(slug); if (!article) notFound();
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);
  return <main id="main-content"><article><header className="article-hero"><div className="article-shell"><a className="back-link" href="/blog"><ArrowLeft size={17} /> All articles</a><div className="article-meta"><span>{article.category}</span><span>{article.readTime}</span><span>{article.published}</span></div><h1>{article.title}</h1><p>{article.excerpt}</p></div></header><div className="article-body article-shell"><p className="article-intro">{article.intro}</p>{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}</div></article><section className="related-section"><div className="shell"><h2>Continue reading</h2><div className="related-grid">{related.map((item) => <a href={`/blog/${item.slug}`} key={item.slug}><span>{item.category}</span><h3>{item.title}</h3><small>Read article <ArrowRight size={15} /></small></a>)}</div></div></section><CTA /></main>;
}
