"use client";
import { motion } from "framer-motion";
import { animationOne } from "../animation";

const ProductImageThree = () => {
  return (
    <section className="flex mt-20">
      <div className="mx-auto flex sm:flex-row flex-col sm:space-x-6 space-y-6 sm:space-y-0 w-fit">
        {/* first image */}
        <motion.div
          variants={animationOne}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center px-10 sm:px-40"
        >
          <div className="text-left">
            <h1 className="text-4xl text-center mb-4 text-golden">
              How To Register
            </h1>
            <ul className="list-disc space-y-4">
              <li>
                <span className="font-bold text-left text-golden">
                  Step 1 -{" "}
                </span>
                Teams should send their applications to the portal before the
                deadline.
              </li>
              <li>
                <span className="font-bold text-left text-golden">
                  Step 2 -{" "}
                </span>
                Teams should provide copy of their admission letter or school
                I.D
              </li>
              <li>
                <span className="font-bold text-left text-golden">
                  Step 3 -{" "}
                </span>
                Teams should provide headshots of all team members
              </li>
            </ul>
            <br />
            <br />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductImageThree;
