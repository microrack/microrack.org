import { Martian_Mono } from "next/font/google";

import "./globals.css";

const martian = Martian_Mono({ subsets: ["latin"] });

export { metadata } from "./metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={martian.className}>{children}</body>
    </html>
  );
}

