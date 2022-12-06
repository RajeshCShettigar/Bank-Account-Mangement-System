import './login.css';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Admin from '../admin/admin';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const url="http://localhost:5000/validateadminlogin";
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const resetForm=()=>{
        setData({});
      }
      const [data, setData] = useState({
        username: "",
        password: "",
    });
    const errRef=useRef();
    const [errMsg,setErrMsg]=useState('');
    useEffect(()=>{
        setErrMsg(' ');
      },[]);
    const handle = (e) => {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }
    const submitData= (e)=>{
        e.preventDefault();
        console.log(data);
        axios.post(url,data
            ).then(resp=>{
                console.log(resp);
                console.log(resp.data===true);
                if(resp.data===true){
                  
                }else{
                   setErrMsg("Invalid username or password");
                    resetForm();
                }
            }).catch(err=>{
                console.log(err);
            });
    }
    return (
        <div className="admin-login">
            <div className="login-box">
                <h1>Sign In</h1>
                <form onSubmit={(e)=>submitData(e)}>
                <div className="textbox">
                    <i className="fas fa-user"></i>
                    <input input ref={inputRef} onChange={(e) => handle(e)} value={data.username} 
                    autoComplete="off" type="text" placeholder="Username" id="username"required/>
                </div>
                <div className="textbox">
                    <i className="fas fa-lock"></i>
                    <input type="password"onChange={(e) => handle(e)} value={data.password} 
                      autoComplete="off" placeholder="Password" id="password" required/>
                </div>
                <button type="submit" className="btn">Sign in</button>
                <div>
                 </div>
                </form>
                <p ref={errRef} className={errMsg?"err-msg-on":"err-msg-off"}
                    aria-live="assertive">{errMsg}</p>
            </div>
        </div>
    )
}
export default AdminLogin;