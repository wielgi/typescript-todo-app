import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "N-Gen TODO",
  description: "Todo on steroids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="bg-[#1b1b3a] rounded-3xl max-w-xl mx-auto my-4">
          <header className="flex bg-gradient-to-r from-purple-600 to-purple-500 min-h-20 rounded-t-3xl p-4 items-center shadow-lg">
            <nav className="flex w-full justify-between">
              <div className="burger-menu basis-2/4 text-left self-center">
                Burger Menu
              </div>
              <div className="logo basis-full text-center">
                <div className="text-center text-2xl font-medium">N-GEN</div>
                <div className="text-center tracking-[.6rem] pl-2">TODO</div>
              </div>
              <div className="profile-icon basis-2/4 text-right self-center">
                Avatar
              </div>
            </nav>
          </header>
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
