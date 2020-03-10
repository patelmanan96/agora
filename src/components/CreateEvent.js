import React from 'react';
import {Component,Fragment} from 'react';
//import './AgoraNavbar.css'
//import AgoraNavbar from "../components/AgoraNavbar";
import {Link} from 'react-router-dom';

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '*'
        }
    }

    render() {
        return (
            /*<nav className="navbar navbar-dark bg-dark">
                <Link to="/" className="Nav__brand">
                    <a className="navbar-brand" href="#"><h1>Agora</h1></a>
                </Link>
                <form className="form-inline form-group row ml-4 mr-3">
                    <button onclick={this.createEvent} className="btn btn-outline-info mr-sm-4 my-2 my-sm-0" type="button">Create Event</button>
                    <button className="btn btn-outline-info mr-sm-4 my-2 my-sm-0" type="button">Upcoming</button>
                    <button className="btn btn-outline-info mr-sm-4 my-2 my-sm-0" type="button">Hosting</button>
                    <input onChange={this.searchParamChange} className="form-control mr-sm-4" type="search"
                           placeholder="Search Event"
                           aria-label="Search"/>

                    <button onClick={this.fireSearch} className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>

                </form>
            </nav>*/
            <div>
                <Fragment>
                    <div className="container-fluid m-2">
                        <div className="row m-3 bg-light text-dark">
                            <div className="col-sm ">
                                <div className="mt-4">
                                    <h3> Tell us about your event... </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
                <Fragment>
                    <div className="row m-5">
                        <div className="col-sm ml-5 mr-5">
                            <input className="form-control mr-sm-4" type="text"
                                placeholder="Event Name"/>
                            <p></p>
                            <input className="form-control mr-sm-4" type="text"
                                placeholder="Describe the Event"/>
                            <p></p>
                            <input className="form-control mr-sm-4" type="date"/>
                            <p></p>
                            <input className="form-control mr-sm-4" type="text"
                                placeholder="Where is the Event"/>
                            <p></p>
                            <label>Tags</label>
                            <p></p>
                            <row>
                            <column col-sm="3"><input type="checkbox"/><label>CAMD</label></column>
                            <column col-sm="3"><input type="checkbox"/><label>School of Business</label></column>
                            <column col-sm="3"><input type="checkbox"/><label>Khoury</label></column>
                            </row>
                            <p></p>
                            <row>
                            <column col-sm="true"><input type="checkbox"/><label>College of Engineering</label></column>
                            <column col-sm="true"><input type="checkbox"/><label>Health Sciences</label></column>
                            <column col-sm="true"><input type="checkbox"/><label>Law</label></column>
                            </row>
                            <p></p>
                            <row>
                            <column col-sm="true"><input type="checkbox"/><label>CPS</label></column>
                            <column col-sm="true"><input type="checkbox"/><label>College of Science</label></column>
                            <column col-sm="true"><input type="checkbox"/><label>Social Sciences and Humanities</label></column>
                            </row>
                            <p></p>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Create Event
                            </button>

                        </div>
                    </div>
                </Fragment>
            </div>
        )
    }
}

export default CreateEvent;