
const mysql = require('mysql2/promise');

class DataBase {
    constructor() {
        this.connection = null;
    }

    async init() {
        try {
            this.connection = await mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "udsdeveloper",
                port: "3306 ",

            });
        } catch (error) {
            console.log(error);
            throw 'Connection error'
        }
    }

    end() {
        this.connection.end();
    }

    execute(...params) {
        console.log(params)
        return this.connection.execute(...params);
    }
}

module.exports = {
    DataBase
};
