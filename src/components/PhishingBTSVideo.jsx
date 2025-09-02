import { useEffect, useRef } from "react";

function PhishingBTSVideo({ videoId, onEnd }) {
    const playerRef = useRef(null);
    const containerId = useRef(`phishing-bts-player-${Math.random().toString(36).substr(2, 9)}`);

    useEffect(() => {
        // Only add the script if it doesn't exist
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(tag);
        }

        // Setup player when API is ready
        function onYouTubeReady() {
            playerRef.current = new window.YT.Player(containerId.current, {
                height: '100%',
                width: '100%',
                videoId: videoId,
                playerVars: { autoplay: 1 },
                events: {
                    'onStateChange': (event) => {
                        if (event.data === window.YT.PlayerState.ENDED) {
                            onEnd();
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
            // Only delete the callback if it matches
            if (window.onYouTubeIframeAPIReady === onYouTubeReady) {
                delete window.onYouTubeIframeAPIReady;
            }
        };
    }, [videoId, onEnd]);

    return (
        <div className="fixed inset-0 w-screen h-screen z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <div id={containerId.current} className="w-full h-full"></div>
        </div>
    );
}

export default PhishingBTSVideo;