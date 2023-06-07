"use client";
import { montserrat } from "@/utils/Fonts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const series = [55, 31, 14];

  const options = {
    chart: {
      type: "pie",
      toolbar: {
        show: false,
      },
    },
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    legend: {
      position: "right",

      formatter: function (seriesName, opts) {
        return [
          seriesName,
          "<br/>",
          "<span style='margin-left: 14px; display: inline-block; font-weight:400;'>",
          opts.w.globals.series[opts.seriesIndex] + "%",
          "</span>",
        ];
      },
      fontSize: "14px",
      fontWeight: "700",
      fontFamily: `${montserrat.style.fontFamily}`,
      dataLabels: {
        enabled: true,
      },
      labels: {
        colors: ["red", "yellow", "pink"],
        useSeriesColors: false,
      },
      markers: {
        radius: 12,
      },
      itemMargin: {
        vertical: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",

            formatter: function (seriesName, opts) {
              return [
                seriesName,
                "-",
                "<span style='display: inline-block; font-weight:400;'>",
                opts.w.globals.series[opts.seriesIndex] + "%",
                "</span>",
              ];
            },
          },
        },
      },
    ],
  };

  return (
    <div className="flex justify-start px-3 py-2">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height={500}
        width={440}
      />
    </div>
  );
};

export default PieChart;
