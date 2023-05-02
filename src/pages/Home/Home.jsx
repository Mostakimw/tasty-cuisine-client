import React from "react";
import Chefs from "../Chefs/Chefs";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Special from "../Special/Special";
import Info from "../Info/Info";

const Home = () => {
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <div>
      <Banner></Banner>
      <Chefs chefs={chefs}></Chefs>
      <Special></Special>
      <Info></Info>
    </div>
  );
};

export default Home;
