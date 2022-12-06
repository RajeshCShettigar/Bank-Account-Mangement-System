import './style.css';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const UpdateInfo = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const resetForm=()=>{
        setData({});
      }
      const [data, setData] = useState({
        custid: ""
    });
    const handle = (e) => {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }
    let customerData={};
    const url1="http://localhost:5000/requestcustomerinfo"
    const submitData=(e)=>{
        e.preventDefault();
        axios.post(url1,
            data).then(resp=>{
                customerData=resp.data[0];
                console.log(customerData);
            }).catch(error=>{
                console.log(error);
            });
    }
    const displayData=()=>{
        if(customerData!=={})
        return (
            <>
            <h4>Customer Details</h4><br/>
            <p>Name :{customerData.cname}</p>
            <p>Adhar Number :{customerData.adharno}</p>
            <p>Phone Number :{customerData.phoneno}</p>
            <p>Address :{customerData.address}</p>
            <p>Balance :{customerData.balance}</p>
            </>
            )
        else
        return;
    }
    return (
        <div className="update-info mx-4">
            <div className="detail-entry mt-4">
               <form onSubmit={(e)=>submitData(e)}>
                <div className="detail-enter d-flex flex-row pl-3 py-4 text-center">
                    <h4 className="col-3">Customer ID :</h4>
                    <input ref={inputRef} onChange={(e) => handle(e)} type="text" className="form-control" id="custid" />
                </div>
                <div className="text-center">
                    <button type="submit" className="col-3 btn btn-success mx-3 my-3">Proceed</button>
                    <button type="reset" className="col-3 btn btn-warning mx-3 my-3"onClick={()=>resetForm()}>Clear ID</button>
                </div>
                </form>
            </div>
            <div className="customer-data info bg-yellow">{displayData()} </div>
           
            <div className="details d-flex flex-column px-4 py-4 text-center my-5">
                <h4>Update Details :</h4>
                <div>
                    <p>Name : </p>
                    <input type="text" className="form-control col" name="name" value="prk" />
                </div>
                <div>
                    <p>Adhar Number :</p>
                    <input type="text" className="form-control col" name="adharno" value="5677" size="12" />
                </div>
                <div>
                    <p>Phone Number :</p>
                    <input type="text" className="form-control col" name="phoneno" value="344433" />
                </div>
                <div>
                    <p>Address :</p>
                    <input type="text" className="form-control col" name="email" value="prk@bhosdkmail.com" />
                </div>
                <p>Balance :</p>
                <input type="text" className="form-control col" name="balance" value="23333" />
            </div>
            <div className="justify-content-center align-items-center">
                <button type="submit" className="col-3 btn btn-danger mx-3 my-3">Update</button>
            </div>
        </div>
    )
}

export default UpdateInfo;