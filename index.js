const express = require('express');
const app = express();
const port = 3000;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shelke:pMqjIx7qeNdoQyt4@cluster0.8byuiku.mongodb.net/?retryWrites=true&w=majority";

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.get('/getusers', (req, res) => {
    try {
      MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db("usera");
          dbo.collection("users").find().toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
          });
        });
  } catch (error) {
      console.log(error)
  }
});


app.listen(port, () => console.log(`Hello world app listening on port ${3000}!`))
