import './style.css';

const ListCustomer = () => {
    return (
        <div className='list-customer mx-4 my-2'>
            <div className="d-flex flex-row my-2 justify-content-center">
            <h2 className="text-center">Customer Details</h2>
            <button type="button" className="col-3 btn btn-success mx-4 text-lg">Refresh</button>
            </div>
            <table class="table">
                <thead class="thead-dark text-white bg-dark">
                    <tr>
                        <th scope="col">Account No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Adhar No.</th>
                        <th scope="col">Street</th>
                        <th scope="col">City</th>
                        <th scope="col">Zipcode</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">Email</th>        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>jrgrng</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>jrgrng</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>jrgrng</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListCustomer;