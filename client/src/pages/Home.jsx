import React from "react";
import Carousel from "../components/Carousel";
import Nav from "../pages/partials/Nav";
import Activities from "../components/Activities";
import Services from "../components/Services";
const Home = () => {
  return (
    <>
      <Carousel />
      <Activities />
      <Services />
    </>
  );
};

export default Home;
