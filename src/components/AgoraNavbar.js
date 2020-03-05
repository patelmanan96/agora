import React from 'react';
import './AgoraNavbar.css'

class AgoraNavbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#"><h1>Agora</h1></a>
                <form className="form-inline form-group row ml-4 mr-3">
                    <input className="form-control mr-sm-4" type="search" placeholder="Search Event"
                           aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}

export default AgoraNavbar;