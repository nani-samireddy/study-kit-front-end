import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav>
            <h1 className="sitetitle">STUDYKIT</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Performance">Perfromance</NavLink>
                <NavLink to="/Profile">Profile</NavLink>
            </div> 
        </nav>
    );
}

export default Navbar;