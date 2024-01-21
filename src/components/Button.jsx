import React from "react";

const Button = (props) => {
  return (
    <div className="text-sm sm:text-lg md:text-xl bg-gradient-to-l from-red-500 to-blue-500 
    font-bold text-white p-3 rounded-3xl cursor-pointer
     hover:text-blue-900  flex justify-center
     hover:bg-gradient-to-r from-red-500 to-blue-500 ">
      <p> {props.text} </p>
    </div>
  );
};

export default Button;
