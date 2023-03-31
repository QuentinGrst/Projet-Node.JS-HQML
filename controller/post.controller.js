
const postModel = require("./../model/post.model");
const jwt = require("jsonwebtoken");

exports.createPost = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
  const userId = decodedToken.id;
  const post = new postModel({
    content: req.body.content,})
};

exports.getAllPosts = (req, res, next) => {
  postModel.find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res.status(400).json({ error: error });
    });
}

exports.getOnePost = (req, res, next) => {
  postModel.findOne({ _id: req.params.id })
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      res.status(404).json({ error: error });
    });
}

exports.modifyPost = (req, res, next) => {
  const post = new postModel({
    _id: req.params.id,
    content: req.body.content,
    });
};

exports.DeletePost = (req, res, next) => {
    postModel.deleteOne({ _id: req.params.id })
        .then(() => {
        res.status(200).json({ message: "Post supprimé" });
        })
        .catch(error => {
        res.status(400).json({ error: error });
        });
}

exports.getAllPostsByUser = (req, res, next) => {
  postModel.find({ userId: req.params.id })
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res.status(400).json({ error: error });
    });
}
