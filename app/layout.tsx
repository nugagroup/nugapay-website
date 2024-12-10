import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gilroyExtrabold = localFont({
  src: "./fonts/Gilroy-Extrabold.woff",
  variable: "--font-gilroy-extrabold",
})
const gilroyBold = localFont({
  src: "./fonts/Gilroy-Bold.woff",
  variable: "--font-gilroy-bold",
})
const gilroySemibold = localFont({
  src: "./fonts/Gilroy-Semibold.woff",
  variable: "--font-gilroy-semibold"
})
const gilroyMedium = localFont({ 
  src: "./fonts/Gilroy-Medium.woff",
  variable: "--font-gilroy-medium"
 })
 const gilroyRegular = localFont({
  src: "./fonts/Gilroy-Regular.woff",
  variable: "--font-gilroy-regular"
 })

export const metadata: Metadata = {
  title: "NUGA PAY - Next-Gen Payment Solutions",
  description: "Experience the future of banking with NUGA Pay. Our innovative solutions redefine payments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gilroyRegular.variable} ${gilroyMedium.variable} ${gilroySemibold.variable} ${gilroyBold.variable} ${gilroyExtrabold.variable} text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
