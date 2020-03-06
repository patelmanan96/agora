import React from 'react';
import logo from '../logo.svg';
import './App.css';
import AgoraNavbar from "./AgoraNavbar";

class Placeholder extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Agora
                    </p>
                </header>
            </div>

        )
    }
}

export default Placeholder;