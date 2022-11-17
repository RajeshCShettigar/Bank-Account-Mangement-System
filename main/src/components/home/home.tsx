import './style.css';
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='login'>
      <div className="container">
        <h1>Welcome to Bank of Barodchi</h1>
          <div className="service-box">
          <div className="services" id="admin">
            <Link to="/admin">Admin Login</Link>
          </div>
          <div className="services" id="register">
            <Link to="/customer">Customer Login</Link>
          </div>
          </div>
        <button>Home</button>
      </div>
    </div>
  );
};

export default Home;
