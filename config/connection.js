const Sequelize = require('sequelize');

//Allow for use of .env data
require('dotenv').config();

//Create connection to db, whether local on heroku using jawsdb
const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PW,{
    host: 'localhost',
    dialect:'mysql',
    port:3306
});

module.exports = sequelize;
