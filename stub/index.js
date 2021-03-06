const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors()); // to avoid cors problem (google it if you dont know)

app.use('/orgs',require('./api'));
//app.use('/orgs',require('./orgs/orgs.controller'));

app.use(express.static("dist"));
app.use(express.static("stub/shared")); // open content dir to web

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;
