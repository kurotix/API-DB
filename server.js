const express = require('express');
const routes = require('./routes/utilisateur');
const routesAdmin = require('./routes/admin');
const bodyParser = require('body-parser');
const db = require("./models");
const { mongoose } = require('./models');
const server = express();
const port = 3000

const cors = require('cors');
server.use(cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.set('json spaces', 2);
routes(server);
routesAdmin(server);


mongoose.Promise = global.Promise;
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`Connected to the database, on ${db.url}`);
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

server.listen(port, () => {
  console.log(`Serveur demarré en écoute sur le port ${port} !, l'adresse http://localhost:${port}`)
});