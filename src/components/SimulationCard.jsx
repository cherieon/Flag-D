import { useNavigate } from "react-router-dom";

function SimulationCard({simulation}) {

    const navigate = useNavigate();

    function StartSim() {
        if (simulation.title === "Deepfakes") {
            navigate('/missions/deepfake');
        } else {
            navigate('/');
        }
    }

    return (
        <div className="simulation-card">
            <div className="simulation-poster">
                <img src={simulation.image} alt={simulation.title} />
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