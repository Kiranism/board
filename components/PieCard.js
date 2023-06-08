import React from "react";
import PieChart from "./PieChart";
import Select from "./Select";

const PieCard = ({ pieData }) => {
  return (
    <div className="bg-white shadow-sm rounded-2xl px-4 py-3 flex-1 text-black">
      <div className="flex justify-between items-center px-3 py-2">
        <h2 className="font-bold text-xl">Top products</h2>
        <p className="text-sm text-gray-700 z-40">
          <Select />
        </p>
      </div>

      <div className="w-full">{pieData && <PieChart pieData={pieData} />}</div>
    </div>
  );
};

export default PieCard;
