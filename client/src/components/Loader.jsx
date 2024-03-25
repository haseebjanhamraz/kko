import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader flex flex-col justify-center items-center p-10">
      <PuffLoader color="#ff0000" size={100} className="text-4xl" />
      <p className="text-xl text-gray-500 mt-4"> Loading...</p>
    </div>
  );
};

export default Loader;
