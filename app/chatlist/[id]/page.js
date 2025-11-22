


// "use client";

// import api from "@/app/apicall";
// import { ChatContext } from "@/app/context/chatcontext";
// import React, { useContext, useState, useEffect, useRef } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { FaUserCircle, FaCamera, FaPhone, FaVideo } from "react-icons/fa";

// export default function ChatRoom({ userId }) {
//     const { id } = useParams();

//     console.log('idd', id)
//     const {
//         messages,
//         myUsername,
//         sendMessage,
//         onlineUsers,
//         activeChatRoom,
//         setActiveChatRoom,
//         socket,
//         typingUser,
//     } = useContext(ChatContext);

//     const [input, setInput] = useState("");
//     const [previewImg, setPreviewImg] = useState(null);
//     const [menuVisible, setMenuVisible] = useState(false);
//     const [incomingCall, setIncomingCall] = useState(false);
//     const [caller, setCaller] = useState("");
//     const fileInputRef = useRef();
//     const messagesEndRef = useRef();

//     let router = useRouter()

//     useEffect(() => setActiveChatRoom(false), []);
//     useEffect(() => {
//         return () => setActiveChatRoom(true);
//     }, []);

//     // Listen for incoming call
//     useEffect(() => {
//         socket.on("incoming-call", ({ from }) => {
//             setIncomingCall(true);
//             setCaller(from);
//         });

//         socket.on("call-ended", () => {
//             setIncomingCall(false);
//             setCaller("");
//         });

//         return () => {
//             socket.off("incoming-call");
//             socket.off("call-ended");
//         };
//     }, [socket]);

//     // Emit video call request
//     const handleVideoCall = () => {
//         socket.emit("call-user", { from: myUsername, type: "video", to: id });
//         // alert(`videocall ${id}...`);
//         router.push(`videocall/${id}`)
//     };

//     // Accept / Reject
//     const acceptCall = () => {
//         socket.emit("accept-call", { from: myUsername, to: id });
//         setIncomingCall(false);
//         alert(`Call accepted with ${caller}`);
//     };

//     const rejectCall = () => {
//         socket.emit("reject-call", { from: myUsername, to: id });
//         setIncomingCall(false);
//     };

//     const filtered = messages.filter(
//         (m) =>
//             (m.from === myUsername && m.to === id) ||
//             (m.from === id && m.to === myUsername)
//     );

//     const displayMessages =
//         typingUser === id
//             ? [...filtered, { id: "typing", from: id, message: "" }]
//             : filtered;

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
//         if (text.trim()) socket.emit("typing", { from: myUsername, to: id });
//     };

//     const pickImage = (e) => {
//         const file = e.target.files[0];
//         if (file) uploadImage(file);
//     };

//     const uploadImage = async (image) => {
//         const formData = new FormData();
//         formData.append("file", image);
//         try {
//             const res = await api.post("/upload", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });
//             const data = res.data;
//             if (data.url) sendMessage(id, data.url, "image");
//         } catch (err) {
//             console.error("Upload error:", err);
//         }
//     };

//     const audiocall = async () => {
//         socket.emit("call-user", { from: myUsername, type: "audio", to: id });

//         // alert(`videocall ${id}...`);
//         router.push(`audiocall/${id}`)
//     }

//     return (
//         <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#121212" }}>
//             {/* Header */}
//             <div style={{ display: "flex", alignItems: "center", padding: 12, backgroundColor: "#1F1F1F" }}>
//                 <button onClick={() => window.history.back()} style={{ marginRight: 10 }}>Back</button>
//                 <FaUserCircle size={40} color="#9CA3AF" style={{ marginRight: 8 }} />
//                 <div style={{ flex: 1 }}>
//                     <p style={{ color: "#fff", fontWeight: 600 }}>{userId}</p>
//                     <p style={{ color: onlineUsers.includes(userId) ? "#34D399" : "#9CA3AF" }}>
//                         {onlineUsers.includes(userId) ? "Online" : "Offline"}
//                     </p>
//                 </div>
//                 <div style={{ display: "flex", gap: 8 }}>
//                     <button onClick={() => audiocall()} style={{ background: "#10B981", borderRadius: 20, padding: 8 }}>
//                         <FaPhone color="#fff" />
//                     </button>
//                     <button
//                         onClick={handleVideoCall}
//                         style={{ background: "#3B82F6", borderRadius: 20, padding: 8 }}
//                     >
//                         <FaVideo color="#fff" />
//                     </button>
//                     <button onClick={() => setMenuVisible(true)}>⋮</button>
//                 </div>
//             </div>

