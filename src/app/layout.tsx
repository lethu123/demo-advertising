import type { Metadata } from "next";
import './globals.scss';
import logo from '@assets/images/logo.svg'

export const metadata: Metadata = {
  title: "Mai Advertising",
  description: "Công ty TNHH Mai Advertising",
  keywords: ['Mai Advertising', 'Advertising', 'xưởng in'],
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
      <body className="max-w-screen-2xl mx-auto" >{children}</body>
    </html>
  );
}
