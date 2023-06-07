"use client";
import {
  DashboardIcon,
  ScheduleIcon,
  Settings,
  TagIcons,
  UserRound,
} from "@/utils/Icons";
import Link from "next/link";
import React from "react";

const SideBar = ({ setExpand }) => {
  const hideDiv = () => {
    setExpand(false);
  };
  return (
    <aside className="fixed top-0 left-0 h-[calc(100vh-50px)] w-64 flex flex-col overflow-y-auto border-r bg-black px-5 py-8 text-white rounded-xl m-6">
      <h2 className="mx-3 font-bold text-3xl">
        Board.{" "}
        <span
          className="absolute top-2 right-2 text-xl inline-block h-6 w-6 rounded-full border-white sm:hidden"
          onClick={hideDiv}
        >
          X
        </span>
      </h2>

      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="space-y-6">
          <div className="space-y-3">
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 space-x-4  hover:text-gray-400"
              href="#"
            >
              <DashboardIcon className="hover:text-black" />
              <span className="mx-2 text-sm font-bold">Dashboard</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300  space-x-4  hover:text-gray-400"
              href="#"
            >
              <TagIcons fill="white" />
              <span className="mx-2 text-sm font-normal">Transactions</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 space-x-4  hover:text-gray-400"
              href="#"
            >
              <ScheduleIcon />
              <span className="mx-2 text-sm font-normal">Schedules</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-white transition-colors duration-300 space-x-4  hover:text-gray-400"
              href="#"
            >
              <UserRound />
              <span className="mx-2 text-sm font-normal">Users</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 space-x-4 py-2 text-white transition-colors duration-300  hover:text-gray-400"
              href="#"
            >
              <Settings />
              <span className="mx-2 text-sm font-normal">Settings</span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
