import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const NunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Bonds Bangladesh - Leading Thread Reckoning Factory",
  description: "Discover high-quality thread manufacturing at Bonds Bangladesh, the premier thread reckoning factory in Bangladesh. We offer top-notch thread products to meet your sewing needs.",
};



export default function RootLayout({ children }) {
  return (
    <html data-theme="cupcake" lang="en">
      <body className={NunitoSans.className}>
        <NextTopLoader
          color="#E13D44"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
        />
        {/* <TopHeader /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}