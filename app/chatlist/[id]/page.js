// // // // // // // "use client";
// // // // // // // import { useContext, useState, useEffect, useRef } from "react";
// // // // // // // import { useParams, useRouter } from "next/navigation";
// // // // // // // import { ChatContext } from "../../context";

// // // // // // // export default function ChatRoom() {
// // // // // // //     const { id } = useParams();
// // // // // // //     const router = useRouter();
// // // // // // //     const { messages, myUsername, sendMessage, onlineUsers, socket, typingUser } =
// // // // // // //         useContext(ChatContext);

// // // // // // //     const [input, setInput] = useState("");
// // // // // // //     const messagesEndRef = useRef();

// // // // // // //     const filtered = messages.filter(
// // // // // // //         (m) =>
// // // // // // //             (m.from === myUsername && m.to === id) ||
// // // // // // //             (m.from === id && m.to === myUsername)
// // // // // // //     );

// // // // // // //     const displayMessages =
// // // // // // //         typingUser === id
// // // // // // //             ? [...filtered, { id: "typing", from: id, message: "" }]
// // // // // // //             : filtered;

// // // // // // //     useEffect(() => {
// // // // // // //         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // // // //     }, [displayMessages]);

// // // // // // //     const handleSend = () => {
// // // // // // //         if (input.trim()) {
// // // // // // //             sendMessage(id, input.trim(), "text");
// // // // // // //             setInput("");
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const handleTyping = (text) => {
// // // // // // //         setInput(text);
// // // // // // //         if (text.trim()) {
// // // // // // //             socket.emit("typing", { from: myUsername, to: otherUser });
// // // // // // //         }
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <div className="flex flex-col h-screen bg-black text-white">
// // // // // // //             <div className="flex justify-between p-4 bg-gray-900">
// // // // // // //                 <div>
// // // // // // //                     <h2 className="font-bold text-lg">{id}</h2>
// // // // // // //                     <p className={`text-sm ${onlineUsers.includes(id) ? "text-green-400" : "text-gray-400"}`}>
// // // // // // //                         {onlineUsers.includes(id) ? "Online" : "Offline"}
// // // // // // //                     </p>
// // // // // // //                 </div>
// // // // // // //                 <button onClick={() => router.back()} className="text-red-500">
// // // // // // //                     Back
// // // // // // //                 </button>
// // // // // // //             </div>

// // // // // // //             <div className="flex-1 overflow-y-auto p-4 space-y-2">
// // // // // // //                 {displayMessages.map((msg) => {
// // // // // // //                     const isMine = msg.from === myUsername;
// // // // // // //                     const isTyping = msg.id === "typing";
// // // // // // //                     return (
// // // // // // //                         <div key={msg.id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
// // // // // // //                             <div className={`p-3 rounded-xl max-w-[60%] ${isMine ? "bg-green-500 rounded-br-none" : "bg-gray-800 rounded-bl-none"}`}>
// // // // // // //                                 {isTyping ? (
// // // // // // //                                     <div className="flex space-x-1">
// // // // // // //                                         <span className="animate-bounce">•</span>
// // // // // // //                                         <span className="animate-bounce delay-150">•</span>
// // // // // // //                                         <span className="animate-bounce delay-300">•</span>
// // // // // // //                                     </div>
// // // // // // //                                 ) : (
// // // // // // //                                     <p>{msg.message}</p>
// // // // // // //                                 )}
// // // // // // //                                 {isMine && !isTyping && <p className="text-xs mt-1">{msg.seen ? "✓✓ Seen" : "✓ Sent"}</p>}
// // // // // // //                             </div>
// // // // // // //                         </div>
// // // // // // //                     );
// // // // // // //                 })}
// // // // // // //                 <div ref={messagesEndRef} />
// // // // // // //             </div>

// // // // // // //             <div className="flex p-4 bg-gray-900">
// // // // // // //                 <input
// // // // // // //                     value={input}
// // // // // // //                     onChange={(e) => handleTyping(e.target.value)}
// // // // // // //                     placeholder="Type a message..."
// // // // // // //                     className="flex-1 p-2 rounded-full bg-gray-800 text-white outline-none"
// // // // // // //                 />
// // // // // // //                 <button onClick={handleSend} className="ml-2 bg-green-500 px-4 py-2 rounded-full font-bold">
// // // // // // //                     Send
// // // // // // //                 </button>
// // // // // // //             </div>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // }






























// // // // // // "use client";
// // // // // // import { useContext, useState, useEffect, useRef } from "react";
// // // // // // import { useParams, useRouter } from "next/navigation";
// // // // // // import { ChatContext } from "../../context/chatcontext.jsx";

// // // // // // export default function ChatRoom() {
// // // // // //     const { id } = useParams();
// // // // // //     const router = useRouter();
// // // // // //     const { messages, myUsername, sendMessage, onlineUsers, socket, typingUser } =
// // // // // //         useContext(ChatContext);

// // // // // //     const [input, setInput] = useState("");
// // // // // //     const [previewImg, setPreviewImg] = useState(null);
// // // // // //     const messagesEndRef = useRef();

// // // // // //     const filtered = messages.filter(
// // // // // //         (m) =>
// // // // // //             (m.from === myUsername && m.to === id) ||
// // // // // //             (m.from === id && m.to === myUsername)
// // // // // //     );

// // // // // //     const displayMessages =
// // // // // //         typingUser === id
// // // // // //             ? [...filtered, { id: "typing", from: id, message: "" }]
// // // // // //             : filtered;

// // // // // //     useEffect(() => {
// // // // // //         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // // // //     }, [displayMessages]);

// // // // // //     const handleSend = () => {
// // // // // //         if (input.trim()) {
// // // // // //             sendMessage(id, input.trim(), "text");
// // // // // //             setInput("");
// // // // // //         }
// // // // // //     };

// // // // // //     const handleTyping = (text) => {
// // // // // //         setInput(text);
// // // // // //         if (text.trim()) {
// // // // // //             socket.emit("typing", { from: myUsername, to: id });
// // // // // //         }
// // // // // //     };

// // // // // //     // ✅ Image pick + upload
// // // // // //     const handlePickImage = async (e) => {
// // // // // //         const file = e.target.files[0];
// // // // // //         if (!file) return;

// // // // // //         const formData = new FormData();
// // // // // //         formData.append("file", file);

// // // // // //         try {
// // // // // //             const res = await fetch("https://chat-app-server-render-v-1.onrender.com/upload", {
// // // // // //                 method: "POST",
// // // // // //                 body: formData,
// // // // // //             });
// // // // // //             const data = await res.json();
// // // // // //             // send image message
// // // // // //             sendMessage(id, data.url, "image");
// // // // // //         } catch (err) {
// // // // // //             console.log("Upload failed:", err);
// // // // // //             alert("Upload failed");
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className="flex flex-col h-screen bg-black text-white">
// // // // // //             {/* Header */}
// // // // // //             <div className="flex justify-between p-4 bg-gray-900">
// // // // // //                 <div>
// // // // // //                     <h2 className="font-bold text-lg">{id}</h2>
// // // // // //                     <p className={`text-sm ${onlineUsers.includes(id) ? "text-green-400" : "text-gray-400"}`}>
// // // // // //                         {onlineUsers.includes(id) ? "Online" : "Offline"}
// // // // // //                     </p>
// // // // // //                 </div>
// // // // // //                 <button onClick={() => router.back()} className="text-red-500">Back</button>
// // // // // //             </div>

// // // // // //             {/* Chat Messages */}
// // // // // //             <div className="flex-1 overflow-y-auto p-4 space-y-2">
// // // // // //                 {displayMessages.map((msg) => {
// // // // // //                     const isMine = msg.from === myUsername;
// // // // // //                     const isTyping = msg.id === "typing";
// // // // // //                     return (
// // // // // //                         <div key={msg.id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
// // // // // //                             <div className={`p-3 rounded-xl max-w-[60%] ${isMine ? "bg-green-500 rounded-br-none" : "bg-gray-800 rounded-bl-none"}`}>
// // // // // //                                 {isTyping ? (
// // // // // //                                     <div className="flex space-x-1">
// // // // // //                                         <span className="animate-bounce">•</span>
// // // // // //                                         <span className="animate-bounce delay-150">•</span>
// // // // // //                                         <span className="animate-bounce delay-300">•</span>
// // // // // //                                     </div>
// // // // // //                                 ) : msg.type === "image" ? (
// // // // // //                                     <img
// // // // // //                                         src={msg.message}
// // // // // //                                         alt="sent"
// // // // // //                                         className="w-48 h-48 object-cover rounded-lg cursor-pointer"
// // // // // //                                         onClick={() => setPreviewImg(msg.message)}
// // // // // //                                     />
// // // // // //                                 ) : (
// // // // // //                                     <p>{msg.message}</p>
// // // // // //                                 )}
// // // // // //                                 {isMine && !isTyping && <p className="text-xs mt-1">{msg.seen ? "✓✓ Seen" : "✓ Sent"}</p>}
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     );
// // // // // //                 })}
// // // // // //                 <div ref={messagesEndRef} />
// // // // // //             </div>

