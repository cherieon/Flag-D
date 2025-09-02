// ...existing code...
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhishingBTSVideo from "../../components/PhishingBTSVideo";

const messagesData = [
    {
        id: 1,
        sender: "Bank Support",
        text: "Your account has been locked. Click here to verify your information.",
        phishing: true,
        videoId: "IzilJYyDmh0",
    },
    {
        id: 2,
        sender: "Friend",
        text: "Hey! Check out these funny photos from last night!",
        phishing: false,
        videoId: "O7wFnlTtVMc",
    },
    {
        id: 3,
        sender: "IT Admin",
        text: "Urgent: Update your password immediately using this link.",
        phishing: true,
        videoId: "GATSPoc2z48",
    },
];

const PhishingActivity = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState(messagesData);
    const [selectedId, setSelectedId] = useState(null);
    const [userChoice, setUserChoice] = useState(null);
    const [showVideo, setShowVideo] = useState(false);

    const selectedMsg = messages.find((m) => m.id === selectedId);

    function removeSelectedMessage() {
        if (!selectedId) return;
        setMessages((prev) => prev.filter((m) => m.id !== selectedId));
        setSelectedId(null);
        setUserChoice(null);
        setShowVideo(false);
    }

    function handleChoice(choice) {
        setUserChoice(choice);

        if (!selectedMsg) return;

        if (!selectedMsg.phishing) {
            // Safe message: clear immediately (short feedback delay)
            setTimeout(removeSelectedMessage, 1000);
        } else {
            // Phishing message: don't remove yet — user can click 👀 to view the video
            // showVideo remains false until the user clicks the 👀 button
        }
    }

    function handleBack() {
        setSelectedId(null);
        setUserChoice(null);
        setShowVideo(false);
    }

    function handleVideoEnd() {
        // After watching the phishing video, remove the message
        removeSelectedMessage();
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left column */}
            <div className="md:w-1/4 w-full p-8 bg-pink-50">
                <h1 className="text-4xl font-bold mb-4">Ping or Pass</h1>
                <p className="mb-4">Welcome to Ping or Pass!</p>
                <p className="mb-4">Your job is to clear your dm's while avoiding phishing attempts.</p>
                <p className="mb-4">Click on the message and determine whether it's a red flag or a green flag.</p>
                <p className="mb-4">
                    Don't forget that social engineers try to exploit fear, curiosity, urgency, trust, and greed.
                </p>
            </div>

            {/* Right column */}
            <div className="md:w-3/4 w-full p-8 flex flex-col items-center justify-start bg-white">
                <div className="w-full max-w-lg border rounded-lg shadow bg-gray-50 p-4 min-h-[500px] flex flex-col">
                    <h2 className="text-2xl font-semibold mb-4 text-pink-600">Inbox</h2>

                    {/* Inbox list */}
                    {!selectedId ? (
                        <div className="space-y-3">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className="cursor-pointer rounded-lg p-3 border bg-white hover:bg-pink-50 border-gray-200 transition"
                                    onClick={() => {
                                        setSelectedId(msg.id);
                                        setUserChoice(null);
                                        setShowVideo(false);
                                    }}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-pink-700">{msg.sender}</span>
                                        <span className="text-xs text-gray-400">• Message</span>
                                    </div>
                                    <div className="text-gray-800">{msg.text}</div>
                                </div>
                            ))}
                            {messages.length === 0 && (
                                <div className="text-center mt-10">
                                    <div className="text-green-600 font-bold">🎉 Inbox cleared! Great job!</div>
                                    <button
                                        className="mt-4 px-5 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition"
                                        onClick={() => navigate('/phishingdebrief')}
                                    >
                                        Continue
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        // Selected message view (DM-style)
                        <div className="flex flex-col items-end h-full">
                            <button
                                className="mb-4 px-3 py-1 text-xs bg-gray-200 rounded-full self-start"
                                onClick={handleBack}
                            >
                                ← Back to Inbox
                            </button>

                            <div className="w-full flex flex-col items-end">
                                <div className="relative max-w-xs self-end mb-4">
                                    <div className="bg-pink-200 rounded-2xl px-5 py-3 shadow text-gray-900">
                                        <div className="text-xs text-pink-700 font-bold mb-1">{selectedMsg?.sender}</div>
                                        <div className="text-base">{selectedMsg?.text}</div>
                                    </div>
                                    <div className="absolute right-0 bottom-0 w-4 h-4">
                                        <svg viewBox="0 0 20 20" className="fill-pink-200">
                                            <polygon points="0,0 20,0 20,20" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Choice buttons */}
                                {!userChoice ? (
                                    <div className="flex gap-4">
                                        <button
                                            className="px-4 py-2 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition"
                                            onClick={() => handleChoice("redflag")}
                                        >
                                            🚩 Red Flag
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
                                            onClick={() => handleChoice("safe")}
                                        >
                                            ✅ Safe
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        {/* Feedback */}
                                        {selectedMsg?.phishing ? (
                                            userChoice === "redflag" ? (
                                                <div className="mt-4 text-lg font-semibold text-green-700">
                                                    Good job — that is correct!
                                                </div>
                                            ) : (
                                                <div className="mt-4 text-lg font-semibold text-red-600">
                                                    Nope — that was a phishing attempt.
                                                </div>
                                            )
                                        ) : userChoice === "safe" ? (
                                            <div className="mt-4 text-lg font-semibold text-green-700">
                                                Good job — that is correct! This message will be cleared.
                                            </div>
                                        ) : (
                                            <div className="mt-4 text-lg font-semibold text-yellow-600">
                                                Nope — this message was actually safe. It will be cleared.
                                            </div>
                                        )}

                                        {/* For phishing messages: show 👀 button to play video */}
                                        {selectedMsg?.phishing && !showVideo && (
                                            <button
                                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition flex items-center gap-2"
                                                onClick={() => setShowVideo(true)}
                                            >
                                                <span role="img" aria-label="see">👀</span> See what would have happened
                                            </button>
                                        )}

                                        {/* For safe messages: removed after short delay (no video) */}
                                        {!selectedMsg?.phishing && (
                                            <div className="mt-4 text-sm text-gray-500">Message will be removed...</div>
                                        )}

                                        {/* Video overlay (only for phishing and after 👀 clicked) */}
                                        {selectedMsg?.phishing && showVideo && (
                                            <PhishingBTSVideo videoId={selectedMsg.videoId} onEnd={handleVideoEnd} />
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PhishingActivity;