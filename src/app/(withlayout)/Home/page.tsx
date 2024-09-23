/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image"
import portflioImage from "../../../public/portfolio-image.png"

export default function HomePage() {

  return (
    <div className="bg-slate-100">
      
      <section className="py-28">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-6 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-gray-500 font-bold tracking-wider">
              WELCOME MY WORLD
            </h1>
            <div>
              <h2 className="text-5xl text-gray-600 font-extrabold mb-2">
                Full Stack Developer
              </h2>
              <p className="ps-1">Programming is my passion. I am developing my skills in every day</p>
            </div>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a href="javascript:void(0)" className="block py-2 px-4 text-center text-white font-medium bg-blue-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                Let's get started
              </a>
              <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                My Service
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <Image
              src={portflioImage}
              className=" md:rounded-tl-[80px] md:rounded-br-[80px] h-96"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* About Me */}
      <div className="bg-slate-300">
        
      </div>
    </div>
  )
}

