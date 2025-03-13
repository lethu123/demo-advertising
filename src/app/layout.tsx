import type { Metadata } from "next";
import "./globals.scss";
import "@assets/scss/home.scss";
import logo from "@assets/images/logo.svg";
import "../../i18n";

export const metadata: Metadata = {
  title: "Mai Advertising",
  description: "Công ty TNHH Mai Advertising",
  keywords: ["Mai Advertising", "Advertising", "xưởng in"],
  openGraph: {
    images: logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative ">{children}</body>
    </html>
  );
}
