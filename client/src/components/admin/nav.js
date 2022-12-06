import './style.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
            <div className="navbar-brand admin">Admin</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-8" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item px-4">
                        <Link className="nav-link text-white" to="/newcustomer">New Customer</Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link className="nav-link text-white" to="/newemployee">New Employee</Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link className="nav-link text-white" to="/listcustomer">List Customer</Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link className="nav-link text-white" to="/listemployee">List Employee</Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link className="nav-link text-white" to="/deletecustomer">Delete Customer</Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link className="nav-link text-white" to="/deleteemployee">Delete Employee</Link>
                    </li>
                    <li className="nav-item px-4">
                        <Link className="nav-link text-white" to="/home">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;
