const mongoose = require("mongoose");

const midSch = new mongoose.Schema({
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

const MidQ = mongoose.model("MidQ",midSch);
module.exports = MidQ;
