// Give us entire express library
const express = require('express');

// call express function, creates a server, and saves in app.
const app = express();
const PORT = 5000;


// Serve static files!
app.use(express.static('server/public'));

// Serve DATA
const people = ['Chris', 'Brii', 'Kevin', 'Soul']

// GET ROUTE
app.get('/data', (req, res) => {
    console.log('You found /data');
    // All SERVER REQUESTS NEED A RESPONSE!!!
    res.send(people);

});



// Start up server!
app.listen(PORT, () => {
    // Run when server starts.
    console.log('Server running on PORT:', PORT);  
});

