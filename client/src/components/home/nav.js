import { Link } from 'react-router-dom';
import './style.css';

const NavBar=()=>{
    return(
        <div className="container">
            <div className="navbar-container">
            <div className="nav-item item1">
            <Link to='/adminlogin' className='login-switch'>Admin</Link>
            </div>
            <div className="nav-item item2">
            <Link to='/employeelogin' className='login-switch'>Employee</Link>
            </div>
            </div>
        </div>
    )
}
export default NavBar;