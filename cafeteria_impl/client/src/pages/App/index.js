import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom/cjs/react-router-dom";
import Home from "../Home";
import {NavigationBar} from "../../components";
import AdminMain from "../AdminMain";
import UserMain from "../UserMain";
import User from "../User";

//This is going to be the distributer of the State
export class index extends Component {


  render() {
    return (
        <>
        <NavigationBar />
        <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/order" exact component={this.props.type==='ADMIN'? AdminMain:User}/>
        </Router>
        </>
    )};
}

export default index;
