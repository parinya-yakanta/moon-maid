import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

// ดึงค่า env
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const TWITTER_HANDLE = process.env.NEXT_PUBLIC_TWITTER_HANDLE;
const DEFAULT_IMAGE = process.env.NEXT_PUBLIC_DEFAULT_IMAGE;

export const metadata: Metadata = {
  title: `${SITE_NAME} | Professional Housekeeping Services`,
  description: `${SITE_NAME} provides reliable and caring housekeeping services in Singapore — full-time, hourly, cooking, childcare, and elderly care.`,
  keywords: [
    "maid agency Singapore",
    "housekeeping services",
    "childcare",
    "elderly care",
    "domestic helper",
    "cleaning service",
    SITE_NAME!,
  ],
  authors: [{ name: SITE_NAME!, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL!),
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} | Trusted Maid & Housekeeping Services`,
    description: `Find trusted, professional, and caring maids in Singapore. ${SITE_NAME} connects you with reliable domestic helpers for your home.`,
    url: SITE_URL!,
    siteName: SITE_NAME!,
    type: "website",
    images: [
      {
        url: `${SITE_URL}${DEFAULT_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Hero Banner`,
      },
    ],
    locale: "en_SG",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Professional Maid Services in Singapore`,
    description: `Reliable and caring housekeeping, childcare, and elderly care services in Singapore.`,
    images: [`${SITE_URL}${DEFAULT_IMAGE}`],
    creator: TWITTER_HANDLE,
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE_NAME,
  "url": SITE_URL,
  "logo": `${SITE_URL}${DEFAULT_IMAGE}`,
  "contactPoint": {
    "@type": "ContactPoint",
    "email": CONTACT_EMAIL,
    "contactType": "Customer Support",
    "telephone": WHATSAPP_NUMBER,
  },
  "sameAs": [
    `https://wa.me/${WHATSAPP_NUMBER}`,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-950`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
