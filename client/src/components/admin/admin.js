import NavBar from './nav';

const Admin=()=>{
    return(
        <div className="admin">
        <NavBar/>
        <div className="d-flex flex-row my-2 justify-content-center">
                <h2 className="text-center text-black ">Welcome to Admin Dashboard</h2>
        </div>
        </div>
    )
}

export default Admin;