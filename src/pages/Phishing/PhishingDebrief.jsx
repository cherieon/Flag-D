import React from "react";
import { useNavigate } from "react-router-dom";

function PhishingDebrief() {
    const navigate = useNavigate();
    return (
        <div className="fixed top-0 left-0 w-full flex justify-center items-center min-h-screen">
            <h1 className="text-3xl text-center font-bold mb-6">Debrief Video</h1>
            <p className="max-w-2xl text-center mb-8">
                just so you know this isnt done yet but will give some links and stuff
            </p>
            <button
                type="button"
                className="px-6 py-3 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition"
                onClick={() => navigate('/')}
            >
                Return Home
            </button>
        </div>
    );
}

export default PhishingDebrief;