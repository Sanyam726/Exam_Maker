const mongoose = require("mongoose");

const hardSch = new mongoose.Schema({
    question:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    topic:{
        type:String,
        required:true,
    },
    difficulty:{
        type:String,
        required:true,
    },
});

const HardQ = mongoose.model("HardQ",hardSch);
module.exports = HardQ;
