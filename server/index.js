const express = require("express");
const bodyparser = require('body-parser');
const cors = require('cors')

//initial configuration
const mysql = require("mysql");
const { response } = require("express");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
  database:"testmysql"
});

db.connect((err) => {
    if (err) {
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2))
    }
    else {
        console.log("MySQL Connected");
    }
});
//express app config
const app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }))

app.listen(5000, () => {
    console.log("server listening on port 5000");
});

//list all customer Details
app.get('/listcustomer', (req, resp) => {
    db.query('SELECT * FROM customer', (err, rows, fields) => {
        if (!err){
            resp.send(rows);
        }else{
            console.log(err);
          }
    });
});
//list all employee Details
app.get('/listemployee',(req,resp)=>{
  db.query('SELECT * FROM employee',(err,rows,fields)=>{
    if(!err){
    resp.send(rows);
  }else {
            console.log(err);
      }
   });
});

//add new customer
app.post("/newcustomer", (req, resp) => {
    let cdata = req.body;
    let custid = parseInt(cdata.custid);
    let cname = cdata.cname;
    let adharno = parseInt(cdata.adharno);
    let phoneno = parseInt(cdata.phoneno);
     let address = cdata.address;
    let balance = cdata.balance;
    console.log(custid, cname, adharno, phoneno,address,balance );
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
app.post("/newemployee", (req, resp) => {
    let edata = req.body;
    let empid = parseInt(edata.empid);
    let ename = edata.ename;
    let epassword=edata.epassword;
    let sql = `insert into employee values (${empid},'${ename}','${epassword}')`;
    db.query(sql, (err) => {
        if (err) {
            resp.send("false");
        } else {
            resp.send("data inserted successfully");
        }
    });
});
//request customer information
app.post('/requestcustomerinfo', (req, resp) => {
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
//request employee information
app.post('/requestemployeeinfo', (req, resp) => {
    let edata = req.body;
    let empid = parseInt(edata.empid);
    let sql = `select * from employee where empid=${empid}`;
    db.query(sql, (err, rows, fields) => {
        if (err) {
            resp.send('Execution Failed!' + JSON.stringify(err, undefined, 2))
        } else {
            resp.send(rows);
        }
    });
});

//delete customer
app.post('/deletecustomer', (req, resp) => {
    let cdata = req.body;
    let custid = parseInt(cdata.custid);
    let sql = `DELETE from customer where custid=${custid}`;
    db.query(sql, (err) => {
        if (err) {
            resp.send('Execution Failed!' + JSON.stringify(err, undefined, 2))
        } else {
            resp.send("deletion successfull");
        }
    });
});
//delete employee
app.post('/deleteemployee', (req, resp) => {
    let edata = req.body;
    let empid = parseInt(edata.empid);
    let sql = `DELETE from employee where empid=${empid}`;
    db.query(sql, (err) => {
        if (err) {
            resp.send('Execution Failed!' + JSON.stringify(err, undefined, 2))
        } else {
            resp.send("deletion successfull");
        }
    });
});
//update customer information
app.post('/updatecustinfo', (req, resp) => {
    let cdata = req.body;
    let custid = parseInt(cdata.custid);
    let cname = cdata.cname;
    let adharno = parseInt(cdata.adharno);
    let phoneno = parseInt(cdata.phoneno);
    let address = cdata.address;
    let balance = cdata.balance;
    console.log(cdata);
    let sql = `UPDATE customer SET
                cname='${cname}',adharno=${adharno},phoneno=${phoneno},
                address='${address}',balance=${balance},
                 where custid=${custid}`;
    db.query(sql, (err) => {
        if (err) {
            resp.send('Execution Failed!' + JSON.stringify(err, undefined, 2))
        } else {
            resp.send("Updation successfull");
        }
    });
});
//update employee information
app.post('/updateempinfo',(req,resp)=>{
  let edata=req.body;
  let empid=parseInt(edata.empid);
  let ename=edata.ename;
  let epassword=edata.epassword;
  console.log(edata);
  let sql=`UPDATE employee SET
            ename='${ename}',epassword='${epassword}'
            where empid=${empid}`;
  db.query(sql,(err)=>{
    if(err){
      resp.send('Execution failed'+JSON.stringify(err,undefined,2))
    }else{
      resp.send('Updation successful');
    }
  });
});
