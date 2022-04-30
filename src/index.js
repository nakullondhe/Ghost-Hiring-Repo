const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const path = require('path');

app.listen(port, () => {
    console.log('Server started on port ' + port);
})

app.use('/',express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes'));