// // // // // //             {/* Input Bar */}
// // // // // //             <div className="flex p-4 bg-gray-900 items-center space-x-2">
// // // // // //                 <input type="file" accept="image/*" onChange={handlePickImage} />
// // // // // //                 <input
// // // // // //                     value={input}
// // // // // //                     onChange={(e) => handleTyping(e.target.value)}
// // // // // //                     placeholder="Type a message..."
// // // // // //                     className="flex-1 p-2 rounded-full bg-gray-800 text-white outline-none"
// // // // // //                 />
// // // // // //                 <button onClick={handleSend} className="ml-2 bg-green-500 px-4 py-2 rounded-full font-bold">Send</button>
// // // // // //             </div>

// // // // // //             {/* Preview Image Modal */}
// // // // // //             {previewImg && (
// // // // // //                 <div
// // // // // //                     className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
// // // // // //                     onClick={() => setPreviewImg(null)}
// // // // // //                 >
// // // // // //                     <img src={previewImg} className="max-h-[90%] max-w-[90%] object-contain" />
// // // // // //                 </div>
// // // // // //             )}
// // // // // //         </div>
// // // // // //     );
// // // // // // }
















// // // // "use client";
// // // // import { useContext, useState, useEffect, useRef } from "react";
// // // // import { useParams, useRouter } from "next/navigation";
// // // // import { ChatContext } from "../../context/chatcontext.jsx";
// // // // import { FaPhone, FaVideo } from "react-icons/fa"; // added react-icons

