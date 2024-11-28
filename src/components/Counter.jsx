"use client";
import React from "react";
import CountUp from "react-countup";
import { FaUserAlt } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdSportsGymnastics, MdOutlineFitnessCenter } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";

const Counter = () => {
  return (
    <section className="my-20 max-w-[80%] mx-auto bg-cyan-100 px-12 py-8 rounded-lg">
      <div className="flex justify-evenly text-center">
        <div className="bg-cyan-200 px-6 py-4 rounded-md ">
          <div className="flex justify-center">
            <FaUserAlt size={50} />
          </div>
          <h1 className="text-4xl my-3 font-medium">
            <CountUp end={999} />
          </h1>
          <h1 className="text-lg font-medium">Happy Members</h1>
        </div>
        <div className="bg-cyan-200 px-6 py-4 rounded-md ">
          <div className="flex justify-center">
            <SiGoogleclassroom size={50} />
          </div>
          <h1 className="text-4xl my-3 font-medium">
            <CountUp end={45} />
          </h1>
          <h1 className="text-lg font-medium">Monthly Classes</h1>
        </div>
        <div className="bg-cyan-200 px-6 py-4 rounded-md ">
          <div className="flex justify-center">
            <MdSportsGymnastics size={50} />
          </div>
          <h1 className="text-4xl my-3 font-medium">
            <CountUp end={50} />
          </h1>
          <h1 className="text-lg font-medium">Expart Trainers</h1>
        </div>
        <div className="bg-cyan-200 px-6 py-4 rounded-md ">
          <div className="flex justify-center">
            <MdOutlineFitnessCenter size={50} />
          </div>
          <h1 className="text-4xl my-3 font-medium">
            <CountUp end={70} />
          </h1>
          <h1 className="text-lg font-medium">Fitness Programs</h1>
        </div>
        <div className="bg-cyan-200 px-6 py-4 rounded-md ">
          <div className="flex justify-center">
            <RiDiscountPercentLine size={50} />
          </div>
          <h1 className="text-4xl my-3 font-medium">
            <CountUp end={100} /> %
          </h1>
          <h1 className="text-lg font-medium">Success Rate</h1>
        </div>
      </div>
    </section>
  );
};

export default Counter;
