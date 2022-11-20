import './style.css';
//import { Link } from 'react-router-dom';
import customer from '../../images/customer.png';
import admin from '../../images/admin.png';
const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <h1>Welcome to Bank of Barodchi</h1>
                <div className="service-box">
                   
                        <div className="card text-white bg-dark mt-3 shadow-lg p-3 mb-5 bg-white rounded services">
                            <button className="btn btn-outline-success float-right" height="100px" >Admin Login</button>
                            <div className="card-body pd-5">
                                <img src={admin} alt={"admin"} className="rounded mx-auto d-block mt-4" />
                            </div>
                        </div>
                   
                        <div className="card text-white bg-dark mt-3 shadow-lg p-3 mb-5 bg-white rounded services">
                            <button className="btn btn-outline-success float-right" height="100px" >Customer Login</button>
                            <div className="card-body pd-5">
                                <img src={customer} alt={"customer"} className="rounded mx-auto d-block mt-4" />
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;