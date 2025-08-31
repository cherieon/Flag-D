import React, { useState } from "react";

import PhishingLessonVideo from "../../components/PhishingLessonVideo";

const PhishingLesson = () => {
    const [showVideo, setShowVideo] = useState(false);

    return(
    <div>
        <h1 className="text-4xl font-bold mb-4">Phishing Lesson</h1>
        {!showVideo ? (
                <button
                    className="px-6 py-3 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition"
                    onClick={() => setShowVideo(true)}
                >
                    Are you ready?
                </button>
            ) : (
                <PhishingLessonVideo />
            )}
    </div>
    );
}
export default PhishingLesson;