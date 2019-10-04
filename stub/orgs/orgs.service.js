
const {DataBase} = require('../lib/db');


module.exports = {
    getOrgs,
    getOrg
}

async function getOrgs() {
    const connection = new DataBase();
    await connection.init();

    const districts = (await connection.execute('SELECT * FROM districts'))[0];
    for (const district of districts) {
        district.regions = (await connection.execute(`SELECT * FROM areas WHERE district_id = ${district.id}`))[0];
        for (const area of district.regions) {
            area.organizations = (await connection.execute(`SELECT id, url, short_name as name FROM organizations WHERE area_id = ${area.id}`))[0];
        }
    }
    connection.end();
    return districts
}


async function getOrg(){
    const connection = new DataBase();
    await connection.init();

    const data = (await connection.execute(`SELECT * FROM organizations WHERE url = "${req.params.url}"`))[0];
    for (const group of data.section_groups) {
        group.sections = (await connection.execute(`SELECT * FROM sections where group_id = ${group.id} and organization_id = ${data.id}`))[0];
    }

    data.administration = (await connection.execute(`SELECT * FROM administration WHERE organization_id = ${data.id}`))[0];

    data.clubs = (await connection.execute(`SELECT * FROM clubs WHERE organization_id = ${data.id}`))[0];

    for (const club of data.clubs) {
        club.photos = (await connection.execute(`SELECT * FROM club_photos WHERE club_id = ${club.id}`))[0];
    }

    data.awards = (await connection.execute(`SELECT * FROM awards WHERE organization_id = ${data.id}`))[0];
    data.stuff = (await connection.execute(`SELECT * FROM stuff WHERE organization_id = ${data.id}`))[0];
    connection.end();
    return data
}