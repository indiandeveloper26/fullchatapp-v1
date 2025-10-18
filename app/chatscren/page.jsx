// "use client";
// import React, { useState } from "react";
// import ChatTabs from "../component/allmess";




// const ChatScreen = () => {
//     const [activeTab, setActiveTab] = useState("All");

//     const allChats = [
//         { id: 1, name: "Rahul", message: "Hey, how are you?" },
//         { id: 2, name: "Priya", message: "Let’s meet today!" },
//         { id: 3, name: "Team Alpha", message: "Project update", isGroup: true },
//     ];

//     // const unreadChats = allChats.filter((chat) => chat.id === 1);
//     const unreadChats = allChats.filter((chat) => chat.id === 1);
//     const favoriteChats = allChats.filter((chat) => chat.id === 2);
//     const groupChats = allChats.filter((chat) => chat.isGroup);

//     const renderChats = () => {
//         switch (activeTab) {
//             case "Unread":
//                 return unreadChats;
//             case "Favorite":
//                 return favoriteChats;
//             case "Group":
//                 return groupChats;
//             default:
//                 return allChats;
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto bg-gray-50 min-h-screen shadow-lg rounded-xl">
//             <ChatTabs onTabChange={setActiveTab} />

//             <div className="p-3">
//                 {renderChats().map((chat) => (
//                     <div
//                         key={chat.id}
//                         className="flex items-center justify-between bg-white rounded-xl shadow-sm p-3 mb-2 hover:bg-green-50 transition-all"
//                     >
//                         <div>
//                             <h3 className="text-sm font-semibold text-gray-800">{chat.name}</h3>







