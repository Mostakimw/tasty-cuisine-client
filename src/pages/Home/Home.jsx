import React, { Suspense, lazy } from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Special from "../Special/Special";
import Info from "../Info/Info";
import Loading from "../Loading/Loading";

const LazyChefs = lazy(() => import("../Chefs/Chefs"));

const Home = () => {
  const chefs = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<Loading />}>
        <LazyChefs chefs={chefs}></LazyChefs>
      </Suspense>
      <Special></Special>
      <Info></Info>
    </div>
  );
};

export default Home;
