import React from "react";
import UpcomingTasks from "./TaskCard";
import ActionTabs from "./ActionTabs";
import EmailForm from "./EmailForm";
import { FaPhone } from "react-icons/fa";
import { BiBulb } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { useSearchParams } from "react-router-dom";

const ActivityAction = () => {
  return (
    <div className="flex items-center gap-5 md:gap-10 p-5 flex-wrap">
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
  console.log(actionTab);

  return (
    <div className="w-full lg:w-[55%] flex flex-col items-center border-gray-200 ">
      <div className="w-full flex flex-col md:flex-row border-b border-gray-200">
        <div className="md:w-[70%] border-r">
          <div className="w-full flex items-center gap-4 border-b border-gray-200 pb-0">
            <ActionTabs />
          </div>
          {actionTab === "activity" && (
            <>
              <ActivityAction />
              <EmailForm />
            </>
          )}
        </div>
        <div className="md:w-[30%] border-t md:border-t-0">
          <div className="w-full flex items-center gap-4 border-b border-gray-200 p-2 py-4">
            <h1 className="font-medium leading-[26px] text-blue-950">
              Stage History
            </h1>
          </div>

        </div>
      </div>
      <UpcomingTasks />
    </div>
  );
};

export default ActionSection;
