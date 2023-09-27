const express = require("express");
const fs = require("fs");

let server = express();

server.use(express.urlencoded({extended:false}))
server
  .post("/", (req, res) => {
    let postdata = JSON.stringify(req.body);
    console.log(postdata);

    fs.appendFile("son.txt", `\n${postdata}\n`, (err, data) => {
      console.log("data append successfully");
    });

    res.send("your data save");
  })

  .listen(5000, () => {
    console.log("server started");
  });

  server.get("/",(req,res)=>{
    fs.readFile("./son.txt","utf-8",(err,data)=>{
      res.send(data)
    })
    
  })
