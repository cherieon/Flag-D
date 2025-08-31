import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function PhishingHookVideo() {
    const playerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('phishing-player', {
                height: '390',
                width: '640',
                videoId: '_b9rpMPRHiE',
                playerVars: {
                    autoplay: 1,
                },
                events: {
                    'onStateChange': (event) => {
                        if (event.data === window.YT.PlayerState.ENDED) {
                            navigate('/phishinglesson');
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
        <div id="phishing-player"
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-black flex items-center justify-center"
        ></div>
    );
}

export default PhishingHookVideo;