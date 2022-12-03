import './style.css';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const DeleteCustomer = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const url = "htttp://localhost:5000/requestcustomerinfo";
    const [data, setData] = useState({
        custid: ""
    });
    const handle = (e) =>{
        const newdata={...data};
        newdata[e.target.id]=e.target.value;
         //console.log(newdata);
        setData(newdata);
    }
    const submitData=async (e)=>{
        e.preventDefault();
       await axios.post(url,{
            "custid":data.custid
        })
        .then(resp=>{
            console.log(resp.data);
        })
    }
    
    return (
        <div className="delete-account mx-4">
            <div className="detail-entry mt-4">
            <form onSubmit={(e)=>submitData(e)}>
            <div className="detail-enter d-flex flex-row pl-3 py-4 text-center">
                <h4 className="col-3">Enter the Customer ID :</h4>
                    <input ref={inputRef} onChange={(e)=>handle(e)} type="number" className="form-control " id="custid" />
            </div>
            <div className="text-center">
            <button type="submit" className="col-3 btn btn-success mx-3 my-3">Proceed</button>
            <button type="button" className="col-3 btn btn-warning mx-3 my-3">Clear ID</button>
            </div>
            </form>
            </div>
            <div className="details d-flex flex-column px-4 py-4 text-center my-5">
                   <div>Customer ID :id</div>
                   <div>Name :prk</div>
                   <div>Adhar Number :3456557</div>
                   <div>Phone Number :4554675</div>
                   <div>Balance :4455657</div>
                   <div>Email :prk@bhosdkmail.com</div>
                   <div>
                   <button type="button" className="col-3 btn btn-danger mx-3 my-3">Delete</button>
                   </div>
            </div>
        </div >
    )
}

export default DeleteCustomer;