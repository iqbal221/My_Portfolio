import React from "react";
import aboutImage from "../../../public/zahed_pic.png";
import Image from "next/image";
import ReactImage from "../../../public/react.png";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { motion, transform } from "framer-motion";

const About = () => {
  return (
    <div id="about">
      <div className="bg-slate-100 flex md:flex-row flex-col-reverse items-center md:px-10 md:py-28 py-10">
        <div className="md:w-1/2 w-full flex justify-center items-center md:px-0 px-4">
          <div className="grid grid-rows-3 gap-36">
            <motion.div
              initial={{ y: "-40%" }} // Start above the viewport
              animate={{ y: "40%" }} // Move to the bottom of the viewport
              transition={{
                duration: 2, // Duration of the downward movement
                repeat: Infinity, // Repeat infinitely
                repeatType: "mirror",
                ease: "linear", // Linear easing for constant speed
              }}
              style={{
                transform: "translateX(-50%)",
                // position:"relative"
              }}
            >
              <div className="w-8 h-8 bg-orange-400 ms-12 me-5 rounded-full md:flex hidden"></div>
            </motion.div>
            <motion.div
              initial={{ y: "-50%" }} // Start above the viewport
              animate={{ y: "50%" }} // Move to the bottom of the viewport
              transition={{
                duration: 2, // Duration of the downward movement
                repeat: Infinity, // Repeat infinitely
                repeatType: "mirror",
                ease: "linear", // Linear easing for constant speed
              }}
              style={{
                transform: "translateX(-50%)",
              }}
            >
              <div className="w-8 h-8 bg-purple-600 rounded-full me-5 md:flex hidden"></div>
            </motion.div>
            <motion.div>
              <div className="absolute w-12 h-12 bg-green-600 rounded-full md:ms-20 -ms-2 -mt-4 z-10"></div>
            </motion.div>
          </div>

          <div className="relative bg-pink-200 md:h-[400px] md:w-[400px] w-full flex justify-center items-center md:rounded-tl-[80px] md:rounded-br-[80px]">
            <Image src={aboutImage} className="w-80 h-80" alt="" />
          </div>
        </div>
        <div className="md:w-1/2 w-full md:px-0 px-4">
          <Fade direction={"right"} duration={500}>
            <h4 className="text-gray-400 md:text-lg text-md md:pb-10 pb-6">
              About Me
            </h4>
            <h2 className="text-gray-700 pb-6 md:text-3xl text-2xl md:font-semibold font-medium">
              Hello! I am Md Zahed Iqbal
            </h2>
            <h3 className="text-gray-700 md:pb-6 pb-4 md:text-xl text-md">
              Full Stack Developer
            </h3>
            <p className="text-gray-500 pb-6 md:text-md text-sm text-justify md:pe-24 pe-0">
              I am professional web developer. I can make responsive dynamic
              full stack web application. I have achieved experience in web
              development since last few years. I am hard working person and
              persistent is my strong side. Programming is my passion. I love my
              work very much.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
