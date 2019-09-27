const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static("dist"));

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;
