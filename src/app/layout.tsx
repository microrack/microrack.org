import { Martian_Mono } from "next/font/google";

import "./globals.css";

const martian = Martian_Mono({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700', '800'] });

export { metadata } from "./metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{height: '100%'}}>
      <body className={martian.className} style={{height: '100%'}}>{children}</body>
    </html>
  );
}

