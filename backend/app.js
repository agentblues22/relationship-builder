const express = require("express");
require("./models/db")
const mongoose= require("mongoose")

const User= mongoose.model("name")
const app= express()


const port =process.env.PORT||8000;

var users=[];
var relations=[]
app.use(express.urlencoded({ extended : true}))
app.use(express.json())


app.post('/user', (req,res )=> {
    console.log(req.body);
    
    var dist = req.body.distr;
   
   if (dist=="enter name"){
   res.send("enter a valid user")
   }
   else{
    insertRecord(req,res)
     
     }}

  


) ;
function insertRecord(req,res){
    var userz =new User();
    userz.name= req.body.distr;
    userz.save((err,doc)=>{
        if(!err){
            console.log("added")
            res.send("added")
        }
        else{
            console.log("error")
            res.send("failed")
        }
    })

}

app.get('/addUser', (req,res )=> {
    User.find({},function(err,guys){
        if(!err){
            len=guys.length
            for(i=0;i<len;i++){
                users.push(guys[i].name)
                

            }
        }
        else{
            console.log("error")
        }
    })
    
    
   
   res.send(users)
   users=[]

}) ;

app.post('/addRelation',(req,res)=>{

    var user1 = req.body.userOne;
    var user2 =req.body.userTwo;
    
    if(user1==user2){
        res.send("error!.. same users");
    }
    else{
        relations.push([user1,user2])
        res.send("success!")
    }

});

app.post('/viewRelation',(req,res)=>{

    var user1 = req.body.userOne;
    var user2 =req.body.userTwo;
    
    if(user1==user2){
        res.send("ERR");
    }
    else if(user1 == "select name"){
        res.send("U1")

    }
    else if(user2=="select name"){
        res.send("U2")
    }
    else{
        
        const adjacencyList = new Map();

        function addNode(user){
            adjacencyList.set(user,[]);
        
        }
        
        function addEdge(user1,user2){
            adjacencyList.get(user1).push(user2);
            adjacencyList.get(user2).push(user1);
        }
        
        users.forEach(addNode);
        relations.forEach(relation => addEdge(...relation))
        
        console.log(adjacencyList)
        
         
         var namar=[]
        
        
        function dfs(start, visited = new Set()){
            namar.push(start)
            visited.add(start);
        
            const destinations = adjacencyList.get(start)
        
            for(const destination of destinations){
                if (destination ==dest){
                    namar.push(destination)
                    return namar;
                }
                if(!visited.has(destination)){
                    dfs(destination,visited)
                }
            }
        }
        
        
        

        dest= user2
       dfs(user1)
       
       
       res.send(namar)
       namar=[]
        
        
    }

});









app.listen(port, ()=> console.log(`connected to port ${port}`));

