const express = require('express');
const router = express.Router();
const db = require('../db/config');

//list all customer Details
router.get('/listcustomer', (req, resp) => {
    db.query('SELECT * FROM customer', (err, rows, fields) => {
        if (!err) {
            resp.send(rows);
        } else {
            console.log(err);
        }
    });
});

//list all employee Details
router.get('/listemployee', (req, resp) => {
    db.query('SELECT * FROM employee', (err, rows, fields) => {
        if (!err) {
            resp.send(rows);
        } else {
            console.log(err);
        }
    });
});

//add new customer
router.post("/newcustomer", (req, resp) => {
    let cdata = req.body;
    let custid = parseInt(cdata.custid);
    let cname = cdata.cname;
    let adharno = parseInt(cdata.adharno);
    let phoneno = parseInt(cdata.phoneno);
    let address = cdata.address;
    let balance = cdata.balance;
    console.log(custid, cname, adharno, phoneno, address, balance);
    let sql = `insert into customer values (${custid},'${cname}',${adharno},${phoneno},'${address}',${balance})`;
    db.query(sql, (err) => {
        if (err) {
            resp.send("false")
        } else {
            resp.send("data inserted successfully");
        }
    });
});

//add new employee
router.post("/newemployee", (req, resp) => {
    let edata = req.body;
    let empid = parseInt(edata.empid);
    let ename = edata.ename;
    let epassword = edata.epassword;
    let sql = `insert into employee values (${empid},'${ename}','${epassword}')`;
    db.query(sql, (err) => {
        if (err) {
            resp.send("false");
        } else {
            resp.send("data inserted successfully");
        }
    });
});
//delete customer
router.post('/deletecustomer', (req, resp) => {
    let cdata = req.body;
    let custid = parseInt(cdata.custid);
    let sql = `DELETE from customer where custid=${custid}`;
    db.query(sql, (err) => {
        if (err) {
            resp.send("false");
        } else {
            resp.send("deletion successful");
        }
    });
});
//delete employee
router.post('/deleteemployee', (req, resp) => {
    let edata = req.body;
    let empid = parseInt(edata.empid);
    let sql = `DELETE from employee where empid=${empid}`;
    db.query(sql, (err) => {
        if (err) {
            resp.send("false");
        } else {
            resp.send("deletion successfull");
        }
    });
});

module.exports = router;