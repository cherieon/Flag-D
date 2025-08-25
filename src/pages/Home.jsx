import React from "react";

import Popup from "../components/Popup";
import welcomebanner from '../components/welcomebanner.jpg';
import WelcomeVideo from "../components/WelcomeVideo";


const Home = () => {
    return(
    <div>
        {/* <Popup /> */}
        <h1 className="text-3xl font-bold text-center my-8">Cyber Safety Training</h1>
        <img src={welcomebanner} alt="Cyber Safety" style={{ width: '100%', height: 'auto', display: 'block'}} />
        <WelcomeVideo />
    </div>
    );
}

export default Home;