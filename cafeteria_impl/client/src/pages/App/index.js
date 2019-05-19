import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom/cjs/react-router-dom";
import Login from "../../components/Login";
import Home from "../Home";
import NavigationBar from "../../components/Nav";
export class index extends Component {
  render() {
    return (
        
        <Router>
            <NavigationBar />
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
        </Router>
    )};
}

export default index;
