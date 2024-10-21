import React, { useState } from 'react'

const button = [
    {
        label: "New",
        url: "/new"
    },
    {
        label: "Contacted",
        url: "/contacted"
    },
    {
        label: "Nurturing",
        url: "/nurturing"
    },
    {
        label: "Qualified",
        url: "/qualified"
    },
    {
        label: "Unqualified",
        url: "/unqualified"
    },
]

const MainNav = () => {
    const [activeButton, setActiveButton] = useState("New"); // Default active button
    return (
        <>
            {button.map((item, index) => (
                <button
                    key={index}
                    className={`px-4 py-2 rounded-sm transition-colors duration-200 ${activeButton === item.label
                        ? "bg-orange-100 text-orange-600 hover:bg-orange-200"
                        : "bg-gray-300 text-gray-500 hover:text-gray-900 hover:bg-gray-500"
                        }`}
                    onClick={() => setActiveButton(item.label)}
                >
                    {item.label}
                </button>
            ))}
        </>
    )
}

export default MainNav