import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './adminlogin';
import EmployeeLogin from './employeelogin';
import NavBar from '../home/nav';
const Home = () => {
    return (
        <div className="home">
            <h1 className="text-center py-4">Welcome To Bank of PRK</h1>
            <div className="container-out">
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/adminlogin" element={<AdminLogin/>}/>
                <Route path="/employeelogin" element={<EmployeeLogin/>}/>
            </Routes>
            </BrowserRouter>
            </div>
        </div>
    );
};

export default Home;