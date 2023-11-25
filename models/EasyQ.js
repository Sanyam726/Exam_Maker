const mongoose = require("mongoose");

const easySch = new mongoose.Schema({
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

const EasyQ = mongoose.model("EasyQ",easySch);
module.exports = EasyQ;
