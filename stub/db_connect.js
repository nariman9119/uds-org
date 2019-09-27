const mysql = require('promise-mysql');

const DB_NAME = 'uds-db';

module.exports = {
    async db_connect() {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'my-secret-pw',
            port: 3306
        });
        const result = await connection.query(`SHOW DATABASES LIKE '${DB_NAME}'`);
        if (result.length === 0) {
            this.create_database(connection);
        }
        console.log(result);
    },
    async create_database(connection) {
        await connection.query(`CREATE DATABASE \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
        await connection.query(`USE \`${DB_NAME}\``);
        connection.query('create table districts(\n' +
            '   id INT AUTO_INCREMENT,\n' +
            '   name VARCHAR(100),\n' +
            '   PRIMARY KEY (id)\n' +
            ');\n');

        connection.query('create table areas(\n' +
            '   id INT AUTO_INCREMENT,\n' +
            '   name VARCHAR(100),\n' +
            '   district_id INT,\n' +
            '   PRIMARY KEY (id),\n' +
            '   CONSTRAINT fk_district FOREIGN KEY (district_id) REFERENCES districts(id)' +
            ');\n');

        connection.query('create table organizations(\n' +
            '   id INT AUTO_INCREMENT,\n' +
            '   short_name VARCHAR(100),\n' +
            '   name VARCHAR(255),\n' +
            '   area_id INT,\n' +
            '   short_description TEXT,\n' +
            '   description TEXT,\n' +
            '   logo VARCHAR(255),\n' +
            '   video VARCHAR(255),\n' +
            '   address VARCHAR(255),\n' +
            '   schedule_url VARCHAR(255),\n' +
            '   PRIMARY KEY (id),\n' +
            '   CONSTRAINT fk_area FOREIGN KEY (area_id) REFERENCES areas(id)' +
            ');\n');

        connection.query('create table section_groups(\n' +
            '   id INT AUTO_INCREMENT,\n' +
            '   name VARCHAR(100),\n' +
            '   PRIMARY KEY (id)\n' +
            ');\n');

        connection.query('create table sections(\n' +
            '   id INT AUTO_INCREMENT,\n' +
            '   name VARCHAR(100),\n' +
            '   group_id INT,\n' +
            '   organization_id INT,\n' +
            '   PRIMARY KEY (id),\n' +
            '   CONSTRAINT fk_group FOREIGN KEY (group_id) REFERENCES section_groups(id),' +
            '   CONSTRAINT fk_organization FOREIGN KEY (organization_id) REFERENCES organizations(id)' +
            ');\n');

        connection.query('create table clubs(\n' +
            '   id INT AUTO_INCREMENT,\n' +
            '   address VARCHAR(255),\n' +
            '   organization_id INT,\n' +
            '   PRIMARY KEY (id),\n' +
            '   CONSTRAINT fk_clubs_organization FOREIGN KEY (organization_id) REFERENCES organizations(id)' +
            ');\n');

        connection.query('create table club_photos(\n' +
            '   id INT AUTO_INCREMENT,\n' +
            '   photo VARCHAR(255),\n' +
            '   club_id INT,\n' +
            '   PRIMARY KEY (id),\n' +
            '   CONSTRAINT fk_photos_club FOREIGN KEY (club_id) REFERENCES clubs(id)' +
            ');\n');

        connection.query('create table awards(\n' +
            '   id INT AUTO_INCREMENT,\n' +
            '   place INT,\n' +
            '   date VARCHAR(255),\n' +
            '   description TEXT,\n' +
            '   organization_id INT,\n' +
            '   PRIMARY KEY (id),\n' +
            '   CONSTRAINT fk_awards_organization FOREIGN KEY (organization_id) REFERENCES organizations(id)' +
            ');\n');

        connection.query('create table stuff(\n' +
            '   id INT AUTO_INCREMENT,\n' +
            '   name VARCHAR(255),\n' +
            '   trainings TEXT,\n' +
            '   description TEXT,\n' +
            '   organization_id INT,\n' +
            '   competense ENUM(\'sport\',\'creative\'), \n' +
            '   PRIMARY KEY (id),\n' +
            '   CONSTRAINT fk_stuff_organization FOREIGN KEY (organization_id) REFERENCES organizations(id)' +
            ');\n');
    },

    async add_records(connection) {

    }
};
