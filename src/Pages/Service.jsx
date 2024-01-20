import React from "react";
import Heading from "../components/Heading";
import Card from "../components/Card";
import Sdata from "../assets/data/ServiceData";


const Service = () => {
  
  return (
    <div className="p-3 md:p-5">
      <div className="max-w-[1280px] h-auto  flex  flex-col sm:p-5 items-center my-10 mx-auto">
        <div className="pb-10">
          <Heading heading="Services" />
        </div>
        <div className="main_div flex flex-wrap w-full justify-evenly gap-4  sm:p-5">
          {Sdata.map((e) =>{
            return(
              <Card key={e.id} image={e.image} altText={e.altText} title={e.title} text={e.text}  icon1={e.icon1} icon2={e.icon2} />
            );})}
        </div>
      </div>
    </div>
  );
};

export default Service;
