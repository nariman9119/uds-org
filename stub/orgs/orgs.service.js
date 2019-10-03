const {DataBase} = require('../../stub/uds-db.sql');

async function getOrgs() {
    const connection = new DataBase()
    await connection.init()

    const [orgsList] = await connection.execute('SELECT * FROM uds.`areas` ORDER BY `published_at` DESC')

    connection.end()

    return orgsList
}


module.exports = {
    getOrgs
}
