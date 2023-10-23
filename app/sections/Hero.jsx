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
              alt="amihub hackathon 2023"
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
            src="/hackkk3.png"
            alt="amihub hackathon 2023 for south-south tetiary institutions"
            width={1000}
            height={1000}
            priority
          />
        </motion.h1>

        {/* sub text */}
        <motion.p
          class="leading-relaxed text-white flex flex-col items-center justify-center sm:text-xl"
          variants={animationThree}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={animationOne}
            initial="hidden"
            animate="visible"
            className="sm:mt-12 mt-8 font-bold text-xl text-[#ff9e03]"
          >
            Theme
          </motion.p>
          <Image
            className="w-2/3 h-2/3"
            src="/igniting.png"
            alt="amihub hackathon theme is IGNITING INNOVATION"
            width={1000}
            height={1000}
            priority
          />
          <br />
          <motion.span
            variants={animationTwo}
            initial="hidden"
            animate="visible"
          >
            {hero.subTextTwo}
          </motion.span>
        </motion.p>
      </div>
      {/* end hero text */}
    </section>
  );
};

export default Hero;
