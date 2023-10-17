"use client";
import { motion } from "framer-motion";
import { animationOne } from "../animation";

const ProductImageTwo = () => {
  return (
    <section className="flex sm:mt-10 mt-0">
      <div className="mx-auto flex sm:flex-row flex-col sm:space-x-6 space-y-6 sm:space-y-0 w-fit">
        {/* first image */}
        <motion.div
          variants={animationOne}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center px-4 sm:px-40"
        >
          <div className="text-left">
            <h1 className="sm:text-4xl text-2xl text-left mb-4 text-golden">
              The 3 Phases of Sci-Tech Hackathon 2023
            </h1>
            <ul className="list-disc space-y-4">
              <li>
                <span className="font-bold text-left text-golden">
                  Phase 1 -{" "}
                </span>
                Individuals and Teams from various tertiary institutions in the
                South-South region of Nigeria will apply for the SCI-TECH
                Hackathon 2023. Their applications will be screened by experts
                and the top participants will be selected for the next stage.
              </li>
              <li>
                <span className="font-bold text-left text-golden">
                  Phase 2 -{" "}
                </span>
                The top selected individuals and/or teams will be invited to
                present their project in person, where experts will assess and
                review their presentations based on set criteria of innovation
                and viability.
              </li>
              <li>
                <span className="font-bold text-left text-golden">
                  Phase 3 -{" "}
                </span>
                Selected individuals and/or teams will come to the finals with
                their projects having gone through mentorship and advisory
                processes. The winners will be identified and announced by the
                panel of judges.
              </li>
            </ul>
            <br />
            <br />
            <hr className="mb-5" />
            <p className="text-center sm:text-left">
              <span className="text-golden">NOTE: </span> Teams from all
              tertiary institutions in{" "}
              <span className="text-golden">
                South-South Nigeria (Akwa-Ibom, Bayelsa, Cross-River, Delta,
                Edo, Rivers)
              </span>{" "}
              can apply for this{" "}
              <span className="text-golden">SCITECH23 Hackathon</span>.
              Application can be done as an individual or as a team of not more
              than 4 persons.
            </p>
            <hr className="mt-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductImageTwo;
