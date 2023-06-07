"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Card from "@/components/Card";
import Avatar from "react-avatar";
import LineGraph from "@/components/LineGraph";
import PieCard from "@/components/PieCard";
import ScheduleCard from "@/components/ScheduleCard";
import {
  BagIcons,
  LikeIcons,
  NotificationIcon,
  SearchIcon,
  TagIcons,
  UserIcons,
} from "@/utils/Icons";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import SideBar from "@/components/SideBar";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });
  if (status === "loading") {
    return "Loading...";
  }

  return (
    <>
      <main className="flex-1 sm:px-6">
        <header className="flex items-center justify-between w-full flex-wrap sm:flex-row flex-col">
          <div className="flex items-center w-full sm:w-0 justify-between">
            <button
              className="lg:hidden navbar-burger flex items-center text-black p-3 order-1"
              onClick={() => setExpand(!expand)}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
            <h2 className="text-black font-bold text-xl mx-auto sm:mx-0">
              Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <form className="flex text-black px-4 py-2 bg-white items-center h-10 w-[250px] rounded-2xl shadow-sm">
              <input
                className="flex-1 outline-none"
                type="text"
                placeholder="Search..."
              />
              <span className="m-3">
                <SearchIcon />
              </span>
              <button hidden>Search</button>
            </form>
            <span>
              <NotificationIcon />
            </span>

            <div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button>
                    <Avatar
                      googleId="118096717852922241760"
                      size="32"
                      round={true}
                      src={session?.user.image}
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <h2 className="text-black px-3 py-2 font-medium">
                        Hi {session?.user.name} 👋
                      </h2>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => signOut()}
                            className={`${
                              active ? "bg-black text-white" : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row gap-8 my-10 flex-wrap">
          <Card
            color={"bg-[#DDEFE0]"}
            title="Total Revenues"
            stats="$2,129,430"
            icon={<BagIcons />}
          />
          <Card
            color={"bg-[#F4ECDD]"}
            title="Total Transactions"
            stats="1,520"
            icon={<TagIcons />}
          />
          <Card
            color={"bg-[#EFDADA]"}
            title="Total Likes"
            stats="9,721"
            icon={<LikeIcons />}
          />
          <Card
            color={"bg-[#DEE0EF]"}
            title="Total Users"
            stats="892"
            icon={<UserIcons />}
          />
        </div>
        <div className="bg-white px-3 py-2 rounded-lg shadow-sm">
          <LineGraph />
        </div>
        <div className="flex flex-col sm:flex-row gap-8 my-10">
          <PieCard />
          <ScheduleCard />
        </div>
      </main>
      {expand && <SideBar setExpand={setExpand} />}
    </>
  );
}
