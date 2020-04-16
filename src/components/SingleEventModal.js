import React from "react";
import {Component} from "react";
import Modal from "./Modal";
import SearchService from "../services/SearchService";

class SingleEventModal extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {

        return (
            <Modal closeModal={this.props.closeModal}>
                <div className='card'>
                    <div className='card-header'><strong>{this.props.card.title}</strong></div>
                    <div className='card-body'>
                        <img class='card-img-top' src={this.props.card.img}
                             alt='eventImg'/>
                        <h6 className="card-title mt-2">{this.props.card.summary}</h6>
                        <p className="card-text">
                            <strong> {this.props.card.date.toLocaleString()} </strong>
                        </p>
                        <p classNam="card-text">
                            <strong>{`Location: ${this.props.card.location}`} </strong>
                        </p>
                        <p className="card-text">
                            {this.props.card.desc}
                        </p>

                        {this.props.card.createdBy === "otherDefault" ? (Boolean(this.props.card.attending) ?
                            <button onClick={this.props.cancelAttending} className="btn btn-danger">
                                Attending
                            </button> : <button onClick={() => this.props.attendEvent(this.props.card)} className="btn btn-primary">
                                Attend
                            </button>) : <div></div>}

                    </div>
                </div>
            </Modal>
        );
    }
}

export default SingleEventModal;
