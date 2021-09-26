const db = require("../models");
const Utilisateur = db.utilisateurs;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const utilisateur = new Utilisateur({
    title: req.body.title,
    duration: req.body.duration,
  });

  utilisateur
    .save(utilisateur)
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

  Utilisateur
    .find(id)
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

  Utilisateur
    .findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "Not found Utilisateur with id " + id });
      }
      else {
        res.send(data);
      }
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Utilisateur with id=" + id });
    });
};