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
                Teams from various tertiary institutions in the South-South
                region of Nigeria will apply for the SCI-TECH Hackathon 2023.
                Their applications will be screened by experts and the top 24
                teams will be selected for the next stage.
              </li>
              <li>
                <span className="font-bold text-left text-golden">
                  Phase 2 -{" "}
                </span>
                The top 24 selected teams will be invited to present their
                project/ ideas in person, where experts will assess and review
                their presentations based on set criteria of innovation and
                viability. 10 teams will be selected for the finals.
              </li>
              <li>
                <span className="font-bold text-left text-golden">
                  Phase 3 -{" "}
                </span>
                10 Teams will come to the nals with their project having gone
                through an advisory process. The winners will be identied and
                announced by the panel of judges.
              </li>
            </ul>
            <br />
            <br />
            <hr className="mb-5" />
            <p className="text-center sm:text-left">
              <span className="text-golden">NOTE: </span> Teams from all
              tertiary institution in Rivers State can apply for this Sci-Tech
              Hackathon. Teams must publicize the hackathon across all social
              media platforms
            </p>
            <hr className="mt-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductImageTwo;
