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

// サイト全体のデフォルトメタデータを設定
export const metadata: Metadata = {
  title: "Next.js Sandbox App",
  description: "Next.js のサンプルアプリケーション",
  openGraph: {
    title: "Next.js Sandbox App",
    description: "Next.js のサンプルアプリケーション",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    siteName: "Next.js Sandbox",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/default-ogp.jpg`,
        width: 1200,
        height: 630,
        alt: "Next.js Sandbox App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Sandbox App",
    description: "Next.js のサンプルアプリケーション",
    images: [
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/snowman_yukidaruma_toketa.png`,
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
