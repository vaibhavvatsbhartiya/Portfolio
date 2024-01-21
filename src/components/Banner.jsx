import React from "react";
import Typed from "react-typed";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="p-3 md:p-20 min-h-[500px] lg:min-h-[650px] flex items-center justify-center  ">
      <div className="max-w-[1280px]  text-xl sm:text-2xl md:text-3xl  flex flex-col items-center text-white ">
        <div className="p-1  sm:m-8">
          Hey, there my name is
          <span className=" pl-2 font-bold text-blue-950 ">Vaibhav Vats.</span>
        </div>
        <div className=" p-1  mt-5 sm:mt-0">
          I'm a
          <Typed
            strings={[
              "Front-End Developer.",
              "React  Developer.",
              "Wordpress Developer.",
            ]}
            typeSpeed={100}
            backSpeed={80}
            attr="placeholder"
            loop
          >
            <input
              className="bg-transparent  text-xl sm:text-3xl md:text-4xl pl-2"
              type="text"
            />
          </Typed>
        </div>
        <div className=" text-sm  sm:text-lg p-2  md:m-4 mt-5 sm:mt-0 ">
          {" "}
          <span className="text-green-400 font-semibold sm:text-xl md:text-2xl text-lg  ">
            Current Status:
          </span>{" "}
          Develop projects using React and Tailwind <br /> CSS. Also, Start
          learning about React Testing Library.{" "}
        </div>
        <div className="mt-10">
          <a
            href="https://docs.google.com/document/d/1seXJAIcPiqKxsK5k4MaYKsvkfrmMJ2y9jOJ63obcRik/edit?usp=sharing"
            target="blank"
          >
            <Button text="Download CV" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
