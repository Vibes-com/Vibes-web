import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./responsive.css";
import Preloader from "./components/preloader/Preloader";
// import Preloader from "./components/preloader/Preloader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Digital Marketing & Brand Agency | IT Services Company | Delhi NCR",
  description: "Vibes Communications is a proven agency in the space of Digital Marketing, Brand & IT Services. SEO, SMO, Brand Positioning, Website & Customized Software Development are prime services of the company.",
   viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
