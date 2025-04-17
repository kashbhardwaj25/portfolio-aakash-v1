import { Metadata } from "next";

const SITE_URL = "https://aakashbhardwaj.com";
const PROFILE_DESCRIPTION =
  "Senior software engineer with over 4 years of experience, specializing in React, Next.js, and modern web technologies. Experienced in building exceptional digital experiences with expertise in TypeScript, React Native, and UI/UX design.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aakash Bhardwaj | Senior Software Engineer",
    template: "%s | Aakash Bhardwaj",
  },
  description: PROFILE_DESCRIPTION,
  keywords: [
    "Aakash Bhardwaj",
    "Senior Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React Native",
    "UI/UX Design",
    "Web Development",
    "Software Development",
  ],
  authors: [
    {
      name: "Aakash Bhardwaj",
      url: SITE_URL,
    },
  ],
  creator: "Aakash Bhardwaj",
  publisher: "Aakash Bhardwaj",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Aakash Bhardwaj Portfolio",
    title: "Aakash Bhardwaj | Senior Software Engineer",
    description: PROFILE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aakash Bhardwaj - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakash Bhardwaj | Senior Software Engineer",
    description: PROFILE_DESCRIPTION,
    creator: "@kashbhardwaj25",
    images: ["/og-image.png"],
    site: "@kashbhardwaj25",
  },
  verification: {
    google: `google-site-verification=${process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}`,
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
};
