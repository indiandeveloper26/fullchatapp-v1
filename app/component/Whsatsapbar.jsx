"use client";
import { useState } from "react";
import { FaUserPlus, FaEllipsisV } from "react-icons/fa";

export default function SimpleWhatsAppTopBar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="flex items-center justify-between p-3 bg-gray-900 text-white shadow-md relative">
            {/* Left: Empty for now */}
            <div></div>

            {/* Center: WhatsApp text */}
            <div className="font-bold text-lg">WhatsApp</div>

            {/* Right: Add button + 3-dot menu */}
            <div className="flex gap-2 items-center">
                <button className="p-2 rounded-full bg-green-600 hover:bg-green-700">
                    <FaUserPlus size={18} />
                </button>
                <button
                    className="p-2 rounded-full hover:bg-gray-700"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <FaEllipsisV size={18} />
                </button>
            </div>

            {/* Dropdown menu */}
            {showMenu && (
                <div className="absolute top-14 right-3 bg-gray-800 rounded shadow-lg p-2 z-50">
                    <ul className="flex flex-col gap-2 text-white text-sm">
                        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Option 1</li>
                        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Option 2</li>
                        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Option 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
