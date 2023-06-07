"use client"
import React from "react";
import ReactApexChart from "react-apexcharts";

const LineGraph = () => {
  const series = [
    {
      name: "Series 1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
    {
      name: "Series 2",
      data: [20, 35, 45, 58, 64, 80, 92, 105, 110],
    },
  ];

  const options = {
    chart: {
      id: "line-chart",
      toolbar: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
    />
  );
};

export default LineGraph;
