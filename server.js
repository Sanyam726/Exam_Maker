require("dotenv").config();
const express = require('express');
const EasyQ = require("./models/EasyQ");
const MidQ = require("./models/MidQ");
const HardQ = require("./models/HardQ");
require("./config/dbconnect");
const app= express();

//to enable express for incoming json data
app.use(express.json());
// Main work
//Push Question to question bank
 // easy question
app.post('/api/v1/EasyBank',async (req,res)=>{
    const {question,subject,topic,difficulty}=req.body;
    try{
        //add question
        const que = await EasyQ.create({
            question,
            subject,
            topic,
            difficulty,
        });
         res.json({
            status:"success",
            data: que,
            message:"question added to easy question bank"
         });
    }catch(error){
        res.json(error);
    }
});
// medium question
app.post('/api/v1/MidBank',async (req,res)=>{
    const {question,subject,topic,difficulty}=req.body;

    try{
         //add question
         const que = await EasyQ.create({
            question,
            subject,
            topic,
            difficulty,
        });
         res.json({
            status:'success',
            data: que,
            message:"question added to medium question bank"
         })
    }
    catch(error){
        res.json(error);
    }
});
// Hard question
app.post('/api/v1/HardBank',async (req,res)=>{
    const {question,subject,topic,difficulty}=req.body;

    try{
         //add question
         const que = await EasyQ.create({
            question,
            subject,
            topic,
            difficulty,
        });
         res.json({
            status:'success',
            data: que,
            message:"question added to hard questiob bank"
         })
    }
    catch(error){
        res.json(error);
    }
});
//Get questions for complete score
app.get("/api/v1/questions",async(req,res)=>{
    try{
        const questions = [];
    const eq = await EasyQ.findOne({}).skip(Math.floor(Math.random() * EasyQ.count())).exec();
    const mq = await MidQ.findOne({}).skip(Math.floor(Math.random()*MidQ.count())).exec();
    const hq = await HardQ.findOne({}).skip(Math.floor(Math.random() * HardQ.count())).exec();
   //  cosnole.log(eq);

      if(eq){
    questions.push({
      difficulty: "Easy",
      question: eq.question,
    });
     }

  if(mq){
    questions.push({
      difficulty: "Medium",
      question: mq.question,
    });
  }

  if(hq){
    questions.push({
      difficulty: "Hard",
      question: hq.question,
    });
  }

  if(questions.length > 0){
    res.json({
      status: "success",
      data: {
        questions: questions, // returning all  3 quetions as an array
      },
    });
  } else{
    res.status(404).json({
      error: "No questions found",
    });
  }
}catch(error){
  console.error(error);
  res.status(500).json({
    error: "Internal server error",
  });
}
});

//server work
const PORT = process.env.PORT || 3000;
app.listen(PORT,console.log(`server is running ${PORT}`));