// // // // export default function ChatRoom() {
// // // //     const { id } = useParams();
// // // //     const router = useRouter();
// // // //     const { messages, myUsername, sendMessage, onlineUsers, startCalling, socket, typingUser } =
// // // //         useContext(ChatContext);

// // // //     const [input, setInput] = useState("");
// // // //     const [previewImg, setPreviewImg] = useState(null);
// // // //     const messagesEndRef = useRef();

// // // //     const filtered = messages.filter(
// // // //         (m) =>
// // // //             (m.from === myUsername && m.to === id) ||
// // // //             (m.from === id && m.to === myUsername)
// // // //     );

// // // //     const displayMessages =
// // // //         typingUser === id
// // // //             ? [...filtered, { id: "typing", from: id, message: "" }]
// // // //             : filtered;

// // // //     useEffect(() => {
// // // //         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // //     }, [displayMessages]);

// // // //     const handleSend = () => {
// // // //         if (input.trim()) {
// // // //             sendMessage(id, input.trim(), "text");
// // // //             setInput("");
// // // //         }
// // // //     };

// // // //     const handleTyping = (text) => {
// // // //         setInput(text);
// // // //         if (text.trim()) {
// // // //             socket.emit("typing", { from: myUsername, to: id });
// // // //         }
// // // //     };

// // // //     const handlePickImage = async (e) => {
// // // //         const file = e.target.files[0];
// // // //         if (!file) return;

// // // //         const formData = new FormData();
// // // //         formData.append("file", file);

// // // //         try {
// // // //             const res = await fetch(
// // // //                 "https://chat-app-server-render-v-1.onrender.com/upload",
// // // //                 { method: "POST", body: formData }
// // // //             );
// // // //             const data = await res.json();
// // // //             sendMessage(id, data.url, "image");
// // // //         } catch (err) {
// // // //             console.log("Upload failed:", err);
// // // //             alert("Upload failed");
// // // //         }
// // // //     };

// // // //     // Placeholder functions for call buttons
// // // //     const startAudioCall = () => {
// // // //         const callType = "video"; // ya "audio"

// // // //         router.push(`/chatlist/${id}/call/${callType}`);

// // // //         // alert("Audio call clicked!");
// // // //         // Integrate WebRTC / Socket.IO logic here
// // // //     };

// // // //     const startVideoCall = () => {
// // // //         // console.log(id)
// // // //         // console.log(id)
// // // //         try {
// // // //             startCalling(id)
// // // //         } catch (error) {
// // // //             console.log('errrostarting calling')
// // // //         }




// // // //         // Integrate WebRTC / Socket.IO logic here
// // // //     };

// // // //     return (
// // // //         <div className="flex flex-col h-screen bg-black text-white">
// // // //             {/* Header */}
// // // //             <div className="flex justify-between p-4 bg-gray-900 items-center">
// // // //                 <div>
// // // //                     <h2 className="font-bold text-lg">{id}</h2>
// // // //                     <p
// // // //                         className={`text-sm ${onlineUsers.includes(id) ? "text-green-400" : "text-gray-400"
// // // //                             }`}
// // // //                     >
// // // //                         {onlineUsers.includes(id) ? "Online" : "Offline"}
// // // //                     </p>
// // // //                 </div>

// // // //                 {/* Call buttons */}
// // // //                 <div className="flex space-x-3">
// // // //                     <button
// // // //                         onClick={startAudioCall}
// // // //                         className="p-2 rounded-full bg-green-600 hover:bg-green-700"
// // // //                     >
// // // //                         <FaPhone size={18} />
// // // //                     </button>
// // // //                     <button
// // // //                         onClick={startVideoCall}
// // // //                         className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
// // // //                     >
// // // //                         <FaVideo size={18} />
// // // //                     </button>
// // // //                     <button onClick={() => router.back()} className="text-red-500 p-2">
// // // //                         Back
// // // //                     </button>
// // // //                 </div>
// // // //             </div>

// // // //             {/* Chat Messages */}
// // // //             <div className="flex-1 overflow-y-auto p-4 space-y-2">
// // // //                 {displayMessages.map((msg) => {
// // // //                     const isMine = msg.from === myUsername;
// // // //                     const isTyping = msg.id === "typing";
// // // //                     return (
// // // //                         <div
// // // //                             key={msg.id}
// // // //                             className={`flex ${isMine ? "justify-end" : "justify-start"}`}
// // // //                         >
// // // //                             <div
// // // //                                 className={`p-3 rounded-xl max-w-[60%] ${isMine
// // // //                                     ? "bg-green-500 rounded-br-none"
// // // //                                     : "bg-gray-800 rounded-bl-none"
// // // //                                     }`}
// // // //                             >
// // // //                                 {isTyping ? (
// // // //                                     <div className="flex space-x-1">
// // // //                                         <span className="animate-bounce">•</span>
// // // //                                         <span className="animate-bounce delay-150">•</span>
// // // //                                         <span className="animate-bounce delay-300">•</span>
// // // //                                     </div>
// // // //                                 ) : msg.type === "image" ? (
// // // //                                     <img
// // // //                                         src={msg.message}
// // // //                                         alt="sent"
// // // //                                         className="w-48 h-48 object-cover rounded-lg cursor-pointer"
// // // //                                         onClick={() => setPreviewImg(msg.message)}
// // // //                                     />
// // // //                                 ) : (
// // // //                                     <p>{msg.message}</p>
// // // //                                 )}
// // // //                                 {isMine && !isTyping && (
// // // //                                     <p className="text-xs mt-1">
// // // //                                         {msg.seen ? "✓✓ Seen" : "✓ Sent"}
// // // //                                     </p>
// // // //                                 )}
// // // //                             </div>
// // // //                         </div>
// // // //                     );
// // // //                 })}
// // // //                 <div ref={messagesEndRef} />
// // // //             </div>

