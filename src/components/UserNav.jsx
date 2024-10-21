import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

const detailsTabs = [
    {
        label: "Basic Details",
        url: "/basic-details"
    },
    {
        label: "Account Details",
        url: "/account-details"
    },
    {
        label: "Lead Details",
        url: "/lead-details"
    },
    {
        label: "Team",
        url: "/team"
    },
    {
        label: "Other Contacts",
        url: "/other-contacts"
    }
]
const UserNav = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const currentSection = searchParams.get('section');
    const [activeDetailsTab, setActiveDetailsTab] = useState(detailsTabs.find(item=>item.url === `/${currentSection}`)?.label ?? "Basic Details"); // Default active details 

    const handleNavigation = (item) => {
        setActiveDetailsTab(item.label)
        navigate(`?section=${item.url.slice(1)}`);
    }

    return <div className=' flex w-full px-2 overflow-x-auto no-scrollbar mr-4 lg:mr-0'>
        {detailsTabs.map((item, index) => (
            <button
                key={index}
                className={`px-4 py-2 rounded-sm transition-colors duration-200 text-nowrap  ${activeDetailsTab === item.label
                    ? " text-blue-900 hover:bg-blue-100 border-b-2 border-blue-900"
                    : " text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                onClick={() => handleNavigation(item)}
            >
                {item.label}
            </button>
        ))}
    </div>
}

export default UserNav