import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";

const NunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Bonds Bangladesh - Leading Thread Reckoning Factory",
  description: "Discover high-quality thread manufacturing at Bonds Bangladesh, the premier thread reckoning factory in Bangladesh. We offer top-notch thread products to meet your sewing needs.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={NunitoSans.className}>
        <NextTopLoader />
        <TopHeader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}