import './style.css';
import React,{useState,useEffect,useRef} from 'react';
import Axios from 'axios';
import props from 'react';

const NewEmployee=()=>{
    const url="http://localhost:5000/newemployee";
    const [data,setData]=useState({
        eid:"",
        name:"",
        password:"",
    });
    const inputRef=useRef(null);
    useEffect(()=>{
       inputRef.current.focus();
    },[]);
    const handle=(e)=>{
        const newdata={...data};
        newdata[e.target.id]=e.target.value;
        setData(newdata);
        console.log(newdata);
    }   
    const submit=(e)=>{
      e.preventDefault();
      Axios.post(url,{
        eid:data.eid,
        name:data.name,
        password:data.password
      })
      .then(res=>{
        console.log(res.data);
      })
    };
    const clearField= (e) => {
        Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
        );
        this.setData({
            itemvalues: [{}]
          });
      };
    return(
           <div className="new-customer text-left">
            <h1 className="text-center"> Enter the details of the Employee </h1>
            <form onSubmit={(e)=>submit(e)}>
                    <div className="mx-3 my-3 row ">
                        <label for="custid" className="col-3">Enter the  Employee ID </label>
                        <input ref={inputRef} onChange={(e)=>handle(e)} value={data.eid} type="text" className="form-control col" id="custid" placeholder="123"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <label for="name" className="col-3">Enter the Name</label>
                        <input onChange={(e)=>handle(e)} value={data.name} type="text" className="form-control col" id="name" placeholder="name"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <label for="adharno" className="col-3">Enter the Password</label>
                        <input onChange={(e)=>handle(e)} value={data.password} type="password" className="form-control col" id="password" placeholder="*******"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <button type="button" className="col-3 btn btn-warning mx-2">Add Employee</button>
                    <button onClick={props.clearField} type="button" className="col-3 btn btn-danger mx-2">Clear fields</button>
                    </div>
            </form>
        </div>
    )
}
export default NewEmployee;