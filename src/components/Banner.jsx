'use client'
import { motion } from "framer-motion";
import AuroraBackground from "./ui/AuroraBackground";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffectSmooth";

const Banner = () => {
  const words = [
    {
      text: "Bonds",
      className: "text-red-500 text-3xl md:text-7xl ",
    },
    {
      text: "Bangladesh",
      className: "text-orange-500 text-3xl md:text-7xl ",
    },
  ];
  return (
    <div className="">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="font-bold text-gray-900 text-center">
            <TypewriterEffectSmooth words={words} />
          </div>

          <div className="font-extralight text-center text-base md:text-3xl text-neutral-950 py-4 max-w-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nam aliquam necessitatibus fugit possimus quaerat, ad ipsum cumque voluptatem.
          </div>
          {/* <button className="rounded-full w-fit text-white px-4 py-2">
            Debug now
          </button> */}
          <button style={{ backgroundColor: '#E13D44' }} className="btn text-gray-100 font-bold rounded-full">Contact Now</button>
        </motion.div>
      </AuroraBackground>
    </div>
  )
}

export default Banner