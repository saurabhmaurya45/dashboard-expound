import React from "react";
import { FaPhoneAlt, FaRegCalendarAlt, FaClock } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";

const tasks = [
  {
    id: 1,
    type: "call",
    title: "Arrange a Call",
    startDate: "27/08/2024",
    startTime: "12:00pm",
    endDate: "27/08/2024",
    endTime: "01:00pm",
  },
  {
    id: 2,
    type: "email",
    title: "Follow Up Email",
    startDate: "27/08/2024",
    startTime: "02:00pm",
    endDate: null,
    endTime: null,
  },
  {
    id: 3,
    type: "call",
    title: "Arrange a Call",
    startDate: "28/08/2024",
    startTime: "10:00am",
    endDate: "28/08/2024",
    endTime: "10:30am",
  },
];

const TaskCard = ({ task }) => {
  const getIcon = () => {
    if (task.type === "call") {
      return <FaPhoneAlt className="text-green-500 text-xl" />;
    } else {
      return <BsChatFill className="text-orange-500 text-xl" />;
    }
  };

  const formatDateTime = (date, time) => {
    if (!date || !time) return null;
    return `${date} ${time}`;
  };

  return (
    <div className="w-full md:w-[240px] flex flex-col bg-white rounded-sm border text-sm">
      <div className=" md:w-[240px] flex items-center border-b py-1 ">
        <div className="p-2 py-1 flex items-center gap-2">
          {getIcon()}
          <h3 className="text-gray-800 font-semibold ">{task.title ?? ""}</h3>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="p-2 flex flex-col gap-1 min-w-28">
          <h3 className="font-semibold ">Start</h3>
          <div className="flex items-center gap-1 text-gray-700/60">
            <FaRegCalendarAlt />
            <span>{task.startDate ?? ""}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-700/60">
            <FaClock />
            <span>{task.startTime ?? ""}</span>
          </div>
        </div>
        <div className="p-2 flex flex-col gap-1 min-w-28">
          <h3 className="font-semibold ">End</h3>
          <div className="flex items-center gap-1 text-gray-700/60">
            <FaRegCalendarAlt />
            <span>{task.endDate ?? ""}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-700/60">
            <FaClock />
            <span>{task.endTime ?? ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpcomingTasks = () => {
  return (
    <div className="flex flex-col p-4 w-full">
      <div className="flex items-center justify-between text-blue-900">
        <h2 className="text-base font-semibold">Upcoming & Overdue</h2>
        <button className="underline font-semibold p-2 px-4 rounded text-blue-800 hover:text-blue-950  focus:outline-none focus:shadow-outline">
          View All
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 py-2 overflow-scroll no-scrollbar">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingTasks;
