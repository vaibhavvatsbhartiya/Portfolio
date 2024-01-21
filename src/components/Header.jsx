import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" p-3 ">
      <div className=" max-w-[1280px] items-center py-5 mx-auto  text-xl flex justify-between text-white ">
        <div className="cursor-pointer text-[20px] sm:text-2xl md:text-3xl font-bold hover:text-blue-900">Vaibhav Vats</div>

        <ul className="hidden md:flex gap-10  font-semibold ">
          <li className="hover:text-blue-900 cursor-pointer">Home</li>
          <li className="hover:text-blue-900 cursor-pointer">About</li>
          <li className="hover:text-blue-900 cursor-pointer">Projects</li>
          <li className="hover:text-blue-900 cursor-pointer">Services</li>
          <li className="hover:text-blue-900 cursor-pointer">Contact me</li>
        </ul>

        {/* Responsive Menu */}
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="font-semibold md:hidden block "
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="font-semibold md:hidden block"
          />
        )}

        {/* menu bar for small devices */}
        <ul className={`duration-300 md:hidden p-0 cursor-pointer font-semibold bg-black fixed top-[108px] w-full h-screen
        ${toggle ? 'left-[0]' : 'left-[-100%]'} `}>
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <li className="p-4">Projects</li>
          <li className="p-4">Services</li>
          <li className="p-4">Contact me</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
