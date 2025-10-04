import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PreloaderWrapper from "@/components/PreloaderWrapper"; // New wrapper component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated Metadata for SEO and branding
export const metadata: Metadata = {
  title: "Sun Power Solar | Achieve Permanent Energy Freedom",
  description:
    "Zero Monthly Expense and Stable Energy Independence for the Next 25 Years. Get a free site survey today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* Wrap everything with the Client-side Preloader Wrapper */}
        <PreloaderWrapper>
          <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
            {/* Navbar remains sticky and visible on all pages */}
            <Navbar />

            {/* Main content */}
            <main className="flex-grow w-full overflow-x-hidden">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </PreloaderWrapper>
      </body>
    </html>
  );
}
