import type { Metadata } from "next";
import "./styles/globals.scss"
import "./globals.css";

export const metadata: Metadata = {
  title: "Artin-shop",
  description: "Shoe store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
