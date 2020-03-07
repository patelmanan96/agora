import React from 'react';
import '../components/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Placeholder from "../components/Placeholder";
import AgoraNavbar from "../components/AgoraNavbar";
import SearchPage from "./SearchPage";
import Homepage from './HomePage';


function Routing() {
    return (
        <div className="App">
            <Router>
                <AgoraNavbar/>
                <div>
                    <Route path='/' exact component={SearchPage}/>
                    <Route path="/search/:query" exact render={SearchPage}/>
                    <Route path="/home" exact component={Homepage} />
                </div>
            </Router>
        </div>
    );
}

export default Routing;
