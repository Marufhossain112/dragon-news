import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <h2>This is home news : {news.length}</h2>
    </div>
  );
};

export default Home;
