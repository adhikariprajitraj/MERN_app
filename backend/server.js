const express = require('express');

// express app
const app = express();

app.get('/', (req, res) => {
    res.json({mssg: "Welcome to the server"})
})



// listen for requests
app.listen(4000, () => {console.log('listening for requests on port 4000')});