var MongoClient = require("mongodb").MongoClient;
var uri = "mongodb://localhost:27017/";

MongoClient.connect(uri, (err, db)=>{
    if(err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").findOne({}, (err, result)=>{
        if(err) throw err;
        console.log(result.name);
        db.close();
    });
});