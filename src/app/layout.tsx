import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  // Ensure the mono font is correctly loaded if needed elsewhere
});

// 3. Updated Metadata for SEO and branding
export const metadata: Metadata = {
  title: "Sun Power Solar | Achieve Permanent Energy Freedom",
  description: "Zero Monthly Expense and Stable Energy Independence for the Next 25 Years. Get a free site survey today!",
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
        {/* Use a flex container to ensure the layout pushes the footer to the bottom */}
        <div className="flex flex-col min-h-screen">
            {/* 4. Navbar remains sticky and visible on all pages */}
            <Navbar />

            {/* children (Page content) takes up the remaining space, ensuring content starts below the Navbar */}
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}
