import React from "react";

import welcomebanner from '../components/welcomebanner.jpg';
import WelcomeVideo from "../components/WelcomeVideo";

const Home = () => {
    return(<div>
        <img src={welcomebanner} alt="Cyber Safety" style={{ width: '100%', height: 'auto', display: 'block'}} />
        <WelcomeVideo />
    </div>
    );
}

export default Home;