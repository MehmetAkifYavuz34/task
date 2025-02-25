"use client";
import Getproduct from "@/app/api/getproduct";
import TourCard from "@/app/components/tourcard/page";
import React, { useEffect, useState } from "react";

const Tours = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    Getproduct().then((data) => {
      setTours(data);
    });
  });
  return (
    <div>
      <TourCard />
    </div>
  );
};

export default Tours;
