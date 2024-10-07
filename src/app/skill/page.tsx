import Image from "next/image";
import NextImage from "../../../public/nextjs.png";
import ReactImage from "../../../public/react.png";
import TailwindImage from "../../../public/tailwindcss.png";
import NodeImage from "../../../public/node.png";
import MongodbImage from "../../../public/mongodb.png";
import PsqlImage from "../../../public/psql.png";
import PrismaImage from "../../../public/prisma.png";
import ReduxImage from "../../../public/typescript.png";
import TypeScriptImage from "../../../public/redux.png";
import ExpressImage from "../../../public/express.png";
import { Slide } from "react-awesome-reveal";

const Skill = () => {
  return (
    <div id="skill" className="md:py-20 py-12 md:px-16 px-4 bg-slate-100">
      <div className="text-center">
        <h2 className="font-bold md:text-5xl text-3xl">My Skills</h2>
      </div>

      <div className="md:ps-0 ps-4 grid grid-cols-3 md:gap-8 gap-x-4 gap-y-6 mt-12 md:mt-16 md:grid-cols-6">
        <Slide>
          <div className="md:flex md:justify-center md:items-center md:p-8 p-4 md:h-36 h-24 md:w-36 w-24 bg-pink-200 rounded-full shadow-md border border-white hover:border hover:border-blue-300 hover:cursor-pointer">
            <Image src={NextImage} className="" alt="" />
          </div>

          <div className="flex justify-center items-center md:p-8 p-4 md:h-36 h-24 md:w-36 w-24 bg-pink-200 rounded-full shadow-md border border-white hover:border hover:border-blue-300 hover:cursor-pointer">
            <Image src={ReactImage} className="" alt="" />
          </div>

          <div className="flex justify-center items-center md:p-8 p-4 md:h-36 h-24 md:w-36 w-24 bg-pink-200 rounded-full shadow-md border border-white hover:border hover:border-blue-300 hover:cursor-pointer">
            <Image src={TailwindImage} className="" alt="" />
          </div>

          <div className="flex justify-center items-center md:p-8 p-4 md:h-36 h-24 md:w-36 w-24 bg-pink-200 rounded-full shadow-md border border-white hover:border hover:border-blue-300 hover:cursor-pointer">
            <Image src={NodeImage} className="" alt="" />
          </div>

          <div className="flex justify-center items-center md:p-8 p-4 md:h-36 h-24 md:w-36 w-24 bg-pink-200 rounded-full shadow-md border border-white hover:border hover:border-blue-300 hover:cursor-pointer">
            <Image src={MongodbImage} className="" alt="" />
          </div>

          <div className="flex justify-center items-center md:p-8 p-4 md:h-36 h-24 md:w-36 w-24 bg-pink-200 rounded-full shadow-md border border-white hover:border hover:border-blue-300 hover:cursor-pointer">
            <Image src={PsqlImage} className="" alt="" />
          </div>

          <div className="flex justify-center items-center md:p-8 p-4 md:h-36 h-24 md:w-36 w-24 bg-pink-200 rounded-full shadow-md border border-white hover:border hover:border-blue-300 hover:cursor-pointer">
            <Image src={PrismaImage} className="" alt="" />
          </div>

          <div className="flex justify-center items-center md:p-8 p-4 md:h-36 h-24 md:w-36 w-24 bg-pink-200 rounded-full shadow-md border border-white hover:border hover:border-blue-300 hover:cursor-pointer">
            <Image src={ReduxImage} className="" alt="" />
          </div>

          <div className="flex justify-center items-center md:p-8 p-4 md:h-36 h-24 md:w-36 w-24 bg-pink-200 rounded-full shadow-md border border-white hover:border hover:border-blue-300 hover:cursor-pointer">
            <Image src={TypeScriptImage} className="" alt="" />
          </div>

          <div className="flex justify-center items-center md:p-8 p-4 md:h-36 h-24 md:w-36 w-24 bg-pink-200 rounded-full shadow-md border border-white hover:border hover:border-blue-300 hover:cursor-pointer">
            <Image src={ExpressImage} className="" alt="" />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Skill;
