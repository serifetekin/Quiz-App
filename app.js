var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
var mysql = require("mysql");
var bodyParser = require("body-parser");
var id=1;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //farklı şekilde yazılmış olan kodları düzenlemesini sağlar.

var con = mysql.createConnection({ // mysql workbenchteki sakila veritabanına bağlantı yapılıyor.
    host: "localhost",
    user: "root",
    password: "serife",
    database: "quizapp"
});

con.connect(function (err) {
    if (err)
        console.log(err);
    console.log("connected");
});


app.post('/sendQuestion', function (req, res) {
    query = "INSERT INTO questions(question,answer1,answer2,answer3,answer4,answer) VALUES (?,?,?,?,?,?)"
    values = [req.body.question, req.body.answer1, req.body.answer2, req.body.answer3, req.body.answer4, req.body.answer];

    con.query(query, values, function (err, result) {
        console.log(req.body);
        res.send("ok");
    });
})

app.get('/getQuestion', function (req, res) {
    query = "SELECT * FROM questions WHERE questionID="+id;
    
    con.query(query, function (err, result) {
        console.log(result);
        id++;
        res.json(result);
    });
});

var server = app.listen(3000, function () {
    console.log('Node server is running');
});