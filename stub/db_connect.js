const mysql = require('promise-mysql');

const database = 'uds-db';
const user = 'root';
const password = 'my-secret-pw';
const host = 'localhost';
const port = 3306;
module.exports = {
    async connect() {
        const connection = await mysql.createConnection({
            host,
            user,
            password,
            port
        });
        const result = await connection.query(`SHOW DATABASES LIKE '${database}'`);
        if (result.length === 0) {
            this.create_database(connection);
        } else {
            await connection.query(`USE \`${database}\``);
        }
        return connection;
    },
    async create_database(connection) {
        await connection.query(`CREATE DATABASE \`${database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
        await connection.query(`USE \`${database}\``);

        require('mysql-import').config({
            host,
            user,
            password,
            database,
            onerror: err=>console.log(err.message)
        }).import('stub/uds-db.sql').then(()=> {
            console.log('all statements have been executed')
        });
    }

};
