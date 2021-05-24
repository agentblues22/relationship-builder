import react, {Component} from "react";
import axios from "axios";
import "./form.css"
import Display from "./display";



class Relation extends Component{
  constructor(props){
    super(props)

    this.state={
      names: [""],
      user1:"select name",
      user2:"select name",
      status:""
    }
  }
  handleNameChangeOne=(event)=>{
    this.setState({
      user1 :event.target.value
    })

    event.preventDefault()

  }
  handleNameChangeTwo=(event)=>{
    this.setState({
      user2 :event.target.value
    })

    event.preventDefault()

  }
  componentDidMount =()=>{
    
    axios.get("/addUser").then(response =>{
      
      
      this.setState({
       names:response.data
     })

     
  
      
    });

   

  }
  handleSubmit=(event)=>{
    axios.get("/viewRelation",{ params:{userOne : this.state.user1,userTwo: this.state.user2}}).then(response =>{
      
        
     this.setState({
       status: response.data
     })
      
    });

    event.preventDefault()
  }
  

  render(){
    return(
      <div classname="mainfile">
      <form onSubmit={this.handleSubmit}>
        <div class="container1">
          
          <label>view relation between:</label>
          <br></br>
          <label>From:</label>
          <select className="select"  value={this.state.user1} onChange={this.handleNameChangeOne}>
            <option value="select name">--select name--</option>
              {this.state.names.map(item=>(<option value={item}>{item}</option>))}
          
          
          </select>
          <label>To:</label>
          <select className="select"  value={this.state.user2} onChange={this.handleNameChangeTwo}>
            <option value="select name">--select name--</option>
              {this.state.names.map(item=>(<option value={item}>{item}</option>))}
          
          
          </select>
          <button class="button" type="submit">add</button>
          
          
        </div>
        
        <div className="container2">
          <Display status={this.state.status}/>
        </div>
        
        
        
      </form>
      </div>
      
    )
  }
}
export default Relation