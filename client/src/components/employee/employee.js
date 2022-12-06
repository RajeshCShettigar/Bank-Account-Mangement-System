import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Deposit from './deposit';
import NavBar from './nav';
import Withdraw from './withdraw';
import Transfer from './transfer';
import ListCustomer from './listcustomer';
import './style.css';
const Employee=()=>{
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/deposit" element={<Deposit/>} />
            <Route path="/withdraw" element={<Withdraw/>} />
            <Route path="/transfer" element={<Transfer/>} />
            <Route path="/listcustomer" element={<ListCustomer/>} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
        </Routes>
        </BrowserRouter>
    )
}
export default Employee;
