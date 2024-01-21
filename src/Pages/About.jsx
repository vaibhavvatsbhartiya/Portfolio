import React from "react";
import Heading from "../components/Heading";
// import SmallHeading from "../components/SmallHeading";
import img from "../assets/image/V2.png";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <div className="max-w-[1280px]   h-auto p-3 md:p-5 flex flex-col items-center mx-auto">
      <div className="pb-10">
        <Heading heading="About me" />
      </div>
      <div className="main_div flex flex-col md:flex-row w-full items-center justify-evenly gap-2 sm:p-5">
        <div className="left_div h-auto max-w-[300px] sm:max-w-full">
          <img src={img} alt="my_pic" />
        </div>
        <div className="right_div w-full md:w-1/2  flex flex-col justify-center gap-6 text-sm sm:text-lg text-white">
          <p className="pt-5 ">
            Hey there, My name is Vaibhav Vats. I am a web developer, frontend
            developer and a wordpress developer. I am pursuing btech degree in
            Computer Science. Freelance web design and design is what I'm doing
            presently.
          </p>
          <p >
            I have experience with <span className="font-bold"> React, Tailwind CSS, HTML, CSS, Js, Bootstrap
            and Wordpress.</span> So, if you are interested in a website, a web design,
            Html & CSS design or a single page web application based on React,
            or a Wordpress based website then feel free to let me know I will
            happy to work with you. Thank you.
          </p>
          <div className="flex text-3xl gap-10 p-4 max-w-[300px] mx-auto ">
            {/* <a href="" className="cursor-pointer hover:scale-125" target="blank"><TbBrandFiverr /></a> */}
            {/* <a href="" className="cursor-pointer hover:scale-125" target="blank"><SiUpwork /></a> */}
            <a href="https://github.com/vaibhavvatsbhartiya/" className="cursor-pointer hover:text-black hover:scale-150 " target="blank"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/vaibhav-vats-" className="cursor-pointer hover:text-blue-800 hover:scale-150" target="blank"><BsLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
