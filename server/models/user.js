const mongoose = require("mongoose");

const User = mongoose.model("Users", {
  email: {
    required: true,
    type: String,
    minlength: 1,
    trim: true
  }
});

module.exports = { User };
