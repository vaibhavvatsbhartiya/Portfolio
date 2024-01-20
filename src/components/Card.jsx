import React from "react";
import SmallHeading from "./SmallHeading";

const Card = (props) => {
  return (
    <>
      <div className=" w-auto flex  flex-col sm:flex-row gap-4 justify-center ">
        <div className=" w-full md:w-[300px] lg:w-[350px] bg-gradient-to-l from-red-500 to-blue-500  rounded-3xl ">
          <div className="w-full">
            <img
              src={props.image}
              alt={props.altText}
              className="rounded-t-3xl"
            />
          </div>
          <div className="flex flex-col items-center p-2">
            <div className="pb-2">
              <SmallHeading heading={props.title} />
            </div>
            <div>{props.text}</div>
          </div>
          <div className="flex gap-6 text-3xl justify-center p-4">
            <a href={props.link1} className="cursor-pointer" target="blank">
              {props.icon1}
            </a>
            <a href={props.link2} className="cursor-pointer" target="blank">
              {props.icon2}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
