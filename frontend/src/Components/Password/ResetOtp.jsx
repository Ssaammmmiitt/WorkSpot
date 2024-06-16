import React from "react";
import { Link } from "react-router-dom";

const Otp = () => {
  return (
    <body className=" flex flex-col items-center justify-center h-screen w-full">
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md border-2 border-Primary">
        <h1 className="text-2xl font-semibold text-center mb-6">Enter OTP</h1>
        <p className="text-Text text-center mb-4">
          Code sent to ${`abcd@email.xyz`}
        </p>
        <div className="grid grid-cols-5 gap-x-4 my-2">
          <div
            contenteditable="true"
            className="rounded-lg bg-gray-100 cursor-text  w-14 aspect-square flex items-center justify-center"
          >
            <span className="text-Text  ">1</span>
          </div>
          <div
            contenteditable="true"
            className="rounded-lg bg-gray-100 cursor-text  w-14 aspect-square flex items-center justify-center"
          >
            <span className="text-Text  ">9</span>
          </div>
          <div
            contenteditable="true"
            className="rounded-lg bg-gray-100 cursor-text  w-14 aspect-square flex items-center justify-center"
          >
            <span className="text-Text  ">2</span>
          </div>
          <div
            contenteditable="true"
            className="rounded-lg bg-gray-100 cursor-text  w-14 aspect-square flex items-center justify-center"
          >
            <span className="text-Text  ">4</span>
          </div>
          <div
            contenteditable="true"
            className="rounded-lg bg-gray-100 cursor-text  w-14 aspect-square flex items-center justify-center"
          >
            <span className="text-Text  ">3</span>
          </div>
        </div>
        <div className="flex items-center flex-col justify-between mb-6">
          <p className="text-gray-600 text-sm">Didn't receive code?</p>
          <div className="flex items-center space-x-2">
            {/* <button className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500"></button> */}
            <button className="px-3 py-2 text-sm font-medium text-center rounded text-Text hover:text-blue-500 ">
              Request Again (00:00:36)
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <Link
            to="/update-password"
            href="#_"
            className="relative px-6 py-3 font-bold text-black group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-Primary group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
            <span className="relative">Confirm OTP</span>
          </Link>
        </div>
      </div>
    </body>
  );
};

export default Otp;
