const Transfer=()=>{
    return(
        <div className="withdraw-amount">
        <div className="detail-entry mt-4">
            <div className="detail-enter d-flex flex-row pl-3 py-4 text-center">
                <h4 className="col-3">Enter the account number :</h4>
                <input type="text" className="form-control " name="custid" />
                <h4 className="col-3">Enter the transfer amount :</h4>
                <input type="text" className="form-control " name="balance" />
            </div>
            <div className="text-center">
                <button type="button" className="col-3 btn btn-success mx-3 my-3">Proceed</button>
                <button type="button" className="col-3 btn btn-warning mx-3 my-3">Clear ID</button>
            </div>
        </div>
    </div>
    )
}

export default Transfer;