import NavBar from './nav';
import './style.css';

const Employee=()=>{
    return(
        <>
        <NavBar/>
        <div className="d-flex flex-row my-2 justify-content-center">
                <h2 className="text-center text-black">Welcome to Employee Dashboard</h2>
        </div>
        </>
    )
}
export default Employee;
