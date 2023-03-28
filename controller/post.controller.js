export let DeletePost = undefined;
const productModel = require("./../model/post.model");
const jwt = require("jsonwebtoken");

exports.createPost = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
  const userId = decodedToken.id;
  const post = new productModel({
    content: req.body.content,})
};

exports.getAllPosts = (req, res, next) => {
  productModel.find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res.status(400).json({ error: error });
    });
}

exports.getOnePost = (req, res, next) => {
  productModel.findOne({ _id: req.params.id })
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      res.status(404).json({ error: error });
    });
}

exports.modifyPost = (req, res, next) => {
  const post = new productModel({
    _id: req.params.id,
    content: req.body.content,
    });
};

exports.DeletePost = (req, res, next) => {
    productModel.deleteOne({ _id: req.params.id })
        .then(() => {
        res.status(200).json({ message: "Post supprimé" });
        })
        .catch(error => {
        res.status(400).json({ error: error });
        });
}

