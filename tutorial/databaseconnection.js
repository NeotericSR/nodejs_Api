let mysql = require("mysql");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "movie"
});

con.connect((err)=>{
    if(err) {
        throw err;
    }

    let sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))"; 
    console.log("Connected");
    con.query(sql, (err, result)=>{
        if(err){
            throw err;
        }
        console.log("table created");
    })
});