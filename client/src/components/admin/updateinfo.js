import './style.css';

const UpdateInfo=()=>{
    return(
        <div className="update-info mx-4">
             <div className="detail-entry mt-4">
            <div className="detail-enter d-flex flex-row pl-3 py-4 text-center">
                <h4 className="col-3">Enter the Customer ID :</h4>
                <input type="text" className="form-control" name="custid" />
            </div>
            <div className="text-center">
            <button type="button" className="col-3 btn btn-success mx-3 my-3">Proceed</button>
            <button type="button" className="col-3 btn btn-warning mx-3 my-3">Clear ID</button>
            </div>
            </div>
            <div className="details d-flex flex-column px-4 py-4 text-center my-5">
                   <h4>Update the Details :</h4>
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
                    <p>Balance :</p>
                   <input type="text" className="form-control col" name="balance" value="23333" />
                   </div>
                   <div>
                    <p>Email :</p>
                   <input type="text" className="form-control col" name="email" value="prk@bhosdkmail.com" />
                   </div>
                   <div>
                    <p>Password :</p>
                   <input type="password" className="form-control col" name="email" value="prk@bhosdkmail.com" />
                   </div>
                   <div>
                    <p>Address :</p>
                   <input type="text" className="form-control col" name="email" value="prk@bhosdkmail.com" />
                   </div>
                   <div>
                    <p>Zipcode :</p>
                   <input type="text" className="form-control col" name="email" value="prk@bhosdkmail.com" />
                   </div>
                   <div>
                   <button type="button" className="col-3 btn btn-danger mx-3 my-3">Update</button>
                   </div>
            </div>
        </div>
    )
}

export default UpdateInfo;