import './style.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NavBar from './nav';

const ListEmployee = () => {
    const [empData, setempData] = useState([]);
    const employeeData = async () => {
        try {
            const data = await axios.get(
                "http://localhost:5000/admin/listemployee"
            );
            setempData(data.data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        employeeData();
    }, []);
    return (
        <>
        <NavBar/>
        <div className='list-customer mx-4 my-2'>
            <div className="d-flex flex-row my-2 justify-content-center">
                <h2 className="text-center">Employee Details</h2>
            </div>
            <table className="table">
                <thead className="thead-dark text-white bg-dark">
                    <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {empData.map((employee) => {
                        return (<tr>
                            <td>{employee.empid}</td>
                            <td>{employee.ename}</td>
                            <td>{employee.epassword}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default ListEmployee;