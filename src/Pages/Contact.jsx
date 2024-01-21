import React from "react";
import Heading from "../components/Heading";
import { useState } from "react";
import Button from "../components/Button";
import SmallHeading from "../components/SmallHeading";
// import Lady from '../Images/10.png';

const UserContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
  });
  // console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Save to an array or perform other actions with the data
  };

  return (
    <div className=" p-3 md:p-5 ">
      <div className="max-w-[1280px]  h-auto md:p-5 flex flex-col items-center mx-auto">
        <div className="pb-5">
          <Heading heading="Contact Me" />
        </div>
        <div className="main_div flex w-full justify-evenly md:p-5">
          <div className=" m-3 w-full sm:flex sm:flex-col md:flex-row">
            <div className="max-w-md mx-auto p-6 bg-transparent sm:w-full rounded-lg shadow-2xl
            bg-gradient-to-l from-red-300 to-blue-300">
              <h2 className="mb-6">
              <SmallHeading heading='Query' />
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vaibhav vats"
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="abc@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    pattern=".+@gmail\.com"
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="purpose" className="block mb-1">
                    Purpose <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full h-40 p-2 border rounded resize-none"
                    placeholder="need a wordpress website or a react based web application etc... "
                    required
                  ></textarea>
                </div>
                {/* <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button> */}
                <Button text="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContactForm;
