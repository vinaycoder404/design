const FS = require('fs');
const PATH = require('path');
const SEQUELIZE = require('sequelize');

const BASENAME = PATH.basename(module.filename);
const ENV = "PRODUCTION"
// const ENV = process.env.NODE_ENV || 'local';
const CONFIG = require('../../../config/config.json')[ENV];

const DB = {};
let connection;

// ADDING PREDFIEND CONNECTION POOL SETTINGS
CONFIG.pool = {
    max: 5,
    min: 0,
    idle: 20000,
    acquire: 20000,
    evict: 30000,
    handleDisconnects: true,
};

console.log(`Current ENV:: ${ENV} ** ${JSON.stringify(CONFIG)}`);

global.connection;

connection = new SEQUELIZE(CONFIG.DATABASE, CONFIG.USERNAME, CONFIG.PASSWORD, CONFIG);

// Checking connection status
connection.authenticate().then((err) => {
  if (err) {
    console.log(`There is ERROR in connection ${err}`);
  } else {
    global.connection;
    console.log(`Connection has been established successfully ${connection}`);
  }
});


FS
  .readdirSync(__dirname)
  .filter((file) => {
    console.log(`FILEISSUE :  ${file}`);
    return (file.indexOf('.') !== 0) && (file !== BASENAME) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    console.log(`FILEISSUE2 : ${file} ${__dirname}`);
    const model = connection.import(PATH.join(__dirname, file));
    DB[model.name] = model;
  });

Object.keys(DB).forEach((modelName) => {
  if (DB[modelName].associate) {
    DB[modelName].associate(DB);
  }
});

DB.connection = connection;
DB.Sequelize = SEQUELIZE;

module.exports = DB;
