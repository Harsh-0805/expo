import React from "react";
import "./global.css";

const Timeline = () => {
  return (
    <>
      {/* <div className="text-white timeline">
        <ul className="p-4 lg:p-8 dark:bg-gray-200 dark:text-gray-100">
          <li>
            <h1 className="text-3xl text-red-500">TIMELINE OF EXPO'23</h1>
            <article>
              <a
                rel="noopener noreferrer"
                className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-200"
              >
                <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
                  REGISTRATION STARTS -{" "}
                </h3>
                <time
                  datetime=""
                  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
                >
                  January Start
                </time>
                <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                  Startups will be evaluated on the basis of their market &
                  customer base and their product showcasing capability.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article>
              <a
                rel="noopener noreferrer"
                className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900"
              >
                <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
                  REGISTRATION ENDS -{" "}
                </h3>
                <time
                  datetime=""
                  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
                >
                  January End
                </time>
                <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                  Deadline for the registration of startups for Expo.
                </p>
              </a>
            </article>
          </li>
          <li>
            <article>
              <a
                rel="noopener noreferrer"
                className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900"
              >
                <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
                  SIGNING OF MOU's -{" "}
                </h3>
                <time
                  datetime=""
                  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
                >
                  February start
                </time>
                <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                  Shortlisted Startups will be signing the MOUs and further
                  details will be communicated
                </p>
              </a>
            </article>
          </li>
          <li>
            <article>
              <a
                rel="noopener noreferrer"
                className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900"
              >
                <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
                  LIVE EXHIBITION -{" "}
                </h3>
                <time
                  datetime=""
                  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
                >
                  1st week of FEB
                </time>
                <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                  Awaiting Startups to showcase their amazing ideas and
                  products.
                </p>
              </a>
            </article>
          </li>
        </ul>
      </div> */}
      <div className="w-full timeline py-16 text-white" id="timeline">
        <div>
          <h1 className="text-3xl font-bold text-center py-4">TIMELINE</h1>

          <div className="max-w-7xl mx-auto grid grid-cols-9 px-4 py-10">
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium py-2">
                  4th March Registration Opens
                </h1>
                <p className="text-gray-100 sm:text-sm text-xs">
                  Startups will be evaluated on the basis of their market &
                  customer base and their product showcasing capability.
                </p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-white"></div>
              <div className="absolute w-10 h-10 rounded-full bg-gray-800 text-white text-3xl text-center">
                1
              </div>
            </div>
            <div className="col-span-4 w-full h-full"></div>

            <div className="col-span-4 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-white"></div>
              <div className="absolute w-10 h-10 rounded-full bg-gray-800 text-white text-3xl text-center">
                2
              </div>
            </div>
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium py-2">
                  24th March Closing of Registrations
                </h1>
                <p className="text-gray-100 sm:text-sm text-xs">
                  Deadline for the registration of startups for Expo.
                </p>
              </div>
            </div>

            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium py-2">
                  Signing of MOUs
                </h1>
                <p className="text-gray-100 sm:text-sm text-xs">
                  Shortlisted Startups will be signing the MOUs and further
                  details will be communicated.
                </p>
              </div>
            </div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-white"></div>
              <div className="absolute w-10 h-10 rounded-full bg-gray-800 text-white text-3xl text-center">
                3
              </div>
            </div>
            <div className="col-span-4 w-full h-full"></div>

            <div className="col-span-4 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-center">
              <div className="h-full w-1 bg-white"></div>
              <div className="absolute w-10 h-10 rounded-full bg-gray-800 text-white text-3xl text-center">
                4
              </div>
            </div>
            <div className="col-span-4 w-full h-full ">
              <div className="w-full h-full p-2 md:pl-4">
                <h1 className="text-white text-xl font-medium py-2">
                  31st March - 2nd April Expo LIVE
                </h1>
                <p className="text-gray-100 sm:text-sm text-xs">
                  Awaiting Startups to showcase their amazing ideas and
                  products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
