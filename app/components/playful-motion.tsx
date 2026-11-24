"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export function PlayfulMotion() {
  const pathname = usePathname();
  const [paused, setPaused] = useState(false);
  useEffect(() => { setPaused(localStorage.getItem("shiv-motion") === "paused"); }, []);
  useEffect(() => { document.documentElement.dataset.motion = paused ? "paused" : "on"; }, [paused]);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const progress = document.querySelector<HTMLElement>(".reading-progress");
    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0})`;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".section-heading, .challenge-card, .service-card, .expect-grid article, .process-grid li, .approach-grid > div, .about-preview > div, .consultation-box > div, .faq-list details, .cta-inner"));
    let observer: IntersectionObserver | undefined;
    if (!reduced.matches && !paused && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-ready");
            entry.target.classList.add("reveal-in");
            observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      elements.forEach((el, i) => {
        if (el.getBoundingClientRect().top > window.innerHeight) {
          el.style.setProperty("--reveal-delay", `${(i % 3) * 65}ms`);
          el.classList.add("reveal-ready");
          observer?.observe(el);
        }
      });
    }
    return () => {
      observer?.disconnect();
      elements.forEach(el => el.classList.remove("reveal-ready", "reveal-in"));
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname, paused]);
  return <><div className="reading-progress" aria-hidden="true" /><button className="motion-toggle" aria-pressed={paused} onClick={() => {
    const next = !paused; setPaused(next); localStorage.setItem("shiv-motion", next ? "paused" : "on");
  }}><span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span> {paused ? "Play animations" : "Pause animations"}</button></>;
}
