import React from "react";

const ScheduleCard = () => {
  return (
    <div className="bg-white text-black rounded-2xl px-4 py-3 flex-1">
      <div className="flex justify-between items-center px-3 py-2 mb-5">
        <h2 className="font-bold text-xl">Today&apos;s schedule</h2>
        <p className="text-sm text-gray-700">See All</p>
      </div>

      <div className="w-auto flex items-center space-x-3 px-3 py-2">
        <div className="w-1 self-stretch bg-[#9BDD7C]" />
        <div>
          <h2 className="text-[#666666] font-bold">
            Meeting with suppliers from kuta bali
          </h2>
          <p className="text-gray-400 text-sm font-normal">14:00 - 15:00</p>
          <p className="text-gray-400 text-sm font-normal">
            at Sunset Road, Kuta, Bali
          </p>
        </div>
      </div>
      <div className="w-auto flex items-center space-x-3 px-3 py-2">
        <div className="w-1 self-stretch bg-[#6972C3]" />
        <div>
          <h2 className="text-[#666666] font-bold">
            Check operation at Giga Factory 1
          </h2>
          <p className="text-gray-400 text-sm font-normal">18:00 - 20:00</p>
          <p className="text-gray-400 text-sm font-normal">
            at Central Jakarta
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
