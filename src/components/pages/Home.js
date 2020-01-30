import React from "react";
import Categories from "../utils/Categories";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container categories">
        <Categories />
      </div>
    </div>
  );
};

export default Home;
