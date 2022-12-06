import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './nav';
import NewCustomer from './addnewcustomer';
import NewEmployee from './addnewemployee';
import ListCustomer from './listcustomer';
import ListEmployee from './listemployee';
import DeleteCustomer from './deletecustomer';
import DeleteEmployee from './deletemployee';

const Admin=()=>{
    return(
        <div className="admin">
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/newcustomer" element={<NewCustomer/>} />
            <Route path="/newemployee" element={<NewEmployee/>} />
            <Route path="/deletecustomer" element={<DeleteCustomer/>} />
            <Route path="/deleteemployee" element={<DeleteEmployee/>} />
            <Route path="/listcustomer" element={<ListCustomer/>} />
            <Route path="/listemployee" element={<ListEmployee/>} />
            <Route path="/home" element={<h1>Logout Component</h1>} />
        </Routes>
        </BrowserRouter>
        </div>
    )
}

export default Admin;