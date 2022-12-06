const express = require('express');
const router = express.Router();
const db=require('../db/config');

//validate  admin login
router.post('/validateadminlogin', (req, resp) => {
    let adata = req.body;
    console.log(adata);
    let username = adata.username;
    let password = adata.password;
    let sql = `select username,password from admin where username='${username}'`;
    db.query(sql, (err, rows, field) => {
        if (err) {
            resp.send(false);
        } else {
            if (Object.keys(rows).length !== 0) {
                let uname = rows[0].username;
                let pwrd = rows[0].password;
                if (uname === username && password == pwrd) {
                    resp.send(true);
                } else {
                    resp.send(false);
                }
            } else {
                resp.send(false);
            }
        }
    });
});
//validate  employee login
router.post('/validateemployeelogin', (req, resp) => {
    let edata = req.body;
    let ename = edata.ename;
    let epassword = edata.epassword;
    let sql = `select ename,epassword from employee where ename='${ename}' and epassword='${epassword}'`;
    db.query(sql, (err, rows, field) => {
        if (err) {
            resp.send(false);
        } else {
            if (Object.keys(rows).length !== 0) {
                let empname = rows[0].ename;
                let pwrd = rows[0].epassword;
                if (empname === ename && epassword == pwrd) {
                    resp.send(true);
                } else {
                    resp.send(false);
                }
            } else {
                resp.send(false);
            }
        }
    });
});

module.exports = router;