//             {/* Messages */}
//             <div style={{ flex: 1, overflowY: "auto", padding: 8 }}>
//                 {displayMessages.map((item, idx) => {
//                     const isMine = item.from === myUsername;
//                     const isTyping = item.id === "typing";

//                     return (
//                         <div key={item.id || idx} style={{
//                             maxWidth: "80%",
//                             alignSelf: isMine ? "flex-end" : "flex-start",
//                             background: isMine ? "#10B981" : "#2C2C2C",
//                             color: isMine ? "#fff" : "#E5E7EB",
//                             borderRadius: 16,
//                             padding: 10,
//                             margin: "4px 0"
//                         }}>
//                             {isTyping ? (
//                                 <div style={{ display: "flex", gap: 4 }}>
//                                     <div style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#9CA3AF" }} />
//                                     <div style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#9CA3AF" }} />
//                                     <div style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#9CA3AF" }} />
//                                 </div>
//                             ) : item.type === "image" ? (
//                                 <img
//                                     src={item.message}
//                                     style={{ width: 200, height: 200, borderRadius: 12 }}
//                                     onClick={() => setPreviewImg(item.message)}
//                                 />
//                             ) : (
//                                 <p>{item.message}</p>
//                             )}
//                             {isMine && !isTyping && <p style={{ fontSize: 10 }}>{item.seen ? "✓✓ Seen" : "✓ Sent"}</p>}
//                         </div>
//                     );
//                 })}
//                 <div ref={messagesEndRef} />
//             </div>

//             {/* Input */}
//             <div style={{ display: "flex", padding: 8, backgroundColor: "#1F1F1F", alignItems: "center" }}>
//                 <input type="file" ref={fileInputRef} onChange={pickImage} style={{ display: "none" }} />
//                 <button onClick={() => fileInputRef.current.click()} style={{ padding: 8, color: "#10B981" }}>
//                     <FaCamera />
//                 </button>
//                 <input
//                     value={input}
//                     onChange={(e) => handleTyping(e.target.value)}
//                     placeholder="Type a message..."
//                     style={{
//                         flex: 1,
//                         padding: "8px 12px",
//                         borderRadius: 20,
//                         margin: "0 6px",
//                         background: "#2C2C2C",
//                         color: "#E5E7EB",
//                         border: "none"
//                     }}
//                 />
//                 <button onClick={handleSend} style={{ background: "#10B981", padding: "8px 16px", borderRadius: 20, color: "#fff" }}>Send</button>
//             </div>

//             {/* Incoming Call Popup */}
//             {incomingCall && (
//                 <div style={{
//                     position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.8)",
//                     display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", color: "#fff"
//                 }}>
//                     <p>{caller} is calling...</p>
//                     <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
//                         <button onClick={acceptCall} style={{ background: "green", padding: "10px 20px", borderRadius: 8 }}>Accept</button>
//                         <button onClick={rejectCall} style={{ background: "red", padding: "10px 20px", borderRadius: 8 }}>Reject</button>
//                     </div>
//                 </div>
//             )}

//             {/* Image Preview */}
//             {previewImg && (
//                 <div onClick={() => setPreviewImg(null)} style={{
//                     position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.9)", display: "flex", justifyContent: "center", alignItems: "center"
//                 }}>
//                     <img src={previewImg} style={{ maxWidth: "90%", maxHeight: "90%" }} />
//                 </div>
//             )}
//         </div>
//     );
// }











"use client";

import api from "@/app/apicall";
import { ChatContext } from "@/app/context/chatcontext";
import React, { useContext, useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaUserCircle, FaCamera, FaPhone, FaVideo } from "react-icons/fa";

