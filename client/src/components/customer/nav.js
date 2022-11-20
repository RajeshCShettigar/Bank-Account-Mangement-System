import './style.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
            <a className="navbar-brand" href="/admin">Customer</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-8" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item px-4">
                        <Link className="nav-link " to="/">Deposit</Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link className="nav-link" to="/withdraw">WithDraw</Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link className="nav-link" to="/Transfer">Transfer</Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link className="nav-link" to="/Logout">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;