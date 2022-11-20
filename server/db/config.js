const mysql=require("mysql");

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"testmysql",
});

db.connect((err)=>{
    if(err){
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2))
    }
    else{
        console.log("MySQL Connected");
    }
});

