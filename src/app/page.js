import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Products from "@/components/Products";
import Teams from "@/components/Teams";


export default function Home() {
  return (
    <div className="">

      <Banner />
      <AboutUs />
      <Products />
      <Contact />
      <Location />
    </div>
  );
}
