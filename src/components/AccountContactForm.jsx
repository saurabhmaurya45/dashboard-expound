import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RadixTooltip } from "./RadixTooltip";

const AccountContactForm = () => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedContact, setSelectedContact] = useState("");

  const handleSelectChange = (event, setter) => {
    setter(event.target.value);
  };

  // Dummy data for accounts
  const accountsData = [
    {
      id: "pranab",
      name: "Pranab Biyani",
      position: "Associate VP",
      role: "Sales Head",
    },
    {
      id: "nayan",
      name: "Nayan Johal",
      position: "Associate VP",
      role: "Sales Head",
    },
    {
      id: "john",
      name: "John Doe",
      position: "Senior Manager",
      role: "Marketing Head",
    },
    {
      id: "alice",
      name: "Alice Johnson",
      position: "Project Manager",
      role: "Operations Head",
    },
    {
      id: "bob",
      name: "Bob Smith",
      position: "Senior Developer",
      role: "Technical Lead",
    },
    {
      id: "charlie",
      name: "Charlie Brown",
      position: "Business Analyst",
      role: "Strategy Head",
    },
    {
      id: "diana",
      name: "Diana Prince",
      position: "HR Manager",
      role: "People Operations",
    },
  ];
  const accountOption = [
    "Alpha Industries",
    "Beta Technologies",
    "Gamma Solutions",
    "Delta Innovations",
    "Epsilon Corp",
  ];
  const contactOption = [
    "Alice Green",
    "Bob White",
    "Charlie Black",
    "Diana Prince",
    "Ethan Hunt",
  ];

  return (
    <>
      <form className="flex w-full">
        <div className="flex w-[50%] flex-col p-2">
          <label className="font-semibold p-2">Account</label>
          <div className="relative">
            <select
              className="w-full p-2 ml-1 appearance-none rounded-sm bg-gray-100/10 shadow-sm outline outline-[1.5px] outline-gray-200 text-gray-400"
              value={selectedAccount}
              onChange={(event) =>
                handleSelectChange(event, setSelectedAccount)
              }
            >
              <option value="">Select Option</option>
              {accountOption.map((account, index) => (
                <option key={index} value={account} className="text-gray-500">
                  {account}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <RiArrowDropDownLine size={25} color="#6b7280 " />
            </div>
          </div>
        </div>
        <div className="flex w-[50%] flex-col p-2">
          <label className="font-semibold p-2">Contact</label>
          <div className="relative flex items-center">
            <select
              className="w-full p-2 ml-1 rounded-sm appearance-none bg-gray-100/10 shadow-sm outline outline-[1.5px] outline-gray-200 text-gray-400"
              value={selectedContact}
              onChange={(event) =>
                handleSelectChange(event, setSelectedContact)
              }
            >
              <option value="">Select Option</option>
              {contactOption.map((contact, index) => (
                <option key={index} value={contact} className="text-gray-500">
                  {contact}
                </option>
              ))}
            </select>
            <RadixTooltip
              tooltipTrigger={
                <button className="absolute inset-y-0 right-0 flex items-center text-gray-500 hover:text-gray-900 mr-1 mt-[2px] text-xl p-2 w-9 h-9 hover:bg-gray-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1z" />
                  </svg>
                </button>
              }
              tooltipContent="Add Contact No"
              arrow={true}
              position="right"
            />
          </div>
        </div>
      </form>

      <ul className="p-2 flex-1 h-96 overflow-y-scroll">
        {accountsData.map((account) => (
          <li key={account.id} className="p-2 flex justify-between">
            <div>
              <h4 className="font-semibold text-blue-400">{account.name}</h4>
              <p className="text-sm text-gray-400">{account.position}</p>
            </div>
            <h4 className="font-semibold">{account.role}</h4>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AccountContactForm;
