import { cn } from "@utils/common";
import React from "react";

const Tabs = ({ tabList, handleNavigation, activeTab, badgeClass }) => {
  return (
    <>
      {tabList?.map((item, index) => (
        <button
          key={item.label + index}
          className={`relative px-4 py-2 rounded-sm font-medium transition-colors duration-200 text-nowrap  ${
            activeTab === item.label
              ? " text-blue-900 hover:bg-blue-100 border-b-2 border-blue-900"
              : " text-gray-500 hover:text-gray-900 hover:bg-gray-100"
          }`}
          onClick={() => handleNavigation(item)}
        >
          {item.label}
          {item.badge && (
            <div
              className={cn(
                "w-5 h-5 flex items-center justify-center text-[10px] z-[1] rounded-full absolute -top-1 -right-1",
                {
                  [badgeClass]: !!badgeClass,
                }
              )}
            >
              {item.badge}
            </div>
          )}
        </button>
      ))}
    </>
  );
};

export default Tabs;
