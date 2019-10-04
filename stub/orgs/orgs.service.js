const {DataBase} = require('../lib/db');

const db_connect = require('../db_connect');


let db;

db_connect.connect().then((connection) => {
    db = connection;
    console.log("Connected to database");
});

module.exports = {
    getOrgs,
    getOrg
}

async function getOrgs() {
    const districts = await db.query('SELECT * FROM districts');

    for (const district of districts) {
        district.regions = await db.query('SELECT * FROM areas WHERE district_id = ?', district.id);

        for (const area of district.regions) {
            area.organizations = await db.query('SELECT id, url, short_name as name FROM organizations WHERE area_id = ?', area.id);
        }
    }

    return districts
}


async function getOrg(url){
    const data = (await db.query('SELECT * FROM organizations WHERE url = ?', url))[0];

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

    return data
}

