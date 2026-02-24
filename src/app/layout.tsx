import type { Metadata } from "next";
import { Teko, Rajdhani } from "next/font/google"; // Chọn font vuông vức, kỹ thuật
import "./globals.css";

// Tạo font cho Tiêu đề (Header/Branding)
const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Tạo font cho Nội dung (Specs/Body text)
const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Showroom Rơ moóc | TITIAN Heavy Industries",
  description:
    "Trình diễn cấu trúc và công năng rơ moóc công nghiệp nặng với mô hình 3D kỹ thuật số.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${teko.variable} ${rajdhani.variable} bg-[#040812] text-slate-100 antialiased h-screen overflow-hidden font-rajdhani`}
      >
        {children}
      </body>
    </html>
  );
}
