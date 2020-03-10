import React from "react";
import {Link} from 'react-router-dom';

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
    }

    create = () => {
        this.setState({
            status: true
        })
    }

    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="container-md mb-5">
                    <h1> Create Event </h1>
                    {this.state.status ? <div>
                        <div className="alert alert-success" role="alert">
                            <h4 className="alert-heading">This Feature is Coming Soon...</h4>
                            <p>You successfully completed the steps to create an event.
                                Unfortunately this feature is still under development</p>
                            <br/>
                            <p className="mb-0">Thank you for using this page.</p>
                        </div>
                    </div> : <div></div>}
                    <div className="form">

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Event Title</label>
                                <input type="text" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Event Location</label>
                                <input type="text" className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputAddress">Event Date</label>
                                <input type="date" className="form-control" id="inputAddress"
                                       placeholder="1234 Main St"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Organizer Name</label>
                                <input type="text" className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Event Summary</label>
                            <input type="text" className="form-control" id="inputAddress2"
                                   placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Event Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputAddress2">Upload Photo</label>
                            <input type="file" className="form-control" id="inputAddress2"
                                   placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">TAGS</label>
                            <div className="container form-check">

                                <column col-sm="3"><input type="checkbox"/><label>CAMD</label></column>
                                <column col-sm="3"><input type="checkbox"/><label>School of Business</label></column>
                                <column col-sm="3"><input type="checkbox"/><label>Khoury</label></column>


                                <column col-sm="true"><input type="checkbox"/><label>College of Engineering</label>
                                </column>
                                <column col-sm="true"><input type="checkbox"/><label>Health Sciences</label></column>
                                <column col-sm="true"><input type="checkbox"/><label>Law</label></column>


                                <column col-sm="true"><input type="checkbox"/><label>CPS</label></column>
                                <column col-sm="true"><input type="checkbox"/><label>College of Science</label></column>
                                <column col-sm="true"><input type="checkbox"/><label>Social Sciences and
                                    Humanities</label></column>

                            </div>
                        </div>

                        <button onClick={this.create} type="submit" className="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default CreateEvent;