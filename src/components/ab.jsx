import React from "react";
import imga from "../assets/image/React_developer.png";
import imgb from "../assets/image/Wordpress.png";
import imgc from "../assets/image/Ai_websites.png";
import SmallHeading from "./SmallHeading";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import { SiFreelancer } from "react-icons/si";
import { FaRegFaceMehBlank } from "react-icons/fa6";

const Card = (props) => {
  return (
    <>
      <div className=" w-auto flex flex-wrap flex-col sm:flex-row gap-4 justify-center ">
        <div className=" w-full md:w-[300px] lg:w-[350px] bg-gradient-to-l from-red-500 to-blue-500  rounded-3xl ">
          <div className="w-full">
            <img src={imga} alt=" React Developer" className="rounded-t-3xl" />
          </div>
          <div className="flex flex-col items-center p-2">
            <div className="pb-2">
              <SmallHeading heading="React Developer" />
            </div>
            <div>
              Engaging with users as a React developer involves showcasing the
              power of interactive and dynamic web solutions. By highlighting
              the seamless user experiences and enhanced interactivity that
              React.js brings, I aim to captivate clients' attention.
            </div>
          </div>
          <div className="flex gap-6 text-3xl justify-center p-4">
            <SiUpwork className="cursor-pointer" />
            <TbBrandFiverr className="cursor-pointer" />
            <SiFreelancer className="cursor-pointer" />
            <FaRegFaceMehBlank className="cursor-pointer" />
          </div>
        </div>
        <div className="w-full md:w-[300px] lg:w-[350px] bg-gradient-to-l from-red-500 to-blue-500  rounded-3xl">
          <div>
            <img src={imgb} alt="img shown here" className="rounded-t-3xl" />
          </div>
          <div className="flex flex-col items-center p-2">
            <div className="pb-2">
              <SmallHeading heading="Wordpress Websites" />
            </div>
            <div>
              When engaging with users as a WordPress developer, my focus is on
              delivering versatile and user-friendly website solutions. I
              highlight the ease of content management, customization options,
              and the scalability that WordPress offers.
            </div>
          </div>
        </div>
        <div className="w-full md:w-[300px] lg:w-[350px] bg-gradient-to-l from-red-500 to-blue-500  rounded-3xl">
          <div>
            <img src={imgc} alt=" img shown here" className="rounded-t-3xl" />
          </div>

          <div className="flex flex-col items-center p-2">
            <div className="pb-2">
              <SmallHeading heading="AI Based Websites" />
            </div>
            <div>
              Interacting with users as an AI-based website developer involves
              emphasizing the transformative power of artificial intelligence in
              enhancing their online presence. I communicate how AI-driven
              features can intelligently personalize user experiences.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
