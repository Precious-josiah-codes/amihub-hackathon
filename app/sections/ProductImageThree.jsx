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
              <li>
                <span className="font-bold text-left text-golden">
                  Step 1 -{" "}
                </span>
                Follow all our social handles:{" "}
                <span className="flex space-x-4 pt-4 sm:pl-16 w-fit mx-auto sm:mx-0">
                  {/* twitter */}
                  <Link
                    href="https://twitter.com/amihubafrica?t=5TxNgq1KjUomqHGXcSNFAQ&s=09"
                    target={"_blank"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-white"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </Link>
                  {/* facebook */}
                  <Link
                    href="https://www.facebook.com/amihubafrica/"
                    target={"_blank"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-white"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </Link>
                  {/* instagram */}
                  <Link
                    href="https://www.instagram.com/invites/contact/?i=3rzbvzo0cnq1&utm_content=rrqdebd"
                    target={"_blank"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-white"
                    >
                      <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                    </svg>
                  </Link>
                  {/* linkedin */}
                  <Link
                    href="https://www.linkedin.com/company/amihub/"
                    target={"_blank"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-white"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </Link>
                </span>
              </li>
              <li>
                <span className="font-bold text-left text-golden">
                  Step 2 -{" "}
                </span>
                Dowload the endorsement letter, fill, get it stamped by faculty
                administration, scan and upload to the portal.
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
              </li>
              <li>
                <span className="font-bold text-left text-golden">
                  Step 3 -{" "}
                </span>
                Fill the registration form below and submit
              </li>
              <li>
                <span className="font-bold text-left text-golden">
                  Step 4 -{" "}
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
                  Step 5 -{" "}
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
