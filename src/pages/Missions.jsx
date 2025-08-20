import React from "react";
import Deepfake from "./Deepfake";
import SimulationCard from "../components/SimulationCard";
import { Outlet } from "react-router-dom";

const Missions = () => {
    return(
        <>
            <SimulationCard simulation={{title: "Deepfakes", description:"Learn about deepfakes"}} />
            <Outlet />
        </>
    );

}

export default Missions;