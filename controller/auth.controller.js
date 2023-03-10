const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signin = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      try {
        User.create({
          email: req.body.email,
          password: hash
        });
        res.status(201).json({ message: "Utilisateur créé" });
      } catch (error) {
        res.status(500).json(error);
      }

    })
    .catch(error => {
      res.status(500).json(error);
    });

}

exports.login = (req, res, next) => {
  try {
    let user = User.findOne({ email: req.body.email })
      .then(finduser => {
        bcrypt.compare(req.body.password, finduser.password)
          .then(success => {
            if (success) {
              res.status(200).json({
                email: finduser.email,
                jwt: jwt.sign({
                  email: finduser.email,
                  id: user._id
                }, process.env.JWT_TOKEN)
              });
            } else {
              res.status(401).json({ message: "Mot de passe incorrect" });
            }
          })
          .catch(error => {
            res.status(500).json(error);
          })
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}