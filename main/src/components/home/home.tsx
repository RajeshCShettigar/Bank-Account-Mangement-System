import './style.css';
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  const GoToHome = ()=>{
    navigate('/');
  };
  const GoToCustomer= ()=>{
    navigate('/customer');
  }
  const GoToAdmin=()=>{
    navigate('/admin');
  }
  return (
    <div className='login'>
      <div className="container">
        <h1>Welcome to Bank of Barodchi</h1>
          <div className="service-box">
          <div className="services" id="admin">
            <Link to="/admin" onClick={GoToAdmin}>Admin Login</Link>
          </div>
          <div className="services" id="register">
            <Link to="/customer" onClick={GoToCustomer}>Customer Login</Link>
          </div>
          </div>
        <button onClick={GoToHome}>Home</button>
      </div>
    </div>
  );
};

export default Home;
