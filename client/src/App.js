import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
//import Home from "./components/home/home";
//import Login from './components/login/login';
import Customer from './components/customer/customer';
//import Admin from './components/admin/admin';
function App() {
  return (
    <div className="App">
      <Customer/>
    </div>
  );
}

export default App;
