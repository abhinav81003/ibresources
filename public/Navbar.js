import Home from './Home';
import English from './English';
import Core from './Core';
import Sciences from './Sciences';
import Social from './Social';
import Maths from './Maths';
import Foreign from './Foreign';

import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navbar = () => {  
  return (
      <Router>
    <div className="top">
    <canvas class = "header"></canvas>
    <nav class="navbar">
        <h1> IBResources </h1>
        <div class="tabBar">
          <div class="tabs">
            <div class="currentTab">
            <Link to="/">Home</Link>
            </div>
            <div class="tab">
              <Link to = "/english">Language and Literature</Link>
            </div>
            <div class="tab">
              <Link to="/foreign">Language Acquisition</Link>
            </div>
            <div class="tab">
              <Link to="/social">Individuals and Societies</Link>
            </div>
            <div class="tab">
              <Link to="/sciences">Sciences</Link>
            </div>
            <div class="tab">
                <Link to="/maths">Mathematics</Link>
            </div>
            <div class="tab"> 
              <Link to="/core">Core Components</Link>
            </div>
          </div>
        </div>
        </nav>
      
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/english">
            <English />
          </Route>
          <Route path="/foreign">
            <Foreign />
          </Route>
          <Route path="/maths">
            <Maths />
          </Route>
          <Route path="/core">
            <Core />
          </Route>
          <Route path="/social">
            <Social />
          </Route>
          <Route path="/sciences">
            <Sciences />
          </Route>
        </Switch>
        
        </div>
      </Router>
      
  );
}

export default Navbar;
