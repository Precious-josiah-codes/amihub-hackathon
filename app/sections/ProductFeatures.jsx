"use client";
import Image from "next/image";
import FeaturesCard from "../components/FeaturesCard";
import { content } from "../data/content";
import { motion } from "framer-motion";
import {
  animationFour,
  animationOne,
  animationThree,
  animationTwo,
} from "../animation";

const ProductFeatures = () => {
  const { features } = content;
  return (
    <section className="mx-auto flex sm:px-5 pt-[10rem] pb-[3.5rem] items-center justify-center flex-col  text-center">
      {/* title and subtitle */}
      <div className="sm:w-2/3">
        <motion.h1
          className="headingText"
          variants={animationOne}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.title}
        </motion.h1>
        <motion.p
          className="text-tetiaryColor"
          variants={animationTwo}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.subtitle}
        </motion.p>
      </div>

      {/* feature cards */}
      <div className="mt-[4rem] relative">
        {/* background blur */}

        <div className="absolute inset-0 top-[4rem] mx-auto sm:w-[25rem] ] w-[20rem] ">
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
        {/* features card */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          variants={animationThree}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.cards.map(({ title, subtitle }, index) => (
            <FeaturesCard title={title} subtitle={subtitle} key={index} />
          ))}
        </motion.div>

        {/* gaz image */}
        <motion.div
          variants={animationFour}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-[10rem] w-full rounded-[5px] relative overflow-hidden mt-9"
        >
          <Image
            class="object-contain w-full h-full rounded-3xl"
            src="/igniting.png"
            fill
            alt=""
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductFeatures;
