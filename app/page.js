// "use client"

// import { useState } from "react";

// const chats = [
//   { id: 1, name: "Alice", lastMessage: "Hey there!" },
//   { id: 2, name: "Bob", lastMessage: "How's it going?" },
//   { id: 3, name: "Charlie", lastMessage: "Good morning!" },
// ];

// export default function page() {
//   const [selectedChat, setSelectedChat] = useState(chats[0]);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-80 bg-gray-100 border-r border-gray-300">
//         <div className="p-4 font-bold text-lg border-b border-gray-300">
//           Chats
//         </div>
//         <div>
//           {chats.map((chat) => (
//             <div
//               key={chat.id}
//               onClick={() => setSelectedChat(chat)}
//               className={`p-4 cursor-pointer border-b border-gray-200 hover:bg-gray-200 ${selectedChat.id === chat.id ? "bg-gray-300" : ""
//                 }`}
//             >
//               <div className="font-semibold">{chat.name}</div>
//               <div className="text-sm text-gray-600">{chat.lastMessage}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Chat Window */}
//       <div className="flex-1 flex flex-col">
//         <div className="p-4 border-b border-gray-300 font-bold text-lg">
//           {selectedChat.name}
//         </div>
//         <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
//           <div className="mb-2">
//             <div className="bg-white p-3 rounded-lg inline-block">
//               {selectedChat.lastMessage}
//             </div>
//           </div>
//         </div>
//         <div className="p-4 border-t border-gray-300 flex">
//           <input
//             type="text"
//             placeholder="Type a message"
//             className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
//           />
//           <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full">
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }










import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page