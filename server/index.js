const express = require("express");
const bodyparser = require('body-parser');
const cors = require('cors')
const PORT=5000;
const adminrouter=require('./routes/admin');
const loginrouter=require('./routes/login');
const employeerouter=require('./routes/employee');
const app = new express();

app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/admin', adminrouter);
app.use('/login',loginrouter);
app.use('/employee',employeerouter);
app.listen(PORT, () => {
    console.log("server listening on port 5000");
});
/*
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
/*
//delete customer
app.post('/deletecustomer', (req, resp) => {
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
app.post('/deleteemployee', (req, resp) => {
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
*/

/*
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

//check exist
app.post('/checkexist',(req,resp)=>{
  let cdata=req.body;
  let custid=parseInt(cdata.custid);
  let balance=cdata.balance;
  sql=`select custid,balance from customer where custid=${custid}`;
  db.query(sql,(err, rows, fields) => {
      if (err) {
          resp.send('Execution Failed!' + JSON.stringify(err, undefined, 2))
      } else {
          resp.send(rows);
      }
  });
});


//deposit
app.post('/deposit',(req,resp)=>{
  let cdata=req.body;
  let custid=parseInt(cdata.custid);
  let amount=parseInt(cdata.amount);
  let sql=`update customer set balance=balance+${amount} where custid=${custid}`
  db.query(sql,(err)=>{
    if(err){
      resp.send('Execution failed'+JSON.stringify(err,undefined,2))
    }else{
      resp.send('Updation successful');
    }
  });
});
//withdraw
app.post('/withdraw',(req,resp)=>{
  let cdata=req.body;
  let custid=parseInt(cdata.custid);
  let amount=parseInt(cdata.amount);
  let sql=`update customer set balance=balance-${amount} where custid=${custid}`
  db.query(sql,(err)=>{
    if(err){
      resp.send('Execution failed'+JSON.stringify(err,undefined,2))
    }else{
      resp.send('Updation successful');
    }
  });
});

//existence of two Customer ID
app.post('/checkexisttwoID',(req,resp)=>{
    let cdata=req.body;
    let sourceid=parseInt(cdata.sourceid);
    let destinationid=parseInt(cdata.destinationid);
    let sql=`select custid,balance from customer where custid in (${sourceid},${destinationid})`
    db.query(sql,(err, rows, fields) => {
        if (err) {
            resp.send('Execution Failed!' + JSON.stringify(err, undefined, 2))
        } else {
            resp.send(rows);
            console.log(rows);
        }
    });
});
*/
/*
//validate  admin login
app.post('/validateadminlogin',(req,resp)=>{
  let adata=req.body;
  console.log(adata);
  let username=adata.username;
  let password=adata.password;
  let sql=`select username,password from admin where username='${username}'`;
  db.query(sql,(err,rows,field)=>{
      if(err){
        resp.send(false);
      }else {
        if(Object.keys(rows).length !== 0){
        let uname=rows[0].username;
        let pwrd=rows[0].password;
        if(uname===username && password==pwrd){
          resp.send(true);
        }else{
          resp.send(false);
        }
      }else{
        resp.send(false);
      }
    }
  });
});
//validate  employee login
app.post('/validateemployeelogin',(req,resp)=>{
  let edata=req.body;
  let ename=edata.ename;
  let epassword=edata.epassword;
  let sql=`select ename,epassword from employee where ename='${ename}' and epassword='${epassword}'`;
  db.query(sql,(err,rows,field)=>{
    if(err){
      resp.send(false);
    }else {
      if(Object.keys(rows).length !== 0){
      let empname=rows[0].ename;
      let pwrd=rows[0].epassword;
      if(empname===ename && epassword==pwrd){
        resp.send(true);
      }else{
        resp.send(false);
      }
    }else{
      resp.send(false);
    }
  }
  });
});
*/
