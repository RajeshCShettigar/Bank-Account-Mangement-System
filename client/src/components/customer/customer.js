import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './nav';
const Customer=()=>{
    return(
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<h1>Deposit Component</h1>} />
            <Route path="/withdraw" element={<h1>Withdraw Component</h1>} />
            <Route path="/transfer" element={<h1>Transfer Component</h1>} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Customer;