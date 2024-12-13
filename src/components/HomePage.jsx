import React from "react";
import Banner from "./Banner";
import About from "./About";
import Counter from "./Counter";
import Review from "./Review";
import Services from "./Services";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <About />
      <Counter />
      <Services />
      <Review />
    </div>
  );
};

export default HomePage;