// // // //             {/* Input Bar */}
// // // //             <div className="flex p-4 bg-gray-900 items-center space-x-2">
// // // //                 <input type="file" accept="image/*" onChange={handlePickImage} />
// // // //                 <input
// // // //                     value={input}
// // // //                     onChange={(e) => handleTyping(e.target.value)}
// // // //                     placeholder="Type a message..."
// // // //                     className="flex-1 p-2 rounded-full bg-gray-800 text-white outline-none"
// // // //                 />
// // // //                 <button
// // // //                     onClick={handleSend}
// // // //                     className="ml-2 bg-green-500 px-4 py-2 rounded-full font-bold"
// // // //                 >
// // // //                     Send
// // // //                 </button>
// // // //             </div>

// // // //             {/* Preview Image Modal */}
// // // //             {previewImg && (
// // // //                 <div
// // // //                     className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
// // // //                     onClick={() => setPreviewImg(null)}
// // // //                 >
// // // //                     <img
// // // //                         src={previewImg}
// // // //                         className="max-h-[90%] max-w-[90%] object-contain"
// // // //                     />
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // }
























// // // "use client";
// // // import { useContext, useState, useEffect, useRef } from "react";
// // // import { useParams, useRouter } from "next/navigation";
// // // import { ChatContext } from "../../context/chatcontext.jsx";
// // // import { FaPhone, FaVideo } from "react-icons/fa";

// // // export default function ChatRoom() {
// // //     const { id } = useParams();
// // //     const router = useRouter();
// // //     const { messages, myUsername, sendMessage, onlineUsers, startCalling, socket, typingUser } =
// // //         useContext(ChatContext);

// // //     const [input, setInput] = useState("");
// // //     const [previewImg, setPreviewImg] = useState(null);
// // //     const messagesEndRef = useRef();

// // //     const filtered = messages.filter(
// // //         (m) => (m.from === myUsername && m.to === id) || (m.from === id && m.to === myUsername)
// // //     );

// // //     const displayMessages =
// // //         typingUser === id ? [...filtered, { id: "typing", from: id, message: "" }] : filtered;

// // //     useEffect(() => {
// // //         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //     }, [displayMessages]);

// // //     const handleSend = () => {
// // //         if (input.trim()) {
// // //             sendMessage(id, input.trim(), "text");
// // //             setInput("");
// // //         }
// // //     };

// // //     const handleTyping = (text) => {
// // //         setInput(text);
// // //         if (text.trim()) {
// // //             socket.emit("typing", { from: myUsername, to: id });
// // //         }
// // //     };

// // //     const handlePickImage = async (e) => {
// // //         const file = e.target.files[0];
// // //         if (!file) return;

// // //         const formData = new FormData();
// // //         formData.append("file", file);

// // //         try {
// // //             const res = await fetch("https://chat-app-server-render-v-1.onrender.com/upload", {
// // //                 method: "POST",
// // //                 body: formData,
// // //             });
// // //             const data = await res.json();
// // //             sendMessage(id, data.url, "image");
// // //         } catch (err) {
// // //             console.log("Upload failed:", err);
// // //             alert("Upload failed");
// // //         }
// // //     };

// // //     const startAudioCall = () => {
// // //         const callType = "video"; // ya "audio"
// // //         router.push(`/chatlist/${id}/call/${callType}`);
// // //     };

// // //     const startVideoCall = () => {
// // //         try {
// // //             startCalling(id);
// // //         } catch (error) {
// // //             console.log("Error starting call:", error);
// // //         }
// // //     };

// // //     return (
// // //         <div className="flex flex-col h-screen bg-black text-white">
// // //             {/* Header */}
// // //             <div className="flex justify-between items-center p-3 sm:p-2 bg-gray-900">
// // //                 <div>
// // //                     <h2 className="font-bold text-lg sm:text-base">{id}</h2>
// // //                     <p
// // //                         className={`text-sm sm:text-xs ${onlineUsers.includes(id) ? "text-green-400" : "text-gray-400"
// // //                             }`}
// // //                     >
// // //                         {onlineUsers.includes(id) ? "Online" : "Offline"}
// // //                     </p>
// // //                 </div>

// // //                 {/* Call buttons */}
// // //                 <div className="flex flex-wrap gap-2 sm:gap-1">
// // //                     <button
// // //                         onClick={startAudioCall}
// // //                         className="p-2 rounded-full bg-green-600 hover:bg-green-700"
// // //                     >
// // //                         <FaPhone size={18} />
// // //                     </button>
// // //                     <button
// // //                         onClick={startVideoCall}
// // //                         className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
// // //                     >
// // //                         <FaVideo size={18} />
// // //                     </button>
// // //                     <button onClick={() => router.back()} className="text-red-500 p-2">
// // //                         Back
// // //                     </button>
// // //                 </div>
// // //             </div>

