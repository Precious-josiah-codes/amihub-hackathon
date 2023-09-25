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
      className="sm:w-[60.75rem] w-[20rem] py-9 mx-auto my-10 bg-[#0F2334] rounded-[5px]"
    >
      <div className="flex sm:flex-row flex-col items-center w-fit mx-auto  ">
        {/* <h1 className="text-2xl font-bold">Hosted By</h1> */}
        <div className="h-[4rem] w-[13rem] rounded-[5px] relative overflow-hidden">
          <Image
            class="object-contain w-full h-full"
            src="/amihub_logo.png"
            fill
            alt="AMIHUB Logo"
            priority
          />
        </div>
        <div className="h-[4rem] w-[13rem] rounded-[5px] relative overflow-hidden">
          <Image
            class="object-contain w-full h-full"
            src="/ncdmb.webp"
            fill
            alt="AMIHUB Logo"
            priority
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Incubated;
