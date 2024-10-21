import React from 'react'
import UserBasicDetails from './UserBasicDetails'
import UserNav from './UserNav'
import AccountContactForm from './AccountContactForm'
import { useSearchParams } from 'react-router-dom'

const UserSection = () => {
    const [searchParams] = useSearchParams();
    const currentSection = searchParams.get('section');

    return (
        <div className="w-full lg:w-[50%] gap-4 lg:border-r border-gray-200 pt-2">
            <div className="flex h-36 items-center justify-between w-full border-b border-gray-200">
                <UserBasicDetails />
            </div>
            <div className="w-full flex items-center gap-4 border-b border-gray-200 pt-4 pb-0">
                <UserNav />
            </div>
            <div>
                <section className="other-contact-section p-2 flex-1 min-h-[23rem]">
                    {currentSection === "other-contacts" && <AccountContactForm />}
                </section>
            </div>
        </div>
    )
}

export default UserSection