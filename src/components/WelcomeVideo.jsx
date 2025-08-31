
function WelcomeVideo(){
    return (
        <div className ="relative left-0 w-full h-screen m-0 flex justify-center items-center">
            <iframe
                className="w-full h-full"  
                src="https://www.youtube.com/embed/H6F9RKy7wmU"
                title="Welcome Video" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; icture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default WelcomeVideo;