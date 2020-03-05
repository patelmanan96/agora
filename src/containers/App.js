import React from 'react';
import '../components/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Placeholder from "../components/Placeholder";
import AgoraNavbar from "../components/AgoraNavbar";

function App() {
    return (
        <div className="App">
            <AgoraNavbar/>
            <Router>
                <div>
                    <Route path='/' exact component={Placeholder}/>
                </div>
            </Router>
        </div>
    );
}

export default App;
