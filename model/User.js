import Sequelize from "sequelize";
import connection from "../database/database.js";

const User = connection.define("tbl_usuario", {
  cod_usuario:  { type: Sequelize.INTEGER(10), primaryKey: true, allowNull: false, autoIncrement: true },
  nome:         { type: Sequelize.STRING(500), allowNull: false },
  sobrenome:    { type: Sequelize.STRING(500), allowNull: false },
  email:        { type: Sequelize.STRING(500), allowNull: false },
  foto:         { type: Sequelize.STRING(500), allowNull: false },
  login:        { type: Sequelize.STRING(50), allowNull: false },
  senha:        { type: Sequelize.STRING(50), allowNull: false }
});
// User.sync({force: true});

export default User;