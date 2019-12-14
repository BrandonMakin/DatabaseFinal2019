const mysql = require('mysql');
const express = require('express');

const sqlconnection = mysql.createConnection({
  host: "35.222.102.40",
  user: "root",
  password: "hamelsucks"
});

const port = 1337

var app = express();
app.use(express.static('../website'))
app.use(express.json())
app.post('/hello',function(req,res)
{
  let query = req.body.query;

  sqlconnection.query(query, function (err, result) {
    let data;
    if (err) {
      data = {
        success: false,
        error: err
      }
    } else {
      data = {
        success: true,
        result: result
     }
   }
   res.send(JSON.stringify(data));
  });

});

sqlconnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to SQL server");

  var server = app.listen(port,function() {
    console.log("Started Express server")
  });

});
