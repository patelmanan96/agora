import React from "react";
import SingleEventModal from "./SingleEventModal";

class SearchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // local state: whether modal is open
      SingleEventModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ SingleEventModalOpen: true });
  };

  modalClosed = () =>{
      console.log('here')
    this.setState({ SingleEventModalOpen: false });
  }

  render() {
    return (
      <div className="card">
        <SingleEventModal
          show={this.state.SingleEventModalOpen}
          card={this.props.cardProps}
          modalClosed={this.modalClosed}
        />
        <div className="card-header">
          <h5>{this.props.cardProps.title}</h5>
        </div>
        <div className="card-body">
          <img
            src={this.props.cardProps.image}
            className="card-img-top img-fluid"
            alt="..."
          />
          <h6 className="card-title mt-2">{this.props.cardProps.summary}</h6>
          <p className="card-text">
            {this.props.cardProps.date.toLocaleString()}
          </p>
          <button className="btn btn-primary" onClick={this.openModal}>
            More..
          </button>
        </div>
      </div>
    );
  }
}
export default SearchCard;
