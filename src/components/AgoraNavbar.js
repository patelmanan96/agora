import React from 'react';
import './AgoraNavbar.css'
import {Link} from 'react-router-dom';
import Aux from '../hoc/Aux';

class AgoraNavbar extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
            query: '*'
        }
        console.log(props);
    }

    searchParamChange = (param) => {
        this.setState({
            query: param.target.value
        });
    };

    fireSearch = () => {
        if (this.state.query !== '')
            this.props.history.push('/search/' + this.state.query)
            
    };

    fireUpcoming = () => {
        this.props.history.push('/upcoming')
    };

    fireCreateEvent = () => {
        this.props.history.push('/createEvent');
    };

    fireHostingEvent = () => {
        this.props.history.push('/hosting');
    };
   

    render() {
        return (
            <Aux>
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/" className="Nav__brand">
                    <a className="navbar-brand" href="#"><h1>Agora</h1></a>
                </Link>
                <form className="form-inline form-group row ml-4 mr-3"> 

                     <button onClick={this.fireCreateEvent} 
                        className={`btn btn-outline-info mr-sm-4 my-2 my-sm-0 
                        ${this.props.location.pathname ==='/createEvent' ? 'current':''}`}
                            type="button" >Create an Event
                    </button> 

                    <button onClick={this.fireUpcoming} 
                        className={`btn btn-outline-info mr-sm-4 my-2 my-sm-0 
                        ${this.props.location.pathname === '/upcoming' ? 'current' : ''}`} 
                        type="button">
                        My Upcoming Events
                    </button>

                    <button onClick={this.fireHostingEvent} 
                        className={`btn btn-outline-info mr-sm-4 my-2 my-sm-0
                        ${this.props.location.pathname === '/hosting' ? 'current' : ''}`} 
                        type="button">
                        My Hosting Events
                    </button>

                    <input onChange={this.searchParamChange} 
                        className ='form-control mr-sm-4'
                            type="search"
                           placeholder="Search Event"
                           aria-label="Search"/>

                    <button onClick={this.fireSearch} 
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit">
                        Search
                    </button> 

                 </form>
            </nav>
            <h4><strong>Spot your events at NU</strong></h4>
            </Aux>
        )
    }
}

export default AgoraNavbar;