export default function ChatRoom({ userId }) {
    const { id } = useParams();

    const {
        messages,
        myUsername,
        sendMessage,
        onlineUsers,
        socket,
        typingUser,
    } = useContext(ChatContext);

    const [input, setInput] = useState("");
    const [previewImg, setPreviewImg] = useState(null);
    const [uploadLoading, setUploadLoading] = useState(false); // 👈 image upload loader
    const fileInputRef = useRef();
    const messagesEndRef = useRef();
    const router = useRouter();

    // Filter only selected chat messages
    const filtered = messages.filter(
        (m) =>
            (m.from === myUsername && m.to === id) ||
            (m.from === id && m.to === myUsername)
    );

    // Show typing indicator
    const displayMessages =
        typingUser === id
            ? [...filtered, { id: "typing", from: id, message: "" }]
            : filtered;

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [displayMessages]);

    const handleSend = () => {
        if (!input.trim()) return;
        sendMessage(id, input.trim(), "text");
        setInput("");
    };

    const handleTyping = (text) => {
        setInput(text);
        if (text.trim()) socket.emit("typing", { from: myUsername, to: id });
    };

    const pickImage = (e) => {
        const file = e.target.files[0];
        if (file) uploadImage(file);
    };

    // 🔥 Upload image with loader
    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("file", image);

        // Show loading bubble
        const tempId = "uploading-" + Date.now();
        setUploadLoading(true);

        try {
            const res = await api.post("/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (res.data.url) {
                sendMessage(id, res.data.url, "image");
            }
        } catch (err) {
            console.error("Image Upload Error:", err);
        }

        setUploadLoading(false);
    };

    return (
        <div style={{ height: "100vh", background: "#111827", display: "flex", flexDirection: "column" }}>
            {/* HEADER */}
            <div style={{ padding: 14, background: "#1F2937", display: "flex", alignItems: "center" }}>
                <button onClick={() => window.history.back()} style={{ color: "#fff", marginRight: 10 }}>⬅</button>
                <FaUserCircle size={42} color="#9CA3AF" />

                <div style={{ marginLeft: 10 }}>
                    <p style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>{id}</p>

                    {/* ⭐ ONLINE DOT */}
                    <span style={{ color: onlineUsers.includes(id) ? "#4ade80" : "#9CA3AF", fontSize: 13 }}>
                        {onlineUsers.includes(id) ? "● Online" : "○ Offline"}
                    </span>
                </div>
            </div>

            {/* MESSAGES */}
            <div style={{ flex: 1, overflowY: "auto", padding: 10 }}>
                {displayMessages.map((msg, i) => {
                    const isMine = msg.from === myUsername;
                    const isTyping = msg.id === "typing";

                    return (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                justifyContent: isMine ? "flex-end" : "flex-start",
                                marginBottom: 6,
                            }}
                        >
                            <div
                                style={{
                                    maxWidth: "75%",
                                    background: isMine ? "#10B981" : "#2D2D2D",
                                    padding: 10,
                                    borderRadius: 14,
                                    color: "#fff",
                                }}
                            >
                                {/* Typing Animation */}
                                {isTyping ? (
                                    <div style={{ display: "flex", gap: 4 }}>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </div>
                                ) : msg.type === "image" ? (
                                    <img
                                        src={msg.message}
                                        style={{
                                            maxWidth: 220,
                                            borderRadius: 12,
                                            marginTop: 4,
                                            backgroundColor: "#000",
                                        }}
                                        onClick={() => setPreviewImg(msg.message)}
                                    />
                                ) : (
                                    <p>{msg.message}</p>
                                )}
                            </div>
                        </div>
                    );
                })}

                {/* ⭐ Image Upload "loading..." Bubble */}
                {uploadLoading && (
                    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 6 }}>
                        <div
                            style={{
                                background: "#10B981",
                                color: "#fff",
                                padding: 10,
                                borderRadius: 14,
                            }}
                        >
                            <span>Uploading image...</span>
                            <div className="spinner"></div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* INPUT BOX */}
            <div style={{ display: "flex", padding: 10, background: "#1F2937" }}>
                <input type="file" ref={fileInputRef} onChange={pickImage} hidden />
                <button onClick={() => fileInputRef.current.click()} style={{ color: "#10B981", marginRight: 10 }}>
                    <FaCamera size={22} />
                </button>

                <input
                    value={input}
                    onChange={(e) => handleTyping(e.target.value)}
                    placeholder="Type message..."
                    style={{
                        flex: 1,
                        background: "#374151",
                        borderRadius: 20,
                        padding: "10px 14px",
                        color: "#fff",
                        border: "none",
                        outline: "none",
                    }}
                />

                <button
                    onClick={handleSend}
                    style={{
                        marginLeft: 10,
                        padding: "8px 16px",
                        background: "#10B981",
                        borderRadius: 20,
                        color: "#fff",
                    }}
                >
                    Send
                </button>
            </div>

            {/* IMAGE PREVIEW FULLSCREEN */}
            {previewImg && (
                <div
                    onClick={() => setPreviewImg(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.9)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img src={previewImg} style={{ maxWidth: "90%", maxHeight: "90%" }} />
                </div>
            )}
        </div>
    );
}
