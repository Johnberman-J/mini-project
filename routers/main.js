const express = require("express");
const router = express.Router();
const circle = require("../models/circles");
const auth = require("../middlewares/auth");

router.get("/projects/:projects_Id/circles", async (req, res, next) => {
    console.log("circles get api 들어옴");
    const projects_id = req.params.projects_Id;

    console.log(projects_id);
    try {
        const circles = await circle
            .find({ projects_id: projects_id })
            .sort("circle_date");

        res.json({ circles: circles });
    } catch (err) {
        console.error(err);

        next(err);
    }
});

module.exports = router;
