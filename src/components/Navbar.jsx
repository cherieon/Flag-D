import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/missions">Missions</Link>
        </nav>
    );
}

export default Navbar;