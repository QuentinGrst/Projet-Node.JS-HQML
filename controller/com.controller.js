const postModel = require("./../model/post.model");

exports.addComment = (req, res, next) => {
    const comment = {
        content: req.body.content,
        author: req.body.author,
    };

    postModel.updateOne(
        { _id: req.params.id },
        { $push: { comments: comment } }
    )
        .then(() => {
            res.status(200).json({ message: "Commentaire ajouté" });
        })
        .catch((error) => {
            res.status(400).json({ error: error });
        });
};

exports.deleteComment = (req, res, next) => {
    postModel.updateOne(
        { _id: req.params.id },
        { $pull: { comments: { _id: req.params.commentId } } }
    )
        .then(() => {
            res.status(200).json({ message: "Commentaire supprimé" });
        })
        .catch((error) => {
            res.status(400).json({ error: error });
        });
};