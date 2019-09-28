const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');
const  cors = require('cors');
const db_connect = require('./db_connect');


let db;

db_connect.connect().then((connection) => {
    db = connection;
    console.log("Connected to database");
});

app.use(cors()); // to avoid cors problem (google it if you dont know)

app.get('/api/organizations', async function(req, res) {

    const districts = await db.query('SELECT * FROM districts');

    for (const district of districts) {
        district.regions = await db.query('SELECT * FROM areas WHERE district_id = ?', district.id);
        for (const area of district.regions) {
            area.organizations = await db.query('SELECT id, url, short_name as name FROM organizations WHERE area_id = ?', area.id);
        }
    }

    res.json(districts);
});

app.get('/api/organization/:url', async function(req, res) {

    const data = (await db.query('SELECT * FROM organizations WHERE url = ?', req.params.url))[0];

    data.section_groups = await db.query('SELECT * from section_groups');

    for (const group of data.section_groups) {
        group.sections = await db.query('SELECT * FROM sections where group_id = ? and organization_id = ?', [group.id, data.id]);
    }

    data.administration = await db.query('SELECT * FROM administration WHERE organization_id = ?', data.id);

    data.clubs = await db.query('SELECT * FROM clubs WHERE organization_id = ?', data.id);

    for (const club of data.clubs) {
        club.photos = await db.query('SELECT * FROM club_photos WHERE club_id = ?', club.id);
    }

    data.awards = await db.query('SELECT * FROM awards WHERE organization_id = ?', data.id);
    data.stuff = await db.query('SELECT * FROM stuff WHERE organization_id = ?', data.id);

    res.json(data);
});

app.use(express.static("dist"));
app.use(express.static("stub/shared")); // open content dir to web

app.listen(8090, () => console.log("Listening on port 8090!"));

module.exports = app;
