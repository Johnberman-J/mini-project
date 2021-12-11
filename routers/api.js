const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const user = require("./user");
const projects = require("./project");
const main = require("./main");
const Todo = require("./todo");
const circles = require("./circles");

router.use("/", user);
router.use("/", auth, projects);
router.use("/", auth, main);
router.use("/", auth, Todo);
router.use("/", auth, circles);

module.exports = router;
