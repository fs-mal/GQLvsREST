const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const people = [
    {
        id: 1,
        username: "alice@script.com",
        age: 34,
        name: "Alice"
       },{
        id: 2,
        username: "makky@try.com",
        age: 31,
        name: "Makky"
       }
];


app.get('/person/:id', function(req, res) {
    const id = req.params.id
    console.log(id)
    console.log("GET From SERVER");
    const result = people.filter(obj => {
        return obj.id == id
      })
    res.send(result);
});

app.post('/person', function(req, res) {
    const person = req.body;
    console.log(req.body);
    people.push(person);
    res.status(200).send("Successfully posted ingredient");
});

app.listen(4001);