import "./style.css";
import React,{useState,useRef,useEffect} from 'react';
import Axios from 'axios';

const NewCustomer = () => {
  const newcustomerRef=useRef();
  const [successMsg,setSuccessMsg]=useState('');
  useEffect(()=>{
      setSuccessMsg(false);
    },[]); 
  const inputRef=useRef(null);
  useEffect(()=>{
     inputRef.current.focus();
  },[]);  
  const url="http://localhost:5000/admin/newcustomer";
    const [data,setData]=useState({
        custid:"",
        name:"",
        adharno:"",
        phoneno:"",
        address:"",
        balance:""
    });
    const handle=(e)=>{
        const newdata={...data};
        newdata[e.target.id]=e.target.value;
        setData(newdata);
    }   
    const submitData=(e)=>{
      e.preventDefault();
      Axios.post(url,{
        custid:data.custid,
        cname:data.name,
        phoneno:data.phoneno,
        adharno:data.adharno,
        address:data.address,
        balance:data.balance
      })
      .then(resp=>{
        if(resp.data===false){
          setSuccessMsg("Customer id already exists");
        }else{
          setSuccessMsg("New customer added");
        }
      })
    };
    const resetForm=()=>{
        setData({});
      }
    return (
      <div className="customer mx-1 mt-1 px-4 py-4">
        <div className="new-customer text-left ">
            <h1 className="text-center">Customer Details </h1>
            <form onSubmit={(e)=>submitData(e)}>
                    <div className="mx-3 my-3 row ">
                        <label htmlFor="custid" className="col-3">Customer ID</label>
                        <input ref={inputRef} onChange={(e)=>handle(e)} value={data.custid} type="text" className="form-control col" id="custid" placeholder="123"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <label htmlFor="name" className="col-3">Name</label>
                        <input onChange={(e)=>handle(e)} value={data.name} type="text" className="form-control col" id="name" placeholder="name"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <label htmlFor="adharno" className="col-3">Adhar Number</label>
                        <input onChange={(e)=>handle(e)} value={data.adharno} type="number"  className="form-control col" id="adharno" placeholder="0000 0000 0000"/>
                    </div>
                    <div className="mx-3 my-3 row">
                    <label htmlFor="custid" className="col-3">Phone Number </label>
                        <input onChange={(e)=>handle(e)} value={data.phoneno} type="number" className="form-control col" id="phoneno" placeholder="000 000 0000" />
                    </div>
                    <div className="mx-3 my-3 row ">
                    <label htmlFor="street" className="col-3">Address</label>
                        <input onChange={(e)=>handle(e)} value={data.address} type="text" className="form-control col" id="address"placeholder="3rd block Bangalore" />
                    </div>
                    <div className="mx-3 my-3 row">
                    <label htmlFor="custid" className="col-3">Balance</label>
                        <input onChange={(e)=>handle(e)} value={data.balance} type="number" min="100" className="form-control col" id="balance" placeholder="100" />
                    </div>
                    <div className="mx-3 my-3 row justify-content-center">
                    <button type="submit" className="col-3 btn btn-warning mx-2 my-4">Add</button>
                    <button type="reset" className="col-3 btn btn-danger mx-2 my-4" onClick={()=>resetForm()}>Clear </button>
                    </div>
            </form>
            </div>
            <div ref={newcustomerRef} className={successMsg?"success-msg-on my-4 ":"success-msg-off"}
                    aria-live="assertive"><h4 className="text-center msg py-2">{successMsg}</h4></div>
        </div>
    );
};

export default NewCustomer;