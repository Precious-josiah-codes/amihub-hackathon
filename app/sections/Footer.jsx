"use client";

import { Monoton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-monoton",
  display: "swap",
});

const Footer = () => {
  return (
    <footer
      className="bg-slate-900 px-5 pt-10 sm:px-[4rem] relative w-full overflow-hidden"
      id="footer"
    >
      <div className="relative z-50">
        {/* first section */}
        <div className="flex space-x-20 pb-10 relative">
          {/* right section */}
          <div>
            {/* pay us a visit */}
            <h1 className="mb-6 font-semibold">Event holds at:</h1>
            <div className="space-y-3 font-extralight">
              {/* location */}
              <div className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h1>No 9 Rumuogba Estate Road, PortHarcourt Nigeria</h1>
              </div>

              {/* phone number */}
              <div className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <h1>+234-808-422-2220</h1>
              </div>

              {/* email */}
              <div className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <h1>hi@amihub.africa</h1>
              </div>
            </div>
          </div>

          {/* left section */}
          <div>
            {/* company */}
            <h1 className="mb-6 font-semibold">Company</h1>
            <div className="space-y-3 font-extralight">
              {/* about */}

              <h1 className="flex space-x-3">
                <Link href="https://amihubb.netlify.app/">About</Link>
              </h1>

              {/* products */}
              <h1 className="flex space-x-3">
                <Link href="https://amihubb.netlify.app/">Products </Link>
              </h1>
            </div>
          </div>
        </div>

        <div
          className={`absolute -top-10 text-[15.625rem] inset-0 m-auto  text-white text-opacity-10 -z-10 sm:h-[20rem] sm:w-[80%] h-[19rem] w-[20rem]`}
        >
          <Image
            class="object-contain w-full h-full"
            src="/amihub.png"
            fill
            alt=""
            priority
          />
        </div>

        {/* second section */}
        <div className="flex justify-between pt-7 pb-10 border-t border-stone-400 sm:flex-row flex-col text-center space-y-6 sm:space-y-0">
          <h1>© Copyright Reserved</h1>
          {/* icons */}
          <div className="flex space-x-6 w-fit mx-auto sm:mx-0">
            {/* twitter */}
            <Link href="https://twitter.com/amihubafrica?t=5TxNgq1KjUomqHGXcSNFAQ&s=09">
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
            <Link href="https://www.facebook.com/amihubafrica/">
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
            <Link href="https://www.instagram.com/invites/contact/?i=3rzbvzo0cnq1&utm_content=rrqdebd">
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
            <Link href="https://www.linkedin.com/company/amihub/">
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
          </div>

          {/* subscribe to our news letter */}
          {/* <div className="w-fit mx-auto sm:mx-0">
            <label htmlFor="">Subscribe to our News Letter</label>
            <div class="flex w-[17rem] mt-3">
              <input
                type="text"
                id="website-admin"
                class="rounded-none rounded-l-[5px] bg-transparent border borderStyle text-white focus:outline-none block flex-1 min-w-0 w-full text-sm  p-3 "
                placeholder="elonmusk@mail.comsss"
              />
              <span class="inline-flex items-center px-3 text-sm text-white borderStyle border-l-0  rounded-r-[5px] bg-secondaryColor">
                Email
              </span>
            </div>
          </div> */}
        </div>
      </div>
      {/* amihub text */}
    </footer>
  );
};

export default Footer;
