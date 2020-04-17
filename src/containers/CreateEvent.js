import React from "react";
import {Link} from 'react-router-dom';
import TagList from "../components/TagList";
import SearchService from "../services/SearchService";
import EventCard from "../models/EventCard";

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.searchService = SearchService.getInstance();
        this.state = {
            status: false,
            tags: [],
            title: "",
            location: "",
            date: null,
            organizerName: "",
            summary: "",
            description: "",
            photo: ""
        }
    }

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

    title = (e) => {
        this.setState({title: e.target.value});
    };

    locationChange = (e) => {
        this.setState({location: e.target.value});
    };

    eventDate = (e) => {
        let b = e.target.value.split(/\D/);
        let dateToSet = new Date(b[0], --b[1], b[2]);
        this.setState({date: dateToSet});
    };

    organizerName = (e) => {
        this.setState({organizerName: e.target.value});
    };

    eventSummary = (e) => {
        this.setState({summary: e.target.value});
    };

    description = (e) => {
        this.setState({description: e.target.value});
    };

    uploadPhoto = (e) => {
        this.setState({photo: URL.createObjectURL(e.target.files[0])});
    };

    createEvent = () => {
        this.setState({
            status: true
        });
        let newCard = new EventCard();
        newCard.createdBy = "userDefault";
        newCard.attending = "true";
        newCard.eventId = new Date().getTime();
        newCard.date = this.state.date;
        newCard.desc = this.state.description;
        newCard.location = this.state.location;
        newCard.tags = this.state.tags;
        newCard.img = this.state.photo;
        newCard.summary = this.state.summary;
        newCard.title = this.state.title;
        console.log(newCard);
        this.searchService.addNewCard(newCard);
    };

    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="container-md mb-5">
                    <h1> Create Event </h1>
                    {this.state.status ? <div>
                        <div className="alert alert-success" role="alert">
                            <h4 className="alert-heading">You successfully created the event</h4>
                            <p>You can see the event in 'My Hosting Events' page</p>
                        </div>
                    </div> : <div></div>}
                    <div className="form">

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Event Title *</label>
                                <input onChange={this.title} type="text" placeholder="Event Title" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Event Location *</label>
                                <input onChange={this.locationChange} type="text" placeholder="Location of the Event" className="form-control"
                                       id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputAddress">Event Date *</label>
                                <input onChange={this.eventDate} type="date" className="form-control" id="inputAddress"
                                       placeholder="1234 Main St"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Organizer Name *</label>
                                <input onChange={this.organizerName} type="text" placeholder="Name of the person organizing event"
                                       className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Event Summary *</label>
                            <input onChange={this.eventSummary} type="text" className="form-control" id="inputAddress2"
                                   placeholder="Brief event summary"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Event Description</label>
                            <textarea onChange={this.description} placeholder="Detiled Event Description" className="form-control"
                                      id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputAddress2">Photo Url *</label>
                            <input type="file" onChange={this.uploadPhoto} className="form-control" id="inputAddress2"
                                   placeholder="https://link.to.file"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputAddress2">Tags</label>
                            <TagList tags={this.state.tags}
                                     inputKeyDown={this.inputKeyDown}
                                     removeTag={this.removeTag}
                            />
                        </div>

                        <button onClick={this.createEvent} type="submit" className="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default CreateEvent;