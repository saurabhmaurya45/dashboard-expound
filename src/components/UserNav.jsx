import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Tabs from "./Tabs";

const detailsTabs = [
  {
    label: "Basic Details",
    url: "/basic-details",
  },
  {
    label: "Account Details",
    url: "/account-details",
  },
  {
    label: "Lead Details",
    url: "/lead-details",
  },
  {
    label: "Team",
    url: "/team",
  },
  {
    label: "Other Contacts",
    url: "/other-contacts",
  },
];
const UserNav = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentSection = searchParams.get("section");
  const [activeDetailsTab, setActiveDetailsTab] = useState(
    detailsTabs.find((item) => item.url === `/${currentSection}`)?.label ??
      "Basic Details"
  ); // Default active details

  const handleNavigation = (item) => {
    setActiveDetailsTab(item.label);
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("section", item.url.slice(1));
    navigate(currentUrl.pathname + currentUrl.search);
  };

  return (
    <div className="flex w-full px-2 overflow-x-auto no-scrollbar pt-4 mr-4 lg:mr-0">
      <Tabs
        tabList={detailsTabs}
        handleNavigation={handleNavigation}
        activeTab={activeDetailsTab}
      />
    </div>
  );
};

export default UserNav;
