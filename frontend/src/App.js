
import './App.css';
import Header from "./Header"
import {BrowserRouter as Router,Link} from "react-router-dom";
import Route from "react-router-dom/Route";
import './navbar.css';
import Users from "./users.js"
import Relation from "./relation.js"


function App() {
  return (
    <Router>
    <div className="App">
      <div className="navbar">
      <Link className="Link" to="/">Home</Link>
      <Link className="Link" to="/users">Users</Link>
      <Link className="Link" to="/display">Relation</Link>
      </div>
     <Route path="/" exact strict >
       <Header/>
      </Route>
      <Route path="/users" exact strict>
        <Users/>
      </Route>
      <Route path="/display" exact strict >
        <Relation/>
      </Route>
     
      
      
      
      
    </div>
    </Router>
  );
}

export default App;
