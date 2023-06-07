import React from "react";

const Card = ({ color, title, stats, icon }) => {
  return (
    <div
      className={`rounded-2xl shadow-sm px-4 py-3 flex-1 text-black ${
        color ? color : "bg-black"
      }`}
    >
      <span className="flex items-center justify-end m-2">{icon}</span>
      <h2>{title}</h2>
      <p className="font-bold">{stats}</p>
    </div>
  );
};

export default Card;
