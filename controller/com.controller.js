const Comment = require('../model/comment.model');
const Post = require('../model/post.model');

exports.createComment = async (req, res, next) => {
    try {
        const newPost = req.body;
        const posts = await Post.find({_id: req.params.postId});

        if(posts.length == 0) {
            res.status(404).json({message: "Le post à modifier n'existe pas"})
        }
        else {
            if(req.token.id === posts.at(0).authorId) {

                const comment = req.body;   
                const newComment = await Comment.create({
                    ...comment,
                    authorId: req.token.id,
                    date: Date.now()
                });

                console.log(newComment._id.toString());
            
                const updateResult = await Post.findOneAndUpdate({_id: req.params.postId}, { $push: { commentsId: [newComment._id.toString()] } }, {new: true});
        
                res.status(201).json({message: "Commentaire publié pour le post associé", result: updateResult});
            }
            else {
                res.status(401).json({ message: "Vous n'êtes pas autorisé à modifier ce post"});
            }
        }      
    }
    catch(error) {
        res.status(400).json({error: error});
    }
};

exports.deleteComment = async (req, res, next) => {
    try {
        const toDelete = await Comment.find({_id: req.params.commentId});
    
        if(toDelete.length == 0) {
          res.status(404).json({ message: "Ce commentaire n'existe pas"});
        }
        else {
          const deleteResult = await Comment.deleteOne({_id: req.params.commentId});
          res.status(200).json({ message: "Le commentaire a bien été supprimé", result: deleteResult});
        }
      }
      catch(error) {
        res.status(404).json({ error: error});
      }
};
