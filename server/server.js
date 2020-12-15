// Give us entire express library
const express = require('express');

// call express function, creates a server, and saves in app.
const app = express();
const PORT = 5000;


// Start up server
app.listen(PORT, () => {
    // Run when server starts.
    console.log('Server running on PORT:', PORT);  
});

