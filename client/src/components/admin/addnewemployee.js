import './style.css';
import React,{useState,useEffect,useRef} from 'react';
import Axios from 'axios';

const NewEmployee=()=>{
  const newemployeeRef=useRef();
  const [successMsg,setSuccessMsg]=useState('');
  useEffect(()=>{
      setSuccessMsg(false);
    },[]); 
    const url="http://localhost:5000/admin/newemployee";
    const [data,setData]=useState({
        empid:"",
        ename:"",
        epassword:"",
    });
    const inputRef=useRef(null);
    useEffect(()=>{
       inputRef.current.focus();
    },[]);
   
    const handle=(e)=>{
        const newdata={...data};
        newdata[e.target.id]=e.target.value;
        setData(newdata);
    }   
    const submitData=(e)=>{
      e.preventDefault();
     Axios.post(url,{
      empid:data.empid,
      ename:data.ename,
      epassword:data.epassword,
    })
    .then(resp=>{
      if(resp.data===false){
        setSuccessMsg("Employee id already exists")
      }else{
        setSuccessMsg("New employee added");
      }
    })
    };
    const resetForm=()=>{
      setData({});
    }
    return(
      <div className="employee mx-1 mt-1 px-4 py-4">
           <div className="new-customer text-left ">
            <h1 className="text-center"> Employee Details</h1>
            <form onSubmit={(e)=>submitData(e)}>
                    <div className="mx-3 my-3 row ">
                        <label htmlFor="custid" className="col-3">Employee ID </label>
                        <input ref={inputRef} onChange={(e)=>handle(e)} value={data.empid} type="number" className="form-control col" id="empid" placeholder="123"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <label htmlFor="name" className="col-3">Name</label>
                        <input onChange={(e)=>handle(e)} value={data.ename} type="text" className="form-control col" id="ename" placeholder="name"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <label htmlFor="adharno" className="col-3">Password</label>
                        <input onChange={(e)=>handle(e)} value={data.epassword} type="password" className="form-control col" id="epassword" placeholder="........"/>
                    </div>
                    <div className="mx-3 my-3 row justify-content-center">
                    <button type="submit" className="col-3 btn btn-warning mx-2 my-4">Add </button>
                    <button type="reset" className="col-3 btn btn-danger mx-2 my-4" onClick={()=>resetForm()}>Clear </button>
                    </div>
            </form>
        </div>
            <div ref={newemployeeRef} className={successMsg?"success-msg-on my-4 ":"success-msg-off"}
                    aria-live="assertive"><h4 className="text-center msg py-2">{successMsg}</h4></div>
        </div>
      )
}
export default NewEmployee;