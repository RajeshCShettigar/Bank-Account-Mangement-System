import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/home";
import Admin from './components/admin/admin';
import Employee from './components/employee/employee';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/home/adminlogin';
import EmployeeLogin from './components/home/employeelogin';
import Deposit from './components/employee/deposit';
import Withdraw from './components/employee/withdraw';
import Transfer from './components/employee/transfer';
import ListCustomer from './components/employee/listcustomer';
import NewCustomer from './components/admin/addnewcustomer';
import NewEmployee from './components/admin/addnewemployee';
import DeleteCustomer from './components/admin/deletecustomer';
import DeleteEmployee from './components/admin/deletemployee';
import ListEmployee from './components/admin/listemployee';
import ListAdminCustomer from './components/admin/listcustomer';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path='/employeeLogin' element={<EmployeeLogin/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/deposit" element={<Deposit/>} />
        <Route path="/withdraw" element={<Withdraw/>} />
        <Route path="/transfer" element={<Transfer/>} />
        <Route path="/listcustomer" element={<ListCustomer/>} />
        <Route path="/newcustomer" element={<NewCustomer/>}/>
        <Route path="/newemployee" element={<NewEmployee/>}/>
        <Route path="/deletecustomer" element={<DeleteCustomer/>}/>
        <Route path="/deleteemployee" element={<DeleteEmployee/>}/>
        <Route path="/listadmincustomer" element={<ListAdminCustomer/>}/>
        <Route path="/listemployee" element={<ListEmployee/>}/>
        {/* <Route path="/logout" element={<h1>Logout Component</h1>} /> */}
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
