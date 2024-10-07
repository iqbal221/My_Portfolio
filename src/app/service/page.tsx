import React from "react";
import frontImage from "../../../public/front.png";
import fullImage from "../../../public/full.png";
import mobileImage from "../../../public/mobile.png";
import Image from "next/image";
import { JackInTheBox } from "react-awesome-reveal";

const Service = () => {
  return (
    <section id="service" className="bg-slate-100 md:pb-20 md:py-0 py-12">
      <div className="px-4 mx-auto sm:px-6 lg:px-20">
        <div className="text-center">
          <h2 className="font-bold md:text-5xl text-3xl">My Services</h2>
        </div>

        <div className="mt-8 lg:mt-20 grid grid-cols-1 md:gap-12 gap-4 text-center sm:grid-cols-2 md:grid-cols-3">
          <div className="shadow-sm hover:shadow-lg hover:bg-pink-100 bg-white p-8 hover:cursor-pointer">
            <div className="relative flex items-center justify-center mx-auto">
              <Image src={frontImage} className="w-20 h-20" alt="" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">
              Frontend Development
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <JackInTheBox>
            <div className="shadow-sm hover:shadow-lg hover:bg-pink-100 bg-white p-8 hover:cursor-pointer">
              <div className="relative flex items-center justify-center mx-auto">
                <Image src={fullImage} className="w-20 h-24" alt="" />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Fullstack Development
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </JackInTheBox>
          <JackInTheBox>
            <div className="shadow-sm hover:shadow-lg hover:bg-pink-100 bg-white p-8 hover:cursor-pointer">
              <div className="relative flex items-center justify-center mx-auto">
                <Image src={mobileImage} className="w-20 h-14 pt-4" alt="" />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black pt-6">
                Mobile Apps Development
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </JackInTheBox>
        </div>
      </div>
    </section>
  );
};

export default Service;
