import './style.css';
import axios from 'axios';
import {useState,useEffect} from 'react';

const ListCustomer = () => {
  const [custData,setcustData]=useState([]);
  
  const customerData=async()=>{
    try{
        const data=await axios.get(
         "http://localhost:5000/listcustomer"
        );
       setcustData(data.data)
    }catch(e){
        console.log(e);
    }
  };  
  useEffect(()=>{
    customerData();
  },[]);
    return (
        <div className='list-customer mx-4 my-2'>
             <div className="d-flex flex-row my-2 justify-content-center">
                <h2 className="text-center">Customer Details</h2>
            </div>
            <table className="table">
                <thead className="thead-dark text-white bg-dark">
                    <tr>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Adhar No.</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">Address</th>
                        <th scope="col">Balance</th>
                    </tr>
                </thead>
                <tbody>
              
                {custData.map((customer)=>{
                return ( <tr>
                    <td>{customer.custid}</td>
                    <td>{customer.cname}</td>
                        <td>{customer.adharno}</td>
                        <td>{customer.phoneno}</td>
                        <td>{customer.address}</td>
                        <td>{customer.balance}</td>
                    </tr>)
            })}
                </tbody>
            </table>
        </div>
    );
};

export default ListCustomer;