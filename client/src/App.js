import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
//import Home from "./components/home/home";
//import Login from './components/login/login';
import Employee from './components/employee/employee';
//import Admin from './components/admin/admin';
function App() {
  return (
    <div className="App">
      <Employee/>
    </div>
  );
}

export default App;
