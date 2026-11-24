import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { CheckList, Eyebrow } from "../components/shared";
import { consultationItems } from "../lib/marketing-copy";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = { title: "Free Consultation", description: "Book a free consultation and get a customized digital marketing plan designed around your business." };
export default function ContactPage() { return <main id="main-content"><section className="contact-hero"><div className="shell contact-layout"><div className="contact-copy"><Eyebrow>Free consultation</Eyebrow><h1>Not Sure What's Holding Your Business Back?</h1><h2 className="contact-subtitle">Let's Find Out Together. For FREE!</h2><p>Book a free consultation and get a customized digital marketing plan designed around your business.</p><p>During our conversation, we'll:</p><CheckList items={consultationItems} /><p className="implementation-note"><CircleCheck /> No cost. No pressure. Just practical marketing guidance for your business.</p><p><em>Limited consultation slots available.</em></p><p>The initial consultation and customized marketing plan are completely free. There's no obligation to purchase any service.</p></div><ContactForm /></div></section></main>; }
