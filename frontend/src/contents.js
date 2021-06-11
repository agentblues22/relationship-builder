import React from "react";
import "./form.css"

class Contentr extends React.Component{
   
   
  
    render(){

      

      if(this.props.repl=="enter a valid user"){

        return(
          <div class="container1">enter a valid user</div>
        )
      }
      else if(this.props.repl=="added"){

        return(
          <div class="container1">user successfully added</div>
        )

    
     
      } 
      else{
        return(
          <div class="container1">no action</div>
        )
      }
    }
}
  
  export default Contentr