// // //             {/* Chat Messages */}
// // //             <div className="flex-1 overflow-y-auto p-3 sm:p-2 space-y-2">
// // //                 {displayMessages.map((msg) => {
// // //                     const isMine = msg.from === myUsername;
// // //                     const isTyping = msg.id === "typing";
// // //                     return (
// // //                         <div
// // //                             key={msg.id}
// // //                             className={`flex ${isMine ? "justify-end" : "justify-start"}`}
// // //                         >
// // //                             <div
// // //                                 className={`p-3 rounded-xl max-w-[80%] sm:max-w-[70%] ${isMine ? "bg-green-500 rounded-br-none" : "bg-gray-800 rounded-bl-none"
// // //                                     }`}
// // //                             >
// // //                                 {isTyping ? (
// // //                                     <div className="flex space-x-1">
// // //                                         <span className="animate-bounce">•</span>
// // //                                         <span className="animate-bounce delay-150">•</span>
// // //                                         <span className="animate-bounce delay-300">•</span>
// // //                                     </div>
// // //                                 ) : msg.type === "image" ? (
// // //                                     <img
// // //                                         src={msg.message}
// // //                                         alt="sent"
// // //                                         className="w-full max-w-xs sm:max-w-[200px] h-auto object-cover rounded-lg cursor-pointer"
// // //                                         onClick={() => setPreviewImg(msg.message)}
// // //                                     />
// // //                                 ) : (
// // //                                     <p className="text-sm sm:text-base">{msg.message}</p>
// // //                                 )}
// // //                                 {isMine && !isTyping && (
// // //                                     <p className="text-xs mt-1">{msg.seen ? "✓✓ Seen" : "✓ Sent"}</p>
// // //                                 )}
// // //                             </div>
// // //                         </div>
// // //                     );
// // //                 })}
// // //                 <div ref={messagesEndRef} />
// // //             </div>

// // //             {/* Input Bar */}
// // //             <div className="flex flex-col sm:flex-row p-3 sm:p-2 bg-gray-900 items-center gap-2">
// // //                 <input
// // //                     type="file"
// // //                     accept="image/*"
// // //                     onChange={handlePickImage}
// // //                     className="text-xs sm:text-sm"
// // //                 />
// // //                 <input
// // //                     value={input}
// // //                     onChange={(e) => handleTyping(e.target.value)}
// // //                     placeholder="Type a message..."
// // //                     className="flex-1 p-2 rounded-full bg-gray-800 text-white outline-none text-sm sm:text-base"
// // //                 />
// // //                 <button
// // //                     onClick={handleSend}
// // //                     className="ml-0 sm:ml-2 bg-green-500 px-4 py-2 rounded-full font-bold text-sm sm:text-base"
// // //                 >
// // //                     Send
// // //                 </button>
// // //             </div>

// // //             {/* Preview Image Modal */}
// // //             {previewImg && (
// // //                 <div
// // //                     className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
// // //                     onClick={() => setPreviewImg(null)}
// // //                 >
// // //                     <img
// // //                         src={previewImg}
// // //                         className="max-h-[90%] max-w-[90%] object-contain rounded-lg"
// // //                     />
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // }



















// // "use client";
// // import { useContext, useState, useEffect, useRef } from "react";
// // import { useParams, useRouter } from "next/navigation";
// // import { ChatContext } from "../../context/chatcontext.jsx";
// // import { FiArrowLeft, FiPhone, FiVideo, FiMoreVertical } from "react-icons/fi";
// // import Image from "next/image";

// // const ChatRoom = () => {
// //     const { id } = useParams();
// //     const router = useRouter();
// //     const { messages, myUsername, sendMessage, onlineUsers, startCalling, socket, typingUser } =
// //         useContext(ChatContext);

// //     const [input, setInput] = useState("");
// //     const [previewImg, setPreviewImg] = useState(null);
// //     const messagesEndRef = useRef();

// //     const filtered = messages.filter(
// //         (m) => (m.from === myUsername && m.to === id) || (m.from === id && m.to === myUsername)
// //     );

// //     const displayMessages =
// //         typingUser === id ? [...filtered, { id: "typing", from: id, message: "" }] : filtered;

// //     useEffect(() => {
// //         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //     }, [displayMessages]);

// //     const handleSend = () => {
// //         if (input.trim()) {
// //             sendMessage(id, input.trim(), "text");
// //             setInput("");
// //         }
// //     };

// //     const handleTyping = (text) => {
// //         setInput(text);
// //         if (text.trim()) {
// //             socket.emit("typing", { from: myUsername, to: id });
// //         }
// //     };

// //     const handlePickImage = async (e) => {
// //         const file = e.target.files[0];
// //         if (!file) return;

// //         const formData = new FormData();
// //         formData.append("file", file);

// //         try {
// //             const res = await fetch("https://chat-app-server-render-v-1.onrender.com/upload", {
// //                 method: "POST",
// //                 body: formData,
// //             });
// //             const data = await res.json();
// //             sendMessage(id, data.url, "image");
// //         } catch (err) {
// //             console.log("Upload failed:", err);
// //             alert("Upload failed");
// //         }
// //     };

