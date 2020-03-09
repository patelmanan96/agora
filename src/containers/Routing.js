import React from 'react';
import '../components/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Placeholder from "../components/Placeholder";
import AgoraNavbar from "../components/AgoraNavbar";
import SearchPage from "./SearchPage";
import CreateEvent from "./CreateEvent";

function Routing() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Route path='/' exact
                           component = {AgoraNavbar}/>
                    <Route path='/search/:query' exact
                           component = {AgoraNavbar}/>
                    <Route path='/createEvent' exact
                           component = {AgoraNavbar}/>
                    <Route path='/' exact
                           component = {Placeholder}/>
                    <Route path="/search/:query" exact
                           component = {SearchPage}/>
                    <Route path="/createEvent" exact
                           component = {CreateEvent}/>
                </div>
            </Router>
        </div>
    );
}

export default Routing;
