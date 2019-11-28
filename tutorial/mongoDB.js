let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let password = require('./config');

let url = "mongodb+srv://okoye:"+password+"@cluster0-lvfql.mongodb.net/test"

MongoClient.connect(url, 
    {
         useUnifiedTopology: true,
         useNewUrlParser: true
    }
  ,(err, db)=>{
    if(err) throw err;
    const collection = db.db("database_test").collection("movies");
    console.log(db);
    db.close;
})