// //     const startAudioCall = () => {
// //         router.push(`/chatlist/${id}/call/audio`);
// //     };

// //     const startVideoCall = () => {
// //         try {
// //             startCalling(id);
// //         } catch (error) {
// //             console.log("Error starting call:", error);
// //         }
// //     };

// //     return (
// //         <div className="flex flex-col h-screen bg-black text-white">
// //             {/* WhatsApp-style Header */}
// //             <div
// //                 style={{
// //                     height: "60px",
// //                     display: "flex",
// //                     justifyContent: "space-between",
// //                     alignItems: "center",
// //                     padding: "0 15px",
// //                     backgroundColor: "#075E54",
// //                     color: "white",
// //                 }}
// //             >
// //                 {/* Left Section */}
// //                 <div style={{ display: "flex", alignItems: "center" }}>
// //                     <button
// //                         onClick={() => router.back()}
// //                         style={{ background: "none", border: "none", color: "white", cursor: "pointer", marginRight: 10 }}
// //                     >
// //                         <FiArrowLeft size={24} />
// //                     </button>
// //                     <Image
// //                         src={`https://placekitten.com/40/40`} // Replace with dynamic group image if available
// //                         alt="Group"
// //                         width={40}
// //                         height={40}
// //                         style={{ borderRadius: "50%" }}
// //                     />
// //                     <div style={{ marginLeft: 10, display: "flex", flexDirection: "column" }}>
// //                         <span style={{ fontSize: "18px", fontWeight: 500 }}>{id}</span>
// //                         <span style={{ fontSize: "12px", color: onlineUsers.includes(id) ? "#34D399" : "#D1D5DB" }}>
// //                             {onlineUsers.includes(id) ? "Online" : "Offline"}
// //                         </span>
// //                     </div>
// //                 </div>

// //                 {/* Right Section */}
// //                 <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// //                     <button
// //                         onClick={startAudioCall}
// //                         style={{ backgroundColor: "#34D399", padding: "6px", borderRadius: "50%", cursor: "pointer" }}
// //                     >
// //                         <FiPhone size={18} />
// //                     </button>
// //                     <button
// //                         onClick={startVideoCall}
// //                         style={{ backgroundColor: "#3B82F6", padding: "6px", borderRadius: "50%", cursor: "pointer" }}
// //                     >
// //                         <FiVideo size={18} />
// //                     </button>
// //                     <FiMoreVertical size={20} style={{ cursor: "pointer" }} />
// //                 </div>
// //             </div>

// //             {/* Chat Messages */}
// //             <div className="flex-1 overflow-y-auto p-3 sm:p-2 space-y-2">
// //                 {displayMessages.map((msg) => {
// //                     const isMine = msg.from === myUsername;
// //                     const isTyping = msg.id === "typing";
// //                     return (
// //                         <div key={msg.id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
// //                             <div
// //                                 className={`p-3 rounded-xl max-w-[80%] sm:max-w-[70%] ${isMine ? "bg-green-500 rounded-br-none" : "bg-gray-800 rounded-bl-none"
// //                                     }`}
// //                             >
// //                                 {isTyping ? (
// //                                     <div className="flex space-x-1">
// //                                         <span className="animate-bounce">•</span>
// //                                         <span className="animate-bounce delay-150">•</span>
// //                                         <span className="animate-bounce delay-300">•</span>
// //                                     </div>
// //                                 ) : msg.type === "image" ? (
// //                                     <img
// //                                         src={msg.message}
// //                                         alt="sent"
// //                                         className="w-full max-w-xs sm:max-w-[200px] h-auto object-cover rounded-lg cursor-pointer"
// //                                         onClick={() => setPreviewImg(msg.message)}
// //                                     />
// //                                 ) : (
// //                                     <p className="text-sm sm:text-base">{msg.message}</p>
// //                                 )}
// //                                 {isMine && !isTyping && <p className="text-xs mt-1">{msg.seen ? "✓✓ Seen" : "✓ Sent"}</p>}
// //                             </div>
// //                         </div>
// //                     );
// //                 })}
// //                 <div ref={messagesEndRef} />
// //             </div>

// //             {/* Input Bar */}
// //             <div className="flex flex-col sm:flex-row p-3 sm:p-2 bg-gray-900 items-center gap-2">
// //                 <input type="file" accept="image/*" onChange={handlePickImage} className="text-xs sm:text-sm" />
// //                 <input
// //                     value={input}
// //                     onChange={(e) => handleTyping(e.target.value)}
// //                     placeholder="Type a message..."
// //                     className="flex-1 p-2 rounded-full bg-gray-800 text-white outline-none text-sm sm:text-base"
// //                 />
// //                 <button
// //                     onClick={handleSend}
// //                     className="ml-0 sm:ml-2 bg-green-500 px-4 py-2 rounded-full font-bold text-sm sm:text-base"
// //                 >
// //                     Send
// //                 </button>
// //             </div>

// //             {/* Preview Image Modal */}
// //             {previewImg && (
// //                 <div
// //                     className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
// //                     onClick={() => setPreviewImg(null)}
// //                 >
// //                     <img src={previewImg} className="max-h-[90%] max-w-[90%] object-contain rounded-lg" />
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default ChatRoom;













