const express = require("express");
const auth = require("./../middleware/auth");
const productController = require("./../controller/post.controller");
const multer = require("./../middleware/multer");