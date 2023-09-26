"use client";
import Image from "next/image";
import { content } from "../data/content";
import { motion } from "framer-motion";
import { animationOne, animationThree, animationTwo } from "../animation";

const Hero = () => {
  const { hero } = content;

  return (
    <section class="flex flex-col items-center justify-center sm:min-h-screen h-[85vh]">
      {/* start hero text */}
      <div class="container mx-auto flex sm:px-5 pt-[10rem] pb-[3.5rem] items-center justify-center flex-col sm:w-2/3 text-center">
        <div className="absolute inset-0 top-[15rem] mx-auto sm:w-[25rem] ] w-[20rem] ">
          <div className="sm:h-[20rem] sm:w-[25rem] h-[19rem] w-[20rem] rounded-[5px]  relative overflow-hidden">
            <Image
              class="object-cover w-full h-full"
              src="/Ellipse.png"
              fill
              alt=""
              priority
            />
          </div>
        </div>

        {/* sub title text */}

        {/* main text */}
        <motion.h1
          class="headingText "
          variants={animationTwo}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/hackaton.png"
            alt="Hackathon"
            width={1000}
            height={1000}
            priority
          />
        </motion.h1>

        {/* sub text */}
        <motion.p
          class="leading-relaxed mb-8 text-[#ff9e03] text-xl flex flex-col items-center justify-center font-bold"
          variants={animationThree}
          initial="hidden"
          animate="visible"
        >
          <Image
            className="w-1/2 h-1/2"
            src="/igniting.png"
            alt="Hackathon"
            width={1000}
            height={1000}
            priority
          />
          <br />
          {hero.subTextTwo}
        </motion.p>
      </div>
      {/* end hero text */}
    </section>
  );
};

export default Hero;
