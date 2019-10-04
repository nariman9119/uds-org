
const {DataBase} = require('../lib/db');


module.exports = {
    getOrgs,
    getOrg,
    updateMainInfo
};

async function getOrgs() {
    const connection = new DataBase();
    await connection.init();

    const districts = (await connection.execute("SELECT * FROM uds.districts"))[0];
    for (const district of districts) {
        district.regions = (await connection.execute(`SELECT * FROM uds.areas WHERE district_id = ${district.id}`))[0];
        for (const area of district.regions) {
            area.organizations = (await connection.execute(`SELECT id, url, short_name as name FROM uds.organizations WHERE area_id = ${area.id}`))[0];
        }
    }
    connection.end();
    return districts
}


async function getOrg(url){
    const connection = new DataBase();
    await connection.init();

    const data = (await connection.execute(`SELECT * FROM uds.organizations WHERE url = "${url}"`))[0][0];

    data.section_groups = (await connection.execute('SELECT * from uds.section_groups'))[0];

    for (const group of data.section_groups) {
        group.sections = (await connection.execute(`SELECT * FROM uds.sections where group_id = ${group.id} and organization_id = ${data.id}`))[0];
    }

    data.administration = (await connection.execute(`SELECT * FROM uds.administration WHERE organization_id = ${data.id}`))[0];

    data.clubs = (await connection.execute(`SELECT * FROM uds.clubs WHERE organization_id = ${data.id}`))[0];

    for (const club of data.clubs) {
        club.photos = (await connection.execute(`SELECT * FROM uds.club_photos WHERE club_id = ${club.id}`))[0];
    }

    data.awards = (await connection.execute(`SELECT * FROM uds.awards WHERE organization_id = ${data.id}`))[0];
    data.stuff = (await connection.execute(`SELECT * FROM uds.stuff WHERE organization_id = ${data.id}`))[0];
    connection.end();
    return data
}

async function updateMainInfo(data_new){
    const connection = new DataBase();
    await connection.init();

    const data = (await connection.execute(`SELECT * FROM uds.organizations WHERE id = ${data_new.id}`))[0][0];
    Object.assign(data, data_new);

    const [res] = await connection.execute(`UPDATE uds.organizations SET short_name = '${data.short_name}', name = '${data.name}', short_description = '${data.short_description}', about = '${data.about}', address  ='${data.address}' WHERE id = ${data.id}`);
    return data_new;
}
