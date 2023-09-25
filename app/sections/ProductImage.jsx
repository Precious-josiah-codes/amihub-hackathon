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
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center px-0 sm:px-40"
        >
          <div className="text-justify">
            <h1 className="text-4xl text-center text-golden">INTRODUCTION</h1>
            The SCI-TECH 2023 Hackathon is an event organized by the Africa
            Manufacturing Innovation Hub, designed to inspire, challenge, and
            empower students from tertiary institutions across the South-South
            region in Nigeria. As a cardinal factor to our corporate vision,
            this event will provide opportunities for talent development,
            innovation, and networking within the technology ecosystem, and
            believe our combined efforts can yield impactfull results foster a
            culture of creativity, innovation, and problemsolving in our
            society. This Hackathon is focused on Science and Technology and
            aims to transform academic knowledge into innovative solutions
            capable of delivering real-world problems. The programme will take
            place from Monday 9th October to Saturday 18th November 2023.
            <br />
            <br />
            <p className="text-center">
              The Theme for this Hackathon is{" "}
              <span className="text-golden">IGNITING INNOVATION.</span> Winners
              and analists will be incubated by{" "}
              <span className="text-golden">AMI HUB.</span> The prize money for
              the winners is{" "}
              <span className="text-golden">10 MILLION NAIRA.</span>
            </p>
            <motion.div
              variants={animationFour}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-[10rem] w-full rounded-[5px] relative overflow-hidden mt-9"
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
        </motion.div>
      </div>
    </section>
  );
};

export default ProductImage;
