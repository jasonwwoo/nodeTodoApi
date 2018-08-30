const expect = require("expect");
const request = require("supertest");
const { ObjectID } = require("mongodb");

const { app } = require("./../server");
const { Todo } = require("./../models/todo");
const { User } = require("./../models/user");
const { todos, populateTodos, users, populateUsers } = require("./seeds/seed");

beforeEach(populateTodos);
beforeEach(populateUsers);

// describe("POST /todos", () => {
//   it("should create a new todo", done => {
//     var text = "Test todo text";

//     request(app)
//       .post("/todos")
//       .send({ text })
//       .expect(200)
//       .expect(res => {
//         expect(res.body.text).toBe(text);
//       })
//       .end((err, r) => {
//         if (err) {
//           return done(err);
//         }
//         Todo.find({ text })
//           .then(todos => {
//             expect(todos.length).toBe(1);
//             expect(todos[0].text).toBe(text);
//             done();
//           })
//           .catch(e => {
//             done(e);
//           });
//       });
//   });

//   it("should not create todo with invalid body data", done => {
//     request(app)
//       .post("/todos")
//       .send({})
//       .expect(400)
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//         Todo.find()
//           .then(todos => {
//             expect(todos.length).toBe(2);
//             done();
//           })
//           .catch(e => {
//             done(e);
//           });
//       });
//   });
// });

// describe("GET /todos", done => {
//   it("should get all todos", done => {
//     request(app)
//       .get("/todos")
//       .expect(200)
//       .expect(res => {
//         expect(res.body.todos.length).toBe(2);
//       })
//       .end(done);
//   });
// });

// describe("GET /todos/:id", () => {
//   it("should return todo doc", done => {
//     request(app)
//       .get(`/todos/${todos[0]._id.toHexString()}`)
//       .expect(200)
//       .expect(res => {
//         expect(res.body.todo.text).toBe(todos[0].text);
//       })
//       .end(done);
//   });

//   it("should return 400 if todo not found", done => {
//     var hexId = new ObjectID().toHexString();
//     request(app)
//       .get(`/todos/${hexId}`)
//       .expect(400)
//       .end(done);
//   });

//   it("should return 404 for non-object ids", done => {
//     request(app)
//       .get(`/todos/123`)
//       .expect(404)
//       .end(done);
//   });
// });

// describe("DELETE / todos/:id", () => {
//   it("should remove a todo", done => {
//     var hexId = todos[1]._id.toHexString();

//     request(app)
//       .delete(`/todos/${hexId}`)
//       .expect(200)
//       .expect(res => {
//         expect(res.body.todo._id).toBe(hexId);
//       })
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//         Todo.findById(hexId)
//           .then(todo => {
//             expect(todo).toBeFalsy();
//             done();
//           })
//           .catch(e => {
//             done(e);
//           });
//       });
//   });

//   it("should return 404 if todo if todo ot found", done => {
//     var hexId = new ObjectID().toHexString();
//     request(app)
//       .delete(`/todos/${hexId}`)
//       .expect(404)
//       .end(done);
//   });

//   it("should return 404 if objectID is invalid", done => {
//     var hexId = new ObjectID().toHexString();
//     request(app)
//       .delete(`/todos/1234asd`)
//       .expect(404)
//       .end(done);
//   });
// });

// describe("PATCH /todos/:id", () => {
//   it("should update the todo", done => {
//     // grab id of first item
//     // update text, set comepleted true
//     // 200
//     // text is changed, completed is true, comepletedAt is a number .toBeA

//     const id = todos[0]._id.toHexString();
//     const text = "Updated from PATCH";
//     request(app)
//       .patch(`/todos/${id}`)
//       .send({ text, completed: true })
//       .expect(200)
//       .expect(res => {
//         expect(res.body.todo.text).toBe("Updated from PATCH");
//         expect(res.body.todo.completed).toBe(true);
//         expect(typeof res.body.todo.completedAt).toBe("number");
//       })
//       .end(done);
//   });

