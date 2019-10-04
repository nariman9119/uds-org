const mysql = require('promise-mysql');
const importer = require('mysql-import');

const database = 'uds';
const user = 'root';
const password = 'udsdeveloper';
const host = 'localhost';
const port = 3306;

const config = {
    host,
    user,
    password,
    database,
    onerror: err => console.log(err.message)
};

const create_database = async (connection) => {
    await connection.query(`DROP DATABASE IF EXISTS \`${database}\` `);
    await connection.query(`CREATE DATABASE \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    await connection.query(`USE \`${database}\``);

    await importer.config(config).import(__dirname + '/databaseUP/ddl/script.sql');
    await importer.config(config).import(__dirname + '/databaseUP/dml/uds_orgs.sql');
   // await importer.config(config).import(__dirname + '/databaseUP/create user.sql');
};

mysql.createConnection({
    host,
    user,
    password,
    port
}).then(async connection => {
    create_database(connection).then(() => {
        console.log('success');
      //  connection.end();
        process.exit();
    })
});



