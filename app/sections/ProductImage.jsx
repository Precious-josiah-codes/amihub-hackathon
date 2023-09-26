"use client";
import { motion } from "framer-motion";
import { animationFour, animationOne, animationTwo } from "../animation";
import Image from "next/image";

const ProductImage = () => {
  return (
    <section className="flex">
      <div className="mx-auto flex sm:flex-row flex-col sm:space-x-6 space-y-6 sm:space-y-0 w-fit">
        {/* first image */}
        <motion.div
          variants={animationOne}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-col items-center justify-center px-0 sm:px-40"
        >
          <div className="sm:text-justify text-left">
            <h1 className="sm:text-4xl text-2xl text-center text-golden">
              INTRODUCTION
            </h1>
            The SCI-TECH 2023 Hackathon is an event organized by Africa
            Manufacturing Innovation Hub. The event is designed to inspire,
            challenge, and empower students from tertiary institutions across
            Nigeria. As a cardinal factor to our corporate vision, this
            SCITECH23 Hackaton will provide opportunities for talent
            development, innovation, and networking within the technology
            ecosystem. Our combined efforts will yield impactful results that
            foster a culture of creativity, innovation, and problem-solving in
            our society. This Hackathon is focused on Science and Technology and
            aims to transform academic knowledge into innovative solutions
            capable of delivering real-world problems.
            <br />
            <br />
            <p className="text-center">
              The theme for this <span className="text-golden">SCITECH23</span>{" "}
              Hackathon is{" "}
              <span className="text-golden">IGNITING INNOVATION.</span>
              <br />
              Winners will be incubated by{" "}
              <span className="text-golden">AMI HUB.</span> The prize money for
              the winners is{" "}
              <span className="text-golden">10 MILLION NAIRA.</span>
            </p>
            <motion.div
              variants={animationFour}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="h-[10rem] w-full rounded-[5px] relative overflow-hidden mt-0 sm:mt-9"
            >
              <Image
                class="object-contain w-full h-full rounded-3xl"
                src="/prizemoney.png"
                fill
                alt=""
                priority
              />
            </motion.div>
          </div>
          <hr className="w-0 sm:w-full" />
        </motion.div>
        <hr className="w-full sm:w-0" />
      </div>
    </section>
  );
};

export default ProductImage;
