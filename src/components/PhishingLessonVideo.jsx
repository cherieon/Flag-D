import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function PhishingLessonVideo() {
    const playerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('phishing-lesson-player', {
                height: '100%',
                width: '100%',
                videoId: 'wl1mlnbE72U', // Your video ID
                playerVars: { autoplay: 1 },
                events: {
                    'onStateChange': (event) => {
                        if (event.data === window.YT.PlayerState.ENDED) {
                            navigate('/phishingactivity'); // Change to your next page route
                        }
                    }
                }
            });
        };

        return () => {
            if (playerRef.current && playerRef.current.destroy) {
                playerRef.current.destroy();
            }
            delete window.onYouTubeIframeAPIReady;
        };
    }, [navigate]);

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black flex items-center justify-center">
            <div id="phishing-lesson-player"></div>
        </div>
    );
}

export default PhishingLessonVideo;