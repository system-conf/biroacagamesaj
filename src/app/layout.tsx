import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "1 Ocağa Mesaj | Geleceğe Mektup",
  description: "1 Ocak 2026'ya özel mesajınızı şimdiden yazın. Düşüncelerinizi, hayallerinizi ve dileklerinizi geleceğe gönderin.",
  keywords: ["gelecek mesaj", "2026 mesaj", "zaman kapsülü", "geleceğe mektup", "1 ocak mesajı"],
  authors: [{ name: "1 Ocağa Mesaj" }],
  creator: "1 Ocağa Mesaj",
  publisher: "1 Ocağa Mesaj",
  robots: "index, follow",
  openGraph: {
    title: "1 Ocağa Mesaj | Geleceğe Mektup",
    description: "1 Ocak 2026'ya özel mesajınızı şimdiden yazın. Düşüncelerinizi, hayallerinizi ve dileklerinizi geleceğe gönderin.",
    url: "https://1ocakmesaj.com",
    siteName: "1 Ocağa Mesaj",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "1 Ocağa Mesaj - Geleceğe Mektup",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1 Ocağa Mesaj | Geleceğe Mektup",
    description: "1 Ocak 2026'ya özel mesajınızı şimdiden yazın. Düşüncelerinizi, hayallerinizi ve dileklerinizi geleceğe gönderin.",
    images: ["/og-image.png"],
    creator: "@1ocakmesaj",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icon-192-maskable.png",
        color: "#6366f1",
      },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6366f1",
  applicationName: "1 Ocağa Mesaj",
  category: "social",
  formatDetection: {
    telephone: false,
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://1ocakmesaj.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
