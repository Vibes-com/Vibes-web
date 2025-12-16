import { Metadata } from "next";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { StoreProvider } from "../storeProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Home",
  description: "Vibes Home",
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
