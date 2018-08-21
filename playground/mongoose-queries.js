const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

const id = "5b7b1b6e23cf372f0ce65caf";

// if (!ObjectID.isValid(id)) {
//   console.log("ID is not valid");
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Find", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Find One", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("Id not found");
//     }
//     console.log("Find by Id", todo);
//   })
//   .catch(e => {
//     console.log(e);
//   });

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("User ID could not be found");
    }
    console.log("User: ", user);
  })
  .catch(e => {
    console.log("error", e);
  });

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("User ID could not be found");
    }
    console.log("User: ", user);
  })
  .catch(e => {
    console.log("error", e);
  });
