import './style.css';
const Home = () => {
  return (
    <div className='login'>
      <div className="container">
        <h1>Welcome to Bank of Barodchi</h1>
        <div className="service-box">
          <div className="services" id="admin">
            <a href="/admin">Admin Login</a>
          </div>
          <div className="services" id="register">
            <a href="/customer">Customer Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
