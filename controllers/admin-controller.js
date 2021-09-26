const fs = require('fs');
const path = "./utilisateurs.json";

const db = require("../models");
const User = db.users;


exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const user = new User({
        name: req.body.name,
        age: req.body.age,
        utilisateurs: req.body.utilisateurs,
    });

    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

exports.readAll = (req, res) => {
    const id = req.query.id;

    User
        .find(id)
        .populate('utilisateurs')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        });
};

exports.read = (req, res) => {
    const id = req.params.id;

    User
        .findById(id)
        .populate('utilisateurs')
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Not found User with id " + id });
            }
            else {
                res.send(data);
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User with id=" + id });
        });

};

exports.delete = (req, res) => {
    const id = req.params.id;

    User
        .findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete User with id=${id}. L'utilisateur n'a pas était trouvé`
                });
            } else {
                res.send({
                    message: "User was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};