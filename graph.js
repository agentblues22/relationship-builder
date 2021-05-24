var users=["georgy","twinkle","roy","thomas","edwin","mariam"];
var relations= [
    ["georgy","twinkle"],
    ["roy","georgy"],
    ["roy","thomas"],
    ["edwin","mariam"],
    ["mariam","twinkle"]
]



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



 var dest ="roy"

function dfs(start, visited = new Set()){
    console.log(start)
    visited.add(start);

    const destinations = adjacencyList.get(start)

    for(const destination of destinations){
        if (destination ==dest){
            console.log(`dfs found it in steps`)
            return;
        }
        if(!visited.has(destination)){
            dfs(destination,visited)
        }
    }
}
dfs("edwin")