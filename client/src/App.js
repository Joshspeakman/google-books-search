import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Navbar from "../src/components/Navbar"


import Search from "./pages/Search";
import Save from "./pages/Save";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="uk-container uk-container-large">
          <Navbar>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/save">Save</Link>
            </li>
          </Navbar>

          

          <Switch>
            {"Your routes go here!"}
            <Route exact path="/" component={Search} />
            <Route exact path="/save" component={Save} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

