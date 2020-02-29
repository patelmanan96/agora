import React from 'react';
import '../components/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Placeholder from "../components/Placeholder";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Route path='/' exact component={Placeholder}/>
                </div>
            </Router>
        </div>
    );
}

export default App;
