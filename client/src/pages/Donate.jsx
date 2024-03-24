import React from "react";
import BankDetails from "../components/BankDetails";

const Donate = () => {
  return (
    <>
      <div className="p-20">
        <h1 className="text-4xl font-bold capitalize">
          Serving Humanity without Discrimination
        </h1>
        <div className="p-10 mt-10">
          <h3 className="text-2xl font-bold">Bank Details</h3>
          <BankDetails />
        </div>
      </div>
    </>
  );
};

export default Donate;
