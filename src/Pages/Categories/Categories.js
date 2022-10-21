import React from "react";
import { useLoaderData } from "react-router-dom";

const Categories = () => {
  const news =  useLoaderData();
  return (
    <div>
      <h2>This is categories news : {news.length}</h2>
    </div>
  );
};

export default Categories;
