import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Management from "@/components/Management";
import Mission from "@/components/Mission";
import Products from "@/components/Products";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <div className="pb-10 md:pb-20">
        <div className="flex flex-col w-full lg:flex-row gap-3 justify-center items-center md:px-20 px-5 ">
          <Mission />
          <div className="divider lg:divider-horizontal"></div>
          <Vision />
        </div>
      </div>
      <Products />
      <Management />
      <Contact />
      <Location />
    </>
  );
}
