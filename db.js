const Mongoose = require("mongoose")


// db.js
const localDB = `mongodb+srv://devgupta:hcl123456@cluster0.pynzdai.mongodb.net/role_auth`
const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
module.exports = connectDB
