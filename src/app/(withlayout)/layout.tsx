import React from 'react'

const MainLayout = () => {
    return (
        <div><nav className="px-16 pt-8 flex justify-between items-center">
            <h2 className="font-extrabold text-2xl text-gray-700">MD ZAHED <span className="text-blue-600">IQBAL</span></h2>
            <ul className="grid grid-cols-5 gap-2 text-gray-600 font-bold">
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Service
                </li>
                <li>
                    Skills
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav></div>
    )
}

export default MainLayout