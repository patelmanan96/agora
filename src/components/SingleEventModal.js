import React from "react";
import { Component } from "react";
import Modal from "./Modal";

class SingleEventModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
     
    return (
      <Modal show={this.props.show} modalClosed={this.props.modalClosed}>
        <div>{this.props.card.title}</div>
        <div>{this.props.card.image}</div>
      </Modal>
    );
  }
}

export default SingleEventModal;
