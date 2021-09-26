UserController = require('../controllers/admin-controller');

module.exports = (server) => {

    server.get('/admins', UserController.readAll, (res, req) => {
        res.sent(UserController.readAll);
    });
    server.get('/admin/:id', UserController.read, (res, req) => {
        res.sent(UserController.read);
    });
    server.post('/admin', UserController.create);
    server.delete('/admin/:id', UserController.delete);
}