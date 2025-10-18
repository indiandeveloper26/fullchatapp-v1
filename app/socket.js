// "use client"
// import { io } from "socket.io-client";

// // ✅ Socket instance
// const socket = io("https://chat-app-server-render-v-1.onrender.com", {
//     transports: ["websocket"],
//     autoConnect: false, // manual connect
// });

// export default socket;



"use client"
import { io } from "socket.io-client";

// ✅ Socket instance
const socket = io("http://localhost:4000", {
    transports: ["websocket"],
    autoConnect: false, // manual connect
});

export default socket;
