let server = require("http");
let url = require("url");
let fs = require("fs");
console.log("hello world");

let rs = fs.createReadStream("./home.html");

server.createServer((req, res)=>{
    fs.readFile("./home.html", (err, data)=>{
        rs.on('open', ()=>console.log(rs.path, "is open"));
        if(err == null){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end(`Thank you the url is ${url.parse(req.url)}`, ()=>fs.open("embilik.html", 'w', (err, file)=> {if(err)throw err;})); 
        }
        else{
            throw err;
         }
    });
}).listen(8081);