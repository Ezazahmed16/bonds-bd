import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Teams from "@/components/Teams";
import TopHeader from "@/components/TopHeader";
import VideoBanner from "@/components/VideoBanner";

export default function Home() {
  return (
    <div className="">

      <Banner />
      <AboutUs />
      <Products />
      <VideoBanner />
      <Contact />
    </div>
  );
}
