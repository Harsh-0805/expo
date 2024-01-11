import React from "react";
import "./Register.css";

const TimelineItem = ({ date, title, description, link }) => {
  return (
    <li className="relative text-white">
      <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 bg-black w-4 h-4 border-2 border-white dark:border-gray-900 dark:bg-gray-700 rounded-full"></div>
      <div className="ml-6 p-4 border-l border-gray-300 dark:border-gray-700">
        <time className="text-sm font-normal leading-none ">{date}</time>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-base font-normal ">{description}</p>
      </div>
    </li>
  );
};

const Timeline = () => {
  return (
    <div
      id="timeline"
      className="flex bg flex-col items-center justify-center h-full"
    >
      <h2 className="mb-2 pt-7 text-5xl text-red-600 text-center py-4 font-bold uppercase">
        Timeline
      </h2>
      <ol className="relative p-4 max-w-2xl">
        <TimelineItem
          date="January 2024"
          title="Registration Opens"
          description="Startups will be evaluated on the basis of their market & customer base and their product showcasing capability."
          link="#"
        />
        <TimelineItem
          date="January 2024"
          title="Registration Closes"
          description="Deadline for the registration of startups for Expo.

          "
        />
        <TimelineItem
          date="February 2024"
          title="Signing of MOUs"
          description="Shortlisted Startups will be signing the MOUs and further details will be communicated."
        />
        <TimelineItem
          date="February 2024"
          title="Live Exhibition"
          description="Awaiting Startups to showcase their amazing ideas and products."
        />
      </ol>
    </div>
  );
};

export default Timeline;
