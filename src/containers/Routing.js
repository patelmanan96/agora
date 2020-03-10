import React from 'react';
import '../components/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Placeholder from "../components/Placeholder";
import AgoraNavbar from "../components/AgoraNavbar";
import SearchPage from "./SearchPage";
import Homepage from './HomePage';
import HostingPage from './HostingPage';


function Routing() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Route path='/' exact
                           component = {AgoraNavbar}/>
                    <Route path='/search/:query' exact
                           component = {AgoraNavbar}/>
                    <Route path='/' exact
                           component = {Homepage}/>
                    <Route path="/search/:query" exact
                           component = {SearchPage}/>
                    <Route path="/hosting" exact 
                           component= {AgoraNavbar} />
                    <Route path="/hosting" exact 
                           component= {HostingPage} />
                </div>
            </Router>
        </div>
    );
}

export default Routing;
