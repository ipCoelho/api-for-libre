import {Sequelize} from "sequelize";
// [scheme://][user@]host[:port]
const database = {
    schema: "libri",
    user: "root",
    password: "12345678",
    host: "localhost",
    dialect: "mysql"
};
const sequelize = new Sequelize(database.schema, database.user, database.password, { host: database.host, dialect: database.dialect });

console.log(` > Connection created at: ${database.dialect}@${database.host} | User: "${database.user}", Password: "${database.password}"`);

export default sequelize;