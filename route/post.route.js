const express = require("express");
const auth = require("./../middleware/auth");
const postController = require("./../controller/post.controller");
const commentController = require("./../controller/comment.controller");
const multer = require("./../middleware/multer");

const router = express.Router();

// Routes pour les posts
router.post("/", auth, multer, postController.createPost);
router.get("/", auth, postController.getAllPosts);
router.get("/:id", auth, postController.getOnePost);
router.put("/:id", auth, multer, postController.modifyPost);
router.delete("/:id", auth, postController.DeletePost);
router.get("/user/:id", auth, postController.getAllPostsByUser);

// Routes pour les commentaires
router.post("/:postId/comments", auth, commentController.createComment);
router.get("/:postId/comments", auth, commentController.getAllComments);
router.put("/:postId/comments/:commentId", auth, commentController.modifyComment);
router.delete("/:postId/comments/:commentId", auth, commentController.deleteComment);

module.exports = router;