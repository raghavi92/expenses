var express = require('express')
var app = express();
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
let db;
app.use(bodyParser.json());

app.get('/expense', (req, res) => {
  res.send('Hello World! inside expense get');
});

app.post('/expense', (req, res) => {
  db.collection("expenses").save(req.body, (err, result) => {
    console.log('error----->' + err);
  })
  res.send("ok");
})

MongoClient.connect('mongodb://localhost:27017/expense', (err, database) => {
  db = database;
  app.listen(3000, () => {
    console.log('Listening on port 3000!')
  });
});
