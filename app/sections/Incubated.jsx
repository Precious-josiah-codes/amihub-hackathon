"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { animationOne } from "../animation";

const Incubated = () => {
  return (
    <motion.section
      variants={animationOne}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="sm:w-[60.75rem] w-full py-9 mx-auto my-10 bg-[#0F2334] rounded-[5px]"
    >
      <div className="flex sm:flex-row flex-col items-center justify-center sm:w-fit w-full mx-auto gap-4 ">
        {/* <h1 className="text-2xl font-bold">Hosted By</h1> */}
        <div className="sm:h-[4rem] h-[5rem] sm:w-[13rem] w-full rounded-[5px] relative overflow-hidden">
          <Image
            class="object-contain w-full h-full"
            src="/amihub_logo.png"
            fill
            alt="AMIHUB Logo"
            priority
          />
        </div>
        <div className="sm:h-[4rem] h-[5rem] sm:w-[13rem] w-[80%] rounded-[5px] relative overflow-hidden">
          <Image
            class="object-contain w-full h-full"
            src="/ncdmb.webp"
            fill
            alt="NCDMB Logo"
            priority
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Incubated;
