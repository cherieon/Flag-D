import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function PhishingHookVideo() {
    const playerRef = useRef(null);
    const containerId = useRef(`phishing-player-${Math.random().toString(36).substr(2, 9)}`);
    const navigate = useNavigate();

    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(tag);
        }

        function onYouTubeReady() {
            playerRef.current = new window.YT.Player(containerId.current, {
                height: '100%',
                width: '100%',
                videoId: '9x_Z8vlmNo0',
                playerVars: { autoplay: 1 },
                events: {
                    'onStateChange': (event) => {
                        if (event.data === window.YT.PlayerState.ENDED) {
                            navigate('/phishinglesson');
                        }
                    }
                }
            });
        }

        if (window.YT && window.YT.Player) {
            onYouTubeReady();
        } else {
            window.onYouTubeIframeAPIReady = onYouTubeReady;
        }

        return () => {
            if (playerRef.current && playerRef.current.destroy) {
                playerRef.current.destroy();
            }
            if (window.onYouTubeIframeAPIReady === onYouTubeReady) {
                delete window.onYouTubeIframeAPIReady;
            }
        };
    }, [navigate]);

    return (
        <div
            id={containerId.current}
            className="fixed inset-0 w-screen h-screen z-50 bg-black flex items-center justify-center"
        ></div>
    );
}

export default PhishingHookVideo;