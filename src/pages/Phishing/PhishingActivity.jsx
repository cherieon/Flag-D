import React, { useState } from "react";

const messages = [
    {
        id: 1,
        sender: "Bank Support",
        text: "Your account has been locked. Click here to verify your information.",
        phishing: true,
    },
    {
        id: 2,
        sender: "Friend",
        text: "Hey! Check out these funny photos from last night!",
        phishing: false,
    },
    {
        id: 3,
        sender: "IT Admin",
        text: "Urgent: Update your password immediately using this link.",
        phishing: true,
    },
];

const PhishingActivity = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [userChoice, setUserChoice] = useState(null);

    const selectedMsg = messages.find(m => m.id === selectedId);

    function handleChoice(choice) {
        setUserChoice(choice);
    }

    function handleBack() {
        setSelectedId(null);
        setUserChoice(null);
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left column with lots of text */}
            <div className="md:w-1/4 w-full p-8 bg-pink-50">
                <h1 className="text-4xl font-bold mb-4">Ping or Pass</h1>
                <p className="mb-4">
                    Welcome to Ping or Pass!
                </p>
                <p className="mb-4">
                    Your job is to clear your dm's while avoiding phishing attempts
                </p>
                <p className="mb-4">
                    Click on the message and determine whether it's a red flag or a green flag
                </p>
                <p className="mb-4">
                    dont forget that social engineers are trying to exploit these emotions: fear, curiosity, urgency, trust, and greed. watch out while you play
                </p>
                {/* Add more text as needed */}
            </div>
            {/* Right column: DM chatbox */}
            <div className="md:w-3/4 w-full p-8 flex flex-col items-center justify-start bg-white">
                <div className="w-full max-w-lg border rounded-lg shadow bg-gray-50 p-4 min-h-[500px] flex flex-col">
                    <h2 className="text-2xl font-semibold mb-4 text-pink-600">Inbox</h2>
                    {!selectedId ? (
                        <div className="space-y-3">
                            {messages.map(msg => (
                                <div
                                    key={msg.id}
                                    className="cursor-pointer rounded-lg p-3 border bg-white hover:bg-pink-50 border-gray-200 transition"
                                    onClick={() => setSelectedId(msg.id)}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-pink-700">{msg.sender}</span>
                                        <span className="text-xs text-gray-400">• Message</span>
                                    </div>
                                    <div className="text-gray-800">{msg.text}</div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-end h-full">
                            <button
                                className="mb-4 px-3 py-1 text-xs bg-gray-200 rounded-full self-start"
                                onClick={handleBack}
                            >
                                ← Back to Inbox
                            </button>
                            <div className="w-full flex flex-col items-end">
                                <div className="bg-pink-100 rounded-2xl px-5 py-3 mb-4 shadow max-w-xs self-end">
                                    <div className="text-sm text-pink-700 font-bold mb-1">{selectedMsg.sender}</div>
                                    <div className="text-gray-800">{selectedMsg.text}</div>
                                </div>
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
                                    <div className="mt-4 text-lg font-semibold">
                                        {userChoice === "redflag" && selectedMsg.phishing
                                            ? <span className="text-red-600">Correct! This is a phishing attempt.</span>
                                            : userChoice === "redflag"
                                                ? <span className="text-yellow-600">Not quite! This message is safe.</span>
                                                : userChoice === "safe" && !selectedMsg.phishing
                                                    ? <span className="text-green-600">Correct! This message is safe.</span>
                                                    : <span className="text-red-600">Oops! This is actually a phishing attempt.</span>
                                        }
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PhishingActivity;