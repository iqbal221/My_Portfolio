import Image from "next/image";
import BannerImage from "../../../public/portfolio-image.png";

import React from "react";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <section id="banner" className="md:py-28 py-10 md:px-10 px-4 bg-slate-100">
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <Fade direction={"left"}>
          <div className="flex-none space-y-6  sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="md:text-sm text-xs text-gray-500 md:font-bold font-medium tracking-wider">
              WELCOME MY WORLD
            </h1>
            <div>
              <h2 className="md:text-5xl text-3xl text-gray-600 md:font-extrabold font-bold mb-2">
                Full Stack Developer
              </h2>
              <p className="ps-1 md:text-md text-sm">
                Programming is my passion. I am developing my skills in every
                day
              </p>
            </div>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="#service"
                className="md:flex hidden items-center border border-blue-600 hover:bg-blue-600 justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-white font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
              >
                My Service
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#service"
                className="w-52 md:hidden flex items-center border border-blue-600 hover:bg-blue-600 justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-white font-medium duration-150 active:bg-gray-100 border rounded-sm md:inline-flex"
              >
                My Service
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

            </div>
          </div>
        </Fade>
        <div className="flex-none md:mt-14 mt-6 md:mt-0 md:max-w-xl">
          <Image
            src={BannerImage}
            className=" md:rounded-tl-[80px] md:rounded-br-[80px] md:h-96 h-52"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
