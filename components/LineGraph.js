"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import Select from "./Select";
import { montserrat } from "@/utils/Fonts";

const LineGraph = ({ data }) => {
  console.log("data", data);

  const series = data?.series;
  const categories = data?.categories;

  const options = {
    chart: {
      id: "line-chart",
      toolbar: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: `${montserrat.style.fontFamily}`,
    },
    xaxis: {
      categories: categories,
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: true,
    },
    colors: ["#E9A0A0", "#9BDD7C"],
  };

  console.log("series", series, categories);

  return (
    data && (
      <div>
        <div className="flex flex-col items-start justify-between  px-5 py-2 text-black">
          <h2 className="font-bold text-xl">Top Interactions</h2>
          <p className="text-sm text-gray-700 z-40">
            <Select />
          </p>
        </div>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={300}
        />
      </div>
    )
  );
};

export default LineGraph;
