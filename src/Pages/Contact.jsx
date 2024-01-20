import React from "react";
import Heading from "../components/Heading";

const Contact = () => {
  return (
    <div className=" p-3 md:p-5 ">
      <div className="max-w-[1280px] border border-black h-auto p-5 flex flex-col items-center my-10 mx-auto">
        <div className="pb-5">
          <Heading heading="Contact Me" />
        </div>
        <div className='main_div flex border border-black w-full justify-evenly p-5'>
        Contact form shown here
        </div>
      </div>
    </div>
  );
};

export default Contact;
