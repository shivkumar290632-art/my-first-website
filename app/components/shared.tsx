import { ArrowRight, Check } from "lucide-react";

import { consultationHref } from "../lib/site-config";

export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span aria-hidden="true" />{children}</p>; }

export function CTA({ title = "Stop Guessing. Start Growing With a Smarter Marketing Plan.", text = "Your competitors are working to get noticed online. Your business shouldn't be left behind." }: { title?: string; text?: string }) {
  return <section className="cta-band"><div className="shell cta-inner"><div><Eyebrow>Get Your FREE Customized Digital Marketing Plan Today!</Eyebrow><h2>{title}</h2><p>{text}</p><p>Discover how AI-powered digital marketing can help you attract customers, generate leads, and grow your business.</p><p>Let's find the right strategy for your business.</p><p className="offer-note">Your business. Your goals. A marketing plan built around you.</p></div><a className="button button-light" href={consultationHref}>Book My Free Consultation <ArrowRight size={18} /></a></div></section>;
}

export function CheckList({ items }: { items: string[] }) { return <ul className="check-list">{items.map((item) => <li key={item}><span><Check size={15} aria-hidden="true" /></span>{item}</li>)}</ul>; }
