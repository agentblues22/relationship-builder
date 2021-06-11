import react, {Component} from "react";
import axios from "axios";
import "./form.css"
import Contentr from "./contents";


class Header extends Component{
  constructor(props){
    super(props)

    this.state={
      name: "enter name",
      replys:""
    }
  }
  handleNameChange=(event)=>{
    this.setState({
      name:event.target.value
    })

  }
  handleSubmit=(event)=>{
    
    axios.post("/user",{ 
      
      distr : this.state.name
    })
    .then(response =>{
      
      
      this.setState({
       replys:response.data,
       name: "enter name"
     })

     
  
      
    });

    event.preventDefault()

  }

  render(){
    return(
      <div classname="mainfile">
      <form onSubmit={this.handleSubmit}>
        <div class="container1">
          
          <label>Enter name:</label>
          <input className="text" type="text" value={this.state.name} onChange={this.handleNameChange}>
          
          
          </input>
          <button class="button" type="submit">add</button>
          
        </div>
        <h1> </h1>
        <div>
          <Contentr repl={this.state.replys}/>
        </div>
        
        
        
      </form>
      </div>
      
    )
  }
}
export default Header