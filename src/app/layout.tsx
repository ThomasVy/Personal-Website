import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./_components/NavBar/NavBar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "./_components/Footer";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Thomas Vy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative flex min-h-svh flex-col bg-neutral-800 text-white">
        <NavBar />
        <main className="relative flex flex-grow flex-col font-rubik">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
