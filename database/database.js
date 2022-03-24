import {Sequelize} from "sequelize";

const database = {
    schema: "libri_israel",
    user: "root",
    password: "12345678",
    host: "localhost",
    dialect: "mysql"
};
const sequelize = new Sequelize(
    database.schema,
    database.user,
    database.password,
    {host: database.host, dialect: database.dialect}
);

console.log(`API: Database: "${database.dialect}", Host: "${database.host}", User: "${database.user}", Password: "${database.password}"`);

export default sequelize;