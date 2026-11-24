export const siteConfig = {
  name: "digital shiv",
  expertName: "Shiv Kumar",
  email: "shivkumar290632@gmail.com",
  location: "Serving small businesses remotely",
  bookingUrl: "",
  siteUrl: "https://ai-growth-marketing-studio-2026.daringquail10.chatgpt.site",
  social: {} as Record<string, string>,
};

export const consultationHref = siteConfig.bookingUrl || "/contact#consultation-form";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
