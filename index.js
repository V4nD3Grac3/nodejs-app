'use strict';
const express = require("express");
const app = express();
const path = require('path');

const PORT = 8080;
const HOST = '0.0.0.0';

app.get("/", (req, res) => {
        const filePath = path.join(__dirname, 'public', 'index.html');
        res.sendFile(filePath);
});

app.listen(PORT, HOST);
console.log(`running on port $PORT`);
