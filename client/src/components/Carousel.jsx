import React from "react";

const Carousel = () => {
  return (
    <>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <section className="relative bg-[url(../src/assets/BachaKhan.png)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 lg:bg-gray-950/25 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-white text-left  lg:text-7xl uppercase text-6xl font-bold sm:text-5xl">
              Khudai Khidmatgar Organization
              <strong className="bg-rose-500/55 max-w-md rounded-md px-4 text-center text-2xl/snug text-white block font-normal mt-5">
                {" "}
                The continuation of Khudai Khidmatgar Movement
              </strong>
            </h1>
            <p className="text-justify mt-4 max-w-lg text-gray-100 font-semibold rounded-md md:text-white sm:text-white sm:text-xl/snug">
              Khudai Khidmatgar Movement was established by Khan Abdul Ghaffar
              Khan (Bacha Khan), a renowned freedom fighter and social reform A
              renowned scholar, a devoted teacher and an inspiring leader who
              was known for his wisdom, compassion, and generosity. Khudai
              Khidmatgar Organization is the continuation of that great Movement
              led by Baacha Khan Trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Donate
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="h-full"></div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
