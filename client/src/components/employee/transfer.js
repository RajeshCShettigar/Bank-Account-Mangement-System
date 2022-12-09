import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import NavBar from './nav';

const Transfer=()=>{
    const transferRef=useRef();
    const [successMsg,setSuccessMsg]=useState('');
    useEffect(()=>{
        setSuccessMsg(false);
      },[]); 
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const resetForm=()=>{
        setData({});
     }
     const [data, setData] = useState({
        sourceid: "",
        destinationid:"",
        amount: "",
    });
    const handle = (e) => {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }
    let flag1=false,flag2=false;
    const url1= "http://localhost:5000/employee/deposit";
    const url2="http://localhost:5000/employee/withdraw";
    const url3="http://localhost:5000/employee/checkexisttwoID";
    const submitData=(e)=>{
        e.preventDefault();
       axios.post(url3,data
        ).then(resp=>{
         let existdata1=resp.data[0];
         let existdata2=resp.data[1];
         console.log(existdata1);
         console.log(existdata2);
         if(existdata1!==undefined && existdata2!==undefined){
            if(existdata1.balance-parseInt(data.amount)>100){
                let data1={
                    "custid":existdata1.custid,
                    "amount":data.amount
                }
                let data2={
                    "custid":existdata2.custid,
                    "amount":data.amount
                }
                axios.post(url2,data1
                    ).then(response=>{
                         flag1=true;
                    }).catch(err=>{
                        console.log(err);
                    });
                axios.post(url1,data2
                    ).then(response=>{
                        flag2=true;
                    }).catch(err=>{
                        console.log(err);
                    });
                    if(flag1===flag2){
                        setSuccessMsg("Transfer successs");
                    }
            }else{
                setSuccessMsg("Insuffiecient balance");
                resetForm();
            }
         }else{
            setSuccessMsg("Please enter valid source destination ID's");
         }
        }).catch(error=>{
            console.log(error);
        });  
      };
    return(
        <>
        <NavBar/>
        <div className="withdraw-amount">
        <div className="detail-entry mt-4 mx-4 px-4 py-4">
        <h4 className="text-center">Details Entry</h4>
        <form onSubmit={(e)=>submitData(e)}>  
                <div className="mx-3 my-3 row">
                    <label For="custid" className="col-3">Source ID</label>
                    <input ref={inputRef} onChange={(e) => handle(e)} value={data.sourceid} type="number" className="form-control col" id="sourceid" placeholder="123" />
                </div>
                <div className="mx-3 my-3 row">
                    <label For="custid" className="col-3">Destination ID</label>
                    <input onChange={(e) => handle(e)} value={data.destinationid} type="number" className="form-control col" id="destinationid" placeholder="123" />
                </div>
                <div className="mx-3 my-3 row">
                    <label For="name" className="col-3">Transfer Amount </label>
                    <input onChange={(e) => handle(e)} value={data.amount} type="text" className="form-control col" id="amount" placeholder="12000" />
                </div>
            <div className="text-center">
                <button type="submit" className="col-3 btn btn-success mx-3 my-3">Proceed</button>
                <button type="reset" className="col-3 btn btn-warning mx-3 my-3"onClick={()=>resetForm()}>Clear ID</button>
            </div>
            </form>
        </div>
        <div ref={transferRef} className={successMsg?"success-msg-on my-4 mx-4":"success-msg-off"}
                    aria-live="assertive"><h4 className="text-center msg py-2">{successMsg}</h4></div>
    </div>
    </>
    )
}

export default Transfer;