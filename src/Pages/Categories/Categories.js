import React from "react";
import { useLoaderData } from "react-router-dom";
import SummeryCard from "../../components/SummeryCard/SummeryCard";

const Categories = () => {
  const categoriesNews = useLoaderData();
  // console.log(categoriesNews);

  return (
    <div>
      <h2>This is categories news : {categoriesNews.length}</h2>
      {categoriesNews.map((category) => (
        <SummeryCard key={category._id} news={category}></SummeryCard>
      ))}
    </div>
  );
};

export default Categories;
