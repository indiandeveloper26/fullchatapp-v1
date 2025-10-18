// "use client";
// import React, { useEffect, useRef, useState, useContext } from "react";
// import { useSearchParams } from "next/navigation";
// import { ChatContext } from "../context/chatcontext";


// export default function CallPage() {
//     const searchParams = useSearchParams();
//     const { myUsername, socket } = useContext(ChatContext);

//     const withUser = searchParams.get("with"); // user jiske saath call
//     const localVideoRef = useRef(null);
//     const remoteVideoRef = useRef(null);


//     const pcRef = useRef(null); // RTCPeerConnection

//     const servers = {
//         iceServers: [
//             { urls: "stun:stun.l.google.com:19302" },
//         ],
//     };

//     useEffect(() => {
//         // 1️⃣ Connect socket


//         // 2️⃣ Get user media
//         navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//             .then((stream) => {
//                 if (localVideoRef.current) localVideoRef.current.srcObject = stream;

//                 // 3️⃣ Create PeerConnection
//                 const pc = new RTCPeerConnection(servers);
//                 pcRef.current = pc;

//                 // Add local tracks
//                 stream.getTracks().forEach(track => pc.addTrack(track, stream));

//                 // When remote track arrives
//                 pc.ontrack = (event) => {
//                     if (remoteVideoRef.current) remoteVideoRef.current.srcObject = event.streams[0];
//                 };

//                 // ICE candidates
//                 pc.onicecandidate = (event) => {
//                     if (event.candidate) {
//                         socket.emit("ice-candidate", { to: withUser, candidate: event.candidate });
//                     }
//                 };

//                 // 4️⃣ If caller: create offer
//                 if (searchParams.get("caller") === "true") {
//                     pc.createOffer().then(offer => {
//                         pc.setLocalDescription(offer);
//                         socket.emit("call-offer", { to: withUser, offer });
//                     });
//                 }
//             });

//         // 5️⃣ Listen for signaling
//         socket.on("call-offer", async ({ from, offer }) => {
//             if (pcRef.current) {
//                 await pcRef.current.setRemoteDescription(new RTCSessionDescription(offer));
//                 const answer = await pcRef.current.createAnswer();
//                 await pcRef.current.setLocalDescription(answer);
//                 socket.emit("call-answer", { to: from, answer });
//             }
//         });

//         socket.on("call-answer", async ({ answer }) => {
//             if (pcRef.current) {
//                 await pcRef.current.setRemoteDescription(new RTCSessionDescription(answer));
//             }
//         });

//         socket.on("ice-candidate", async ({ candidate }) => {
//             if (pcRef.current && candidate) {
//                 try {
//                     await pcRef.current.addIceCandidate(candidate);
//                 } catch (err) {
//                     console.log("Error adding ice candidate:", err);
//                 }
//             }
//         });

//         return () => {
//             pcRef.current?.close();
//             socket.disconnect();
//         };
//     }, [withUser]);

//     return (
//         <div style={styles.container}>
//             <h2>Video Call with {withUser}</h2>
//             <div style={styles.videos}>
//                 <video ref={localVideoRef} autoPlay playsInline muted style={styles.video} />
//                 <video ref={remoteVideoRef} autoPlay playsInline style={styles.video} />
//             </div>
//         </div>
//     );
// }

// const styles = {
//     container: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" },
//     videos: { display: "flex", gap: "20px" },
//     video: { width: "400px", height: "300px", backgroundColor: "#000" },
// };














"use client"
import { usePathname, useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'
import { ChatContext } from '../context/chatcontext';

function page() {

    const {
        setpath,
        pathname
    } = useContext(ChatContext);
    const pathnamee = usePathname()

    console.log('pathname', pathname)

    let route = useRouter()



    useEffect(() => {


        try {
            setpath(pathnamee)
            console.log('setpathnae')
        } catch (error) {
            console.log('errpr')
        }
    }, [])

    return (
        <div>video

            <button onClick={() => route.push('/demo')}>
                go now
            </button>
        </div>
    )
}

export default page