import faqData from "../assets/data/FaqData";
import Heading from "../components/Heading";
import React, { useState } from "react";


const Faq = () => {
  
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className=" md:p-5 ">
      <div className="max-w-[1280px]  h-auto md:p-5 flex flex-col items-center my-10 mx-auto">
        <div className="">
          <Heading heading="FAQ's" />
        </div>
        <div className="main_div flex  w-full justify-evenly p-5">
          <div className="container mx-auto p-4 lg:w-2/3 w-full">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-4">
                <div
                  className="cursor-pointer bg-white rounded-lg shadow-md p-4"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {expandedIndex === index && (
                    <p className="mt-2 text-gray-700">{faq.answer}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
