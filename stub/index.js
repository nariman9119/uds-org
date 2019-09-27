const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');
const db_connect = require('./db_connect');

db_connect.db_connect().then(() => {
    console.log("Connected to database");
});

app.use(express.static("dist"));

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;
