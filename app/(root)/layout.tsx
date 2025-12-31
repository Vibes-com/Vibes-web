import { Metadata } from "next";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { StoreProvider } from "../storeProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Digital Marketing & Brand Agency | IT Services Company | Delhi NCR",
  description: "Vibes Communications is a proven agency in the space of Digital Marketing, Brand & IT Services. SEO, SMO, Brand Positioning, Website & Customized Software Development are prime services of the company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <StoreProvider>
          <Navbar/>
          {children}
           <Toaster position="top-right" reverseOrder={false} />
          <Footer/>
          </StoreProvider>
      </div>

  );
}
