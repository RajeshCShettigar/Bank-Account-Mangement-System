import './App.css';
import Home from './components/home/home'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Admin from './components/admin/admin'
import CustomerLogin from './components/customerboard/customerlogin'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/customer" element={<CustomerLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
