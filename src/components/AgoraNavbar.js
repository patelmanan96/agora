import React from 'react';
import './AgoraNavbar.css'
import {Link} from 'react-router-dom';

class AgoraNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '*'
        }
    }

    searchParamChange = (param) => {
        this.setState({
            query: param.target.value
        });
    };

    fireSearch = () => {
        if(this.state.query !== '')
            this.props.history.push('/search/'+this.state.query)
    };

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/" className="Nav__brand">
                    <a className="navbar-brand" href="#"><h1>Agora</h1></a>
                </Link>
                <form className="form-inline form-group row ml-4 mr-3">
                    <button className="btn btn-outline-info mr-sm-4 my-2 my-sm-0" type="submit">Create Event</button>
                    <button className="btn btn-outline-info mr-sm-4 my-2 my-sm-0" type="submit">Upcoming</button>
                    <button className="btn btn-outline-info mr-sm-4 my-2 my-sm-0" type="submit">Hosting</button>
                    <input onChange={this.searchParamChange} className="form-control mr-sm-4" type="search"
                           placeholder="Search Event"
                           aria-label="Search"/>

                    <button onClick={this.fireSearch} className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>

                </form>
            </nav>
        )
    }
}

export default AgoraNavbar;