import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kimberly Zoltek | Virtual Birth Doula Support in New England",
  description:
    "Warm, evidence-based virtual birth doula support for families in New England. Kimberly Zoltek offers labor preparation, partner coaching, breastfeeding support, postpartum guidance, and birth planning.",
  keywords: [
    "virtual birth doula",
    "New England doula",
    "birth planning support",
    "breastfeeding support",
    "postpartum recovery guidance",
    "partner coaching",
    "Kimberly Zoltek",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
