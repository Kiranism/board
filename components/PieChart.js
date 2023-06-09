"use client";
import { montserrat } from "@/utils/Fonts";
import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = ({ pieData }) => {
  const series = pieData?.series;
  const labels = pieData?.labels;
  console.log(series, labels, "label ++");
  const totalSum = series?.reduce((sum, data) => sum + data, 0);
  const percentages = series?.map(
    (data) => ((data / totalSum) * 100).toFixed(2) + "%"
  );
  const options = {
    chart: {
      type: "pie",
      toolbar: {
        show: false,
      },
    },
    labels: labels,
    legend: {
      position: "right",
      formatter: function (seriesName, opts) {
        const percentage = percentages[opts.seriesIndex];
        return [
          seriesName,
          "<br/>",
          "<span style='margin-left: 14px; display: inline-block; font-weight:400;'>",
          percentage,
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
            width: 260,
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
      {
        breakpoint: 821,
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
    colors: ["#EE8484", "#9BDD7C", "#F6DC7D"],
  };

  return (
    <div className="flex justify-start px-3 py-2">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height={400}
        width={400}
      />
    </div>
  );
};

export default PieChart;
