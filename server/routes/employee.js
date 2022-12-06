const express = require('express');
const router = express.Router();
const db = require('../db/config');

//deposit
router.post('/deposit', (req, resp) => {
    let cdata = req.body;
    let custid = parseInt(cdata.custid);
    let amount = parseInt(cdata.amount);
    let sql = `update customer set balance=balance+${amount} where custid=${custid}`
    db.query(sql, (err) => {
        if (err) {
            resp.send('Execution failed' + JSON.stringify(err, undefined, 2))
        } else {
            resp.send('Updation successful');
        }
    });
});
//withdraw
router.post('/withdraw', (req, resp) => {
    let cdata = req.body;
    let custid = parseInt(cdata.custid);
    let amount = parseInt(cdata.amount);
    let sql = `update customer set balance=balance-${amount} where custid=${custid}`
    db.query(sql, (err) => {
        if (err) {
            resp.send('Execution failed' + JSON.stringify(err, undefined, 2))
        } else {
            resp.send('Updation successful');
        }
    });
});

//existence of two Customer ID
router.post('/checkexisttwoID', (req, resp) => {
    let cdata = req.body;
    let sourceid = parseInt(cdata.sourceid);
    let destinationid = parseInt(cdata.destinationid);
    let sql = `select custid,balance from customer where custid in (${sourceid},${destinationid})`
    db.query(sql, (err, rows, fields) => {
        if (err) {
            resp.send('Execution Failed!' + JSON.stringify(err, undefined, 2))
        } else {
            resp.send(rows);
            console.log(rows);
        }
    });
});

//check exist
router.post('/checkexist', (req, resp) => {
    let cdata = req.body;
    let custid = parseInt(cdata.custid);
    let balance = cdata.balance;
    sql = `select custid,balance from customer where custid=${custid}`;
    db.query(sql, (err, rows, fields) => {
        if (err) {
            resp.send('Execution Failed!' + JSON.stringify(err, undefined, 2))
        } else {
            resp.send(rows);
        }
    });
});
//request customer information
router.post('/requestcustomerinfo', (req, resp) => {
    let cdata = req.body;
    let custid = parseInt(cdata.custid);
    let sql = `select * from customer where custid=${custid}`;
    db.query(sql, (err, rows, fields) => {
        if (err) {
            resp.send('Execution Failed!' + JSON.stringify(err, undefined, 2))
        } else {
            resp.send(rows);
        }
    });
});

module.exports = router;