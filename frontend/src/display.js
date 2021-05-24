import React from "react";
import "./form.css"

class Display extends React.Component{
   
   
  
    render(){

      

      if(this.props.status==""){

        return(
          <div class="container3">no connection exist</div>
        )
      }
      else if(this.props.status=="ERR"){
          return(
        <div class="container3">error!.. same users</div>)
      }
     else if(this.props.status=="U1"){
        return(
      <div class="container3">select user 1</div>)
     }

    else if(this.props.status=="U2"){
        return(
      <div class="container3">select user 2</div>)
     }
    
     
       
      else{
        return(
            this.props.status.map((rawdata,i)=>
          
            <div class="container3">
            {rawdata}=&gt;</div>)
        )
      }
    }
}
  
  export default Display