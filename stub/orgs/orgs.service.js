const {DataBase} = require('../lib/db');

module.exports = {
    getOrgs
}

async function getOrgs() {
    const connection = new DataBase()
    await connection.init()
    const [districts] = await connection.execute('SELECT * FROM districts')

    for (const district of districts) {
        try {
            district.regions = await connection.execute("SELECT * FROM areas WHERE district_id = ?", [district.id]);
        }
        catch (e) {
            district.regions = []
        }
        for (const area of district.regions) {
            try {
                area.organizations = await connection.execute('SELECT id, url, short_name as name FROM organizations WHERE area_id = ?', [area.id]);
            }
            catch (e) {
                area.organizations = []
            }
        }

    }

    connection.end()
    return districts

}



