import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './nav';
import NewCustomer from './addnewcustomer';
import ListCustomer from './listcustomer';
import UpdateInfo from './updateinfo';
import DeleteAccount from './deleteaccount';

const Admin=()=>{
    return(
        <div className="admin">
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<NewCustomer/>} />
            <Route path="/list" element={<ListCustomer/>} />
            <Route path="/updateinfo" element={<UpdateInfo/>} />
            <Route path="/deletecustomer" element={<DeleteAccount/>} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
        </Routes>
        </BrowserRouter>
        </div>
    )
}

export default Admin;