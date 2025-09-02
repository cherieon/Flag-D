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
                <button
                    className="w-96 h-28 text-3xl bg-indigo-200 text-white rounded-2xl shadow hover:bg-red-200 transition font-bold flex items-center justify-center mb-8"
                    onClick={() => setShowVideo(true)}
                >
                    Are you ready?
                </button>
            ) : (
                <PhishingLessonVideo onEnd={handleVideoEnd} />
            )}
        </div>
    );
}

export default PhishingLesson;