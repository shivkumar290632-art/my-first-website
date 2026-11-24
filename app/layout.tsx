import type { Metadata } from "next";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { siteConfig } from "./lib/site-config";
import "./globals.css";
import { PlayfulMotion } from "./components/playful-motion";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "digital shiv | Shiv Kumar — AI-Powered Digital Marketing", template: "%s | digital shiv" },
  description: "Helping small businesses attract more customers and grow online with smarter marketing strategies. Get a free customized digital marketing plan.",
  openGraph: { title: "digital shiv | Shiv Kumar", description: "Great Business. Not Enough Customers? Let's Change That. AI-powered digital marketing for small businesses.", type: "website", url: siteConfig.siteUrl },
  icons: { icon: "/digital-shiv-logo.png", shortcut: "/digital-shiv-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Header />{children}<Footer /><PlayfulMotion /></body></html>;
}
