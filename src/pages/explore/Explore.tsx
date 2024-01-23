import React from "react";
import { Categories } from "./components/Categories";
import RecentJob from "./components/RecentJob";
import Hero2 from "./components/Hero2";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

const Explore = () => {
  return (
    <div>
      <Navbar />
      <Hero2 />
      <Categories />
      <RecentJob />
      <Footer />
    </div>
  );
};

export default Explore;
