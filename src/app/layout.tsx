import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Script from "next/script";
import { jsonLd } from "@/lib/constants";
import Chatbot from "@/components/shared/Chatbot";
import Navbar from "@/components/shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Nepal Byayam Mandir | Pioneer Gym & Fitness Center Kathmandu',
    description: 'Established in 1953 A.D. Home of the prestigious Dharma Shree Bodybuilding Championship. Offering premium personal training, cardio, zumba, and yoga.',
    alternates: {
      canonical: 'https://www.nepalbyayammandir.com', // Crucial: Prevents duplicate URL crawling penalties
    },
    openGraph: {
      title: 'Nepal Byayam Mandir | Pioneer Gym & Fitness Center',
      description: 'Join Nepal\'s historical premier fitness institute. Established 1953 A.D.',
      url: 'https://www.nepalbyayammandir.com',
      siteName: 'Nepal Byayam Mandir',
      images: [
        {
          url: '/og-premium-banner.jpg', // Social sharing dynamic previews
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
