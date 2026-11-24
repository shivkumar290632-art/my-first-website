"use client";

import { ArrowRight, Search, X } from "lucide-react";

import { useMemo, useState } from "react";
import { articleSearchText, articles, categories } from "../lib/articles";

export function BlogBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => articles.filter((article) => (category === "All" || article.category === category) && articleSearchText(article).includes(query.trim().toLowerCase())), [category, query]);
  return <div>
    <div className="blog-tools"><div className="search-field"><Search size={19} aria-hidden="true" /><label className="sr-only" htmlFor="article-search">Search articles</label><input id="article-search" type="search" placeholder="Search articles" value={query} onChange={(event) => setQuery(event.target.value)} />{query && <button aria-label="Clear search" onClick={() => setQuery("")}><X size={17} /></button>}</div><div className="filter-list" aria-label="Filter articles by category">{categories.map((item) => <button className={category === item ? "active" : ""} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div></div>
    {filtered.length ? <div className="article-grid">{filtered.map((article, index) => <article className={index === 0 && !query && category === "All" ? "article-card featured" : "article-card"} key={article.slug}><div className="article-art" data-category={article.category}><span>{article.category === "AI Marketing" ? "AI" : article.category.split(" ").map((word) => word[0]).join("")}</span><i /><i /></div><div className="article-card-copy"><div className="article-meta"><span>{article.category}</span><span>{article.readTime}</span></div><h2><a href={`/blog/${article.slug}`}>{article.title}</a></h2><p>{article.excerpt}</p><a className="text-link" href={`/blog/${article.slug}`}>Read the article <ArrowRight size={17} /></a></div></article>)}</div> : <div className="empty-state"><Search /><h2>No articles found</h2><p>Try a different search or choose another topic.</p><button className="button" onClick={() => { setQuery(""); setCategory("All"); }}>Show all articles</button></div>}
  </div>;
}
