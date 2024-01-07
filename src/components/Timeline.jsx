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
      <div class="container timeline bg-gray-200 mx-auto w-full h-full">
        <div className="p-4 justify-center items-center text-center">
          <h1 className="text-3xl font-bold text-red-500">
            TIMELINE OF EXPO'24
          </h1>
        </div>
        <div class="relative wrap overflow-hidden p-10 h-full">
          <div
            class="border-2-2 absolute border-opacity-20 bg-white border-white  h-full border-2"
            style={{ left: "50%" }}
          ></div>
          {/* <!-- right timeline --> */}
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Registration Starts :{" "}
              </h3>
              <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Startups will be evaluated on the basis of their market &
                customer base and their product showcasing capability.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-white text-xl">
                Registration Ends :{" "}
              </h3>
              <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Deadline for the registration of startups for Expo.
              </p>
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-gray-800 text-xl">
                Signing of MOU's :{" "}
              </h3>
              <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-white text-xl">
                Live Exhibition :{" "}
              </h3>
              <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
