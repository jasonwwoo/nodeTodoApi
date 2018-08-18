// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    //db fetch
    // db.collection("Todos")
    //   .find({ completed: false })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log({ _id: new ObjectID("5b783f7b2eb801096ce0d4a3") });
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch todos: ", err);
    //     }
    //   );

    //db count
    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count: ${count}`);
    //     },
    //     err => {
    //       console.log("Unable to fetch todos: ", err);
    //     }
    //   );

    db.collection("Users")
      .find({ name: "Jason" })
      .toArray()
      .then(
        docs => {
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log("Unable to fetch todos: ", err);
        }
      );

    // client.close();
  }
);
