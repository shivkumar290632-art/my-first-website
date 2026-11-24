import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import { CTA, Eyebrow } from "../components/shared";
import { services } from "../lib/marketing-copy";
import { consultationHref } from "../lib/site-config";

export const metadata: Metadata = { title: "Services", description: "AI-powered digital marketing solutions designed to help your business get noticed, attract customers, and grow." };
export default function ServicesPage() { return <main id="main-content"><section className="page-hero"><div className="shell"><Eyebrow>Services</Eyebrow><h1>Everything You Need to <em>Grow Your Business Online.</em></h1><p>I provide AI-powered digital marketing solutions designed to help your business get noticed, attract customers, and grow.</p><nav className="anchor-nav" aria-label="Jump to a service">{services.map((service) => <a href={`#${service.id}`} key={service.id}>{service.title}</a>)}</nav></div></section>
  {services.map((service, index) => <section className={`service-detail ${["service-teal", "service-navy", "service-gold"][index % 3]}`} id={service.id} key={service.id}><div className="shell"><div className="service-detail-head"><div className="service-number">{String(index + 1).padStart(2, "0")}</div><div><h2>{service.title}</h2><p>{service.text}</p><a className="button" href={consultationHref}>Book a Free Consultation <ArrowRight size={18} /></a></div></div></div></section>)}
  <section className="section"><div className="shell centered"><h2>Not sure which service your business needs? Let's figure it out together.</h2><a className="button" href={consultationHref}>Book a Free Consultation <ArrowRight size={18} /></a></div></section><CTA /></main>; }
