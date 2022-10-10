// user.js
const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  },
  task: [{
    taskdescription: String,
    tasktype: String,
    date: String,
    startTime: String,
    duration: String,
    required: false
  }]
})
const User = Mongoose.model("user", UserSchema)
module.exports = User
