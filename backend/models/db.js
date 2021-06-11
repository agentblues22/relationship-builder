const mongoose= require("mongoose");


mongoose.connect("mongodb://localhost:27017/users",{useNewUrlParser : "true"},(err)=>{
    if (!err){
        console.log("mongoDB connection succeeded")
    }
    else{
        console.log("mongo connection error:"+err)
    }
});
require("./users.model");