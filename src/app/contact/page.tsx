import React from "react";

function Contact() {
  return (
    <div id="contact">
      <section className="py-10 bg-gray-100 md:py-24">
        <div className="px-4  md:px-8">
          <div className=" text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
              Contact Me
            </h2>
          </div>

          <div className="flex md:flex-row flex-col md:justify-center md:items-center mx-auto mt-12 md:mt-16">
            <div className="grid grid-rows-3 md:gap-8 gap-4 text-center md:px-0 md:grid-rows-3 md:me-6 me-0">
              <div className="overflow-hidden bg-white rounded-xl">
                <div className="px-6 py-8 md:w-80 w-full">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-pink-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="mt-6 text-sm font-medium text-gray-900">
                    8801819832618
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    8801883132822
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl">
                <div className="px-6 py-8 md:w-80 w-full">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-pink-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-6 text-sm font-medium text-gray-900">
                    zahediiuc221@gmail.com
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    tajiniiuc222@gmail.com
                  </p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-xl">
                <div className="px-6 py-8 md:w-80 w-full">
                  <svg
                    className="flex-shrink-0 w-10 h-10 mx-auto text-pink-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="mt-6 text-sm font-medium leading-relaxed text-gray-900">
                    Bhatiary Southbazar, Sitakund, Chattogram, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6  bg-white rounded-xl md:ms-6 ms-0">
              <div className="px-6 py-6 p-0 md:p-12">
                <h3 className="text-2xl font-semibold text-center text-gray-700">
                  Send Me a messages
                </h3>

                <form action="#" method="POST" className="mt-14">
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-4">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Your name{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Phone number{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="tel"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Company name{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Message{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name=""
                          id=""
                          placeholder=""
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-pink-400 border border-transparent rounded-md focus:outline-none hover:bg-blue-500 focus:bg-blue-400"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