// "use client";
// import { useContext, useState, useEffect, useRef } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { ChatContext } from "../../context/chatcontext.jsx";
// import { FiArrowLeft, FiPhone, FiVideo, FiMoreVertical } from "react-icons/fi";
// import Image from "next/image";

// export default function ChatRoom() {
//     const { id } = useParams();
//     const router = useRouter();
//     const { messages, myUsername, sendMessage, onlineUsers, startCalling, socket, typingUser } =
//         useContext(ChatContext);

//     const [input, setInput] = useState("");
//     const [previewImg, setPreviewImg] = useState(null);
//     const messagesEndRef = useRef();

//     const filtered = messages.filter(
//         (m) => (m.from === myUsername && m.to === id) || (m.from === id && m.to === myUsername)
//     );

//     const displayMessages =
//         typingUser === id ? [...filtered, { id: "typing", from: id, message: "" }] : filtered;

//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, [displayMessages]);

//     const handleSend = () => {
//         if (input.trim()) {
//             sendMessage(id, input.trim(), "text");
//             setInput("");
//         }
//     };

//     const handleTyping = (text) => {
//         setInput(text);
//         if (text.trim()) {
//             socket.emit("typing", { from: myUsername, to: id });
//         }
//     };

//     const handlePickImage = async (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const res = await fetch("https://chat-app-server-render-v-1.onrender.com/upload", {
//                 method: "POST",
//                 body: formData,
//             });
//             const data = await res.json();
//             sendMessage(id, data.url, "image");
//         } catch (err) {
//             console.log("Upload failed:", err);
//             alert("Upload failed");
//         }
//     };

//     const startAudioCall = () => {
//         router.push(`/chatlist/${id}/call/audio`);
//     };

//     const startVideoCall = () => {
//         try {
//             startCalling(id);
//         } catch (error) {
//             console.log("Error starting call:", error);
//         }
//     };

//     return (
//         <div className="flex flex-col h-screen bg-gray-100">
//             {/* WhatsApp-style Header */}
//             <div className="flex justify-between items-center px-4 h-16 bg-[#075E54] text-white">
//                 <div className="flex items-center">
//                     <button onClick={() => router.back()} className="mr-3">
//                         <FiArrowLeft size={24} />
//                     </button>
//                     <Image
//                         src={`https://placekitten.com/40/40`}
//                         alt="Group"
//                         width={40}
//                         height={40}
//                         className="rounded-full"
//                     />
//                     <div className="ml-3 flex flex-col">
//                         <span className="font-semibold text-lg">{id}</span>
//                         <span className={`text-sm ${onlineUsers.includes(id) ? "text-green-400" : "text-gray-300"}`}>
//                             {onlineUsers.includes(id) ? "Online" : "Offline"}
//                         </span>
//                     </div>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                     <button
//                         onClick={startAudioCall}
//                         className="bg-green-500 p-2 rounded-full hover:bg-green-600"
//                     >
//                         <FiPhone size={18} />
//                     </button>
//                     <button
//                         onClick={startVideoCall}
//                         className="bg-blue-600 p-2 rounded-full hover:bg-blue-700"
//                     >
//                         <FiVideo size={18} />
//                     </button>
//                     <FiMoreVertical size={20} className="cursor-pointer" />
//                 </div>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-100">
//                 {displayMessages.map((msg) => {
//                     const isMine = msg.from === myUsername;
//                     const isTyping = msg.id === "typing";
//                     return (
//                         <div key={msg.id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
//                             <div
//                                 className={`p-3 rounded-xl max-w-[80%] ${isMine ? "bg-green-500 rounded-br-none" : "bg-white rounded-bl-none"
//                                     }`}
//                             >
//                                 {isTyping ? (
//                                     <div className="flex space-x-1">
//                                         <span className="animate-bounce">•</span>
//                                         <span className="animate-bounce delay-150">•</span>
//                                         <span className="animate-bounce delay-300">•</span>
//                                     </div>
//                                 ) : msg.type === "image" ? (
//                                     <img
//                                         src={msg.message}
//                                         alt="sent"
//                                         className="w-full max-w-xs sm:max-w-[200px] h-auto object-cover rounded-lg cursor-pointer"
//                                         onClick={() => setPreviewImg(msg.message)}
//                                     />
//                                 ) : (
//                                     <p className={`${isMine ? "text-white" : "text-black"} text-sm`}>{msg.message}</p>
//                                 )}
//                                 {isMine && !isTyping && (
//                                     <p className="text-xs mt-1">{msg.seen ? "✓✓ Seen" : "✓ Sent"}</p>
//                                 )}
//                             </div>
//                         </div>
//                     );
//                 })}
//                 <div ref={messagesEndRef} />
//             </div>

//             {/* Input */}
//             <div className="flex p-3 bg-white items-center space-x-2">
//                 <input type="file" accept="image/*" onChange={handlePickImage} className="text-sm" />
//                 <input
//                     value={input}
//                     onChange={(e) => handleTyping(e.target.value)}
//                     placeholder="Type a message..."
//                     className="flex-1 px-3 py-2 rounded-full border border-gray-300 outline-none"
//                 />
//                 <button
//                     onClick={handleSend}
//                     className="bg-green-500 px-4 py-2 rounded-full text-white font-semibold hover:bg-green-600"
//                 >
//                     Send
//                 </button>
//             </div>

