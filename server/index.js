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
    database: "testmysql",
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

//api for listing all customer Details
app.get('/listcustomer', (req, resp) => {
    db.query('SELECT * FROM customer', (err, rows, fields) => {
        if (!err)
            resp.send(rows);
        else
            console.log(err);
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

//add new customer 
app.post("/newcustomer", (req, resp) => {
    let cdata = req.body;
    let custid = parseInt(cdata.custid);
    let cname = cdata.cname;
    let adharno = parseInt(cdata.adharno);
    let phoneno = parseInt(cdata.phoneno);
    let zipcode = parseInt(cdata.zipcode);
    let address = cdata.address;
    let email = cdata.email;
    let cpassword = cdata.cpassword;
    console.log(custid, cname, adharno, phoneno, zipcode, address, email, cpassword);
    let sql = `insert into customer values (${custid},'${cname}',${adharno},${phoneno},${zipcode},'${address}','${email}','${cpassword}')`;
    db.query(sql, (err) => {
        if (err) {
            resp.send('Insertion Failed!' + JSON.stringify(err, undefined, 2))
        } else {
            resp.send("data inserted successfully");
        }
    });
})

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

//update customer information
app.post('/updateinformation', (req, resp) => {
    let cdata = req.body;
    let custid = parseInt(cdata.custid);
    let cname = cdata.cname;
    let adharno = parseInt(cdata.adharno);
    let phoneno = parseInt(cdata.phoneno);
    let zipcode = parseInt(cdata.zipcode);
    let address = cdata.address;
    let email = cdata.email;
    let cpassword = cdata.cpassword;
    console.log(cdata);
    let sql = `UPDATE customer SET  
                cname='${cname}',adharno=${adharno},phoneno=${phoneno},
                zipcode=${zipcode},address='${address}',email='${email}',
                cpassword='${cpassword}' where custid=${custid}`;
    db.query(sql, (err) => {
        if (err) {
            resp.send('Execution Failed!' + JSON.stringify(err, undefined, 2))
        } else {
            resp.send("Updation successfull");
        }
    });
});

