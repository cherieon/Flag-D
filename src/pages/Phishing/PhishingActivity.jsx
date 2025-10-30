// ...existing code...
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhishingBTSVideo from "../../components/PhishingBTSVideo";

const messagesData = [
       {
        id: 1,
        sender: "Amy ❤️",
        email: "amy@icloud.com",
        text: "Hey! Check out these funny photos from last night!",
        phishing: false,
    },
    {
        id: 2,
        sender: "TikTok Support",
        email: "no-reply@TrickTok.com",
        text: "TikTok Support: Hi [Name], we detected unusual activity on your account. Verify your profile now to avoid suspension in 10 minutes https://example.com/tiktok-verify-demo Tap the link to confirm your info immediately.",
        phishing: true,
        videoId: "at-hPctMC1U",
    },
    {
        id: 3,
        sender: "Free Robux",
        email: "rewards@r0bl0x-supp0rt.co",
        text: "Congratz — you've been selected to receive 1000 FREE Robux! Click HERE to claim your reward before the offer expires!",
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
    const [score, setScore] = useState(0);

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

        // Check if answer is correct
        const isCorrect =
            (selectedMsg.phishing && choice === "redflag") ||
            (!selectedMsg.phishing && choice === "safe");

        if (isCorrect) setScore((prev) => prev + 1);

        if (!selectedMsg.phishing) {
            setTimeout(removeSelectedMessage, 1000);
        }
    }

    function handleBack() {
        setSelectedId(null);
        setUserChoice(null);
        setShowVideo(false);
    }

    function handleVideoEnd() {
        //if a phishing message (clear action)
        removeSelectedMessage();
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left column */}
            <div className="md:w-1/4 w-full p-8 bg-red-100">
                <h1 className="text-4xl font-bold mb-4">Ping or Pass</h1>
                <p className="mb-4">Welcome to Ping or Pass!</p>
                <p className="mb-4">Your job is to read your messages and respond while avoiding phishing attacks.</p>
                <p className="mb-4">Click on the message and determine whether it's a red flag or a green flag.</p>
                <p className="mb-4">
                    Don't forget that social engineers try to exploit fear, curiosity, urgency, trust, and greed. Pay attention to the emotions you are feeling and the tell-tale signs of a phishing email.
                </p>
            </div>

            {/* Right column */}
            <div className="md:w-3/4 w-full p-8 flex flex-col items-center justify-start bg-white">
                <div className="w-full max-w-lg border rounded-lg shadow bg-slate-50 p-4 min-h-[500px] flex flex-col">
                    <h2 className="text-2xl font-semibold mb-4 text-grey-400">myMessage</h2>

                    {/* inbox view */}
                    {!selectedId ? (
                        <div className="space-y-3">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className="cursor-pointer rounded-lg p-3 border bg-white hover:bg-red-100 border-gray-200 transition"
                                    onClick={() => {
                                        setSelectedId(msg.id);
                                        setUserChoice(null);
                                        setShowVideo(false);
                                    }}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-grey-400">{msg.sender}</span>
                                        <span className="text-xs text-gray-400">• Message</span>
                                    </div>
                                    <div className="text-gray-800">{msg.text}</div>
                                </div>
                            ))}
                            {messages.length === 0 && (
                                <div className="text-center mt-10">
                                    <div className="text-green-600 font-bold">
                                        🎉 Inbox cleared! Great job!
                                        <br />
                                        Your score: {score} / {messagesData.length}
                                    </div>
                                    <button
                                        className="mt-4 px-5 py-2 bg-slate-400 text-white rounded-full shadow hover:bg-red-300 transition"
                                        onClick={() => navigate('/phishingdebrief')}
                                    >
                                        Continue
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        //message view
                        <div className="flex flex-col items-end h-full">
                            <button
                                className="mb-4 px-3 py-1 text-xs bg-gray-200 rounded-full self-start"
                                onClick={handleBack}
                            >
                                ← Back to Inbox
                            </button>

                            <div className="w-full flex flex-col items-end">
    
                            <div className="w-full flex flex-col items-end">
                            {/* sender info */}
                            <div className="mb-2 w-full flex justify-end">
                                <div className="flex flex-col items-end">
                                    <span className="font-bold text-gray-700">{selectedMsg?.sender}</span>
                                    <span className="text-xs text-gray-500">{selectedMsg?.email}</span>
                                </div>
                            </div>
                            {/* chat bubble */}
                            <div className="relative max-w-xs self-end mb-4">
                                <div className="bg-red-200 rounded-2xl px-6 py-5 shadow-lg text-gray-900 font-semibold text-lg">
                                    <div className="text-base break-words">{selectedMsg?.text}</div>
                                </div>
                                <div className="absolute right-0 bottom-0 w-4 h-4">
                                    <svg viewBox="0 0 20 20" className="fill-red-200">
                                        <polygon points="0,0 20,0 20,20" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                                {/* Choice buttons */}
                                {!userChoice ? (
                                    <div className="flex gap-4">
                                        <button
                                            className="px-4 py-2 bg-red-500 text-white rounded-full shadow hover:bg-red-700 transition"
                                            onClick={() => handleChoice("redflag")}
                                        >
                                            🚩 Red Flag
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
                                            onClick={() => handleChoice("safe")}
                                        >
                                            ✅ Green Flag
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        {/* ansqwers */}
                                        {selectedMsg?.phishing ? (
                                            userChoice === "redflag" ? (
                                                <div className="mt-4 text-lg font-semibold text-green-700">
                                                    W, you didn’t fall for that!
                                                    <br /> This is what WOULD’VE happened if you did…
                                                </div>
                                            ) : (
                                                <div className="mt-4 text-lg font-semibold text-red-600">
                                                    L move… now you’re NPC status
                                                    <br />This is what WILL happen…
                                                </div>
                                            )
                                        ) : userChoice === "safe" ? (
                                            <div className="mt-4 text-lg font-semibold text-green-700">
                                                Okayyy smart. Not everything’s a scam.
                                            </div>
                                        ) : (
                                            <div className="mt-4 text-lg font-semibold text-yellow-600">
                                                It’s good to check twice, but that one was safe
                                            </div>
                                        )}

                                        {/* show bts*/}
                                        {selectedMsg?.phishing && !showVideo && (
                                            <button
                                                className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-full shadow hover:bg-teal-600 transition flex items-center gap-2"
                                                onClick={() => setShowVideo(true)}
                                            >
                                                <span role="img" aria-label="see">👀</span> POV: you are the Scammer
                                            </button>
                                        )}

                                        {/* remove the message */}
                                        {!selectedMsg?.phishing && (
                                            <div className="mt-4 text-sm text-gray-500">Message will be filed...</div>
                                        )}

                                        {/* show video then delete the message */}
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