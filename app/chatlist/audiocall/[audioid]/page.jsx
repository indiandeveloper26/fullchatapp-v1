"use client";

import React, { useEffect, useRef, useState, useContext } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChatContext } from "@/app/context/chatcontext";
import { FiMic, FiMicOff, FiPhoneOff } from "react-icons/fi";

export default function AudioCall() {
    const { socket, myUsername, currentCall } = useContext(ChatContext);
    const { audioid } = useParams(); // opponent username
    const router = useRouter();

    const pc = useRef(null);
    const remoteAudioRef = useRef(null);
    const [localStream, setLocalStream] = useState(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isCallActive, setIsCallActive] = useState(false);
    const [callTime, setCallTime] = useState(0);

    // ✅ 1️⃣ Create peer connection


    console.log('audiacll scrren')
    const createPeer = () => {
        const peer = new RTCPeerConnection({
            iceServers: [
                { urls: "stun:stun.l.google.com:19302" },
                { urls: "stun:stun1.l.google.com:19302" },
            ],
        });

        console.log('audiacll scrren1')

        peer.ontrack = (event) => {
            if (remoteAudioRef.current) {
                remoteAudioRef.current.srcObject = event.streams[0];
            }
        };
        console.log('audiacll scrren2')
        peer.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit("webrtc-candidate", {

                    to: audioid, // ✅ FIXED: server expects "to"
                    candidate: event.candidate,


                });
                console.log('web rtc run hua')
            }
        };
        console.log('audiacll scrren3')

        return peer;
    };

    // ✅ 2️⃣ Start mic
    useEffect(() => {
        const startStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                setLocalStream(stream);
            } catch (err) {
                console.error("🎙️ Mic permission error:", err);
            }
        };
        startStream();
    }, []);

    // ✅ 3️⃣ WebRTC events
    useEffect(() => {
        if (!socket) return;

        socket.on("webrtc-offer", async ({ from, sdp }) => {
            console.log("📞 Got offer from", from);
            pc.current = createPeer();
            localStream?.getTracks().forEach((track) => pc.current.addTrack(track, localStream));

            await pc.current.setRemoteDescription({ type: "offer", sdp });
            const answer = await pc.current.createAnswer();
            await pc.current.setLocalDescription(answer);

            socket.emit("webrtc-answer", { to: from, sdp: answer }); // ✅ FIXED
            setIsCallActive(true);
        });

        socket.on("webrtc-answer", async ({ from, sdp }) => {
            console.log("✅ Got answer from", from);
            await pc.current.setRemoteDescription({ type: "answer", sdp });
            setIsCallActive(true);
        });

        socket.on("webrtc-candidate", async ({ candidate }) => {
            console.log("🧊 Got ICE candidate");
            if (pc.current && candidate) {
                try {
                    await pc.current.addIceCandidate(candidate);
                } catch (e) {
                    console.error("ICE candidate error:", e);
                }
            }
        });

        socket.on("end-call", () => {
            console.log("📴 Call ended by peer");
            endCall(false);
        });

        return () => {
            socket.off("webrtc-offer");
            socket.off("webrtc-answer");
            socket.off("webrtc-candidate");
            socket.off("end-call");
        };
    }, [socket, localStream]);

    // ✅ 4️⃣ Start call (caller side)
    useEffect(() => {
        if (!localStream) return;
        if (currentCall?.from === myUsername) {
            makeOffer();
        }
    }, [localStream, currentCall]);

    const makeOffer = async () => {
        pc.current = createPeer();
        localStream.getTracks().forEach((track) => pc.current.addTrack(track, localStream));

        const offer = await pc.current.createOffer();
        await pc.current.setLocalDescription(offer);

        socket.emit("webrtc-offer", { to: audioid, sdp: offer }); // ✅ FIXED
        setIsCallActive(true);
    };

    // ✅ 5️⃣ Toggle mic
    const toggleMic = () => {
        const track = localStream?.getAudioTracks()[0];
        if (track) {
            track.enabled = !track.enabled;
            setIsMuted(!track.enabled);
        }
    };

    // ✅ 6️⃣ End call
    const endCall = (emit = true) => {
        console.log("🔚 Ending call");
        if (emit) socket.emit("end-call", { to: audioid });
        pc.current?.close();
        localStream?.getTracks().forEach((t) => t.stop());
        setIsCallActive(false);
        setCallTime(0);
        router.push(`/chatlist/${audioid}`);
    };

    // ✅ 7️⃣ Timer
    useEffect(() => {
        if (!isCallActive) return;
        const timer = setInterval(() => setCallTime((p) => p + 1), 1000);
        return () => clearInterval(timer);
    }, [isCallActive]);

    const formatTime = (sec) => {
        const m = Math.floor(sec / 60).toString().padStart(2, "0");
        const s = (sec % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>
                {isCallActive ? `In Call with ${audioid}` : `Calling ${audioid}...`}
            </h2>
            {isCallActive && <p style={styles.timer}>{formatTime(callTime)}</p>}
            <audio ref={remoteAudioRef} autoPlay playsInline />

            <div style={styles.buttonsWrapper}>
                <button
                    style={{
                        ...styles.button,
                        backgroundColor: isMuted ? "#EF4444" : "#10B981",
                    }}
                    onClick={toggleMic}
                >
                    {isMuted ? <FiMicOff size={22} /> : <FiMic size={22} />}
                    {isMuted ? "Mic Off" : "Mic On"}
                </button>

                <button
                    style={{ ...styles.button, backgroundColor: "#EF4444" }}
                    onClick={() => endCall(true)}
                >
                    <FiPhoneOff size={22} /> End Call
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        background: "#0D0D0D",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 10,
    },
    timer: {
        fontSize: 16,
        color: "#9CA3AF",
        marginBottom: 25,
    },
    buttonsWrapper: {
        display: "flex",
        gap: 20,
    },
    button: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "14px 24px",
        borderRadius: 50,
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        cursor: "pointer",
        border: "none",
        transition: "0.2s",
    },
};
