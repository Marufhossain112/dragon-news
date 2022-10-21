import React from "react";
import { useLoaderData } from "react-router-dom";
import SummeryCard from "../../components/SummeryCard/SummeryCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h2>This is home news : {allNews.length}</h2>
      {allNews.map((news) => (
        <SummeryCard key={news._id} news={news}></SummeryCard>
      ))}
    </div>
  );
};

export default Home;
