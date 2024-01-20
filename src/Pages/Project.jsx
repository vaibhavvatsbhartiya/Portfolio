import React from "react";
import Heading from "../components/Heading";
import Pdata from "../assets/data/ProjectData";
import Card from "../components/Card";

const Project = () => {
  return (
    <div className=" p-3 md:p-5 ">
      <div className="max-w-[1280px]  h-auto p-5 flex flex-col items-center my-10 mx-auto">
        <div className="pb-10">
          <Heading heading="Projects" />
        </div>
        <div className='main_div flex flex-wrap w-full justify-evenly gap-4 sm:p-5'>
        {Pdata.map((e) =>{
            return(
              <Card key={e.id} image={e.image} altText={e.altText} title={e.title} text={e.text}  icon1={e.icon1} icon2={e.icon2}  link1={e.link1} />
            );})}
        </div>
      </div>
    </div>
  );
};

export default Project;
