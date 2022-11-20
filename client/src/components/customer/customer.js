import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Deposit from './deposit';
import NavBar from './nav';
import Withdraw from './withdraw';
import Transfer from './transfer';
const Customer=()=>{
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Deposit/>} />
            <Route path="/withdraw" element={<Withdraw/>} />
            <Route path="/transfer" element={<Transfer/>} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Customer;