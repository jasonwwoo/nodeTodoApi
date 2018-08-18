const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    //deleteMany
    // db.collection("Todos")
    //   .deleteMany({ text: "eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteOne
    // db.collection("Todos")
    //   .deleteOne({ text: "Walk the dog" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //findOneAndDelete
    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteMany with Jason
    // db.collection("Users")
    //   .deleteMany({ name: "Jason" })
    //   .then(params => {
    //     console.log(params);
    //   });

    // deleteOne Bob via _id
    db.collection("Users")
      .findOneAndDelete({ _id: new ObjectID("5b7843a34662f93f38447ac1") })
      .then(result => {
        console.log(result);
      });

    // client.close();
  }
);
