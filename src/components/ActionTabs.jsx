import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Tabs from "./Tabs";

const actionTabs = [
  {
    label: "Activity",
    url: "/activity",
  },
  {
    label: "Actionables",
    url: "/actionables",
  },
  {
    label: "Tasks",
    url: "/tasks",
    badge: 2,
  },
  {
    label: "Team",
    url: "/team",
  },
  {
    label: "Notes & File",
    url: "/notes-and-file",
  },
];
const ActionTabs = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentSection = searchParams.get("actionTab");
  const [activeTab, setActiveTab] = useState(
    actionTabs.find((item) => item.url === `/${currentSection}`)?.label ??
      "Activity"
  ); // Default active details

  const handleNavigation = (item) => {
    setActiveTab(item.label);
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("actionTab", item.url.slice(1));
    navigate(currentUrl.pathname + currentUrl.search);
  };

  return (
    <div className="flex w-full px-2 pt-4 overflow-x-auto no-scrollbar mr-4 lg:mr-0">
      <Tabs
        tabList={actionTabs}
        handleNavigation={handleNavigation}
        activeTab={activeTab}
        badgeClass = "bg-red-500 text-white"
      />
    </div>
  );
};

export default ActionTabs;
