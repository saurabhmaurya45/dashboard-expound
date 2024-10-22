import React from "react";
import UpcomingTasks from "./TaskCard";
import ActionTabs from "./ActionTabs";
import EmailForm from "./EmailForm";
import { FaPhone } from "react-icons/fa";
import { BiBulb } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { useSearchParams } from "react-router-dom";
import FadeInOutWrapper from "./custom/FadeInOutWrapper";
import EmptyState from "./custom/EmptyState";

const LineIcon = () => (
  <svg width="10" height="70" xmlns="http://www.w3.org/2000/svg" opacity={0.5}>
    <line
      x1="5"
      y1="0"
      x2="5"
      y2="70"
      stroke="currentColor"
      stroke-width="1"
      stroke-dasharray="6,5"
    />
  </svg>
);

const stageHistory = [
  {
    date: "28/08",
    type: "Team",
    time: "09:00am",
    comment: "Created Jiya Gopal",
  },
  {
    date: "29/08",
    type: "Individual",
    time: "10:30am",
    comment: "Assigned to Aniruddha Naidu",
  },
  {
    date: "30/08",
    type: "Event",
    time: "11:00am",
    comment: "Arrange a Call",
  },
  {
    date: "31/08",
    type: "Lead Update",
    time: "02:00pm",
    comment: "Marked as Contacted",
  },
];

const ActivityAction = () => {
  return (
    <div className="flex items-center gap-5 p-5 flex-wrap">
      <button className="flex items-center rounded-md border shadow-sm">
        <span className="p-[10px] text-2xl bg-gray-200 rounded-l-md">
          <FaPhone />
        </span>
        <span className="p-[10px] px-4 rounded-r-md font-medium">
          Log a Call
        </span>
      </button>
      <button className="flex items-center rounded-md border shadow-sm">
        <span className="p-[10px] text-2xl bg-red-200/80 text-orange-600 rounded-l-md">
          <TfiEmail />
        </span>
        <span className="p-[10px] px-4 rounded-r-md font-medium">Email</span>
      </button>
      <button className="flex items-center border rounded-md shadow-sm">
        <span className="p-[10px] text-2xl bg-gray-200 rounded-l-md">
          <BiBulb />
        </span>
        <span className="p-[10px] px-4 font-medium rounded-r-md">Event</span>
      </button>
    </div>
  );
};

const ActionSection = () => {
  const [searchParams] = useSearchParams();
  const actionTab = searchParams.get("actionTab");

  return (
    <div className="w-full lg:w-[55%] flex flex-col items-center border-gray-200 ">
      <div className="w-full flex flex-col md:flex-row border-b border-gray-200">
        <div className="md:w-[65%] border-r">
          <div className="w-full flex items-center gap-4 border-b border-gray-200 pb-0">
            <ActionTabs />
          </div>
          <FadeInOutWrapper isOpen={actionTab === "activity"}>
            <ActivityAction />
            <EmailForm />
          </FadeInOutWrapper>
        </div>
        <div className="md:w-[35%] border-t md:border-t-0">
          <div className="w-full flex items-center gap-4 border-b border-gray-200 p-4">
            <h1 className="font-medium leading-[26px] text-blue-900">
              Stage History
            </h1>
          </div>
          <div className="relative p-4 overflow-y-scroll">
            <h1 className="text-blue-950 font-semibold mb-4">August 2024</h1>
            <div className="overflow-y-scroll">
              {stageHistory.map((activity, index) => (
                <div key={index} className="flex gap-4 text-sm">
                  <p className="text-black/50">{activity.date}</p>
                  <div className="relative">
                    <div className="w-3 h-3 border-2 border-blue-950 rounded-full z-[2]" />
                    <span className="relative left-[1px]">
                      <LineIcon />
                    </span>
                  </div>
                  <div>
                    <p className="flex gap-1 text-black/50">
                      <span className="text-nowrap">{activity.type}</span>
                      <span>|</span>
                      <span>{activity.time}</span>
                    </p>
                    <p className="font-medium">{activity.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <UpcomingTasks />
    </div>
  );
};

export default ActionSection;
