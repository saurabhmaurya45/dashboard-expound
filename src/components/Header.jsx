import { FiBell } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { CiCalendar, CiSettings } from "react-icons/ci";
import { TbGridDots, TbMinusVertical } from "react-icons/tb";
import { Link } from "react-router-dom";
import { RadixTooltip } from "./RadixTooltip";

const iconsList = [
  {
    Icon: CiCalendar,
    url: "#",
    label: "Calender",
  },
  {
    Icon: CiSettings,
    url: "#",
    label: "Settings",
  },
  {
    Icon: FiBell,
    url: "#",
    label: "Notification",
  },
];
function Header() {
  return (
    <header className="flex w-full items-center justify-between p-2 px-3 md:px-6  bg-blue-950 text-white fixed top-0 z-50">
      <div className="flex items-center gap-6 font-semibold text-2xl cursor-pointer">
        <span>
          <TbGridDots />
        </span>
        <h1 className="">Test</h1>
      </div>
      <div className="flex items-center gap-2">
        <RadixTooltip
          tooltipTrigger={
            <Link to="#">
              <div className="cursor-pointer mr-4 md:mr-0  w-8 h-8 flex items-center justify-center bg-white text-blue-950 p-1 rounded hover:text-blue-700">
                <FaSearch />
              </div>
            </Link>
          }
          hideOnClick={false}
          tooltipContent="Search"
          arrow={true}
          arrowClassName="!fill-gray-200"
          tooltipContentClassName="bg-gray-200 text-black"
        />
        <div className="hidden md:flex items-center gap-3 text-white/60">
          <span className=" text-white flex items-center">
            <TbMinusVertical size={32} />
          </span>
          {iconsList.map((item, index) => (
            <RadixTooltip
              tooltipTrigger={
                <Link to={item.url} key={index}>
                  <div className="w-9 h-9 text-2xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 rounded-md">
                    <item.Icon />
                  </div>
                </Link>
              }
              tooltipContent={item.label}
              hideOnClick={false}
              arrow={true}
              arrowClassName="!fill-gray-200"
              tooltipContentClassName="bg-gray-200 text-black"
            />
          ))}
          <span className=" text-white flex items-center">
            <TbMinusVertical size={32} />
          </span>
        </div>
        <div className="w-8 h-8 rounded-full cursor-pointer">
          <img
            className="w-8 h-8 rounded-full"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
