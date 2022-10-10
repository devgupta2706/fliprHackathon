const express = require("express")
const app = express()
const port = 80
const path = require("path")
const body = require("body")
const mongoose = require('mongoose');
// getting-started.js

mongoose.connect('mongodb+srv://devgupta:hcl123456@cluster0.pynzdai.mongodb.net/adminlogin');
// Define Mongoose Schema

var contactdetails = new mongoose.Schema({
    username: String,
    password: String
});

const adminlogin = mongoose.model('adminlogin', contactdetails);

//Express sstuff
app.use('/static', express.static('static'))
app.use(express.urlencoded({ extended: true }));

// Pug specific stuff
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
// End points
app.get('/', (req, res) => {
    res.status(200).render('home.pug')
})
app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug')
})

app.post('/', (req, res) => {
    // console.log(req.body.name);
    var myData = new adminlogin(req.body);
    myData.save();

})


// start the servers
app.listen(port, () => {
    console.log(`Application started successfully on ${port}`)
})