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
