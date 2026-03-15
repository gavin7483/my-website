import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Website",
  description: "A Next.js app built with TypeScript and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