//   it("should clear completedAt when todo is set to false", done => {
//     const id = todos[1]._id.toHexString();
//     const text = "Updated text 2";
//     request(app)
//       .patch(`/todos/${id}`)
//       .send({
//         text,
//         completed: false
//       })
//       .expect(200)
//       .expect(res => {
//         expect(res.body.todo.text).toBe(text, "This works text");
//         expect(res.body.todo.completed).toBe(false);
//         expect(res.body.todo.completedAt).toBe(null);
//       })
//       .end(done);
//   });
// });

// describe("GET /users/me", () => {
//   // describe Mocha
//   it("should return user if authenticated", done => {
//     // it Mocha
//     request(app) // supertest
//       .get("/users/me") //supertest
//       .set("x-auth", users[0].tokens[0].token) //supertest
//       .expect(200) //superTest
//       .expect(res => {
//         //expect
//         expect(res.body._id).toBe(users[0]._id.toHexString());
//         expect(res.body.email).toBe(users[0].email);
//       })
//       .end(done);
//   });

//   it("should return 401 if not authenticate", done => {
//     request(app)
//       .get("/users/me")
//       .expect(401)
//       .expect(res => {
//         expect(res.body).toEqual({});
//       })
//       .end(done);
//   });
// });

// describe("POST /users", () => {
//   it("should create a user", done => {
//     var email = "jen@example.com";
//     var password = "password1";

//     request(app)
//       .post("/users")
//       .send({ email, password })
//       .expect(200)
//       .expect(res => {
//         expect(res.headers["x-auth"]).toBeTruthy();
//         expect(res.body._id).toBeTruthy();
//         expect(res.body.email).toBe(email);
//       })
//       .end(err => {
//         if (err) {
//           return done(err);
//         }
//         User.findOne({ email })
//           .then(user => {
//             expect(user).toBeTruthy();
//             expect(user.email).toBe(email);
//             expect(user.password).not.toBe(password);
//             done();
//           })
//           .catch(e => {
//             done(e);
//           });
//       });
//   });

//   it("should return validation errors if request invalid", done => {
//     var email = "invalid Email";
//     var password = "pass";
//     request(app)
//       .post("/users")
//       .send({ email, password })
//       .expect(400)
//       .end(done);
//   });

//   it("should not create user if email in use", done => {
//     var email = "jason@example.com";
//     var password = "diffpassword";

//     request(app)
//       .post("/users")
//       .send({ email, password })
//       .expect(400)
//       .end(done);
//   });
// });

describe("POST /users/login", () => {
  it("Should login user and return auth token", done => {
    request(app)
      .post("/users/login")
      .send({
        email: users[1].email,
        password: users[1].password
      })
      .expect(200)
      .expect(res => {
        expect(res.headers["x-auth"]).toBeTruthy();
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        User.findById(users[1]._id)
          .then(user => {
            expect(user.toObject().tokens[0]).toMatchObject({
              // _id: "5b86fd986b89ef4504661e38",
              access: "auth",
              token: res.headers["x-auth"]
            });
            done();
          })
          .catch(e => {
            done(e);
          });
      });
  });

  it("should reject invalid login", done => {
    request(app)
      .post("/users/login")
      .send({
        email: users[1].email,
        password: users[1].password + "1"
      })
      .expect(400)
      .expect(res => {
        expect(res.headers["x-auth"]).toBeFalsy();
        console.log(res.headers);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        User.findById(users[1]._id)
          .then(user => {
            console.log(user);
            expect(user.tokens.length).toBe(0);
            done();
          })
          .catch(e => {
            done(e);
          });
      });
  });
});

describe("DELETE /users/me/token", () => {
  it("should remove auth token on logout", done => {
    //.set("x-auth", users[0].tokens[0].token) //supertest
    request(app)
      .delete("/users/me/token")
      .set("x-auth", users[0].tokens[0].token)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }

        User.findById(users[0]._id)
          .then(user => {
            expect(user.tokens.length).toBe(1);
            done();
            console.log(user);
          })
          .catch(e => {
            done(e);
          });
      });
  });
});
