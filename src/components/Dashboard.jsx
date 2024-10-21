import React from "react";
import { useParams } from "react-router-dom";
import { HiPlusCircle, HiPlus, HiFilter, HiRefresh } from "react-icons/hi";
import MainNav from "./MainNav";
import { TiTick } from "react-icons/ti";
import UserSection from "./UserSection";
import { RadixTooltip } from "./RadixTooltip";
import ActionSection from "./ActionSection";

const icon = [
  {
    label: "Add User",
    icon: <HiPlusCircle />,
    url: "/add-user",
  },
  {
    label: "Add",
    icon: <HiPlus />,
    url: "/add",
  },
  {
    label: "Filter",
    icon: <HiFilter />,
    url: "/filter",
  },
  {
    label: "Refresh",
    icon: <HiRefresh />,
    url: "/refresh",
  },
];

function Dashboard() {
  const { userId } = useParams();

  return (
    <div className="flex-1 md:ml-16 mt-[104px]">
      <div className="flex justify-between">
        <div className="w-full flex items-center justify-between gap-2 border-b border-gray-200 p-4">
          <h1 className="text-xl md:text-2xl font-semibold">{userId}</h1>
          <div className="flex items-center gap-1">
            {icon.map((item, index) => (
              <RadixTooltip
                key={item.url}
                tooltipTrigger={
                  <button
                    key={index}
                    className="px-2 py-2 text-2xl rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  >
                    {item.icon}
                  </button>
                }
                tooltipContent={item.label}
                arrow={true}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between flex-col md:flex-row gap-4 border-b border-gray-200 p-3">
        <div className="w-full flex items-center gap-4 overflow-x-auto">
          <MainNav />
        </div>
        <button className="flex w-full md:w-auto items-center gap-2 px-4 bg-blue-900/95 hover:bg-blue-950 text-white text-nowrap p-2">
          <span>
            <TiTick />
          </span>
          Mark as Converted
        </button>
      </div>
      <div className="w-full flex flex-col lg:flex-row border-b border-gray-200 ">
        <UserSection />
        <ActionSection />
      </div>
    </div>
  );
}

export default Dashboard;
