import { useNavigate } from "react-router-dom";

function SimulationCard({simulation}) {

    const navigate = useNavigate();

    function StartSim() {
        if (simulation.title === "Phishing") {
            navigate('/phishing');
        } else {
            navigate('/');
        }
    }

    return (
        <div className="simulation-card">
            <div className="simulation-poster">
                <img src={simulation.image} alt="this is supposed to be a picture" />
                <div className="simuation-start">
                    <button className="start-button" onClick={StartSim}>
                        Start
                    </button>
                </div>
            </div>
            <div className="simulation-info">
                <h3>{simulation.title}</h3>
                <p>{simulation.description}</p>
            </div>
        </div>
    );
}
export default SimulationCard;