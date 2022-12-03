import "./style.css";
import React,{useState,useRef,useEffect} from 'react';
import Axios from 'axios';

const NewCustomer = () => {
    const url="http://localhost:5000/newcustomer";
    const [data,setData]=useState({
        custid:"",
        name:"",
        adharno:"",
        phoneno:"",
        address:"",
        balance:""
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
        custid:data.custid,
        name:data.name,
        phoneno:data.phoneno,
        adharno:data.adharno,
        address:data.address,
        balance:data.balance
      })
      .then(res=>{
        console.log(res.data);
      })
    };
    return (
        <div className="new-customer text-left">
            <h1 className="text-center"> Enter the details of the Customer</h1>
            <form onSubmit={(e)=>submit(e)}>
                    <div className="mx-3 my-3 row ">
                        <label for="custid" className="col-3">Enter the customer id</label>
                        <input ref={inputRef} onChange={(e)=>handle(e)} value={data.custid} type="text" className="form-control col" id="custid" placeholder="123"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <label for="name" className="col-3">Enter the name</label>
                        <input onChange={(e)=>handle(e)} value={data.name} type="text" className="form-control col" id="name" placeholder="name"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <label for="adharno" className="col-3">Enter the adhar number </label>
                        <input onChange={(e)=>handle(e)} value={data.adharno} type="number" min="12" max="12" className="form-control col" id="adharno" placeholder="0000-0000-0000"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <label for="custid" className="col-3">Enter the phone number </label>
                        <input onChange={(e)=>handle(e)} value={data.phoneno} type="number" min="12" max="12" className="form-control col" id="phoneno" placeholder="000-000-0000" />
                    </div>
                    <div className="mx-3 my-3 row ">
                    <label for="street" className="col-3">Enter the Address</label>
                        <input onChange={(e)=>handle(e)} value={data.address} type="text" className="form-control col" id="address"placeholder="3rd block Bangalore" />
                    </div>
                    <div className="mx-3 my-3 row">
                    <label for="custid" className="col-3">Enter the balance</label>
                        <input onChange={(e)=>handle(e)} value={data.balance} type="number" min="100" className="form-control col" id="balance" placeholder="100" />
                    </div>
                    <div className="mx-3 my-3 row">
                    <button type="submit" className="col-3 btn btn-warning mx-2">Add Customer</button>
                    <button type="button" className="col-3 btn btn-danger mx-2">Clear fields</button>
                    </div>
            </form>
        </div>
    );
};

export default NewCustomer;