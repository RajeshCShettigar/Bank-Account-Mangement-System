import './style.css';
import React,{useState,useEffect,useRef} from 'react';
import Axios from 'axios';

const DeleteEmployee = () => {
    const url="http://localhost:5000/deleteemployee";
    const [data,setData]=useState({
        empid:""
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
      empid:data.empid
    })
    .then(resp=>{
      if(resp.data===false){
        alert("Employee id doesnot exists")
      }else{
        alert("Employee ID deleted");
      }
    })
    };
    const resetForm=()=>{
      setData({});
    }
    return (
        <div className="delete-account mx-4 ">
            <div className="detail-entry mt-4 px-4 py-4">
                <form onSubmit={(e) => submitData(e)}>
                    <div className="detail-enter d-flex flex-row pl-3 py-4 text-center">
                        <h4 className="col-3">Employee ID :</h4>
                        <input ref={inputRef} onChange={(e) => handle(e)} type="text" className="form-control " id="empid" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="col-3 btn btn-danger mx-3 my-3">Delete</button>
                        <button type="reset" className="col-3 btn btn-warning mx-3 my-3" onClick={()=>resetForm()}>Clear ID</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DeleteEmployee;