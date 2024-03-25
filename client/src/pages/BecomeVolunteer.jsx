import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";

const BecomeVolunteer = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate data fetching or time-consuming task
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="p-10 flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeo-kx1BtPvPa5Ve9oh64Pk84htgo4pCxq5rcWuYc-OTZFxVQ/viewform?embedded=true"
            width="640"
            height="2000"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
          <div className="p-10">
            <h1 className="text-3xl">Quality Policies</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default BecomeVolunteer;
