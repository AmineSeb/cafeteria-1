import React, { Component } from "react";
import Home from "../Home"
import { BrowserRouter as Router, Route } from "react-router-dom/cjs/react-router-dom";
import Login from "../Login";
import Orders from "../Orders";
import Nav from "../Nav";
export class index extends Component {
  render() {
    return (
        <Router>
            <Nav/>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/orders" exact component={Orders}/>
        </Router>
    )};
}

export default index;
