const express = require("express");
var request = require("request");
const app= express()

const port =process.env.PORT||8000;

var users=["georgy","twinkle","roy","thomas","edwin","mariam"];
var relations= [
    ["georgy","twinkle"],
    ["roy","georgy"],
    ["roy","thomas"],
    ["edwin","mariam"],
    ["mariam","twinkle"]
]

app.get('/user', (req,res )=> {
    
    var dist = req.query.distr;
   
   if (dist=="enter name"){
   res.send("enter a valid user")
   }
   else{
    users.push(dist);
    res.send("successfully added user")
   }

  


}) ;

app.get('/addUser', (req,res )=> {
    
    
   
   res.send(users)

}) ;

app.get('/addRelation',(req,res)=>{

    var user1 = req.query.userOne;
    var user2 =req.query.userTwo;
    
    if(user1==user2){
        res.send("error!.. same users");
    }
    else{
        relations.push([user1,user2])
        res.send("success!")
    }

});

app.get('/viewRelation',(req,res)=>{

    var user1 = req.query.userOne;
    var user2 =req.query.userTwo;
    
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
        dest= user2
       dfs(user1)
       
       
       res.send(namar)
       namar=[]
        
        
    }

});



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






if(process.env.NODE_ENV==="production"){
    app.use(express.static("vaccine-frontend/build"));
}

app.listen(port, ()=> console.log(`connected to port ${port}`));
