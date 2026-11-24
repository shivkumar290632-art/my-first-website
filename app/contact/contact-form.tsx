"use client";

import { ArrowRight, CircleCheck, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { services as marketingServices } from "../lib/marketing-copy";

const services = [...marketingServices.map((service) => service.title), "Not sure — I need guidance"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("loading"); setMessage("");
    const form = event.currentTarget; const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("https://formsubmit.co/ajax/shivkumar290632@gmail.com", { method: "POST", signal: AbortSignal.timeout(25000), headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
      const result = await response.json() as { success?: boolean | string; message?: string };
      if (!response.ok || (result.success !== true && result.success !== "true")) throw new Error(result.message || "Unable to send your request. Please try again or email shivkumar290632@gmail.com.");
      setStatus("success"); setMessage("Thank you! Your consultation request has been submitted. I will reply to the email address you provided."); form.reset();
    } catch (error) { setStatus("error"); setMessage(error instanceof Error && error.name === "TimeoutError" ? "The email service is taking too long to respond. Your details are still here. Please try again later or email shivkumar290632@gmail.com." : error instanceof Error ? error.message : "Unable to send your request. Please email shivkumar290632@gmail.com."); }
  }

  if (status === "success") return <div className="form-success" role="status"><CircleCheck /><h2>Your request is in.</h2><p>{message}</p><button className="text-link" onClick={() => setStatus("idle")}>Send another request</button></div>;
  return <form className="contact-form" action="https://formsubmit.co/shivkumar290632@gmail.com" method="POST" onSubmit={submit} id="consultation-form"><input type="hidden" name="_subject" value="New consultation request — digital shiv" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_url" value="https://ai-growth-marketing-studio-2026.daringquail10.chatgpt.site/contact" /><div className="form-heading"><span>Get My Free Customized Marketing Plan</span><h2>Let's Talk About Your Business.</h2><p>Fields marked with * are required.</p></div>
    <div className="form-grid"><label>Full name *<input name="name" autoComplete="name" required minLength={2} /></label><label>Email address *<input name="email" type="email" autoComplete="email" required /></label><label>Business name<input name="business" autoComplete="organization" /></label><label>Website or social URL<input name="website" type="url" placeholder="https://" autoComplete="url" /></label></div>
    <label>Service of interest *<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label>
    <label>Main business goal or marketing challenge *<textarea name="message" required minLength={20} rows={6} placeholder="What would you like to improve, and what have you tried so far?" /></label>
    <label className="honey" aria-hidden="true">Leave this field empty<input name="_honey" tabIndex={-1} autoComplete="off" /></label>
    <p className="privacy-note">By submitting, you agree that I may use these details to review and respond to your inquiry. See the <a href="/privacy">privacy notice</a>.</p>
    {message && <p className="form-error" role="alert">{message}</p>}
    <button className="button form-button" type="submit" disabled={status === "loading"}>{status === "loading" ? <><LoaderCircle className="spin" /> Sending…</> : <>Book My Free Consultation <ArrowRight size={18} /></>}</button>
  </form>;
}
