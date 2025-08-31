import { useNavigate } from "react-router-dom";

function SimulationCard({simulation}) {

    const navigate = useNavigate();

    function StartSim() {
        if (simulation.title === "Phishing") {
            navigate('/phishinghook');
        } else {
            navigate('/');
        }
    }

    return (
        <div className="bg-red-200 rounded-xl shadow-lg p-6 max-w-sm mx-auto transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center">
                <img src={simulation.image} alt="this is supposed to be a picture" />
                
            </div>
            <div className="text-center">
                <h3 className="text-2xl font-semibold">{simulation.title}</h3>
                <p>{simulation.description}</p>
            </div>
            <div className="start-button bg-green-100 text-black px-6 py-2 rounded-full shadow hover:bg-green-200 transition mb-4">
                    <button className="start-button" onClick={StartSim}
                    >
                        Start
                    </button>
                </div>
        </div>
    );
}
export default SimulationCard;