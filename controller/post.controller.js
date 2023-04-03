
const Post = require("./../model/post.model");
const jwt = require("jsonwebtoken");
const fs = require('fs');

exports.createPost = (req, res, next) => {
  try {
    const post = req.body;
    Post.create({
      ...post,
      picture: `${req.protocol}://${req.get("host")}/images/${req.body.picture}`,
      authorId: req.token.id,
      date: Date.now()
    });
    res.status(201).json({ message: "Post publié"});
  }
  catch(error) {
    res.status(400).json({error: error});
  }
};

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    if(posts.length == 0) {
      res.status(404).json({message: "Aucun posts trouvés"});
    }
    else {
      res.status(201).json(posts);
    }
  }
  catch(error) {
    res.status(400).json({ error: error });
  }
}

exports.getOnePost = async (req, res, next) => {
  console.log("One post");
  try {
    const post = await Post.findOne({_id: req.params.id});
    
    if(post) {
      res.status(200).json(post);
    }
    else {
      res.status(404).json({message: "Aucun post trouvé"});
    }
  }
  catch (error) {
    res.status(404).json({ error: error });
  }
}

exports.modifyPost = async (req, res, next) => {
  try {
    const newPost = req.body;
    const posts = await Post.find({_id: req.params.id});

    if(posts.length == 0) {
      res.status(404).json({message: "Le post à modifier n'existe pas"})
    }
    else {
      if(req.token.id === posts.at(0).authorId) {
      
        const updateResult = await Post.findOneAndUpdate({_id: req.params.id}, newPost, {new: true});
  
        res.status(201).json({ message: "Le post a bien été modifé", result: updateResult});
      }
      else {
        res.status(401).json({ message: "Vous n'êtes pas autorisé à modifier ce post"});
      }
    }    
  }
  catch(error) {
    res.status(404).json({ error: error});
  }
};

exports.DeletePost = async (req, res, next) => {    
  try {
    const toDelete = await Post.find({_id: req.params.id});

    if(toDelete.length == 0) {
      res.status(404).json({ message: "Ce post n'existe pas"});
    }
    else {
      const deleteResult = await Post.deleteOne({_id: req.params.id});
      res.status(200).json({ message: "Le post a bien été supprimé", result: deleteResult});
    }
  }
  catch(error) {
    res.status(404).json({ error: error});
  }
}

exports.getAllPostsByUser = async (req, res, next) => {
  try {
    const posts = await Post.find({authorId: req.params.id});

    res.status(200).json(posts);
  }
  catch(error) {
    res.status(404).json({error: error});
  }
}
