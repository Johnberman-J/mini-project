const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const router_user = require("./user");
const router_main = require("./main");
const router_project = require("./project");
const router_circles = require("./circles");
const router_todo = require("./todo");


router.use("/", router_user);
router.use("/", auth, router_main);
router.use("/", auth, router_project);
router.use("/", auth, router_circles);
router.use("/", auth, router_todo);



module.exports = router;





