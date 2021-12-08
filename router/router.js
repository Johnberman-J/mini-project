const express = require("express");
const router = express.Router();
// const users = require("../schema/userSchema");
// const projects = require("../schema/projectsSchema");
const circles = require("../schema/circlesSchema");
// const todos = require("../schema/todoSchema");
const JWT = require("jsonwebtoken");
const auth = require("../middlewares/auth");
// jwtauth 하나 만들어서 임포트 해야함


router.route("/circles/:circles_id/feedback")
    .get(async (req, res) => {
        const { circles_id } = req.params;  // circles_id => unique;
        
        try {
            const selected = await circles.findOne({circles_id});
            if(!selected) {
                res.status(400).send("데이터가 존재하지 않습니다!");
                return;
            }
            res.send(selected);
            return;
        } catch(error) {
            console.log(error);
        }
    })
    .post( async (req, res) => {
        const {projects_id, circles_id, feedback} = req.body;
        const existfeedback = await circles.findOne({ circles_id });
        if(!existfeedback) {
            const circle = new circles({projects_id, circles_id, feedback, date});
            await circle.save();
        } else {
            const successCount = await circles.updateOne({ circles_id }, {$set: { feedback }});
            if(successCount<1) {
            res.status(401).send({errorMessage: "피드백 등록에 실패하였습니다!"});
            return;
            }
        }
        const returnData = await circles.findOne({ circles_id });
        res.status(200).send(returnData);
    })
    .put( async (req, res) => {
        const { circles_id, feedback } = req.body;
        const successCount = await circles.updateOne({ circles_id }, {$set: { feedback }});
        if(successCount<1) {
            res.status(401).send({errorMessage: "피드백 수정에 실패하였습니다!"});
            return;
        }
        const returnData = await circles.findOne({ circles_id });
        res.status(200).send(returnData);
    })
    .delete( async (req,res) => {
        const { circles_id } = req.body;
        const successCount = await circles.updateOne({ circles_id }, {$set: { feedback: "" }});
        if(successCount<1) {
            res.status(401).send({errorMessage: "피드백 삭제에 실패하였습니다!"});
            return;
        }
        const returnData = await circles.findOne({ circles_id });
        res.status(200).send(returnData);
    });


// 인증 api
router.get("/users/me", auth, async (req, res) => {
    // const userID = res.locals;
    res.send(userID);
    // res.send("인증을 통과했습니다!");
});



module.exports = router;