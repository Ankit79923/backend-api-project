const express = require('express');
const app = express();


// Middleware for parsing JSON request bodies   
app.use(express.json());


app.get('/', function(req, res) {
    return res.status(200).send('Hello, Welcome to homepage.');
})


app.get('/profile', function(req, res) {
    return res.status(200).send('Hello, Welcome to Profile page.');
})


app.get('/orders', function(req, res) {
    return res.status(200).send('Hello, Welcome to My Orders page.');
})


app.listen(3000, function() {
    console.log('Server listening on port 3000.');   
});