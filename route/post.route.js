const express = require("express");
const auth = require("./../middleware/auth");
const productController = require("./../controller/post.controller");
const multer = require("./../middleware/multer");
const {router} = require("express/lib/application");



router.post("/", auth, multer, productController.createPost);
router.get("/", auth, productController.getAllPosts);
router.get("/:id", auth, productController.getOnePost);
router.put("/:id", auth, multer, productController.modifyPost);
router.delete("/:id", auth, productController.DeletePost);
router.get("/user/:id", auth, productController.getAllPostsByUser);

module.exports = router;
