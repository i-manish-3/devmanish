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
  title: "Manish Kumar | Software Developer Portfolio",
  description:
    "Full-stack software developer specializing in PHP, Laravel, AWS, and modern web technologies. Building scalable applications at HyScaler.",
  keywords: [
    "Manish Kumar",
    "Software Developer",
    "Laravel Developer",
    "AWS",
    "Full Stack",
    "Portfolio",
  ],
  authors: [{ name: "Manish Kumar" }],
  icons: {
    icon: "/avatar.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
