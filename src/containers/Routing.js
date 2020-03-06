import React from 'react';
import '../components/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Placeholder from "../components/Placeholder";
import AgoraNavbar from "../components/AgoraNavbar";
import SearchPage from "./SearchPage";

function Routing() {
    return (
        <div className="App">
            <Router>
                <AgoraNavbar/>
                <div>
                    <Route path='/' exact component={SearchPage}/>
                    <Route path="/search/:query" exact render={SearchPage}/>
                </div>
            </Router>
        </div>
    );
}

export default Routing;
