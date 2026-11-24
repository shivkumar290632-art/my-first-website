import { ArrowUpRight } from "lucide-react";

import { consultationHref, navigation, siteConfig } from "../lib/site-config";
import { services } from "../lib/marketing-copy";
import { Logo } from "./logo";

export function Footer() {
  return <footer className="site-footer"><div className="footer-grid shell">
    <div><a className="brand brand-light" href="/" aria-label="digital shiv home"><Logo /></a><p><strong>Shiv Kumar</strong><br />AI-Powered Digital Marketing Expert</p><p>Helping small businesses attract more customers and grow online with smarter marketing strategies.</p></div>
    <div><h2>Quick Links</h2>{navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
    <div><h2>Services</h2>{services.map((service) => <a href={`/services#${service.id}`} key={service.id}>{service.title}</a>)}</div>
    <div><h2>Let's Talk About Your Business.</h2>{siteConfig.email && <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>}<a href={consultationHref}>Book Your Free Consultation <ArrowUpRight size={15} /></a></div>
  </div><div className="footer-bottom shell"><span>© {new Date().getFullYear()} Shiv Kumar. All Rights Reserved.</span><a href="/privacy">Privacy</a></div></footer>;
}
