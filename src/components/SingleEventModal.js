import React from "react";
import { Component } from "react";
import Modal from "./Modal";

class SingleEventModal extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
     
    return (
      <Modal closeModal={this.props.closeModal}>
        <div className='card'>
            <div className='card-header'>{this.props.card.title}</div>
            <div className='card-body'>
                    <img class='card-img-top' src={this.props.card.image} alt='eventImg'></img>
                <h6 className="card-title mt-2">{this.props.card.summary}</h6>
                <p className="card-text">
                    {this.props.card.date.toLocaleString()}
                </p>
                <p className="card-text">
                    {this.props.card.description}
                </p>
                <button className="btn btn-primary">
                    Attend
                </button> 
            </div>
        </div>   
      </Modal>
    );
  }
}

export default SingleEventModal;
