import { GoogleAnalytics } from '@next/third-parties/google'

import "./globals.css";

export { metadata } from "./metadata";

const GAID = 'G-8SLWZ3DNXE';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{height: '100%'}}>
      <body style={{height: '100%'}}>{children}</body>
      <GoogleAnalytics gaId={GAID} />
      <script async src="//www.instagram.com/embed.js"></script>
    </html>
  );
}
