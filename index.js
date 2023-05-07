const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1 style='color: red'> Hi, This is page home in my express app</h1>");
});

app.get("/info", (req, res) => {
    res.send("<a href='https://google.com'> open google to search</a>");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});