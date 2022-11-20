import "./style.css";
const NewCustomer = () => {
    return (
        <div className="new-customer text-left">
            <h1 className="text-center"> Enter the details of the Customer</h1>
            <form>
                    <div className="mx-3 my-3 row ">
                        <label for="custid" className="col-3 ">Enter the customer id</label>
                        <input type="text" className="form-control col" name="custid" />
                    </div>
                    <div className="mx-3 my-3 row">
                    <label for="name" className="col-3">Enter the name</label>
                        <input type="text" className="form-control col" name="name" />
                    </div>
                    <div className="mx-3 my-3 row">
                    <label for="adharno" className="col-3">Enter the adhar number </label>
                        <input type="text" className="form-control col" name="adharno" />
                    </div>
                    <div className="mx-3 my-3 row ">
                    <label for="street" className="col-3">Enter the Address</label>
                        <input type="text" className="form-control col" name="street" />
                    </div>
                    <div className="mx-3 my-3 row ">
                    <label for="zipcode" className="col-3">Enter the zipcode </label>
                        <input type="text" className="form-control col" name="zipcode" />
                    </div>
                    <div className="mx-3 my-3 row">
                    <label for="custid" className="col-3">Enter the phone number </label>
                        <input type="text" className="form-control col" name="phoneno" />
                    </div>
                    <div className="mx-3 my-3 row">
                    <label for="custid" className="col-3">Enter the email</label>
                        <input type="text" className="form-control col" name="email" />
                    </div>
                    <div className="mx-3 my-3 row">
                    <label for="custid" className="col-3">Enter the password</label>
                        <input type="text" className="form-control col" name="password" />
                    </div>
                    <div className="mx-3 my-3 row">
                    <button type="button" className="col-3 btn btn-warning mx-2">Add Customer</button>
                    <button type="button" className="col-3 btn btn-danger mx-2">Clear fields</button>
                    </div>
            </form>
        </div>
    );
};

export default NewCustomer;