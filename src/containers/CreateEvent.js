import React from "react";
import {Link} from 'react-router-dom';
import TagList from "../components/TagList";

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            tags: []
        }
    }

    create = () => {
        this.setState({
            status: true
        })
    };

    removeTag = (i) => {
        const newTags = [...this.state.tags];
        newTags.splice(i, 1);
        this.setState({tags: newTags});
    };

    inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
            if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            this.setState({tags: [...this.state.tags, val]});
        } else if (e.key === 'Backspace' && !val) {
            this.removeTag(this.state.tags.length - 1);
        }
    };

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
                                <label htmlFor="inputEmail4">Event Title *</label>
                                <input type="text" placeholder="Event Title" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Event Location *</label>
                                <input type="text" placeholder="Location of the Event" className="form-control"
                                       id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputAddress">Event Date *</label>
                                <input type="date" className="form-control" id="inputAddress"
                                       placeholder="1234 Main St"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Organizer Name *</label>
                                <input type="text" placeholder="Name of the person organizing event"
                                       className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Event Summary *</label>
                            <input type="text" className="form-control" id="inputAddress2"
                                   placeholder="Brief event summary"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Event Description</label>
                            <textarea placeholder="Detiled Event Description" className="form-control"
                                      id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputAddress2">Upload Photo</label>
                            <input type="file" className="form-control" id="inputAddress2"
                                   placeholder="Apartment, studio, or floor"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputAddress2">Tags</label>
                            <TagList tags={this.state.tags}
                                     inputKeyDown={this.inputKeyDown}
                                     removeTag={this.removeTag}
                            />
                        </div>

                        <button onClick={this.create} type="submit" className="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default CreateEvent;