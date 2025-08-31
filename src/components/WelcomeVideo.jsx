
function WelcomeVideo(){
    return (
        <div className ="welcome-video">
            <iframe
                width="560"
                height="315"  
                src="https://www.youtube.com/watch?v=H6F9RKy7wmU"
                title="Welcome Video" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; icture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default WelcomeVideo;