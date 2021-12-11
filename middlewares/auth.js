const JWT = require("jsonwebtoken");
require("dotenv").config();
// const users = require("./shcemas/userSchema");

module.exports = async (req, res, next) => {
    // console.log("여기를 지나서");
    // next();
    //jwt secretkey 변경
    console.log("auth 미들웨어 왔음");

    try {
        const token = await req.headers["authorization"];
        console.log(token);
        const [type, encodedToken] = token.split(" ");

        if (type !== "Bearer") {
            res.status(401).send({
                errorMessage: "로그인 후 사용하세요.",
            });
            return;
        }
        const nickname = JWT.verify(encodedToken, process.env.SECRET_KEY);
        res.locals = nickname;
        next();
    } catch {
        res.status(403).send("유효하지 않은 사용자입니다");
        return;
    }
};
