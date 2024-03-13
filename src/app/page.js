import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Mission from "@/components/Mission";
import Products from "@/components/Products";
import Teams from "@/components/Teams";
import Vision from "@/components/Vision";
export default function Home() {
  return (
    <div className="">
      <Banner />
      <AboutUs />
      <div style={{ backgroundColor: '#1D232A' }} className="mx-auto max-w-7xl justify-center items-center pb-20">
        <div className="flex flex-col w-full lg:flex-row gap-5">
          <Mission />
          <div className="divider lg:divider-horizontal"></div>
          <Vision />
        </div>
      </div>
      <Products />
      <Teams />
      <Contact />
      <Location />
    </div>
  );
}
