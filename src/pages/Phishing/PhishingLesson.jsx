import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhishingLessonVideo from "../../components/PhishingLessonVideo";

function PhishingLesson() {
    const [showVideo, setShowVideo] = useState(false);
    const navigate = useNavigate();

    function handleVideoEnd() {
        navigate("/phishingactivity");
    }

    return (
        <div className="min-h-screen flex flex-col items-center pt-50 bg-white">
            {!showVideo ? (
                <>
                    <h1 className="text-4xl font-bold mb-6">Are You Ready?</h1>
                    <button
                        className="w-96 h-28 text-3xl bg-slate-300 text-white rounded-2xl shadow hover:bg-red-200 transition font-bold flex items-center justify-center mb-8"
                        onClick={() => setShowVideo(true)}
                    >
                        Yes!
                    </button>
                    <button
                        className="w-96 h-28 text-3xl bg-slate-300 text-white rounded-2xl shadow hover:bg-red-200 transition font-bold flex items-center justify-center mb-8"
                        onClick={() => setShowVideo(true)}
                    >
                        Yes!!
                    </button>
                </>
            ) : (
                <PhishingLessonVideo onEnd={handleVideoEnd} />
            )}
        </div>
    );
}

export default PhishingLesson;