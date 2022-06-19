const express=require('express');
const app = express();
var mongoose = require('mongoose');
const bodyParser = require("body-parser")
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect('mongodb+srv://likhita4403:likhita@backend.z3kqc.mongodb.net/?retryWrites=true&w=majority')
// app.use(expressLayouts);

const userSchema={
  username: String,
  password: String
}
const user=mongoose.model("user",userSchema)
app.get("/",function(req,res){
  res.sendFile(__dirname+"/src/components/Home.js")
})
 
// app.post
app.listen(3000,function(){
  console.log("running on 3000")
})