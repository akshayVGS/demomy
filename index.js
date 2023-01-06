var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shelke:pMqjIx7qeNdoQyt4@cluster0.8byuiku.mongodb.net/?retryWrites=true&w=majority";

try {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("userss");
        dbo.collection("userlogins").find().limit(5).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
      });
} catch (error) {
    console.log(error)
}


