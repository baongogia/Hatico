import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google"; // Chọn font hiện đại, hỗ trợ TV
import "./globals.css";

// Tạo font cho Tiêu đề (Header/Branding)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

// Tạo font cho Nội dung (Specs/Body text)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Showroom Rơ moóc | TITIAN Heavy Industries",
  description:
    "Trình diễn cấu trúc và công năng rơ moóc công nghiệp nặng với mô hình 3D kỹ thuật số.",
};

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-slate-50 text-slate-900 antialiased min-h-screen font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
