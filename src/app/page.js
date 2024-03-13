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
      <div style={{ backgroundColor: '#1D232A' }} className="pb-10 md:pb-20">
        <div className="flex flex-col w-full lg:flex-row gap-3 justify-center items-center md:px-20 px-5 ">
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
