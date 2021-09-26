const dbConfig = require('../config/dbconfig')
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.utilisateurs = require("./utilisateurModel")(mongoose);
db.admins = require("./adminModel")(mongoose);

module.exports = db;