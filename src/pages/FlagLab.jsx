import React from "react";
import Phishing from "./Phishing";
import SimulationCard from "../components/SimulationCard";
import { Outlet } from "react-router-dom";

const FlagLab = () => {
    return(
        <>
            <h1 className="text-4xl font-bold mb-4">Welcome to the Flag Lab!</h1>
            <SimulationCard simulation={{title: "Phishing", description:"Learn about phishing"}} />
            <Outlet />
        </>
    );

}

export default FlagLab;