import React from "react";

import welcomebanner from '../components/welcomebanner.jpg';

const Home = () => {
    return(<div>
        <img src={welcomebanner} alt="Cyber Safety" style={{ width: '100%', height: 'auto', display: 'block'}} />
    </div>
    );
}

export default Home;