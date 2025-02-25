import React from "react";

const Getproduct = async () => {
  try {
    const data = await fetch("http://localhost:3001/tours");
    const posts = await data.json();
    return posts;
  } catch (error) {
    console.error("Veriler çekilemedi:", error);
    return [];
  }
};

export default Getproduct;
