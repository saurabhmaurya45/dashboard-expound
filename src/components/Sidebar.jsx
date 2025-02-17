import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HiSquares2X2,
  HiBookmark,
  HiBriefcase,
  HiBuildingOffice2,
  HiUsers,
  HiChartBar,
  HiDocument,
} from "react-icons/hi2";
import { RadixTooltip } from "./custom/RadixTooltip";

const sidebarItems = [
  {
    label: "Dashboard",
    icon: HiSquares2X2,
    url: "/dashboard/LE-010071?actionTab=activity&section=other-contacts",
  },
  { label: "Bookmarks", icon: HiBookmark, url: "/bookmarks" },
  { label: "Projects", icon: HiBriefcase, url: "/projects" },
  { label: "Buildings", icon: HiBuildingOffice2, url: "/buildings" },
  { label: "Users", icon: HiUsers, url: "/users" },
  { label: "Analytics", icon: HiChartBar, url: "/analytics" },
  { label: "Reports", icon: HiDocument, url: "/reports" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (url) => {
    navigate(url);
  };

  return (
    <>
      <aside className="hidden md:flex p-2 pt-4 w-16 h-[calc(100vh-48px)] border-r items-center flex-col gap-4 fixed left-0 top-[48px] bg-white">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.url.split("?")[0];
          return (
            <RadixTooltip
              key={item.label}
              tooltipTrigger={
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.url)}
                  className={`p-2 flex items-center text-2xl justify-center rounded-md cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-950 text-white"
                      : "text-black hover:bg-gray-400/90 hover:text-white/90"
                  }`}
                  aria-label={item.label}
                >
                  <item.icon />
                </button>
              }
              tooltipContent={item.label}
              position="left"
              arrow={true}
            />
          );
        })}
      </aside>
      <aside className="md:hidden p-2 z-10 w-full fixed bottom-0 bg-gray-100 shadow-lg">
        <div className="flex p-2 w-full overflow-x-scroll items-center bg-transparent flex-row gap-8 ">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.url.split("?")[0];
            return (
              <RadixTooltip
                key={item.label}
                tooltipTrigger={
                  <div className="flex flex-col">
                    <button
                      key={item.label}
                      onClick={() => handleNavigation(item.url)}
                      className={`p-2 flex items-center text-3xl justify-center rounded-md cursor-pointer transition-colors duration-200 ${
                        isActive
                          ? "bg-blue-950 text-white"
                          : "text-black hover:bg-gray-400/90 hover:text-white/90"
                      }`}
                      aria-label={item.label}
                    >
                      <item.icon />
                    </button>
                    <p>{item.label}</p>
                  </div>
                }
                tooltipContent={item.label}
                position="top"
                arrow={true}
              />
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
