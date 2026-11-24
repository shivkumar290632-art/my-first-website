import type { Metadata } from "next";
import { Eyebrow } from "../components/shared";
import { BlogBrowser } from "./blog-browser";

export const metadata: Metadata = { title: "Marketing Insights", description: "Grow your business smarter with AI-powered digital marketing. Practical marketing guidance for small businesses." };

export default function BlogPage() { return <main id="main-content"><section className="page-hero blog-hero"><div className="shell"><Eyebrow>AI-Powered Digital Marketing for Small Businesses</Eyebrow><h1>Less guessing. Smarter marketing. <em>More opportunities to grow.</em></h1><p>Practical marketing guidance for your business.</p></div></section><section className="section blog-section"><div className="shell"><BlogBrowser /></div></section></main>; }
