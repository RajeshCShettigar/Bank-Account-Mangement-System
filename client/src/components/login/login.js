import './style.css';
import loginImage from '../../images/loginimage.webp';

const Login = () => {
    return (
        <div className="login">
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row d-0">
                        <div className="col-sm-6 text-black">
                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                                <form style={{ width: "23rem" }}>

                                    <h3 className="fw-normal mb-3 pb-3" >Enter Your Login Credentials</h3>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="form2Example18">Enter your Username</label>
                                        <input type="email" id="form2Example18" className="form-control form-control-lg" />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="form2Example28">Enter your Password</label>
                                        <input type="password" id="form2Example28" className="form-control form-control-lg" />
                                    </div>

                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
                                        <button className="btn btn-info btn-lg btn-block bg-danger ml-1" type="button">Home</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block loginimage">
                            <img src={loginImage} alt={"loginimage"} className="w-100 vh-100" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;