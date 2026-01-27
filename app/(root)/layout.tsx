import { Metadata } from "next";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { StoreProvider } from "../storeProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Integrated Brand, Digital Marketing &amp; Software Solutions",
  description:
    `Vibes Communications delivers integrated brand strategy, digital marketing, and custom
software solutions to build scalable, future-ready businesses.
    `,


  openGraph: {
    title: "Integrated Brand, Digital Marketing &amp; Software Solutions",
    description:
      `Vibes Communications delivers integrated brand strategy, digital marketing, and custom
software solutions to build scalable, future-ready businesses.`,
    url: "https://www.vibescom.in/",
    siteName: "Vibes Communications Pvt Ltd",
    images: [
      {
        url: "https://s3.ap-south-1.amazonaws.com/vibescom.in/assets/img/home/Vibes-Communications_OG_Image_Fb.jpg",
        width: 1200,
        height: 630,
      },
      {
        url: "https://s3.ap-south-1.amazonaws.com/vibescom.in/assets/img/home/Vibes-Communications_OG_Image_linkedin.jpg",
        width: 1200,
        height: 630,
      },
      {
        url: "https://s3.ap-south-1.amazonaws.com/vibescom.in/assets/img/home/Vibes-Communications_OG_Image_Twitter.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    site: "@vibescom",
    title: "Integrated Brand, Digital Marketing &amp; Software Solutions",
    description:
      `Vibes Communications delivers integrated brand strategy, digital marketing, and custom
software solutions to build scalable, future-ready businesses.`,
    images: ["https://www.vibescom.in/assets/images/Vibes_OG_1200_630.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://www.vibescom.in/",
  },

  authors: [{ name: "Vibes Communications" }],
  creator: "Vibes Communications",
  publisher: "Vibes Communications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <StoreProvider>
        <Navbar />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        <Footer />
      </StoreProvider>
    </div>

  );
}
