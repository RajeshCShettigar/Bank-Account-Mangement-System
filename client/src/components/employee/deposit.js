import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Deposit = () => {
    const depositRef = useRef();
    const [successMsg, setSuccessMsg] = useState('');
    useEffect(() => {
        setSuccessMsg(false);
    }, []);
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const resetForm = () => {
        setData({});
    }
    const url1 = "http://localhost:5000/employee/deposit";
    const url2 = "http://localhost:5000/employee/checkexist";
    const [data, setData] = useState({
        custid: "",
        amount: "",
    });
    const handle = (e) => {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }
    const submitData = (e) => {
        e.preventDefault();
        axios.post(url2, data
        ).then(resp => {
            let existingdata = resp.data[0];
            if (existingdata !== undefined) {
                axios.post(url1, data
                ).then(response => {
                    setSuccessMsg("Deposited successfully");
                }).catch(err => {
                    console.log(err);
                });
            } else {
                setSuccessMsg("Customer ID doesnot exist");
                resetForm();
            }
        }).catch(error => {
            console.log(error);
        });
    };
    return (
        <div className="deposit-amount">
            <div className="detail-entry mt-4 mx-4 px-4 py-4">
                <h4 className="text-center">Details Entry</h4>
                <form onSubmit={(e) => submitData(e)}>
                    <div className="mx-3 my-3 row">
                        <label For="custid" className="col-3">Customer ID</label>
                        <input ref={inputRef} onChange={(e) => handle(e)} value={data.custid} type="number" className="form-control col" id="custid" placeholder="123" />
                    </div>
                    <div className="mx-3 my-3 row">
                        <label For="name" className="col-3">Deposit Amount </label>
                        <input onChange={(e) => handle(e)} value={data.amount} type="text" className="form-control col" id="amount" placeholder="12000" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="col-3 btn btn-success mx-3 my-3">Proceed</button>
                        <button type="reset" className="col-3 btn btn-warning mx-3 my-3" onClick={() => resetForm()}>Clear ID</button>
                    </div>
                </form>
            </div>
            <div ref={depositRef} className={successMsg ? "success-msg-on my-4 mx-4" : "success-msg-off"}
                aria-live="assertive"><h4 className="text-center msg py-2">{successMsg}</h4></div>
        </div>
    );
}

export default Deposit;