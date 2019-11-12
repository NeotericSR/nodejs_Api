let mysql = require("mysql");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "toor"
});

con.connect((err)=>{
    if(err) throw err;
    console.log("Connected");
});