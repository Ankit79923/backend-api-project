const express = require('express');
const app = express();
require('dotenv').config();


// Middleware for parsing JSON request bodies   
app.use(express.json());


app.get('/', function(req, res) {
    console.log('Requesting the / route i.e, Homepage...');
    return res.status(200).send('Hello, Welcome to api.onlinehometuition.com');
})


app.get('/profile', function(req, res) {
    return res.status(200).send('Hello, Welcome to Profile page.');
})


app.get('/orders', function(req, res) {
    return res.status(200).send('Hello, Welcome to My Orders page.');
})


app.get('/new', function(req, res) {
    return res.status(200).send('Hello, Welcome to New page.');
})

app.get('/book', function(req, res) {
    console.log('New request received for /book route.');
    return res.status(200).send('Hello, Welcome to Book Store.');
})


app.get('/housefull200', function(req, res) {
    console.log('New POST request received for /housefull100 route.');
    return res.status(201).send('Welcome, to housefull100. Enjoy your movie.');
})


app.get('/msg', function(req, res) {
    return res.status(200).json({"message": process.env.MSG, "update": "Little change done."});
})


app.listen(3000, function() {
    console.log('Server listening on port 3000.');   
});