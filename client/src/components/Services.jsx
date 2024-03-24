import React from "react";

const Services = () => {
  return (
    <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
            <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
              Servants of God
            </p>
            <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
              I am a Servant of God, and as God needs no service, serving His
              creation is serving Him
            </h4>
            <p className="mt-4 mb-4 text-right text-lg leading-6 text-gray-100 dark:text-gray-500">
              - Khan Abdul Ghaffar Khan (Bacha Khan)
            </p>
            <span className="text-2xl font-bold text-gray-200 p-4">
              "I am a Servant of God, and as God needs no service, serving His
              creation is serving Him."
            </span>{" "}
            <p className="mt-1 text-gray-400 leading-snug text-justify">
              <br /> This profound statement encapsulates the essence of
              selflessness and devotion. It reflects the understanding that true
              service to the Divine is not through grand gestures or rituals but
              through humble acts of kindness and compassion towards all beings.
              By recognizing the interconnectedness of all life and seeing the
              divine spark within each individual, one can find fulfillment and
              purpose in serving others. In this way, every act of service
              becomes a sacred offering, a way to honor and connect with the
              divine presence that permeates all existence.
            </p>
          </div>
          <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center space-x-4 lg:justify-start">
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src="../src/assets/images/image1.png"
                  alt="1"
                />
                <img
                  className="w-40 rounded-lg shadow-lg md:w-64"
                  width="260"
                  src="../src/assets/images/image2.png"
                  alt="2"
                />
              </div>
              <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                <img
                  className="w-24 rounded-lg shadow-lg md:w-40"
                  width="170"
                  src="../src/assets/images/image3.png"
                  alt="3"
                />
                <img
                  className="w-32 rounded-lg shadow-lg md:w-56"
                  width="200"
                  src="../src/assets/images/image4.png"
                  alt="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