//             {/* Preview Modal */}
//             {previewImg && (
//                 <div
//                     className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
//                     onClick={() => setPreviewImg(null)}
//                 >
//                     <img src={previewImg} className="max-h-[90%] max-w-[90%] object-contain rounded-lg" />
//                 </div>
//             )}
//         </div>
//     );
// }

















"use client";
import { useContext, useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChatContext } from "../../context/chatcontext.jsx";
import { FiArrowLeft, FiPhone, FiVideo, FiMoreVertical } from "react-icons/fi";
import Image from "next/image";

export default function ChatRoom() {
    const { id } = useParams();
    const router = useRouter();
    const { messages, myUsername, sendMessage, onlineUsers, startCalling, socket, typingUser } =
        useContext(ChatContext);

    const [input, setInput] = useState("");
    const [previewImg, setPreviewImg] = useState(null);
    const messagesEndRef = useRef();

    const filtered = messages.filter(
        (m) => (m.from === myUsername && m.to === id) || (m.from === id && m.to === myUsername)
    );

    const displayMessages =
        typingUser === id ? [...filtered, { id: "typing", from: id, message: "" }] : filtered;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [displayMessages]);

    const handleSend = () => {
        if (input.trim()) {
            sendMessage(id, input.trim(), "text");
            setInput("");
        }
    };

    const handleTyping = (text) => {
        setInput(text);
        if (text.trim()) {
            socket.emit("typing", { from: myUsername, to: id });
        }
    };

    const handlePickImage = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("https://chat-app-server-render-v-1.onrender.com/upload", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();
            sendMessage(id, data.url, "image");
        } catch (err) {
            console.log("Upload failed:", err);
            alert("Upload failed");
        }
    };

    const startAudioCall = () => {
        router.push(`/chatlist/${id}/call/audio`);
    };

    const startVideoCall = () => {
        try {
            startCalling(id);
        } catch (error) {
            console.log("Error starting call:", error);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Responsive WhatsApp-style Header */}
            <div className="flex justify-between items-center px-4 h-16 bg-[#075E54] text-white">
                <div className="flex items-center">
                    <button onClick={() => router.back()} className="mr-3">
                        <FiArrowLeft size={24} />
                    </button>
                    <Image
                        src={`https://placekitten.com/40/40`}
                        alt="Group"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div className="ml-3 flex flex-col truncate">
                        <span className="font-semibold text-base sm:text-lg truncate">{id}</span>
                        <span className={`text-xs sm:text-sm truncate ${onlineUsers.includes(id) ? "text-green-400" : "text-gray-300"}`}>
                            {onlineUsers.includes(id) ? "Online" : "Offline"}
                        </span>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <button
                        onClick={startAudioCall}
                        className="bg-green-500 p-2 rounded-full hover:bg-green-600"
                    >
                        <FiPhone size={18} />
                    </button>
                    <button
                        onClick={startVideoCall}
                        className="bg-blue-600 p-2 rounded-full hover:bg-blue-700"
                    >
                        <FiVideo size={18} />
                    </button>
                    <FiMoreVertical size={20} className="cursor-pointer" />
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-100 sm:p-4">
                {displayMessages.map((msg) => {
                    const isMine = msg.from === myUsername;
                    const isTyping = msg.id === "typing";
                    return (
                        <div key={msg.id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`p-3 rounded-xl max-w-[80%] sm:max-w-[70%] ${isMine ? "bg-green-500 rounded-br-none text-white" : "bg-white rounded-bl-none text-black"
                                    }`}
                            >
                                {isTyping ? (
                                    <div className="flex space-x-1">
                                        <span className="animate-bounce">•</span>
                                        <span className="animate-bounce delay-150">•</span>
                                        <span className="animate-bounce delay-300">•</span>
                                    </div>
                                ) : msg.type === "image" ? (
                                    <img
                                        src={msg.message}
                                        alt="sent"
                                        className="w-full max-w-xs sm:max-w-[200px] h-auto object-cover rounded-lg cursor-pointer"
                                        onClick={() => setPreviewImg(msg.message)}
                                    />
                                ) : (
                                    <p className="text-sm sm:text-base">{msg.message}</p>
                                )}
                                {isMine && !isTyping && (
                                    <p className="text-xs mt-1">{msg.seen ? "✓✓ Seen" : "✓ Sent"}</p>
                                )}
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="flex flex-col sm:flex-row p-3 bg-white items-center gap-2 sm:gap-3">
                <input type="file" accept="image/*" onChange={handlePickImage} className="text-sm" />
                <input
                    value={input}
                    onChange={(e) => handleTyping(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 rounded-full border border-gray-300 outline-none text-sm sm:text-base"
                />
                <button
                    onClick={handleSend}
                    className="bg-green-500 px-4 py-2 rounded-full text-white font-semibold hover:bg-green-600"
                >
                    Send
                </button>
            </div>

            {/* Preview Modal */}
            {previewImg && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2"
                    onClick={() => setPreviewImg(null)}
                >
                    <img src={previewImg} className="max-h-[90%] max-w-full sm:max-w-[90%] object-contain rounded-lg" />
                </div>
            )}
        </div>
    );
}
