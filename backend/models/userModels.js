import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    password:DataTypes.STRING
},{
    freezeTableName:true,
});

export default User;

(async () => {
    await db.sync();
})();