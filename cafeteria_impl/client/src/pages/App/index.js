import React, { Component } from "react";
import Home from "../../components/Home"
import { BrowserRouter as Router, Route } from "react-router-dom/cjs/react-router-dom";
import Login from "../../components/Login";
import Orders from "../../components/Orders";
export class index extends Component {
  render() {
    return (
        <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/orders" exact component={Orders}/>
        </Router>
    )};
}

export default index;
