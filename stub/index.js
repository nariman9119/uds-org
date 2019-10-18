const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors()); // to avoid cors problem (google it if you dont know)
app.use(require('./api'));

//app.use(require('./orgs/orgs.controller'));

app.use(express.static("dist"));
app.use(express.static("stub/shared")); // open content dir to web

compiler.plugin('done', function() {
    console.log("Clearing /client/ module cache from server");
    Object.keys(require.cache).forEach(function(id) {
        if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
    });
});

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;
