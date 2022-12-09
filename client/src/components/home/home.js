import './style.css';
import NavBar from '../home/nav';

const Home = () => {
    return (
        <>
            <div className="home">
                <h1 className="text-center py-4 welcome-head">Welcome To Yes Bank</h1>
                <div className="container-out my-3">
                <NavBar/>
                <h2 className='text-center py-4 welcome-head'>Select The Above Option ☝️</h2>
                </div>
            </div>
        </>
    );
};

export default Home;