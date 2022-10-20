import React, { useEffect, useState } from "react";

const LeftSideNav = () => {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h2>This is Left</h2>
    </div>
  );
};

export default LeftSideNav;
