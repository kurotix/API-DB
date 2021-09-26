UtilisateurController = require('../controllers/utilisateur-controller');

module.exports = (server) => {

    server.get('/utilisateur', UtilisateurController.readAll, (res, req) => {
        res.sent(MovieController.readAll);
    });
    server.get('/utilisateur/:id', UtilisateurController.read, (res, req) => {
        res.sent(MovieController.read);
    });
    server.post('/utilisateur', UtilisateurController.create);
}