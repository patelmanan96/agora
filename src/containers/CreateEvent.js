import React from "react";
import {Link} from 'react-router-dom';

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyField: false,
            failedPassword: false,
            usernameRepeated: false,
            username: '',
            password: '',
            verifyPassword: ''
        }
    }

    usernameModified = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    passwordModified = (event) => {
        this.setState(
            {
                password: event.target.value
            }
        )
    }
    verifyPasswordModified = (event) => {
        this.setState(
            {
                verifyPassword: event.target.value
            }
        )
    }

    checkAndSignUp = () => {

    }

    signUp = () => {
        this.props.history.push("/signUp");
    }

    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="container-md">
                    <h1> Create Event </h1>
                    {/*<div className="container">*/}
                    {/*    <h1>Sign Up</h1>*/}
                    {/*    {*/}
                    {/*        this.state.failedPassword === true && <div className="alert alert-danger" role="alert">*/}
                    {/*            Passwords Don't Match*/}
                    {/*        </div>*/}
                    {/*    }*/}
                    {/*    {*/}
                    {/*        this.state.emptyField === true && <div className="alert alert-danger" role="alert">*/}
                    {/*            Enter Both Username And Password. Cannot Sign Up Empty.*/}
                    {/*        </div>*/}
                    {/*    }*/}
                    {/*    {*/}
                    {/*        this.state.usernameRepeated === true && <div className="alert alert-danger" role="alert">*/}
                    {/*            Username Not Available*/}
                    {/*        </div>*/}
                    {/*    }*/}
                    {/*</div>*/}

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
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2"
                                   placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default CreateEvent;