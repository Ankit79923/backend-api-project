const express = require('express');
const app = express();


// Middleware for parsing JSON request bodies   
app.use(express.json());


app.get('/', function(req, res) {
    return res.status(200).send('Hello, Welcome to homepage.');
})


app.listen(4000, function() {
    console.log('Server listening on port 4000.');   
});