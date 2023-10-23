"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { animationOne } from "../animation";
import { RegistrationForm } from "../components/RegistrationForm";

const ProductImageThree = () => {
  return (
    <section className="flex w-full sm:mt-10 mt-5 flex-col items-center justify-center">
      <div className="flex flex-col space-y-6 sm:space-y-0 w-full items-center justify-center">
        {/* first image */}
        <motion.div
          variants={animationOne}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col w-full items-center justify-center px-4 sm:px-40"
        >
          <div className="text-left flex flex-col w-full items-center justify-center">
            <h1 className="sm:text-4xl text-2xl text-center mb-4 text-golden">
              How To Register
            </h1>
            <ul className="list-disc space-y-4 sm:w-2/3 w-full">
              {/* <li>
                <span className="font-bold text-left text-golden">
                  Step 1 -{" "}
                </span>
                Scan each team member&apos;s valid school ID card, append to a
                single document (Ms-Word or PDF) and upload through our
                registration form.
                <div className="flex space-x-4 pt-4 sm:pl-16 w-fit">
                  <a
                    href={
                      "https://docs.google.com/document/d/15Q1UW-0vrVwyYfan1LELuTY51K1iLlOs/edit?usp=sharing&ouid=106322594108853380666&rtpof=true&sd=true"
                    }
                    target={"_blank"}
                    className="border-2 border-golden hover:bg-white hover:text-black hover:scale-110 transition-all ease-in-out rounded-full py-1 px-6 capitalize"
                  >
                    download 📂
                  </a>
                </div>
              </li> */}
              <li>
                <span className="font-bold text-left text-golden">
                  Step 1 -{" "}
                </span>
                Fill the registration form below and submit
              </li>
              <li>
                <span className="font-bold text-left text-golden">
                  Step 2 -{" "}
                </span>
                Using the slide format provided, prepare & upload your product
                presentation slide.
                <div className="flex space-x-4 pt-4 sm:pl-16 w-fit">
                  <a
                    href={
                      "https://docs.google.com/presentation/d/1C6J5mjMxtc70QEQbhtb_XR39iSRM0GO-/edit?usp=sharing&ouid=106322594108853380666&rtpof=true&sd=true"
                    }
                    target={"_blank"}
                    className="border-2 border-golden hover:bg-white hover:text-black hover:scale-110 transition-all ease-in-out rounded-full py-1 px-6 capitalize"
                  >
                    download 📂
                  </a>
                </div>
              </li>
              <li>
                <span className="font-bold text-left text-golden">
                  Step 3 -{" "}
                </span>
                Create a 2-minute video describing your proposed solution,
                citing it&apos;s importance to the society.
              </li>
              <br />
              <h1 className="sm:text-4xl text-xl text-center mb-4 text-golden">
                Registration Form
              </h1>
            </ul>
            <div className="w-full">
              <RegistrationForm />
            </div>
            <br />
            <br />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductImageThree;
