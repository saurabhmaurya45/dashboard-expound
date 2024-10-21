import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'

const UserBasicDetails = () => {
    return (
        <>
            <div className="flex h-full justify-center flex-col gap-1 px-4 py-2 mb-2">
                <div className="text-orange-400/80 flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                    Contacted
                </div>
                <h2 className="text-2xl font-semibold pb-2">Mamta Naik</h2>
                <div className="flex items-center gap-2 py-2">
                    <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="user" className="w-5 h-5 rounded-full" />
                    <span className="text-gray-400 text-sm">Aniruddha Naidu</span>
                </div>
            </div>
            <div className="flex h-full flex-col items-start gap-4 p-4">
                <span className="text-gray-500/80 flex items-center gap-2">
                    <BiInfoCircle />
                    Pending Actions
                </span>
                <div className="flex items-center gap-2">
                    <button className="bg-green-100 text-green-600 hover:bg-green-200 hover:text-green-700 px-4 py-2 rounded-sm font-semibold text-sm">Create Account</button>
                    <button className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200 hover:text-yellow-700 px-4 py-2 rounded-sm font-semibold text-sm">Create Contact</button>
                </div>
            </div>
        </>
    )
}

export default UserBasicDetails