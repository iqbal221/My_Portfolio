import Image from "next/image";
import SchoolImage1 from "../../../public/school.png";
import SchoolImage2 from "../../../public/sch1.png";
import EcommImage2 from "../../../public/Ecom2.png";
import EcommImage1 from "../../../public/Ecom1.png";
import LaptopImage1 from "../../../public/laptop1.png";
import LaptopImage2 from "../../../public/laptop2.png";
import QuizImage1 from "../../../public/quiz1.png";
import QuizImage2 from "../../../public/quiz2.png";
import BD1Image1 from "../../../public/BD1.png";
import BD1Image2 from "../../../public/BD2.png";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Project = () => {
  return (
    <div id="project" className="md:py-20 py-12 md:px-16 px-4 bg-slate-100">
      <div className="text-center">
        <h3 className="text-blue-700 font-medium md:text-md text-sm tracking-widest mb-3">
          LATEST WORK
        </h3>
        <h2 className="font-bold md:text-5xl text-3xl">My Project</h2>
      </div>

      <div className="grid grid-cols-1 md:gap-10 gap-4 mt-8 lg:mt-16 lg:grid-cols-3">
        <Fade>
          <div className="group bg-white rounded-md shadow-md p-7 hover:cursor-pointer">
            <div className="h-64 overflow-hidden">
              <div className="grid grid-rows-2 gap-2">
                <Image
                  src={SchoolImage1}
                  className=" transition duration-700 ease-out group-hover:scale-105"
                  alt=""
                />
                <Image
                  src={SchoolImage2}
                  className=" transition duration-700 ease-out group-hover:scale-105"
                  alt=""
                />
              </div>
            </div>
            <h4 className="text-blue-600 md:pt-6 pt-4">
              School Managment Application
            </h4>
            <h2 className="md:text-2xl text-xl font-semibold md:pt-4 pt-2 pb-2 text-gray-800 hover:text-blue-600">
              Bhatiary Addorsho Biddapit
            </h2>
            <Link
              target="_blank"
              href="https://school-management-frontend-six.vercel.app/"
            >
              <div className="flex justify-center items-center w-full group-hover:text-pink-600 text-pink-400 text-md pt-2 text-center">
                Live View
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ms-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="group bg-white rounded-md shadow-md p-7 hover:cursor-pointer">
            <div className="h-64 overflow-hidden">
              <div className="grid grid-rows-2 gap-2">
                <Image
                  src={EcommImage1}
                  className=" transition duration-700 ease-out group-hover:scale-105"
                  alt=""
                />
                <Image
                  src={EcommImage2}
                  className=" transition duration-700 ease-out group-hover:scale-105"
                  alt=""
                />
              </div>
            </div>
            <h4 className="text-blue-600 md:pt-6 pt-4">
              E-Commerce Application
            </h4>
            <h2 className="md:text-2xl text-xl font-semibold md:pt-4 pt-2 pb-2 text-gray-800 hover:text-blue-600">
              AN Mart Online Shopping
            </h2>
            <Link target="_blank" href="https://my-apps-five.vercel.app/">
              <div className="flex justify-center items-center w-full group-hover:text-pink-600 text-pink-400 text-md pt-2 text-center">
                Live View
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ms-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="group bg-white rounded-md shadow-md p-7 hover:cursor-pointer">
            <div className="h-64 overflow-hidden">
              <div className="grid grid-rows-2 gap-2">
                <Image
                  src={LaptopImage1}
                  className=" transition duration-700 ease-out group-hover:scale-105"
                  alt=""
                />
                <Image
                  src={LaptopImage2}
                  className=" transition duration-700 ease-out group-hover:scale-105"
                  alt=""
                />
              </div>
            </div>
            <h4 className="text-blue-600 md:pt-6 pt-4">
              Online Resale Application
            </h4>
            <h2 className="md:text-2xl text-xl font-semibold md:pt-4 pt-2 pb-2 text-gray-800 hover:text-blue-600">
              AN IT Bari
            </h2>
            <Link target="_blank" href="https://laptop-sell-center.web.app/">
              <div className="flex justify-center items-center w-full group-hover:text-pink-600 text-pink-400 text-md pt-2 text-center">
                Live View
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ms-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="group bg-white rounded-md shadow-md p-7 hover:cursor-pointer">
            <div className="h-64 overflow-hidden">
              <div className="grid grid-rows-2 gap-2">
                <Image
                  src={QuizImage1}
                  className=" transition duration-700 ease-out group-hover:scale-105"
                  alt=""
                />
                <Image
                  src={QuizImage2}
                  className=" transition duration-700 ease-out group-hover:scale-105"
                  alt=""
                />
              </div>
            </div>
            <h4 className="text-blue-600 md:pt-6 pt-4">
              Simple Quiz Application
            </h4>
            <h2 className="md:text-2xl text-xl font-semibold md:pt-4 pt-2 pb-2 text-gray-800 hover:text-blue-600">
              Quiz Game
            </h2>
            <Link
              target="_blank"
              href="https://quiz-game-application.netlify.app/"
            >
              <div className="flex justify-center items-center w-full group-hover:text-pink-600 text-pink-400 text-md pt-2 text-center">
                Live View
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ms-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="group bg-white rounded-md shadow-md p-7 hover:cursor-pointer">
            <div className="h-64 overflow-hidden">
              <div className="grid grid-rows-2 gap-2">
                <Image
                  src={BD1Image1}
                  className=" transition duration-700 ease-out group-hover:scale-105"
                  alt=""
                />
                <Image
                  src={BD1Image2}
                  className=" transition duration-700 ease-out group-hover:scale-105"
                  alt=""
                />
              </div>
            </div>
            <h4 className="text-blue-600 md:pt-6 pt-4">Informative Site</h4>
            <h2 className="md:text-2xl text-xl font-semibold md:pt-4 pt-2 pb-2 text-gray-800 hover:text-blue-600">
              Beautiful Bangladesh
            </h2>
            <Link
              target="_blank"
              href="https://beautiful-bangladesh-blog.netlify.app/"
            >
              <div className="flex justify-center items-center w-full group-hover:text-pink-600 text-pink-400 text-md pt-2 text-center">
                Live View
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ms-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Project;
