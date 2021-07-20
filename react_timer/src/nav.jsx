import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./App";
import Lander from "./lander";
import Counter from "./counter";
import Clock from "./clock";
import "./nav.css";
export default class Nav extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="nav">
            <div className="logo">
              <span>LO</span>GO
            </div>
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>

              <li>
                <Link to="/clock">Clock</Link>
              </li>

              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/lander">Lander</Link>
              </li>
            </ul>
          </div>
          <div className="switch">
            <Switch>
              <Route exact path="/" component={App}></Route>
              <Route exact path="/clock" component={Clock}></Route>
              <Route exact path="/counter" component={Counter}></Route>
              <Route exact path="/lander" component={Lander}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
