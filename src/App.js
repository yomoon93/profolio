import React from "react";
import "./App.css";
import ParticlesString from "./Components/header/particles";
import Navbar from "./Components/nav/navbar";
import {BrowserRouter as Router,Switch, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <Router>

  <div className="App">

        
<ParticlesString />
<Navbar />
      <Switch>
        <Route path="/" exact >
        
        </Route>
        <Route path="/weather"> 
          
         
        </Route>
        <Route path="/saved">
         
          
          </Route>  
        <Route path="/contact"  />
        <Route path="/blog"  />

      </Switch>
  </div>
  </Router>
  );
}

export default App;
