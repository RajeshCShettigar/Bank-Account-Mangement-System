import './style.css';
import React,{useState,useEffect,useRef} from 'react';
import Axios from 'axios';

const NewEmployee=()=>{
    const url="http://localhost:5000/newemployee";
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
        alert("Employee id already exists")
      }else{
        alert("New employee added");
      }
    })
    };
    const resetForm=()=>{
      setData({});
    }
    return(
           <div className="new-customer text-left">
            <h1 className="text-center"> Employee Details</h1>
            <form onSubmit={(e)=>submitData(e)}>
                    <div className="mx-3 my-3 row ">
                        <label For="custid" className="col-3">Employee ID </label>
                        <input ref={inputRef} onChange={(e)=>handle(e)} value={data.empid} type="number" className="form-control col" id="empid" placeholder="123"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <label For="name" className="col-3">Name</label>
                        <input onChange={(e)=>handle(e)} value={data.ename} type="text" className="form-control col" id="ename" placeholder="name"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <label For="adharno" className="col-3">Password</label>
                        <input onChange={(e)=>handle(e)} value={data.epassword} type="password" className="form-control col" id="epassword" placeholder="........"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <button type="submit" className="col-3 btn btn-warning mx-2">Add </button>
                    <button type="reset" className="col-3 btn btn-danger mx-2" onClick={()=>resetForm()}>Clear </button>
                    </div>
            </form>
        </div>
    )
}
export default NewEmployee;