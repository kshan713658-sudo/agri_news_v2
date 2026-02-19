import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AGRINEWS | 최신 농업 뉴스 블로그",
  description: "스마트팜, 농업 기술, 시장 동향 등 농업계의 가장 빠른 소식을 전달합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased selection:bg-black selection:text-white`}>
        <Header />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <footer className="border-t border-border py-12 bg-muted mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm text-zinc-500">© 2026 AGRINEWS. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
