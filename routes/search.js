var express = require('express');
var router = express.Router();
var mysql=require('mysql');
/* GET home page. */
var connection= mysql.createPool({
  url:'localhost',
  user:'root',
  password:'123456',
  database:'baobei'
})

router.post('/chazhao', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  var b=req.body.num;
  console.log(b)
  connection.query(`SELECT * FROM search WHERE title LIKE '${b}%'`,function(err,rows,filed){
    console.log(rows)
    res.send(rows)
  })
});
module.exports = router;
