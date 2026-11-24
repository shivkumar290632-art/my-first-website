"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { consultationHref, navigation, siteConfig } from "../lib/site-config";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false); window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return <header className="site-header"><div className="nav-shell">
    <a className="brand" href="/" aria-label="digital shiv home"><Logo /></a>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <a className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>{item.label}</a>)}</nav>
    <a className="button button-small nav-cta" href={consultationHref}>Book Your Free Consultation <ArrowUpRight size={16} aria-hidden="true" /></a>
    <button className="menu-button" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
  </div>{open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}<a className="button" href={consultationHref}>Book Your Free Consultation</a></nav>}</header>;
}
