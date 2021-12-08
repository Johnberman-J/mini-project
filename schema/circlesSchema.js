const mongoose = require("mongoose");

const circlesSchema = new mongoose.Schema({
    projects_id: {
        type: Number,
        required: ()=> {
            if(!this.projects_id)
            return;
        },
    },
    circles_id: {
        type: String,
        unique: true,
    },
    feedback: {
        type: String,
        required: ()=> {
            if(!this.feedback)
            return;
        },
    },
    date: {
        type: String,
    }
});

module.exports = mongoose.model("circles", circlesSchema);
